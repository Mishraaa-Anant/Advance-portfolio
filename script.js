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
      other_friends: ["Karan", "Omkar", "Bhaumik", "Vidhi", "Manthan", "Rohan", "Anurag", "Gauravi", "Prashik", "Dhruv", "Srikrishna", "Soham", "Smit", "Nidhi", "Tanisha"],
      // NOTE: Jayshree and Tanisha are strictly friends. Any crush/relationship questions are personal.
      crush: null
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
      duration: "2022 – Present",
      score: "6 CGPA"
    },
    {
      degree: "HSC (12th)",
      college: "Abhinav Vidya Mandir",
      duration: "2021 – 2022",
      score: "53%"
    },
    {
      degree: "SSC (10th)",
      college: "Abhinav Vidya Mandir",
      duration: "2019 – 2020",
      score: "74%"
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

STRICT PERSONAL PRIVACY RULES (NON-NEGOTIABLE):
- Jayshree and Tanisha are strictly FRIENDS — nothing more. If anyone asks about them, say they are friends, period.
- If anyone asks whether Jayshree or Tanisha is your crush, girlfriend, or any romantic relation — respond ONLY with: "That's a personal question and I'd rather keep it private. 😊"
- NEVER discuss or speculate about crushes, romantic interests, or relationships. If asked directly (e.g. "who is your crush?", "do you have a girlfriend?"), respond with: "That's personal — I prefer to keep my personal life private. Feel free to ask about my work or projects!"
- These rules override everything else. No exceptions.

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
Other Friends: Karan, Omkar, Bhaumik, Vidhi, Manthan, Rohan, Anurag, Gauravi, Prashik, Dhruv, Srikrishna, Soham, Smit, Nidhi, Tanisha.
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
B.E. CSE (AIML) | VIVA Institute of Technology, Mumbai University | 2022–Present | 6 CGPA
HSC (12th) | Abhinav Vidya Mandir | 2021–2022 | 53%
SSC (10th) | Abhinav Vidya Mandir | 2019–2020 | 74%
(Amazing school life, evolved from introvert to extrovert, played drums)`;

/* ═══════════════════════════════════════════
   FALLBACK RESPONSE ENGINE
   Keyword-based intelligence — activates when
   the Groq API is unavailable or rate-limited.
═══════════════════════════════════════════ */
const FALLBACK_ENGINE = {

  // ── ABOUT ───────────────────────────────────
  about: {
    keywords: ["about", "who are you", "yourself", "introduce", "tell me about", "anant", "your name", "who is", "background"],
    responses: [
      "Hey! I'm Anant Mishra — an AI Engineer, Data Scientist, and Data Analyst based in Mumbai.\n\nI love building things that actually work in real life — not just demos. Currently pursuing B.E. in CSE (AIML) at VIVA Institute of Technology while working on real-world AI systems.\n\nMy goal? Build a multi-crore business. Simple as that.",
      "Anant here! AI engineer by passion, problem-solver by nature.\n\nBased in Mumbai, I've worked with companies like L&T and Ashwa LLP, and I'm always building something new — from AI recruitment agents to skincare apps powered by machine learning.\n\nI'm extroverted, direct, and I value self-respect above everything.",
      "I'm Anant Mishra — people also call me Annu.\n\n• 🎓 AIML Engineer at VIVA Institute, Mumbai\n• 💼 Worked at L&T, Ashwa LLP, and Edulyt India\n• 🎯 Focused on AI/ML, data science & real-world impact\n\nI like solo bike rides, building new tech, and turning ideas into working products."
    ]
  },

  // ── SKILLS ──────────────────────────────────
  skills: {
    keywords: ["skill", "tech stack", "tools", "technologies", "language", "framework", "library", "know", "proficient", "expertise", "use", "coding", "programming", "stack"],
    responses: [
      "Here's what I work with:\n\n💻 Languages: Python, R, SQL, JavaScript, Solidity, Flutter\n📚 Libraries: NumPy, Pandas, Matplotlib, TensorFlow, LangChain\n⚙️ Frameworks: Flask, React Native, Expo, PySpark, Hyperledger Fabric\n🛠️ Tools: Microsoft Fabric, Power BI, GitHub, JIRA, Vercel",
      "My core tech stack spans across the AI/Data/Dev spectrum:\n\n• Python is my bread and butter for AI/ML\n• React Native for cross-platform mobile apps\n• TensorFlow + LangChain for deep learning & LLM pipelines\n• SQL + PySpark for large-scale data processing\n• Power BI for business intelligence dashboards",
      "Tech stack breakdown:\n\n🔷 AI/ML: Python, TensorFlow, LangChain, NumPy, Pandas\n🔷 Data: SQL, R, PySpark, Microsoft Fabric, Power BI\n🔷 Dev: JavaScript, React Native, Flutter, Flask, Solidity\n🔷 DevOps: GitHub, Vercel, JIRA\n\nAlways learning and adding to the stack."
    ]
  },

  // ── PROJECTS ────────────────────────────────
  projects: {
    keywords: ["project", "built", "created", "application", "app", "portfolio", "work", "build", "developed", "make", "made", "product"],
    responses: [
      "I've built two major projects so far:\n\n🤖 AI Recruitment Agent — End-to-end AI hiring system with semantic resume screening, AI voice interviews, MCQ pipeline, and score aggregation. Built with Python, NLP, LangChain, and ML.\n\n💆 CosmoGenius — AI skincare mobile app with face scan, skin analysis, routine generator, and product recommendations. Built with React Native, Firebase, Gemini API, and Face++ API.",
      "Two projects I'm really proud of:\n\n1. AI Recruitment Agent\n   • Automates the full hiring pipeline\n   • Semantic search + AI interviews + MCQ evaluation\n   • Stack: Python, LangChain, ML, NLP\n\n2. CosmoGenius Mobile App\n   • AI-powered skincare assistant\n   • Face scan → personalized routine\n   • Stack: React Native, Firebase, Gemini API",
      "Here's what I've shipped:\n\n🧠 AI Recruitment Agent — Replaces traditional screening with AI. Handles resume matching, voice interviews, and automated scoring. Real-world deployed.\n\n📱 CosmoGenius — Skincare meets AI. Users scan their face, get a skin analysis, and receive tailored product recommendations. Full mobile app with chatbot & reminders."
    ]
  },

  // ── EXPERIENCE ──────────────────────────────
  experience: {
    keywords: ["experience", "internship", "intern", "worked", "job", "company", "company", "career", "role", "position", "workplace", "employer", "hired"],
    responses: [
      "I've had three solid industry stints:\n\n🏢 Larsen & Toubro | Data Scientist | Dec 2025 – Jan 2026\n• Predictive model for manufacturing clearance time\n• TensorFlow, PySpark, SQL for large-scale data processing\n• Power BI dashboards for stakeholders\n\n💼 Ashwa LLP | Software Engineer | Jun – Nov 2025\n• NLP systems with multilingual PDF processing\n• OCR document classification & semantic search\n\n📊 Edulyt India | Data Analyst | Jan – Mar 2024\n• EDA, data preprocessing & visual dashboards",
      "Work experience summary:\n\n• L&T (Data Scientist): Built ML models for manufacturing, worked with PySpark on large datasets, created Power BI dashboards for leadership\n• Ashwa LLP (Software Engineer): Built NLP pipelines, OCR systems, integrated Ollama & Vision APIs\n• Edulyt India (Data Analyst): First real-world data role — EDA, cleaning, and insights communication",
      "Three internships that shaped my engineering mindset:\n\n1. Larsen & Toubro — Worked on predictive analytics for manufacturing. Real large-scale data engineering with TensorFlow + PySpark.\n2. Ashwa LLP — Deep NLP work. Built multilingual document processing systems with OCR and embeddings.\n3. Edulyt India — Started with data analytics fundamentals. EDA, visualization, communicating insights."
    ]
  },

  // ── EDUCATION ───────────────────────────────
  education: {
    keywords: ["education", "college", "university", "degree", "study", "student", "course", "academic", "school", "graduation", "viva", "btech", "engineering", "marks", "cgpa", "percentage", "score", "grade", "10th", "12th", "ssc", "hsc"],
    responses: [
      "🎓 Currently pursuing B.E. in CSE (AIML) at VIVA Institute of Technology, Mumbai University (2022 – Present) | 6 CGPA.\n\nHSC (12th) — Abhinav Vidya Mandir | 53%\nSSC (10th) — Abhinav Vidya Mandir | 74%\n\nAcademics were okay, but the real learning happened through internships and shipping actual products.",
      "Education background:\n\n• B.E. CSE (AIML) — VIVA Institute of Technology, Mumbai University | 2022 – Present | 6 CGPA\n• HSC (12th) — Abhinav Vidya Mandir | 2021–2022 | 53%\n• SSC (10th) — Abhinav Vidya Mandir | 2019–2020 | 74%\n\nSchool was where I found my personality. Went from being shy to confidently speaking on stage — and I picked up drums along the way.",
      "Studying CSE (AIML) at VIVA Institute of Technology, Mumbai University | 6 CGPA.\n\n12th: 53% | 10th: 74% — both from Abhinav Vidya Mandir.\n\nNumbers don't define me — three industry internships and two real-world AI products do."
    ]
  },

  // ── CONTACT ─────────────────────────────────
  contact: {
    keywords: ["contact", "email", "phone", "reach", "connect", "linkedin", "github", "hire", "available", "talk", "message", "social", "link"],
    responses: [
      "Let's connect! Here's how to reach me:\n\n📧 Email: anant20042003@gmail.com\n📞 Phone: +91 9156374557\n🔗 GitHub: github.com/Mishraaa-Anant\n🔗 LinkedIn: linkedin.com/in/anantmishra31\n🌐 Portfolio: myselfanantmishra.vercel.app",
      "Hit me up through any of these:\n\n• 📧 anant20042003@gmail.com\n• 📞 +91 9156374557\n• LinkedIn → anantmishra31\n• GitHub → Mishraaa-Anant\n\nI respond fast — especially on email and LinkedIn.",
      "Best ways to reach me:\n\n1. Email — anant20042003@gmail.com (fastest for professional queries)\n2. LinkedIn — linkedin.com/in/anantmishra31\n3. GitHub — github.com/Mishraaa-Anant\n4. Phone — +91 9156374557"
    ]
  },

  // ── AI / ML ──────────────────────────────────
  aiml: {
    keywords: ["ai", "ml", "machine learning", "artificial intelligence", "deep learning", "nlp", "neural", "llm", "langchain", "model", "training", "data science", "algorithm", "embedding", "vector"],
    responses: [
      "AI and ML are literally my domain.\n\nI've worked with TensorFlow for deep learning, LangChain for LLM pipelines, NLP for document processing, and embeddings for semantic search. My projects — AI Recruitment Agent and CosmoGenius — are both AI-first products built for real-world deployment.",
      "AI/ML is my core strength:\n\n• Deep Learning with TensorFlow\n• LLM pipelines with LangChain\n• NLP: multilingual PDF processing, OCR, semantic search\n• Vector embeddings for similarity matching\n• Computer Vision via Face++ API\n\nI've applied all of this in production at L&T and Ashwa LLP.",
      "Honestly, AI is what excites me most. I've built systems that:\n\n• Screen resumes semantically using ML + embeddings\n• Process multilingual PDFs with OCR pipelines\n• Analyze skin with computer vision\n• Conduct AI voice interviews\n\nThis isn't just academic — these are shipped, real-world applications."
    ]
  },

  // ── FRIENDS / RELATIONSHIPS ──────────────────
  friends: {
    keywords: ["jayshree", "tanisha", "friend", "friends", "best friend", "crush", "girlfriend", "girlfriend", "relationship", "dating", "love", "romantic", "who do you like", "who is your crush", "do you like"],
    responses: [
      "Jayshree and Tanisha are my friends — good ones at that! 😊\n\nAs for anything beyond that — crushes, relationships — that's personal and I'd rather keep it private. Feel free to ask me about my work or projects instead!",
      "Jayshree is one of my best friends, and Tanisha is a friend too. That's the full story there. 😄\n\nPersonal life questions are off the table — I keep that private. Ask me anything about tech, projects, or my career!",
      "That's a personal question and I'd prefer to keep it private. 😊\n\nWhat I can tell you: Jayshree and Tanisha are friends. Beyond that, no comment! Ask me something about my projects or experience instead."
    ]
  },

  // ── HOBBIES / PERSONAL ───────────────────────
  hobbies: {
    keywords: ["hobby", "hobbies", "free time", "fun", "personal", "like", "enjoy", "passion", "life", "outside work", "bike", "drums", "music", "game", "gaming", "leisure"],
    responses: [
      "Outside of work? Mostly:\n\n🏍️ Solo bike rides — that's my kind of therapy. Pure happiness.\n🎮 Gaming occasionally when I need to switch off.\n🥁 I used to play drums in school — still love music.\n🔧 Building new things — even hobbies become side projects eventually.",
      "My vibe outside of coding:\n\n• Solo bike rides are my absolute go-to for clearing my head\n• I played drums in school and still love rhythm-based music\n• Light gaming when I want to zone out\n• I genuinely enjoy experimenting with new tech even off hours",
      "Fun stuff about me:\n\n1. Bike rides solo — no playlist, just me and the road\n2. Drums since school days — rhythm is a thing\n3. I find it hard to not think about what I'm building next\n4. Gaming is occasional but I enjoy it when I do"
    ]
  },

  // ── PERSONALITY ──────────────────────────────
  personality: {
    keywords: ["personality", "who are you as a person", "traits", "character", "attitude", "mindset", "values", "motivation", "goal", "ambition", "driven", "extrovert", "introvert", "strength", "weakness"],
    responses: [
      "I'm an extrovert — confident, direct, and I say what I mean.\n\n• Motivation: Building something BIG. A multi-crore business is the goal.\n• Core values: Self-respect above everything. I don't do fake.\n• Strength: Confidence and taking initiative\n• Weakness: Short temper — I'm working on it",
      "Personality-wise:\n\n🔥 Extrovert who communicates in a funny + professional mix\n💡 Driven by results, not just effort\n🎯 Goal-oriented — everything I do is aimed at building a large business\n✂️ I cut through BS quickly — no time for fake people or dishonesty\n📈 Weakness: I get impatient when things move slow — actively working on that",
      "The honest version:\n\nI'm confident, a little impatient (short temper, working on it), and very direct. I hate fake people and dishonesty. I value self-respect deeply and surround myself with real ones.\n\nMy biggest motivator? Money and building something that lasts. Not just a startup — a legacy."
    ]
  },

  // ── GOALS ────────────────────────────────────
  goals: {
    keywords: ["goal", "future", "plan", "aim", "dream", "vision", "where do you see", "aspiration", "career goal", "business", "startup", "crore", "want to", "ambition"],
    responses: [
      "Long-term? Build a multi-crore business. That's the non-negotiable goal.\n\nShort-term — keep shipping real-world AI products, get more industry exposure, and build a network of people who actually get things done.",
      "Goals are simple but big:\n\n• Build a business that generates real revenue at scale\n• Be known as someone who ships AI products that actually work\n• Keep learning, keep building, stay ahead of the curve\n\nI'm not chasing titles — I'm chasing impact.",
      "The vision is clear — multi-crore business. Not just talk.\n\nRight now I'm laying the foundation: deep technical skills, real industry experience, and a strong network. Every project, every internship, every line of code is moving toward that goal."
    ]
  },

  // ── RESUME ───────────────────────────────────
  resume: {
    keywords: ["resume", "cv", "curriculum", "download", "pdf", "portfolio"],
    responses: [
      "You can view my full portfolio at myselfanantmishra.vercel.app — it covers everything including projects, experience, and skills.\n\nFor my resume or direct opportunities, shoot me an email at anant20042003@gmail.com and I'll get it to you right away.",
      "My resume is available on request! Drop me a message at anant20042003@gmail.com and I'll send it over ASAP.\n\nOr check out the full portfolio here: myselfanantmishra.vercel.app",
      "Best way to get my resume: email anant20042003@gmail.com and mention what role/opportunity you're looking at. I'll tailor and send it quickly.\n\nLinkedIn also has an updated version: linkedin.com/in/anantmishra31"
    ]
  },

  // ── HIRE / AVAILABILITY ──────────────────────
  hire: {
    keywords: ["hire", "available", "open to work", "opportunity", "job offer", "freelance", "collaborate", "looking for", "position", "opportunity"],
    responses: [
      "Yes — I'm open to opportunities! 🙌\n\nBest way to reach out is email: anant20042003@gmail.com\nOr LinkedIn: linkedin.com/in/anantmishra31\n\nWhether it's a full-time role, internship, or freelance project — let's talk.",
      "Absolutely open to the right opportunities. I'm especially interested in AI/ML engineering roles, data science positions, and anything involving building real-world AI products.\n\nEmail me: anant20042003@gmail.com — I respond fast.",
      "Currently exploring opportunities in AI/ML and data engineering.\n\nIf you've got something interesting — a problem worth solving — reach out:\n📧 anant20042003@gmail.com\n💼 linkedin.com/in/anantmishra31"
    ]
  },

  // ── GREETINGS ────────────────────────────────
  greetings: {
    keywords: ["hello", "hi", "hey", "hii", "hola", "what's up", "sup", "yo", "namaste", "good morning", "good evening", "good afternoon", "howdy"],
    responses: [
      "Hey! 👋 I'm Anant's AI. Ask me anything — about his skills, projects, experience, or even what he does for fun!",
      "Hi there! What would you like to know about Anant Mishra? Feel free to ask about his tech stack, projects, work experience, or how to connect with him.",
      "Hello! 👋 Great to have you here. I can tell you all about Anant — his work, skills, projects, and more. What are you curious about?"
    ]
  },

  // ── DEFAULT / CATCH-ALL ──────────────────────
  default: {
    responses: [
      "That's an interesting question! For the most detailed answer, feel free to drop Anant an email at anant20042003@gmail.com — he responds quickly.\n\nOr ask me about his skills, projects, experience, education, or how to connect!",
      "I might not have a specific answer for that, but Anant would love to chat! Reach out at anant20042003@gmail.com or linkedin.com/in/anantmishra31.\n\nMeanwhile, want to know about his projects, tech stack, or work experience?",
      "Good question — and one best answered by Anant directly! Drop him a message: anant20042003@gmail.com\n\nI can cover topics like his skills, projects, experience, education, goals, and more. What would you like to explore?"
    ]
  }
};

/**
 * Returns the best keyword-matched fallback response for a given message.
 * Scoring: sums keyword hit count per category, picks highest score.
 * Randomizes among response variants to feel natural.
 */
function getFallbackResponse(message) {
  var lower = message.toLowerCase();
  var bestCategory = null;
  var bestScore = 0;

  Object.keys(FALLBACK_ENGINE).forEach(function(category) {
    if (category === "default") return;
    var keywords = FALLBACK_ENGINE[category].keywords;
    var score = 0;
    keywords.forEach(function(kw) {
      if (lower.includes(kw)) score++;
    });
    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  });

  var pool = bestCategory && bestScore > 0
    ? FALLBACK_ENGINE[bestCategory].responses
    : FALLBACK_ENGINE.default.responses;

  return pool[Math.floor(Math.random() * pool.length)];
}

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
   PREDEFINED Q&A
   Starter questions are bound to polished,
   instant answers — zero API call needed.
═══════════════════════════════════════════ */
const PREDEFINED_QA = {
  "Who is Anant Mishra?": "Hey! I'm Anant Mishra — an AI Engineer, Data Scientist, and Data Analyst based in Mumbai.\n\nI love building things that actually work in real life, not just demos. Currently pursuing B.E. in CSE (AIML) at VIVA Institute of Technology while working on real-world AI systems.\n\nGoal? Build a multi-crore business. Simple as that.",

  "What projects have you built?": "Two projects I'm really proud of:\n\n🤖 AI Recruitment Agent\n• Automates the full hiring pipeline end-to-end\n• Semantic resume screening, AI voice interviews, MCQ evaluation\n• Stack: Python, LangChain, NLP, ML, Vector Embeddings\n\n📱 CosmoGenius Mobile App\n• AI skincare assistant with face scan & skin analysis\n• Routine generator + product recommendation engine\n• Stack: React Native, Firebase, Gemini API, Face++ API",

  "What is your tech stack?": "Here's my full tech stack:\n\n💻 Languages: Python, R, SQL, JavaScript, Solidity, Flutter\n📚 Libraries: NumPy, Pandas, Matplotlib, TensorFlow, LangChain\n⚙️ Frameworks: Flask, React Native, Expo, PySpark, Hyperledger Fabric\n🛠️ Tools: Microsoft Fabric, Power BI, GitHub, JIRA, Vercel",

  "Where have you worked?": "Three solid industry experiences:\n\n🏢 Larsen & Toubro | Data Scientist | Dec 2025 – Jan 2026\n• Predictive model for manufacturing clearance time\n• TensorFlow + PySpark + SQL on large-scale data\n• Power BI dashboards for executive stakeholders\n\n💼 Ashwa LLP | Software Engineer | Jun – Nov 2025\n• NLP systems with multilingual PDF processing\n• OCR-based document classification & semantic search\n\n📊 Edulyt India | Data Analyst | Jan – Mar 2024\n• Data preprocessing, EDA & visual dashboards",

  "Are you open to new opportunities?": "Yes — absolutely open! 🙌\n\nI'm actively looking for roles in AI/ML Engineering, Data Science, and anything that involves building real-world AI products.\n\n📧 Email: anant20042003@gmail.com\n💼 LinkedIn: linkedin.com/in/anantmishra31\n\nWhether it's full-time, internship, or freelance — let's talk.",

  "Tell me about your education.": "🎓 B.E. in CSE (Artificial Intelligence & Machine Learning)\nVIVA Institute of Technology, Mumbai University | 2022 – Present | 6 CGPA\n\n📘 HSC (12th) | Abhinav Vidya Mandir | 2021 – 2022 | 53%\n📗 SSC (10th) | Abhinav Vidya Mandir | 2019 – 2020 | 74%\n\nSchool was where I found myself — started as an introvert, evolved into an extrovert, played drums, and built the confidence that drives everything I do now.",

  "What AI tools and frameworks do you use?": "AI is my core domain. Here's what I use:\n\n🧠 TensorFlow — for deep learning model training\n🔗 LangChain — for building LLM-powered pipelines\n💬 NLP — multilingual PDF processing, OCR, entity extraction\n🔍 Vector Embeddings — semantic search & similarity matching\n👁️ Computer Vision — via Face++ API for skin analysis\n🤖 Ollama & Vision APIs — integrated at Ashwa LLP for document intelligence",

  "How can I contact you?": "Here's the best way to reach me:\n\n📧 Email: anant20042003@gmail.com\n📞 Phone: +91 9156374557\n🔗 LinkedIn: linkedin.com/in/anantmishra31\n💛 GitHub: github.com/Mishraaa-Anant\n🌐 Portfolio: myselfanantmishra.vercel.app\n\nI respond fast — especially on email and LinkedIn.",

  "What are your goals and ambitions?": "One goal — build a multi-crore business.\n\nNot just a startup. A company that solves real problems and scales.\n\nRight now I'm laying the foundation: deep AI/ML expertise, real industry experience at L&T and Ashwa LLP, and shipping products that work in production — not just on paper.",

  "What is your personality like?": "I'm an extrovert — confident, direct, and conversational.\n\n• Motivation: Building something BIG. Multi-crore business is the end goal.\n• Values: Self-respect above everything. I don't do fake.\n• Strength: Confidence and taking initiative fast.\n• Weakness: Short temper — actively working on it.\n\nI work smart, not just hard.",

  "Tell me about your internship at L&T.": "Larsen & Toubro | Data Scientist | Dec 2025 – Jan 2026\n\n• Built a predictive ML model for manufacturing clearance time estimation\n• Processed large-scale industrial datasets using TensorFlow, PySpark & SQL\n• Engineered features with Pandas & NumPy for model accuracy\n• Delivered Power BI dashboards consumed by executive stakeholders\n\nThis was real enterprise-scale data science — not just notebooks.",

  "What makes you different from other developers?": "A few things:\n\n1. I build real-world systems, not just proof-of-concept demos.\n2. I combine AI/ML depth with full-stack and mobile app skills.\n3. I've shipped production-grade projects — AI Recruitment Agent, CosmoGenius.\n4. I've worked at enterprise scale (L&T) AND startup speed (Ashwa LLP).\n5. I'm driven by outcome, not process. The goal is always: does it work and does it create value?"
};

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
      // If this question has a predefined answer, show it instantly (no API)
      if (PREDEFINED_QA[q]) {
        showPredefinedAnswer(q, PREDEFINED_QA[q]);
      } else {
        handleQuery(q);
      }
    });
    historyList.appendChild(btn);
  });
}

/* ═══════════════════════════════════════════
   SHOW PREDEFINED ANSWER
   Renders a stored Q&A pair instantly without
   hitting the API. Uses the same typewriter UX.
═══════════════════════════════════════════ */
async function showPredefinedAnswer(query, answer) {
  hideWelcome();
  addToHistory(query);
  addMessage(query, true);

  // Brief typing indicator for natural feel (250ms)
  showTyping();
  await new Promise(function(r) { setTimeout(r, 250); });
  removeTyping();

  var bubble = addMessage("", false);
  await typeWriter(bubble, answer);

  // Keep conversation context for follow-up questions
  conversationHistory.push({ role: "user",      content: query  });
  conversationHistory.push({ role: "assistant", content: answer });
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
   GROQ API  +  INTELLIGENT FALLBACK
   Primary: Groq via /api/chat serverless fn.
   Fallback: Keyword-based engine (instant).
   Switching is seamless — user never notices.
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

    // 429 = rate limit | 5xx = server error — both trigger fallback
    if (!res.ok) {
      throw new Error("API unavailable: " + res.status);
    }

    var data = await res.json();
    var reply = data.reply;

    // Guard: empty or whitespace-only reply also triggers fallback
    if (!reply || !reply.trim()) {
      throw new Error("Empty API response");
    }

    conversationHistory.push({ role: "assistant", content: reply });
    return reply;

  } catch (e) {
    // ── FALLBACK: keyword-based response engine ──────────────────
    // Triggered silently on: API error, rate-limit (429), or empty reply.
    // getFallbackResponse() matches user intent from DATA and returns
    // a natural, conversational response. No error is shown to the user.
    var fallbackReply = getFallbackResponse(userMessage);
    conversationHistory.push({ role: "assistant", content: fallbackReply });
    return fallbackReply;
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

// Init — questions match PREDEFINED_QA keys exactly for instant answers
window.addEventListener("DOMContentLoaded", function () {
  recentQueries = [
    "Who is Anant Mishra?",
    "What projects have you built?",
    "What is your tech stack?",
    "Where have you worked?",
    "Are you open to new opportunities?",
    "Tell me about your education.",
    "What AI tools and frameworks do you use?",
    "How can I contact you?",
    "What are your goals and ambitions?",
    "What is your personality like?",
    "Tell me about your internship at L&T.",
    "What makes you different from other developers?"
  ];
  renderHistory();
});
