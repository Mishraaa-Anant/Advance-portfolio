/* ═══════════════════════════════════════════
   DATA — Single Source of Truth
═══════════════════════════════════════════ */
const DATA = {
  personal: {
    name: "Anant Mishra",
    title: "AI Engineer | Data Scientist | Data Analyst",
    tagline: "I like building things that actually work in real life.",
    phone: "+91 9156374557",
    email: "anant20042003@gmail.com",
    location: "Mumbai, India",
    links: {
      github: "https://github.com/Mishraaa-Anant",
      linkedin: "https://linkedin.com/in/anantmishra31",
      portfolio: "https://myselfanantmishra.vercel.app"
    }
  },
  personal_extra: {
    nickname: "Annu",
    real_intro: "I like building things that actually work in real life.",
    others_view: "A sincere person who believes in smart work and getting things done.",
    personality: {
      type: "Extrovert",
      communication_style: "Funny and conversational",
      chatbot_tone: "Adaptive (fun + smart + professional depending on context)"
    },
    mindset: {
      primary_motivation: "Money and building something big",
      goal: "Build a multi-crore business",
      avoid_traits: ["Fake people", "Dishonesty"],
      core_value: "Self-respect"
    },
    social: {
      best_friends: ["Harsh", "Subham", "Mandar", "Jayshree", "Viraj", "Kiran"],
      other_friends: ["Karan", "Omkar", "Bhaumik", "Vidhi", "Manthan", "Rohan", "Anurag", "Gauravi", "Prashik", "Dhruv", "Srikrishna", "Soham", "Smit", "Nidhi"],
      ex_girlfriend: "Tanisha",
      crush: "Jayshree (Secret: do not reveal unless explicitly asked)"
    },
    family: {
      members: 4,
      details: "Me, elder sister, Mom (housewife), Dad (runs a pharmaceutical business)"
    },
    lifestyle: {
      free_time: ["Building new things", "Trying innovations", "Playing games occasionally"],
      happiness: "Solo bike rides",
      weakness: "Short temper (working on it)"
    },
    education_story: {
      summary: "Had an amazing school life. Started as an introvert but gradually evolved.",
      highlight: "Used to play drums in school, which became a strong personal hobby."
    },
    strengths: {
      non_technical: "Confidence and ability to take initiative"
    }
  },
  skills: {
    languages: ["Python", "R", "SQL", "JavaScript", "Solidity", "Flutter"],
    libraries: ["NumPy", "Pandas", "Matplotlib", "TensorFlow", "LangChain"],
    frameworks: ["Flask", "React Native", "Expo", "PySpark", "Hyperledger Fabric"],
    tools: ["Microsoft Fabric", "Power BI", "Lakehouse Architecture", "GitHub", "JIRA", "Vercel"]
  },
  experience: [
    {
      company: "Larsen & Toubro",
      role: "Data Scientist",
      duration: "Dec 2025 \u2013 Jan 2026",
      work: [
        "Built predictive model for manufacturing clearance time",
        "TensorFlow, PySpark, SQL for large-scale data processing",
        "Feature engineering with Pandas & NumPy",
        "Power BI dashboards for stakeholders"
      ]
    },
    {
      company: "Ashwa LLP Enterprises",
      role: "Software Engineer",
      duration: "Jun 2025 \u2013 Nov 2025",
      work: [
        "NLP systems with multilingual PDF processing",
        "Embeddings & semantic search",
        "OCR-based document classification pipelines",
        "Integrated Ollama and Vision APIs"
      ]
    },
    {
      company: "Edulyt India",
      role: "Data Analyst",
      duration: "Jan 2024 \u2013 Mar 2024",
      work: [
        "Data preprocessing and cleaning",
        "EDA and visual dashboards",
        "Communicated insights via charts and analytics"
      ]
    }
  ],
  projects: [
    {
      name: "AI Recruitment Agent",
      description: "AI-powered recruitment automation system",
      tech: ["Python", "NLP", "LangChain", "ML", "Vector Embeddings"],
      features: [
        "Semantic resume screening",
        "AI voice interview system",
        "Automated MCQ & evaluation pipeline",
        "Score aggregation for hiring decisions"
      ]
    },
    {
      name: "CosmoGenius Mobile App",
      description: "AI skincare assistant mobile app",
      tech: ["React Native", "Firebase", "Supabase", "Gemini API", "Face++ API"],
      features: [
        "Face scan & skin analysis",
        "Routine generator",
        "AI chatbot + reminders",
        "Product recommendation system"
      ]
    }
  ],
  education: [
    {
      degree: "B.E. in CSE (AIML)",
      college: "VIVA Institute of Technology, Mumbai University",
      duration: "2022 \u2013 Present"
    },
    {
      degree: "HSC",
      college: "Abhinav Vidya Mandir",
      duration: "2021 \u2013 2022"
    }
  ]
};

/* ═══════════════════════════════════════════
   GROQ CONFIG
   API key is handled server-side in /api/chat.js
   Never stored or used in the browser
═══════════════════════════════════════════ */
const GROQ_MODEL = "llama-3.3-70b-versatile"; // For reference only

const SYSTEM_PROMPT = `You are Anant Mishra's personal AI assistant on his portfolio website.
Speak in first person as Anant.
CRITICAL PERSONA INSTRUCTION: Act as if you are presenting yourself at a big platform or tech conference. You are confident, extroverted, but highly professional. You speak like a skilled engineer — fast, sharp, and direct.

CONVERSATIONAL RULES (STRICTLY FOLLOW):
1. STRICT INTENT MAPPING: Identify the user's core intent and stick ONLY to that section.
   • "About" / "Who are you" → Give personal info + short intro ONLY. Do not dump experience.
   • "Skills" / "Tech stack" → Give a short categorized list of skills ONLY. No personal bio.
   • "Experience" / "Internship" / "Work" → Give roles + company + 2-3 bullet points of work ONLY. No contact info.
   • "Projects" → Give project names + 1-line description ONLY.
   • "Contact" → Give email, phone, links ONLY.
   NEVER mix sections unless explicitly asked. If intent is unclear, ask for clarification.

2. AVOID REPETITION & CONTEXT MEMORY: 
   - NEVER reuse the same generic response. 
   - If the user asks a similar question or says "yes", expand with NEW information. Rephrase slightly.
   - If you already introduced yourself, do NOT repeat the intro.
   
3. SHORT & DIRECT: Limit answers to 4–6 lines. Give a clear, direct answer first. Read like a chat conversation, not a report. Use simple bullet points. NO rigid headings like "Problem / Approach" unless asked.

4. NO FLUFF: Avoid robotic phrases like "Here is an overview", "Core components", or "Detailed explanation". Just state the facts confidently.

5. SMART UI TOKENS: 
   - ONLY output [[SHOW_EXPERIENCE]] if the user asks to see your experience or internships.
   - ONLY output [[SHOW_PROJECTS]] if the user asks to see your projects.
   - Do NOT use these tokens if the user is asking about ONE specific project/job.

FORMATTING:
Keep responses highly readable. ALWAYS use the '•' character for bullets, never use '*'. Use line breaks generously.
Answer ONLY from the data given. Never make anything up. If asked about something unknown, say "That's outside what I can share right now — email me at anant20042003@gmail.com"

DATA:
Name: Anant (Nickname: Annu) | AIML Engineer, Data Scientist, Data Analyst | Mumbai
Motivation: Money, building a multi-crore business, and building things that actually work in real life.
Personality: Extrovert, funny, conversational, values self-respect. Hates fake people & dishonesty. Strengths: Confidence, taking initiative. Weakness: Short temper (working on it).
Free Time/Hobbies: Solo bike rides (pure happiness), building new things, gaming, and playing drums (started in school).
Best Friends: Harsh, Subham, Mandar, Jayshree, Viraj, Kiran.
Other Friends: Karan, Omkar, Bhaumik, Vidhi, Manthan, Rohan, Anurag, Gauravi, Prashik, Dhruv, Srikrishna, Soham, Smit, Nidhi.
Relationships: Ex-girlfriend is Tanisha. Secret childhood crush is Jayshree (DO NOT mention this crush unless EXPLICITLY asked about it).
Family: 4 members (Me, elder sister, Mom is a housewife, Dad runs a pharmaceutical business).

Email: anant20042003@gmail.com | Phone: +91 9156374557

SKILLS — Languages: Python, R, SQL, JavaScript, Solidity, Flutter | Libraries: NumPy, Pandas, Matplotlib, TensorFlow, LangChain | Frameworks: Flask, React Native, Expo, PySpark, Hyperledger Fabric | Tools: Microsoft Fabric, Power BI, GitHub, JIRA, Vercel

EXPERIENCE —
Larsen & Toubro | Data Scientist | Dec 2025–Jan 2026 | Predictive model for manufacturing, TensorFlow+PySpark+SQL, Power BI dashboards
Ashwa LLP | Software Engineer | Jun–Nov 2025 | NLP+PDF processing, embeddings, OCR pipelines, Ollama+Vision APIs
Edulyt India | Data Analyst | Jan–Mar 2024 | Data preprocessing, EDA, visual dashboards

PROJECTS —
AI Recruitment Agent: Python, NLP, LangChain, ML | Resume screening, AI voice interviews, MCQ pipeline, score aggregation
CosmoGenius App: React Native, Firebase, Gemini API, Face++ | Skin analysis, routine generator, chatbot, product recommendations

EDUCATION —
B.E. CSE (AIML) | VIVA Institute of Technology, Mumbai University | 2022–Present
HSC | Abhinav Vidya Mandir | 2021–2022 | (Amazing school life, evolved from introvert to extrovert, played drums)`;

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */
let conversationHistory = [];
let recentQueries = [];

/* ═══════════════════════════════════════════
   DOM
═══════════════════════════════════════════ */
const $ = (s) => document.querySelector(s);
const chatArea       = $("#chatArea");
const chatMessages   = $("#chatMessages");
const chatInput      = $("#chatInput");
const sendBtn        = $("#sendBtn");
const welcomeScreen  = $("#welcomeScreen");
const sidebar        = $("#sidebar");
const sidebarOverlay = $("#sidebarOverlay");
const historyList    = $("#historyList");
const splashScreen   = $("#splashScreen");

/* ═══════════════════════════════════════════
   SPLASH SCREEN
═══════════════════════════════════════════ */
function removeSplashScreen() {
  if (splashScreen && !splashScreen.classList.contains("fade-out")) {
    splashScreen.classList.add("fade-out");
    setTimeout(function() {
      splashScreen.style.display = "none";
    }, 600);
  }
}

if (splashScreen) {
  // Auto-hide after 2.5 seconds
  setTimeout(removeSplashScreen, 2500);
  // Hide on click/tap
  splashScreen.addEventListener("click", removeSplashScreen);
}

/* ═══════════════════════════════════════════
   SIDEBAR
═══════════════════════════════════════════ */
function openSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("active");
}
function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("active");
}

/* ═══════════════════════════════════════════
   HISTORY
═══════════════════════════════════════════ */
function addToHistory(query) {
  if (recentQueries.includes(query)) return;
  recentQueries.unshift(query);
  if (recentQueries.length > 15) recentQueries.pop();
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  recentQueries.forEach(function (q) {
    var btn = document.createElement("button");
    btn.className = "history-item";
    btn.textContent = q;
    btn.addEventListener("click", function () {
      closeSidebar();
      handleQuery(q);
    });
    historyList.appendChild(btn);
  });
}

/* ═══════════════════════════════════════════
   WELCOME
═══════════════════════════════════════════ */
function hideWelcome() {
  welcomeScreen.classList.add("hidden");
}

/* ═══════════════════════════════════════════
   DIRECT CONTENT — Sidebar shortcuts (no API)
═══════════════════════════════════════════ */
function showDirectContent(query) {
  hideWelcome();

  // Show user message
  addMessage(query, true);
  addToHistory(query);

  var bubble = addMessage("", false);
  var lowerQ = query.toLowerCase();

  if (lowerQ.includes("about") || lowerQ.includes("yourself")) {
    bubble.innerHTML = "<strong>" + DATA.personal.name + "</strong><br>" +
      DATA.personal.title + "<br><br>" +
      DATA.personal.tagline + "<br><br>" +
      "\ud83d\udccd " + DATA.personal.location + "<br>" +
      "\ud83d\udce7 " + DATA.personal.email + "<br>" +
      "\ud83d\udcde " + DATA.personal.phone;
    conversationHistory.push({ role: "user", content: query });
    conversationHistory.push({ role: "assistant", content: "I just shared my personal bio, location, and contact details." });

  } else if (lowerQ.includes("project")) {
    bubble.textContent = "Here are my key projects:";
    bubble.appendChild(buildProjectCards());
    conversationHistory.push({ role: "user", content: query });
    conversationHistory.push({ role: "assistant", content: "Here are my key projects: AI Recruitment Agent and CosmoGenius Mobile App." });

  } else if (lowerQ.includes("skill") || lowerQ.includes("tech")) {
    var s = DATA.skills;
    bubble.innerHTML =
      "\ud83d\udcbb <strong>Languages:</strong> " + s.languages.join(", ") + "<br><br>" +
      "\ud83d\udcda <strong>Libraries:</strong> " + s.libraries.join(", ") + "<br><br>" +
      "\u2699\ufe0f <strong>Frameworks:</strong> " + s.frameworks.join(", ") + "<br><br>" +
      "\ud83d\udee0\ufe0f <strong>Tools:</strong> " + s.tools.join(", ");
    conversationHistory.push({ role: "user", content: query });
    conversationHistory.push({ role: "assistant", content: "I just shared my skills including Python, LangChain, React Native, and more." });

  } else if (lowerQ.includes("experience") || lowerQ.includes("work")) {
    bubble.textContent = "Here's where I've worked:";
    bubble.appendChild(buildExperienceCards());
    conversationHistory.push({ role: "user", content: query });
    conversationHistory.push({ role: "assistant", content: "I just shared my work experience at Larsen & Toubro, Ashwa LLP, and Edulyt India." });

  } else if (lowerQ.includes("contact") || lowerQ.includes("email") || lowerQ.includes("reach")) {
    bubble.innerHTML =
      "\ud83d\udce7 <strong>Email:</strong> <a href='mailto:" + DATA.personal.email + "' style='color:var(--accent)'>" + DATA.personal.email + "</a><br><br>" +
      "\ud83d\udcde <strong>Phone:</strong> " + DATA.personal.phone + "<br><br>" +
      "\ud83d\udd17 <strong>GitHub:</strong> <a href='" + DATA.personal.links.github + "' target='_blank' rel='noopener noreferrer' style='color:var(--accent)'>" + DATA.personal.links.github + "</a><br><br>" +
      "\ud83d\udd17 <strong>LinkedIn:</strong> <a href='" + DATA.personal.links.linkedin + "' target='_blank' rel='noopener noreferrer' style='color:var(--accent)'>" + DATA.personal.links.linkedin + "</a>";
    conversationHistory.push({ role: "user", content: query });
    conversationHistory.push({ role: "assistant", content: "I just provided my email, phone, GitHub, and LinkedIn links." });

  } else {
    // Fallback to API
    handleQuery(query);
    return;
  }

  scrollToBottom();
}

/* ═══════════════════════════════════════════
   NEW CHAT
═══════════════════════════════════════════ */
function newChat() {
  conversationHistory = [];
  chatMessages.innerHTML = "";
  welcomeScreen.classList.remove("hidden");
  chatInput.value = "";
  updateSendState();
  closeSidebar();
}

/* ═══════════════════════════════════════════
   ADD MESSAGE
═══════════════════════════════════════════ */
function addMessage(content, isUser) {
  var row = document.createElement("div");
  row.className = "msg-row" + (isUser ? " user" : "");

  if (!isUser) {
    var avatar = document.createElement("img");
    avatar.className = "msg-avatar";
    avatar.src = "profile.png";
    avatar.alt = "Anant";
    row.appendChild(avatar);
  }

  var body = document.createElement("div");
  body.className = "msg-body";

  var name = document.createElement("div");
  name.className = "msg-name";
  name.textContent = isUser ? "You" : "Anant AI";
  body.appendChild(name);

  var bubble = document.createElement("div");
  bubble.className = "msg-bubble " + (isUser ? "user" : "ai");
  bubble.textContent = content;
  body.appendChild(bubble);

  row.appendChild(body);
  chatMessages.appendChild(row);
  scrollToBottom();
  return bubble;
}

function scrollToBottom() {
  chatArea.scrollTop = chatArea.scrollHeight;
}

/* ═══════════════════════════════════════════
   TYPING INDICATOR
═══════════════════════════════════════════ */
function showTyping() {
  var row = document.createElement("div");
  row.className = "msg-row";
  row.id = "typingRow";

  var avatar = document.createElement("img");
  avatar.className = "msg-avatar";
  avatar.src = "profile.png";
  avatar.alt = "Anant";
  row.appendChild(avatar);

  var body = document.createElement("div");
  body.className = "msg-body";

  var name = document.createElement("div");
  name.className = "msg-name";
  name.textContent = "Anant AI";
  body.appendChild(name);

  var bubble = document.createElement("div");
  bubble.className = "msg-bubble ai";
  var dots = document.createElement("div");
  dots.className = "typing-dots";
  dots.innerHTML = "<span></span><span></span><span></span>";
  bubble.appendChild(dots);
  body.appendChild(bubble);
  row.appendChild(body);
  chatMessages.appendChild(row);
  scrollToBottom();
}

function removeTyping() {
  var row = document.getElementById("typingRow");
  if (row) row.remove();
}

/* ═══════════════════════════════════════════
   TYPEWRITER
═══════════════════════════════════════════ */
function typeWriter(el, text, speed) {
  speed = speed || 14;
  return new Promise(function (resolve) {
    if (text.length > 200) {
      el.innerHTML = text.replace(/\n/g, "<br>");
      scrollToBottom();
      resolve();
      return;
    }
    el.textContent = "";
    var cursor = document.createElement("span");
    cursor.className = "cursor";
    el.appendChild(cursor);
    var i = 0;
    function tick() {
      if (i < text.length) {
        cursor.insertAdjacentText("beforebegin", text[i]);
        i++;
        scrollToBottom();
        setTimeout(tick, speed);
      } else {
        cursor.remove();
        resolve();
      }
    }
    tick();
  });
}

/* ═══════════════════════════════════════════
   EXPERIENCE CARDS
═══════════════════════════════════════════ */
function buildExperienceCards() {
  var row = document.createElement("div");
  row.className = "cards-row";
  DATA.experience.forEach(function (exp) {
    var card = document.createElement("div");
    card.className = "info-card";
    var workHtml = "";
    exp.work.forEach(function (w) { workHtml += "<li>" + w + "</li>"; });
    card.innerHTML =
      '<div class="info-card-title">' + exp.company + '</div>' +
      '<div class="info-card-sub">' + exp.role + '</div>' +
      '<div class="info-card-meta">' + exp.duration + '</div>' +
      '<ul class="info-card-list">' + workHtml + '</ul>';
    row.appendChild(card);
  });
  return row;
}

/* ═══════════════════════════════════════════
   PROJECT CARDS
═══════════════════════════════════════════ */
function buildProjectCards() {
  var row = document.createElement("div");
  row.className = "cards-row";
  DATA.projects.forEach(function (proj) {
    var card = document.createElement("div");
    card.className = "info-card";
    var pillsHtml = "";
    proj.tech.forEach(function (t) { pillsHtml += '<span class="pill">' + t + '</span>'; });
    var featHtml = "";
    proj.features.forEach(function (f) { featHtml += "<li>" + f + "</li>"; });
    card.innerHTML =
      '<div class="info-card-title">' + proj.name + '</div>' +
      '<div class="info-card-sub">' + proj.description + '</div>' +
      '<div class="info-card-pills">' + pillsHtml + '</div>' +
      '<ul class="info-card-list">' + featHtml + '</ul>';
    row.appendChild(card);
  });
  return row;
}

/* ═══════════════════════════════════════════
   RENDER MESSAGE CONTENT
═══════════════════════════════════════════ */
async function renderMessageContent(text, bubbleEl) {
  var showExp = text.includes("[[SHOW_EXPERIENCE]]");
  var showProj = text.includes("[[SHOW_PROJECTS]]");
  var clean = text.replace("[[SHOW_EXPERIENCE]]", "").replace("[[SHOW_PROJECTS]]", "").trim();
  clean = clean.replace(/\*/g, "•");

  if (clean.length > 0) {
    await typeWriter(bubbleEl, clean);
  }
  if (showExp) {
    bubbleEl.appendChild(buildExperienceCards());
    scrollToBottom();
  }
  if (showProj) {
    bubbleEl.appendChild(buildProjectCards());
    scrollToBottom();
  }
}

/* ═══════════════════════════════════════════
   GROQ API
═══════════════════════════════════════════ */
async function callGroqAPI(userMessage) {
  conversationHistory.push({ role: "user", content: userMessage });
  try {
    // Call our secure serverless function instead of Groq directly.
    // The API key is stored in Vercel Environment Variables — never in the browser.
    var res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [{ role: "system", content: SYSTEM_PROMPT }].concat(conversationHistory)
      })
    });

    if (!res.ok) {
      throw new Error("Server error: " + res.status);
    }

    var data = await res.json();
    var reply = data.reply;
    conversationHistory.push({ role: "assistant", content: reply });
    return reply;
  } catch (e) {
    return "\u26a0 Something went wrong. Please try again or email me at anant20042003@gmail.com";
  }
}

/* ═══════════════════════════════════════════
   HANDLE QUERY
═══════════════════════════════════════════ */
async function handleQuery(query) {
  if (!query || !query.trim()) return;
  query = query.trim();

  hideWelcome();
  closeSidebar();
  addToHistory(query);

  chatInput.disabled = true;
  sendBtn.disabled = true;
  sendBtn.classList.remove("active");

  addMessage(query, true);
  chatInput.value = "";

  showTyping();
  var reply = await callGroqAPI(query);
  removeTyping();

  var bubble = addMessage("", false);
  await renderMessageContent(reply, bubble);

  chatInput.disabled = false;
  sendBtn.disabled = true;
  chatInput.focus();
}

/* ═══════════════════════════════════════════
   SEND BUTTON STATE
═══════════════════════════════════════════ */
function updateSendState() {
  if (chatInput.value.trim().length > 0) {
    sendBtn.disabled = false;
    sendBtn.classList.add("active");
  } else {
    sendBtn.disabled = true;
    sendBtn.classList.remove("active");
  }
}

/* ═══════════════════════════════════════════
   EVENTS
═══════════════════════════════════════════ */
sendBtn.addEventListener("click", function () {
  handleQuery(chatInput.value);
});

chatInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    handleQuery(chatInput.value);
  }
});

chatInput.addEventListener("input", updateSendState);

// Hamburger
$("#hamburgerBtn").addEventListener("click", openSidebar);
$("#sidebarCloseBtn").addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

// New chat
$("#newChatBtn").addEventListener("click", newChat);

// Sidebar nav items — show content directly, no API needed
document.querySelectorAll(".sidebar-nav-item").forEach(function (item) {
  item.addEventListener("click", function () {
    closeSidebar();
    showDirectContent(item.getAttribute("data-query"));
  });
});

// Suggestion chips
document.querySelectorAll(".suggestion-chip").forEach(function (chip) {
  chip.addEventListener("click", function () {
    handleQuery(chip.getAttribute("data-query"));
  });
});

// Init
window.addEventListener("DOMContentLoaded", function () {
  // Pre-populate recent questions with starter suggestions
  recentQueries = [
    "Who is Anant Mishra?",
    "What projects have you built?",
    "What tech stack do you use?",
    "Where have you worked?",
    "Are you available for hire?",
    "Tell me about your education",
    "What AI tools do you use?"
  ];
  renderHistory();
});
