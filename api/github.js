// Vercel Serverless Function — /api/github.js
// Proxies GitHub API calls using GITHUB_TOKEN env var.
// Never exposes the token to the browser.

const GITHUB_USERNAME = "Mishraaa-Anant";

module.exports = async function handler(req, res) {
  // Allow GET only
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // CORS headers so the browser can call this from the same origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");

  const token = process.env.GITHUB_TOKEN;
  const { type } = req.query;

  const ghHeaders = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "anant-portfolio",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  try {
    // ── STATS ──────────────────────────────────────────────────────────────
    if (type === "stats") {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers: ghHeaders }),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, { headers: ghHeaders }),
      ]);

      if (!userRes.ok) throw new Error("GitHub user fetch failed: " + userRes.status);

      const user = await userRes.json();
      const repos = reposRes.ok ? await reposRes.json() : [];

      // Total stars across all public repos
      const totalStars = Array.isArray(repos)
        ? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
        : 0;

      // Top languages by repo count
      const langCount = {};
      if (Array.isArray(repos)) {
        repos.forEach((r) => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
        });
      }
      const topLangs = Object.entries(langCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([lang]) => lang);

      return res.status(200).json({
        username: user.login,
        name: user.name || GITHUB_USERNAME,
        bio: user.bio || "",
        repos: user.public_repos || 0,
        followers: user.followers || 0,
        following: user.following || 0,
        stars: totalStars,
        topLangs,
      });
    }

    // ── ACTIVITY ───────────────────────────────────────────────────────────
    if (type === "activity") {
      const eventsRes = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=15`,
        { headers: ghHeaders }
      );

      if (!eventsRes.ok) throw new Error("GitHub events fetch failed: " + eventsRes.status);
      const events = await eventsRes.json();

      const TYPE_ICONS = {
        PushEvent: "⬆️",
        CreateEvent: "✨",
        WatchEvent: "⭐",
        ForkEvent: "🍴",
        IssuesEvent: "🐛",
        PullRequestEvent: "🔀",
        DeleteEvent: "🗑️",
        ReleaseEvent: "🚀",
      };

      const formatted = Array.isArray(events)
        ? events.slice(0, 6).map((e) => {
            const repoName = e.repo?.name?.split("/")[1] || e.repo?.name || "unknown";
            let action = "";

            if (e.type === "PushEvent") {
              const count = e.payload?.commits?.length || 1;
              const msg = e.payload?.commits?.[0]?.message || "";
              const shortMsg = msg.length > 40 ? msg.slice(0, 40) + "…" : msg;
              action = `Pushed ${count} commit${count > 1 ? "s" : ""} to ${repoName}${shortMsg ? ` — "${shortMsg}"` : ""}`;
            } else if (e.type === "CreateEvent") {
              action = `Created ${e.payload?.ref_type || "repo"} in ${repoName}`;
            } else if (e.type === "WatchEvent") {
              action = `Starred ${repoName}`;
            } else if (e.type === "ForkEvent") {
              action = `Forked ${repoName}`;
            } else if (e.type === "IssuesEvent") {
              action = `${e.payload?.action || "Updated"} issue in ${repoName}`;
            } else if (e.type === "PullRequestEvent") {
              action = `${e.payload?.action || "Updated"} PR in ${repoName}`;
            } else if (e.type === "ReleaseEvent") {
              action = `Released ${e.payload?.release?.tag_name || "update"} in ${repoName}`;
            } else {
              action = `Activity in ${repoName}`;
            }

            return {
              type: e.type,
              icon: TYPE_ICONS[e.type] || "🔧",
              action,
              repo: e.repo?.name || "",
              date: e.created_at,
            };
          })
        : [];

      return res.status(200).json({ events: formatted });
    }

    return res.status(400).json({ error: "Invalid type. Use ?type=stats or ?type=activity" });
  } catch (err) {
    console.error("GitHub API proxy error:", err);
    return res.status(500).json({ error: "Failed to fetch GitHub data" });
  }
};
