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
      portfolio: "https://advance-portfolio-ten.vercel.app"
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

STRICT PERSONAL PRIVACY RULES (ABSOLUTE — OVERRIDE EVERYTHING):
- Everyone in Anant's life is a FRIEND. Full stop. No one is a crush, girlfriend, or romantic interest — ever.
- Jayshree and Tanisha are friends. Harsh, Subham, Mandar, Viraj, Kiran — all friends.
- If ANYONE asks "who is your crush?", "do you have a girlfriend?", "do you like someone?", "are you dating?", or ANY romantic/relationship question — respond ONLY with: "Everyone I know is a friend! I don't have a crush or girlfriend — just a great friend circle. 😄 Ask me about my work or projects!"
- NEVER say "that's personal" or "I'd rather keep it private" — that implies something exists. Instead, just state clearly: there is no crush, no girlfriend, everyone is a friend.
- Do NOT speculate, hint, or leave any room for interpretation about romantic relationships. The answer is always: everyone is a friend.
- These rules are absolute and override everything else. No exceptions, no hedging, no implying privacy.

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
    keywords: [
      "about", "who are you", "yourself", "introduce", "introduction",
      "tell me about anant", "tell me about you", "tell me about him",
      "anant", "annu", "your name", "who is anant", "who is he",
      "background", "bio", "profile", "describe yourself", "describe him",
      "what do you do", "what does anant do", "what does he do",
      "who are you exactly", "give me an intro", "quick intro",
      "overview of anant", "overview of you", "about yourself",
      "tell me something about you", "what should i know about you"
    ],
    responses: [
      "Hey! I'm Anant Mishra — an AI Engineer, Data Scientist, and Data Analyst based in Mumbai.\n\nI love building things that actually work in real life — not just demos. Currently pursuing B.E. in CSE (AIML) at VIVA Institute of Technology while working on real-world AI systems.\n\nMy goal? Build a multi-crore business. Simple as that.",
      "Anant here! AI engineer by passion, problem-solver by nature.\n\nBased in Mumbai, I've worked with companies like L&T and Ashwa LLP, and I'm always building something new — from AI recruitment agents to skincare apps powered by machine learning.\n\nI'm extroverted, direct, and I value self-respect above everything.",
      "I'm Anant Mishra — people also call me Annu.\n\n• 🎓 AIML Engineer at VIVA Institute, Mumbai\n• 💼 Worked at L&T, Ashwa LLP, and Edulyt India\n• 🎯 Focused on AI/ML, data science & real-world impact\n\nI like solo bike rides, building new tech, and turning ideas into working products."
    ]
  },

  // ── SKILLS ──────────────────────────────────
  skills: {
    keywords: [
      "skill", "skills", "tech stack", "tools", "technologies", "technology",
      "language", "languages", "framework", "frameworks", "library", "libraries",
      "know", "proficient", "expertise", "coding", "programming", "stack",
      "what can you do", "what can he do", "what do you know", "what does he know",
      "his abilities", "your abilities", "his technical skills", "your technical skills",
      "what technologies", "which tools", "what languages", "what frameworks",
      "tech knowledge", "technical expertise", "python", "react", "tensorflow",
      "tell me about his skills", "tell me about your skills",
      "what are his skills", "what are your skills"
    ],
    responses: [
      "Here's what I work with:\n\n💻 Languages: Python, R, SQL, JavaScript, Solidity, Flutter\n📚 Libraries: NumPy, Pandas, Matplotlib, TensorFlow, LangChain\n⚙️ Frameworks: Flask, React Native, Expo, PySpark, Hyperledger Fabric\n🛠️ Tools: Microsoft Fabric, Power BI, GitHub, JIRA, Vercel",
      "My core tech stack spans across the AI/Data/Dev spectrum:\n\n• Python is my bread and butter for AI/ML\n• React Native for cross-platform mobile apps\n• TensorFlow + LangChain for deep learning & LLM pipelines\n• SQL + PySpark for large-scale data processing\n• Power BI for business intelligence dashboards",
      "Tech stack breakdown:\n\n🔷 AI/ML: Python, TensorFlow, LangChain, NumPy, Pandas\n🔷 Data: SQL, R, PySpark, Microsoft Fabric, Power BI\n🔷 Dev: JavaScript, React Native, Flutter, Flask, Solidity\n🔷 DevOps: GitHub, Vercel, JIRA\n\nAlways learning and adding to the stack."
    ]
  },

  // ── PROJECTS ────────────────────────────────
  projects: {
    keywords: [
      "project", "projects", "built", "created", "application", "app",
      "build", "developed", "make", "made", "product", "shipped",
      "what has he built", "what have you built", "show me his projects",
      "what did he make", "what did you make", "his work", "your work",
      "tell me about his projects", "tell me about your projects",
      "his applications", "your applications", "ai recruitment", "cosmo",
      "cosmogenius", "recruitment agent", "skincare app", "his products",
      "what projects", "any projects", "side projects"
    ],
    responses: [
      "I've built two major projects so far:\n\n🤖 AI Recruitment Agent — End-to-end AI hiring system with semantic resume screening, AI voice interviews, MCQ pipeline, and score aggregation. Built with Python, NLP, LangChain, and ML.\n\n💆 CosmoGenius — AI skincare mobile app with face scan, skin analysis, routine generator, and product recommendations. Built with React Native, Firebase, Gemini API, and Face++ API.",
      "Two projects I'm really proud of:\n\n1. AI Recruitment Agent\n   • Automates the full hiring pipeline\n   • Semantic search + AI interviews + MCQ evaluation\n   • Stack: Python, LangChain, ML, NLP\n\n2. CosmoGenius Mobile App\n   • AI-powered skincare assistant\n   • Face scan → personalized routine\n   • Stack: React Native, Firebase, Gemini API",
      "Here's what I've shipped:\n\n🧠 AI Recruitment Agent — Replaces traditional screening with AI. Handles resume matching, voice interviews, and automated scoring. Real-world deployed.\n\n📱 CosmoGenius — Skincare meets AI. Users scan their face, get a skin analysis, and receive tailored product recommendations. Full mobile app with chatbot & reminders."
    ]
  },

  // ── EXPERIENCE ──────────────────────────────
  experience: {
    keywords: [
      "experience", "internship", "internships", "intern", "worked", "job",
      "company", "career", "role", "position", "workplace", "employer",
      "where did he work", "where have you worked", "where did you work",
      "his jobs", "your jobs", "his career", "your career",
      "tell me about his experience", "tell me about your experience",
      "tell me about his internship", "work history", "employment",
      "larsen", "l&t", "ashwa", "edulyt", "which companies",
      "his roles", "professional background", "industry experience"
    ],
    responses: [
      "I've had three solid industry stints:\n\n🏢 Larsen & Toubro | Data Scientist | Dec 2025 – Jan 2026\n• Predictive model for manufacturing clearance time\n• TensorFlow, PySpark, SQL for large-scale data processing\n• Power BI dashboards for stakeholders\n\n💼 Ashwa LLP | Software Engineer | Jun – Nov 2025\n• NLP systems with multilingual PDF processing\n• OCR document classification & semantic search\n\n📊 Edulyt India | Data Analyst | Jan – Mar 2024\n• EDA, data preprocessing & visual dashboards",
      "Work experience summary:\n\n• L&T (Data Scientist): Built ML models for manufacturing, worked with PySpark on large datasets, created Power BI dashboards for leadership\n• Ashwa LLP (Software Engineer): Built NLP pipelines, OCR systems, integrated Ollama & Vision APIs\n• Edulyt India (Data Analyst): First real-world data role — EDA, cleaning, and insights communication",
      "Three internships that shaped my engineering mindset:\n\n1. Larsen & Toubro — Worked on predictive analytics for manufacturing. Real large-scale data engineering with TensorFlow + PySpark.\n2. Ashwa LLP — Deep NLP work. Built multilingual document processing systems with OCR and embeddings.\n3. Edulyt India — Started with data analytics fundamentals. EDA, visualization, communicating insights."
    ]
  },

  // ── EDUCATION ───────────────────────────────
  education: {
    keywords: [
      "education", "college", "university", "degree", "study", "studies",
      "student", "course", "academic", "school", "graduation", "graduate",
      "viva", "btech", "b.e", "engineering", "marks", "cgpa", "percentage",
      "score", "grade", "10th", "12th", "ssc", "hsc", "aiml",
      "where did he study", "where does he study", "his college", "his school",
      "tell me about his education", "tell me about your education",
      "his degree", "your degree", "what did he study", "what does he study",
      "abhinav", "mumbai university", "qualification", "his academics"
    ],
    responses: [
      "🎓 Currently pursuing B.E. in CSE (AIML) at VIVA Institute of Technology, Mumbai University (2022 – Present) | 6 CGPA.\n\nHSC (12th) — Abhinav Vidya Mandir | 53%\nSSC (10th) — Abhinav Vidya Mandir | 74%\n\nAcademics were okay, but the real learning happened through internships and shipping actual products.",
      "Education background:\n\n• B.E. CSE (AIML) — VIVA Institute of Technology, Mumbai University | 2022 – Present | 6 CGPA\n• HSC (12th) — Abhinav Vidya Mandir | 2021–2022 | 53%\n• SSC (10th) — Abhinav Vidya Mandir | 2019–2020 | 74%\n\nSchool was where I found my personality. Went from being shy to confidently speaking on stage — and I picked up drums along the way.",
      "Studying CSE (AIML) at VIVA Institute of Technology, Mumbai University | 6 CGPA.\n\n12th: 53% | 10th: 74% — both from Abhinav Vidya Mandir.\n\nNumbers don't define me — three industry internships and two real-world AI products do."
    ]
  },

  // ── CONTACT ─────────────────────────────────
  contact: {
    keywords: [
      "contact", "email", "phone", "reach", "connect", "linkedin", "github",
      "available", "talk", "message", "social", "link", "links",
      "how to contact", "how to reach", "how can i reach", "get in touch",
      "how to connect", "how do i contact", "contact him", "contact you",
      "tell me about his contact", "his email", "his number", "his linkedin",
      "his github", "where can i find him", "where can i reach him",
      "drop a message", "send him a message", "reach out"
    ],
    responses: [
      "Let's connect! Here's how to reach me:\n\n📧 Email: anant20042003@gmail.com\n📞 Phone: +91 9156374557\n🔗 GitHub: github.com/Mishraaa-Anant\n🔗 LinkedIn: linkedin.com/in/anantmishra31\n🌐 Portfolio: advance-portfolio-ten.vercel.app",
      "Hit me up through any of these:\n\n• 📧 anant20042003@gmail.com\n• 📞 +91 9156374557\n• LinkedIn → anantmishra31\n• GitHub → Mishraaa-Anant\n\nI respond fast — especially on email and LinkedIn.",
      "Best ways to reach me:\n\n1. Email — anant20042003@gmail.com (fastest for professional queries)\n2. LinkedIn — linkedin.com/in/anantmishra31\n3. GitHub — github.com/Mishraaa-Anant\n4. Phone — +91 9156374557"
    ]
  },

  // ── AI / ML ──────────────────────────────────
  aiml: {
    keywords: [
      "ai", "ml", "machine learning", "artificial intelligence", "deep learning",
      "nlp", "neural", "llm", "langchain", "model", "training", "data science",
      "algorithm", "embedding", "vector", "computer vision", "ocr",
      "tell me about his ai", "tell me about ai skills", "ai experience",
      "his ai work", "ai projects", "ml projects", "generative ai",
      "large language model", "tensorflow", "pytorch", "data scientist"
    ],
    responses: [
      "AI and ML are literally my domain.\n\nI've worked with TensorFlow for deep learning, LangChain for LLM pipelines, NLP for document processing, and embeddings for semantic search. My projects — AI Recruitment Agent and CosmoGenius — are both AI-first products built for real-world deployment.",
      "AI/ML is my core strength:\n\n• Deep Learning with TensorFlow\n• LLM pipelines with LangChain\n• NLP: multilingual PDF processing, OCR, semantic search\n• Vector embeddings for similarity matching\n• Computer Vision via Face++ API\n\nI've applied all of this in production at L&T and Ashwa LLP.",
      "Honestly, AI is what excites me most. I've built systems that:\n\n• Screen resumes semantically using ML + embeddings\n• Process multilingual PDFs with OCR pipelines\n• Analyze skin with computer vision\n• Conduct AI voice interviews\n\nThis isn't just academic — these are shipped, real-world applications."
    ]
  },

  // ── FRIENDS / RELATIONSHIPS ──────────────────
  friends: {
    // Broad keyword set — catches natural language phrasings
    keywords: [
      // Direct name mentions
      "jayshree", "tanisha", "harsh", "subham", "mandar", "viraj", "kiran",
      "karan", "omkar", "bhaumik", "vidhi", "manthan", "rohan", "anurag",
      "gauravi", "prashik", "dhruv", "srikrishna", "soham", "smit", "nidhi",
      // Friendship topic words
      "friend", "friends", "friendship", "best friend", "best friends",
      "close friend", "close friends", "buddy", "buddies", "pal", "pals",
      "mate", "mates", "squad", "gang", "crew", "circle",
      // Relationship / romantic (handled by privacy guard separately)
      "crush", "girlfriend", "boyfriend", "relationship", "dating",
      "love", "romantic", "like someone", "like a girl", "like a boy",
      // Natural question phrasings
      "who are your friends", "who is your friend", "who is your best friend",
      "who are his friends", "tell me about his friends", "tell me about your friends",
      "who do you hang out with", "who are you close to", "who is close to you",
      "do you have friends", "how many friends", "name your friends",
      "who is jayshree", "who is tanisha", "who is harsh",
      "is jayshree your", "is tanisha your", "who do you like",
      "who is your crush", "do you like", "are you dating",
      "social life", "personal life"
    ],
    // General friend-list response (shown for friend questions that are NOT romantic)
    responses: [
      "I've got a solid friend circle! 😊\n\nBest Friends: Harsh, Subham, Mandar, Jayshree, Viraj, Kiran\n\nOther close friends: Karan, Omkar, Bhaumik, Vidhi, Manthan, Rohan, Anurag, Gauravi, Prashik, Dhruv, Srikrishna, Soham, Smit, Nidhi, Tanisha.\n\nReal ones only — quality over quantity!",
      "Friends? Oh, I've got a good crew! 👥\n\n• Best Friends: Harsh, Subham, Mandar, Jayshree, Viraj, Kiran\n• Also close with: Karan, Omkar, Bhaumik, Vidhi, Manthan, Rohan, Anurag, Gauravi, Prashik, Dhruv, Srikrishna, Soham, Smit, Nidhi, Tanisha\n\nI value real friendships — people who are genuine and get things done.",
      "Great question! My friend circle is pretty solid. 😄\n\nMy best friends are Harsh, Subham, Mandar, Jayshree, Viraj, and Kiran — the ones I'm closest to.\n\nI also have a bunch of other great friends like Karan, Vidhi, Manthan, Anurag, and more. Real ones — no fakes!"
    ],
    // Shown specifically when the question is romantic/relationship-oriented
    privacyResponse: "Everyone I know is just a friend! 😄 No crush, no girlfriend — just a solid friend circle.\n\nBest Friends: Harsh, Subham, Mandar, Jayshree, Viraj, Kiran.\nOther great friends: Karan, Omkar, Bhaumik, Vidhi, Manthan, Rohan, Anurag, Gauravi, Prashik, Dhruv, Srikrishna, Soham, Smit, Nidhi, Tanisha.\n\nWant to know about my projects or tech stack instead?"
  },

  // ── HOBBIES / PERSONAL ───────────────────────
  hobbies: {
    keywords: [
      "hobby", "hobbies", "free time", "fun", "enjoy", "passion",
      "outside work", "bike", "bike ride", "drums", "music", "game", "gaming",
      "leisure", "interest", "interests", "what does he enjoy", "what does he like",
      "tell me about his hobbies", "tell me about your hobbies",
      "what does he do for fun", "what do you do for fun",
      "his interests", "your interests", "what he likes",
      "how does he spend time", "after work", "besides coding"
    ],
    responses: [
      "Outside of work? Mostly:\n\n🏍️ Solo bike rides — that's my kind of therapy. Pure happiness.\n🎮 Gaming occasionally when I need to switch off.\n🥁 I used to play drums in school — still love music.\n🔧 Building new things — even hobbies become side projects eventually.",
      "My vibe outside of coding:\n\n• Solo bike rides are my absolute go-to for clearing my head\n• I played drums in school and still love rhythm-based music\n• Light gaming when I want to zone out\n• I genuinely enjoy experimenting with new tech even off hours",
      "Fun stuff about me:\n\n1. Bike rides solo — no playlist, just me and the road\n2. Drums since school days — rhythm is a thing\n3. I find it hard to not think about what I'm building next\n4. Gaming is occasional but I enjoy it when I do"
    ]
  },

  // ── PERSONALITY ──────────────────────────────
  personality: {
    keywords: [
      "personality", "traits", "character", "attitude", "mindset", "values",
      "extrovert", "introvert", "strength", "strengths", "weakness", "weaknesses",
      "what is he like", "what are you like", "describe him", "describe yourself",
      "tell me about his personality", "tell me about your personality",
      "his character", "your character", "how is he as a person", "his attitude",
      "his values", "what drives him", "what motivates him", "who is he as a person"
    ],
    responses: [
      "I'm an extrovert — confident, direct, and I say what I mean.\n\n• Motivation: Building something BIG. A multi-crore business is the goal.\n• Core values: Self-respect above everything. I don't do fake.\n• Strength: Confidence and taking initiative\n• Weakness: Short temper — I'm working on it",
      "Personality-wise:\n\n🔥 Extrovert who communicates in a funny + professional mix\n💡 Driven by results, not just effort\n🎯 Goal-oriented — everything I do is aimed at building a large business\n✂️ I cut through BS quickly — no time for fake people or dishonesty\n📈 Weakness: I get impatient when things move slow — actively working on that",
      "The honest version:\n\nI'm confident, a little impatient (short temper, working on it), and very direct. I hate fake people and dishonesty. I value self-respect deeply and surround myself with real ones.\n\nMy biggest motivator? Money and building something that lasts. Not just a startup — a legacy."
    ]
  },

  // ── GOALS ────────────────────────────────────
  goals: {
    keywords: [
      "goal", "goals", "future", "plan", "plans", "aim", "dream", "vision",
      "aspiration", "career goal", "business", "startup", "crore", "ambition",
      "where do you see yourself", "where does he see himself",
      "what are his goals", "what are your goals",
      "tell me about his goals", "tell me about your goals",
      "his future", "your future", "his ambitions", "long term",
      "what does he want to achieve", "what do you want to achieve"
    ],
    responses: [
      "Long-term? Build a multi-crore business. That's the non-negotiable goal.\n\nShort-term — keep shipping real-world AI products, get more industry exposure, and build a network of people who actually get things done.",
      "Goals are simple but big:\n\n• Build a business that generates real revenue at scale\n• Be known as someone who ships AI products that actually work\n• Keep learning, keep building, stay ahead of the curve\n\nI'm not chasing titles — I'm chasing impact.",
      "The vision is clear — multi-crore business. Not just talk.\n\nRight now I'm laying the foundation: deep technical skills, real industry experience, and a strong network. Every project, every internship, every line of code is moving toward that goal."
    ]
  },

  // ── RESUME ───────────────────────────────────
  resume: {
    keywords: [
      "resume", "cv", "curriculum vitae", "download", "pdf",
      "can i get his resume", "send resume", "share resume",
      "get his cv", "download resume", "his resume", "your resume"
    ],
    responses: [
      "You can view my full portfolio at advance-portfolio-ten.vercel.app — it covers everything including projects, experience, and skills.\n\nFor my resume or direct opportunities, shoot me an email at anant20042003@gmail.com and I'll get it to you right away.",
      "My resume is available on request! Drop me a message at anant20042003@gmail.com and I'll send it over ASAP.\n\nOr check out the full portfolio here: advance-portfolio-ten.vercel.app",
      "Best way to get my resume: email anant20042003@gmail.com and mention what role/opportunity you're looking at. I'll tailor and send it quickly.\n\nLinkedIn also has an updated version: linkedin.com/in/anantmishra31"
    ]
  },

  // ── HIRE / AVAILABILITY ──────────────────────
  hire: {
    keywords: [
      "hire", "hiring", "open to work", "job offer", "freelance", "collaborate",
      "looking for work", "is he available", "are you available",
      "can i hire", "open for opportunities", "is he open", "are you open",
      "looking for a job", "available for work", "can he join"
    ],
    responses: [
      "Yes — I'm open to opportunities! 🙌\n\nBest way to reach out is email: anant20042003@gmail.com\nOr LinkedIn: linkedin.com/in/anantmishra31\n\nWhether it's a full-time role, internship, or freelance project — let's talk.",
      "Absolutely open to the right opportunities. I'm especially interested in AI/ML engineering roles, data science positions, and anything involving building real-world AI products.\n\nEmail me: anant20042003@gmail.com — I respond fast.",
      "Currently exploring opportunities in AI/ML and data engineering.\n\nIf you've got something interesting — a problem worth solving — reach out:\n📧 anant20042003@gmail.com\n💼 linkedin.com/in/anantmishra31"
    ]
  },

  // ── GREETINGS ────────────────────────────────
  greetings: {
    keywords: [
      "hello", "hi", "hey", "hii", "hola", "what's up", "sup", "yo",
      "namaste", "good morning", "good evening", "good afternoon", "howdy",
      "greetings", "wassup", "hiya", "heya"
    ],
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
 *
 * LAYER 0 — Smart Topic Extractor:
 *   Parses "tell me about X", "what are his X", "describe his X" etc.
 *   and maps X directly to a category. Fastest path.
 *
 * LAYER 1 — Romance/Privacy Guard (absolute priority):
 *   Any romantic intent fires the friends privacy response. Non-negotiable.
 *
 * LAYER 2 — Weighted Keyword Scoring:
 *   Counts keyword hits per category. Multi-word phrases score x2.
 *   Picks highest scoring category.
 *
 * LAYER 3 — Default catch-all.
 */
function getFallbackResponse(message) {
  var lower = message.toLowerCase();

  // ── LAYER 0: Smart Topic Extractor ──────────────────────────────────────
  // Maps subject words from natural phrases directly to categories.
  var TOPIC_MAP = [
    { words: ["skill", "skills", "tech", "stack", "technology", "technologies", "tools", "language", "framework", "coding", "programming"], category: "skills" },
    { words: ["project", "projects", "app", "apps", "application", "built", "made", "shipped", "product", "cosmogenius", "recruitment"], category: "projects" },
    { words: ["experience", "internship", "work", "job", "career", "company", "companies", "l&t", "ashwa", "edulyt", "larsen"], category: "experience" },
    { words: ["education", "college", "school", "degree", "study", "studies", "marks", "cgpa", "academic", "viva", "qualification"], category: "education" },
    { words: ["contact", "email", "phone", "linkedin", "github", "reach", "connect", "links"], category: "contact" },
    { words: ["friend", "friends", "squad", "circle", "crew", "jayshree", "tanisha", "harsh", "subham"], category: "friends" },
    { words: ["hobby", "hobbies", "interest", "interests", "bike", "drums", "gaming", "fun", "leisure"], category: "hobbies" },
    { words: ["personality", "character", "traits", "mindset", "attitude", "values", "strength", "weakness"], category: "personality" },
    { words: ["goal", "goals", "future", "plan", "ambition", "dream", "vision", "startup", "business"], category: "goals" },
    { words: ["ai", "ml", "machine learning", "data science", "deep learning", "nlp", "langchain"], category: "aiml" },
    { words: ["anant", "him", "you", "himself", "yourself", "background", "bio", "intro", "profile"], category: "about" }
  ];

  // Pattern: "tell me about X", "what are his X", "describe his X", "explain his X"
  var extractPatterns = [
    /tell\s+me\s+about\s+(?:his|your|anant\'?s?)?\s*(\w+)/i,
    /what\s+(?:are|is)\s+(?:his|your|anant\'?s?)?\s*(\w+)/i,
    /describe\s+(?:his|your|anant\'?s?)?\s*(\w+)/i,
    /explain\s+(?:his|your|anant\'?s?)?\s*(\w+)/i,
    /show\s+me\s+(?:his|your|anant\'?s?)?\s*(\w+)/i,
    /(?:about|regarding)\s+(?:his|your|anant\'?s?)?\s*(\w+)/i
  ];

  for (var pi = 0; pi < extractPatterns.length; pi++) {
    var match = lower.match(extractPatterns[pi]);
    if (match && match[1]) {
      var subject = match[1].toLowerCase();
      for (var ti = 0; ti < TOPIC_MAP.length; ti++) {
        if (TOPIC_MAP[ti].words.indexOf(subject) !== -1) {
          var pool0 = FALLBACK_ENGINE[TOPIC_MAP[ti].category].responses;
          return pool0[Math.floor(Math.random() * pool0.length)];
        }
      }
    }
  }

  // ── LAYER 1: Romance/Relationship Guard (ABSOLUTE PRIORITY) ─────────────
  // ANY romantic or relationship-type question is caught here first.
  // The answer is always: everyone is a friend. No crush. No girlfriend. Ever.
  var PRIVACY_TRIGGERS = [
    "crush", "girlfriend", "boyfriend", "relationship", "dating", "date",
    "romantic", "romance", "do you love", "are you in love", "in love",
    "who do you like", "who is your crush", "do you have a crush",
    "is jayshree your girlfriend", "is tanisha your girlfriend",
    "is jayshree your crush", "is tanisha your crush",
    "is jayshree your", "is tanisha your",
    "are you dating", "do you have a girlfriend", "do you have a boyfriend",
    "like someone", "like a girl", "like a boy", "love life",
    "love interest", "special someone", "significant other", "partner",
    "are you single", "are you taken", "committed", "propose",
    "who do you love", "who are you dating", "who is your girl",
    "do you like anyone", "do you like her", "do you like him"
  ];

  var isRomanticQuestion = PRIVACY_TRIGGERS.some(function(trigger) {
    return lower.includes(trigger);
  });

  if (isRomanticQuestion) {
    return FALLBACK_ENGINE.friends.privacyResponse;
  }

  // ── LAYER 2: Keyword Scoring ─────────────────────────────────────────────
  // Score each category by counting how many of its keywords appear in the message.
  // Longer, multi-word keyword phrases are weighted higher (x2 score bonus).
  var bestCategory = null;
  var bestScore = 0;

  Object.keys(FALLBACK_ENGINE).forEach(function(category) {
    if (category === "default") return;
    var data = FALLBACK_ENGINE[category];
    if (!data.keywords) return;
    var score = 0;
    data.keywords.forEach(function(kw) {
      if (lower.includes(kw)) {
        // Multi-word phrases are more specific — reward them more
        var wordCount = kw.trim().split(/\s+/).length;
        score += (wordCount > 1) ? 2 : 1;
      }
    });
    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  });

  // ── LAYER 3: Default catch-all ───────────────────────────────────────────
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
   VISITOR MEMORY SYSTEM
   Lightweight localStorage layer that tracks
   returning visitors and personalizes greetings.
   No login, no backend — fully private.
═══════════════════════════════════════════ */
const VISITOR_MEMORY = (function () {

  var LS_KEY = "anant_visitor_data";

  // ── Topic detection map (query → category label) ─────────────────────────
  var TOPIC_DETECT = [
    { label: "AI/ML",       words: ["ai", "ml", "machine learning", "deep learning", "nlp", "langchain", "tensorflow", "data science", "neural", "model", "embedding", "vector"] },
    { label: "projects",   words: ["project", "projects", "built", "cosmogenius", "recruitment", "app", "application", "product"] },
    { label: "skills",     words: ["skill", "skills", "tech", "stack", "technologies", "language", "framework", "coding", "python", "react"] },
    { label: "experience", words: ["experience", "internship", "intern", "l&t", "larsen", "ashwa", "edulyt", "work", "job", "career", "company"] },
    { label: "education",  words: ["education", "college", "degree", "viva", "university", "cgpa", "school", "marks", "academic"] },
    { label: "contact",    words: ["contact", "email", "phone", "linkedin", "github", "reach", "connect"] },
    { label: "goals",      words: ["goal", "goals", "future", "business", "startup", "ambition", "vision", "dream"] },
    { label: "personality",words: ["personality", "traits", "mindset", "attitude", "strength", "weakness", "extrovert", "character"] },
    { label: "hobbies",    words: ["hobby", "hobbies", "bike", "drums", "gaming", "fun", "leisure", "interest"] }
  ];

  // ── Personalization message templates ────────────────────────────────────
  // Returns {banner, subtitle} strings based on visitor data.
  function _buildMessages(data) {
    var topSection = _getTopTopic(data.topicsEngaged);
    var visitCount = data.visitCount || 1;
    var banner = null;
    var subtitle = null;

    if (visitCount === 2) {
      if (topSection) {
        banner   = "Welcome back 👀  Last time you explored my " + topSection + ".";
        subtitle = "Welcome back! Last time you were checking out my " + topSection + " 👀";
      } else {
        banner   = "Welcome back 👀  Good to see you again!";
        subtitle = "Welcome back! Good to see you again 👀";
      }
    } else if (visitCount >= 3) {
      var aiCount = (data.topicsEngaged && data.topicsEngaged["AI/ML"]) || 0;
      var projCount = (data.topicsEngaged && data.topicsEngaged["projects"]) || 0;

      if (aiCount >= 3) {
        banner   = "You seem really into AI systems 😏  I like your taste.";
        subtitle = "You keep coming back for the AI stuff 😏 — I like your taste.";
      } else if (projCount >= 3) {
        banner   = "Back for more projects? 🤔  Building something cool?";
        subtitle = "You keep checking my projects — building something? 🤔";
      } else if (visitCount >= 5) {
        banner   = "Visit #" + visitCount + " — you must really like what you see 😄";
        subtitle = "Visit #" + visitCount + "! You're basically a regular here 😄";
      } else {
        banner   = "Welcome back 😄  " + (topSection ? "Still curious about my " + topSection + "?" : "What's on your mind today?");
        subtitle = topSection ? "Still curious about my " + topSection + "? Ask me anything." : "Great to have you back. What would you like to explore?";
      }
    }

    return { banner: banner, subtitle: subtitle };
  }

  function _getTopTopic(topicsEngaged) {
    if (!topicsEngaged) return null;
    var keys = Object.keys(topicsEngaged);
    if (keys.length === 0) return null;
    var top = keys.reduce(function (a, b) { return topicsEngaged[a] >= topicsEngaged[b] ? a : b; });
    return topicsEngaged[top] >= 1 ? top : null;
  }

  // ── Public API ───────────────────────────────────────────────────────────
  return {

    /** Load raw data from localStorage (or null if first visit). */
    load: function () {
      try {
        var raw = localStorage.getItem(LS_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) { return null; }
    },

    /** Persist data to localStorage. */
    save: function (data) {
      try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch (e) {}
    },

    /**
     * Called on DOMContentLoaded.
     * - Creates record for first-time visitors.
     * - Increments visitCount for returning visitors.
     * Returns the updated data object.
     */
    init: function () {
      var now = Date.now();
      var data = this.load();
      if (!data) {
        // First visit
        data = {
          visitCount: 1,
          firstVisit: now,
          lastVisit: now,
          sectionsViewed: [],
          topicsEngaged: {},
          totalMessages: 0
        };
      } else {
        // Returning visit — only count if last visit was > 30 min ago
        // (prevents refresh from counting as a new visit)
        var thirtyMin = 30 * 60 * 1000;
        if ((now - data.lastVisit) > thirtyMin) {
          data.visitCount = (data.visitCount || 1) + 1;
        }
        data.lastVisit = now;
        if (!data.topicsEngaged)  data.topicsEngaged  = {};
        if (!data.sectionsViewed) data.sectionsViewed = [];
        if (!data.totalMessages)  data.totalMessages  = 0;
      }
      this.save(data);
      return data;
    },

    /**
     * Detect and record which topic category a query touches.
     * Called silently from every query handler.
     */
    trackSection: function (query) {
      var lower = query.toLowerCase();
      var data = this.load();
      if (!data) return;

      var matched = null;
      for (var i = 0; i < TOPIC_DETECT.length; i++) {
        var entry = TOPIC_DETECT[i];
        for (var j = 0; j < entry.words.length; j++) {
          if (lower.includes(entry.words[j])) {
            matched = entry.label;
            break;
          }
        }
        if (matched) break;
      }

      if (matched) {
        // Track section viewed (no duplicates within a session)
        if (data.sectionsViewed.indexOf(matched) === -1) {
          data.sectionsViewed.push(matched);
        }
        // Increment engagement counter
        data.topicsEngaged[matched] = (data.topicsEngaged[matched] || 0) + 1;
      }

      data.totalMessages = (data.totalMessages || 0) + 1;
      this.save(data);
    },

    /**
     * Returns { banner, subtitle } personalized messages for returning visitors.
     * Returns { banner: null, subtitle: null } for first-time visitors.
     */
    getMessages: function () {
      var data = this.load();
      if (!data || data.visitCount <= 1) return { banner: null, subtitle: null };
      return _buildMessages(data);
    }
  };
})();

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

  "How can I contact you?": "Here's the best way to reach me:\n\n📧 Email: anant20042003@gmail.com\n📞 Phone: +91 9156374557\n🔗 LinkedIn: linkedin.com/in/anantmishra31\n💛 GitHub: github.com/Mishraaa-Anant\n🌐 Portfolio: advance-portfolio-ten.vercel.app\n\nI respond fast — especially on email and LinkedIn.",

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
  VISITOR_MEMORY.trackSection(query); // 🧠 memory: track section
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
  VISITOR_MEMORY.trackSection(query); // 🧠 memory: track section

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
  VISITOR_MEMORY.trackSection(query); // 🧠 memory: track what the user is curious about
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

/* ═══════════════════════════════════════════
   MEMORY BANNER UI HELPERS
═══════════════════════════════════════════ */
var _bannerTimer = null;

function showMemoryBanner(text) {
  var banner = document.getElementById("memoryBanner");
  var bannerText = document.getElementById("memoryBannerText");
  if (!banner || !bannerText || !text) return;

  bannerText.textContent = text;

  // Reveal after splash fades (~2.6s)
  setTimeout(function () {
    banner.classList.add("visible");

    // Auto-dismiss after 6 seconds
    _bannerTimer = setTimeout(function () {
      dismissMemoryBanner();
    }, 6000);
  }, 2700);
}

function dismissMemoryBanner() {
  var banner = document.getElementById("memoryBanner");
  if (!banner) return;
  clearTimeout(_bannerTimer);
  banner.classList.add("hiding");
  banner.classList.remove("visible");
  setTimeout(function () {
    banner.classList.remove("hiding");
  }, 400);
}

// Init — questions match PREDEFINED_QA keys exactly for instant answers
window.addEventListener("DOMContentLoaded", function () {

  // ── Visitor Memory Init ──────────────────────────────────────────────────
  var memData = VISITOR_MEMORY.init();
  var memMessages = VISITOR_MEMORY.getMessages();

  // Show personalised banner for returning visitors
  if (memMessages.banner) {
    showMemoryBanner(memMessages.banner);
  }

  // Personalize the welcome screen subtitle for returning visitors
  if (memMessages.subtitle) {
    var subtitleEl = document.querySelector(".welcome-subtitle");
    if (subtitleEl) {
      subtitleEl.textContent = memMessages.subtitle;
    }
  }

  // Wire up banner close button
  var closeBtn = document.getElementById("memoryBannerClose");
  if (closeBtn) {
    closeBtn.addEventListener("click", dismissMemoryBanner);
  }

  // ── History ──────────────────────────────────────────────────────────────
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

/* ═══════════════════════════════════════════
   OPEN TO WORK BADGE
═══════════════════════════════════════════ */
const OPEN_TO_WORK = true; // Set to false when not looking
(function initOTW() {
  var ring = document.getElementById("otwRing");
  if (ring && OPEN_TO_WORK) ring.classList.add("visible");
})();

/* ═══════════════════════════════════════════
   DARK / LIGHT THEME TOGGLE
═══════════════════════════════════════════ */
(function initTheme() {
  var saved = localStorage.getItem("anant_theme") || "dark";
  applyTheme(saved);
})();

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme === "light" ? "light" : "");
  var moon = document.querySelector(".icon-moon");
  var sun  = document.querySelector(".icon-sun");
  if (moon) moon.style.display = theme === "light" ? "none" : "";
  if (sun)  sun.style.display  = theme === "light" ? "" : "none";
  localStorage.setItem("anant_theme", theme);
}

document.getElementById("themeToggle").addEventListener("click", function () {
  var current = localStorage.getItem("anant_theme") || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
});

/* ═══════════════════════════════════════════
   VOICE INPUT (Web Speech API)
═══════════════════════════════════════════ */
(function initVoice() {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var micBtn = document.getElementById("micBtn");
  if (!SpeechRecognition || !micBtn) return;

  micBtn.style.display = "flex"; // show mic button only if supported

  var recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  var listening = false;

  micBtn.addEventListener("click", function () {
    if (listening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  });

  recognition.addEventListener("start", function () {
    listening = true;
    micBtn.classList.add("listening");
    micBtn.setAttribute("title", "Listening… click to stop");
    chatInput.placeholder = "Listening…";
  });

  recognition.addEventListener("end", function () {
    listening = false;
    micBtn.classList.remove("listening");
    micBtn.setAttribute("title", "Speak your question");
    chatInput.placeholder = "Ask me anything about Anant…";
  });

  recognition.addEventListener("result", function (e) {
    var transcript = e.results[0][0].transcript;
    chatInput.value = transcript;
    updateSendState();
    handleQuery(transcript);
  });

  recognition.addEventListener("error", function () {
    listening = false;
    micBtn.classList.remove("listening");
    chatInput.placeholder = "Ask me anything about Anant…";
  });
})();

/* ═══════════════════════════════════════════
   TEXT-TO-SPEECH (speak AI responses)
   Adds a small "🔊 Speak" button under each
   AI message bubble when TTS is supported.
═══════════════════════════════════════════ */
function addSpeakButton(bubble) {
  if (!window.speechSynthesis) return;
  var btn = document.createElement("button");
  btn.className = "speak-btn";
  btn.innerHTML = "🔊 Speak";
  var speaking = false;
  btn.addEventListener("click", function () {
    if (speaking) {
      window.speechSynthesis.cancel();
      btn.innerHTML = "🔊 Speak";
      btn.classList.remove("speaking");
      speaking = false;
    } else {
      window.speechSynthesis.cancel();
      var text = bubble.textContent || bubble.innerText;
      var utt = new SpeechSynthesisUtterance(text);
      utt.lang = "en-IN";
      utt.rate = 0.95;
      utt.onend = function () {
        btn.innerHTML = "🔊 Speak";
        btn.classList.remove("speaking");
        speaking = false;
      };
      window.speechSynthesis.speak(utt);
      btn.innerHTML = "⏹ Stop";
      btn.classList.add("speaking");
      speaking = true;
    }
  });
  // Insert after bubble
  bubble.parentNode.insertBefore(btn, bubble.nextSibling);
}

// Patch addMessage to attach speak button on AI messages
var _origAddMessage = addMessage;
addMessage = function(content, isUser) {
  var bubble = _origAddMessage(content, isUser);
  if (!isUser && content !== "") {
    // Add speak button after typewriter finishes — use MutationObserver
    var obs = new MutationObserver(function() {
      if (bubble.textContent.trim().length > 0) {
        obs.disconnect();
        addSpeakButton(bubble);
      }
    });
    obs.observe(bubble, { childList: true, characterData: true, subtree: true });
    setTimeout(function() { obs.disconnect(); addSpeakButton(bubble); }, 5000);
  }
  return bubble;
};

/* ═══════════════════════════════════════════
   CONFETTI ON RESUME DOWNLOAD
═══════════════════════════════════════════ */
var resumeBtn = document.getElementById("resumeDownload");
if (resumeBtn) {
  resumeBtn.addEventListener("click", function () {
    if (typeof confetti === "function") {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.1 },
        colors: ["#10a37f", "#34d399", "#ffffff", "#6ee7b7"]
      });
    }
  });
}

/* ═══════════════════════════════════════════
   KEYBOARD SHORTCUTS
═══════════════════════════════════════════ */
var shortcutsOverlay = document.getElementById("shortcutsOverlay");
document.getElementById("shortcutsClose").addEventListener("click", function () {
  shortcutsOverlay.classList.remove("active");
});
shortcutsOverlay.addEventListener("click", function (e) {
  if (e.target === shortcutsOverlay) shortcutsOverlay.classList.remove("active");
});

document.addEventListener("keydown", function (e) {
  // Ctrl+K — focus input
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    chatInput.focus();
  }
  // Ctrl+/ — show shortcuts
  if ((e.ctrlKey || e.metaKey) && e.key === "/") {
    e.preventDefault();
    shortcutsOverlay.classList.toggle("active");
  }
  // Esc — close panels or clear input
  if (e.key === "Escape") {
    if (shortcutsOverlay.classList.contains("active")) {
      shortcutsOverlay.classList.remove("active");
    } else if (sidebar.classList.contains("open")) {
      closeSidebar();
    } else if (chatInput.value.trim()) {
      chatInput.value = "";
      updateSendState();
    }
  }
});

/* ═══════════════════════════════════════════
   GITHUB STATS + ACTIVITY
   Fetches via /api/github serverless fn.
   Renders into #githubStats and #githubActivity.
═══════════════════════════════════════════ */
function timeAgo(dateStr) {
  var diff = (Date.now() - new Date(dateStr).getTime()) / 1000;
  if (diff < 60)    return Math.floor(diff) + "s ago";
  if (diff < 3600)  return Math.floor(diff / 60) + "m ago";
  if (diff < 86400) return Math.floor(diff / 3600) + "h ago";
  return Math.floor(diff / 86400) + "d ago";
}

async function loadGitHubPanel() {
  var statsEl    = document.getElementById("githubStats");
  var activityEl = document.getElementById("githubActivity");
  if (!statsEl || !activityEl) return;

  try {
    // Fetch both in parallel
    var [statsRes, activityRes] = await Promise.all([
      fetch("/api/github?type=stats"),
      fetch("/api/github?type=activity")
    ]);

    // ── Render Stats ──────────────────────────────────────────────
    if (statsRes.ok) {
      var s = await statsRes.json();
      statsEl.innerHTML =
        '<div class="gh-stat"><div class="gh-stat-value">' + s.repos + '</div><div class="gh-stat-label">Repos</div></div>' +
        '<div class="gh-stat"><div class="gh-stat-value">' + s.stars + '</div><div class="gh-stat-label">Stars</div></div>' +
        '<div class="gh-stat"><div class="gh-stat-value">' + s.followers + '</div><div class="gh-stat-label">Followers</div></div>' +
        (s.topLangs && s.topLangs.length > 0
          ? '</div><div class="gh-langs">' + s.topLangs.map(function(l) { return '<span class="gh-lang-pill">' + l + '</span>'; }).join("") + '</div>'
          : "");
    } else {
      statsEl.innerHTML = '<div class="gh-error">Couldn\'t load stats.</div>';
    }

    // ── Render Activity ───────────────────────────────────────────
    if (activityRes.ok) {
      var a = await activityRes.json();
      if (a.events && a.events.length > 0) {
        activityEl.innerHTML = a.events.map(function(ev) {
          return '<div class="gh-event">' +
            '<span class="gh-event-icon">' + ev.icon + '</span>' +
            '<div class="gh-event-text">' +
              '<div class="gh-event-action">' + ev.action + '</div>' +
              '<div class="gh-event-date">' + timeAgo(ev.date) + '</div>' +
            '</div>' +
          '</div>';
        }).join("");
      } else {
        activityEl.innerHTML = '<div class="gh-error">No recent public activity.</div>';
      }
    } else {
      activityEl.innerHTML = '<div class="gh-error">Couldn\'t load activity.</div>';
    }

  } catch (err) {
    if (statsEl)    statsEl.innerHTML    = '<div class="gh-error">GitHub data unavailable.</div>';
    if (activityEl) activityEl.innerHTML = "";
    console.warn("GitHub panel error:", err);
  }
}

// Load after splash fades (~3s) so it doesn't block initial render
setTimeout(loadGitHubPanel, 3000);

/* ═══════════════════════════════════════════
   GITHUB PANEL TOGGLE (mobile collapsible)
═══════════════════════════════════════════ */
(function initGitHubToggle() {
  var toggle = document.getElementById("githubPanelToggle");
  var body   = document.getElementById("githubPanelBody");
  var chevron = document.querySelector(".github-chevron");
  if (!toggle || !body) return;

  var isMobile = function() { return window.innerWidth <= 768; };

  function setOpen(open) {
    if (open) {
      body.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      if (chevron) chevron.classList.add("open");
    } else {
      body.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      if (chevron) chevron.classList.remove("open");
    }
  }

  // Desktop: always open. Mobile: collapsed by default.
  setOpen(!isMobile());

  toggle.addEventListener("click", function() {
    if (isMobile()) {
      setOpen(!body.classList.contains("open"));
    }
    // On desktop, clicking header does nothing (body is always visible)
  });

  window.addEventListener("resize", function() {
    if (!isMobile()) setOpen(true);
  });
})();

/* ═══════════════════════════════════════════
   PARTICLE CANVAS (subtle floating dots)
═══════════════════════════════════════════ */
(function initParticles() {
  var canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var dots = [];
  var animId = null;
  var active = true;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function spawnDots() {
    dots = [];
    var count = Math.floor((canvas.width * canvas.height) / 14000);
    for (var i = 0; i < count; i++) {
      dots.push({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        r:  Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  function draw() {
    if (!active) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#10a37f";
    dots.forEach(function (d) {
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(16,163,127," + d.alpha + ")";
      ctx.fill();
      d.x += d.dx;
      d.y += d.dy;
      if (d.x < 0 || d.x > canvas.width)  d.dx *= -1;
      if (d.y < 0 || d.y > canvas.height) d.dy *= -1;
    });
    animId = requestAnimationFrame(draw);
  }

  // Pause when welcome screen hides (chat started)
  var welcomeEl = document.getElementById("welcomeScreen");
  if (welcomeEl) {
    var obs = new MutationObserver(function () {
      if (welcomeEl.classList.contains("hidden")) {
        active = false;
        if (animId) cancelAnimationFrame(animId);
      } else {
        active = true;
        draw();
      }
    });
    obs.observe(welcomeEl, { attributes: true, attributeFilter: ["class"] });
  }

  window.addEventListener("resize", function () {
    resize();
    spawnDots();
  });

  resize();
  spawnDots();
  draw();
})();

/* ═══════════════════════════════════════════
   EASTER EGGS
   • type "matrix" → green rain
   • type "hire me" → confetti burst
   • type "annu" → fun response
═══════════════════════════════════════════ */
(function initEasterEggs() {
  // ── Matrix Rain ──────────────────────────────────────────────────
  var matrixCanvas = document.createElement("canvas");
  matrixCanvas.id = "matrixCanvas";
  document.body.appendChild(matrixCanvas);

  var exitBtn = document.createElement("button");
  exitBtn.className = "matrix-exit";
  exitBtn.textContent = "[ EXIT MATRIX ]";
  document.body.appendChild(exitBtn);

  var matrixActive = false;
  var matrixAnimId = null;

  function startMatrix() {
    matrixActive = true;
    matrixCanvas.classList.add("active");
    exitBtn.classList.add("active");
    var ctx = matrixCanvas.getContext("2d");
    matrixCanvas.width  = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    var cols = Math.floor(matrixCanvas.width / 16);
    var drops = Array(cols).fill(1);
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アイウエオカキクケコ";

    function rain() {
      if (!matrixActive) return;
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
      ctx.fillStyle = "#00ff46";
      ctx.font = "14px monospace";
      drops.forEach(function (y, i) {
        var char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 16, y * 16);
        if (y * 16 > matrixCanvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
      matrixAnimId = requestAnimationFrame(rain);
    }
    rain();

    // Auto-exit after 8 seconds
    setTimeout(stopMatrix, 8000);
  }

  function stopMatrix() {
    matrixActive = false;
    matrixCanvas.classList.remove("active");
    exitBtn.classList.remove("active");
    if (matrixAnimId) cancelAnimationFrame(matrixAnimId);
    var ctx = matrixCanvas.getContext("2d");
    ctx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
  }

  exitBtn.addEventListener("click", stopMatrix);

  // ── Trigger on typed input ────────────────────────────────────────
  var buffer = "";
  document.addEventListener("keydown", function (e) {
    if (e.target === chatInput) {
      buffer = chatInput.value.toLowerCase();
    } else {
      buffer += e.key.toLowerCase();
      if (buffer.length > 20) buffer = buffer.slice(-20);
    }
  });

  chatInput.addEventListener("input", function () {
    var val = chatInput.value.toLowerCase().trim();

    // "matrix" → matrix rain
    if (val === "matrix") {
      chatInput.value = "";
      updateSendState();
      startMatrix();
      return;
    }

    // "hire me" → confetti
    if (val === "hire me") {
      chatInput.value = "";
      updateSendState();
      if (typeof confetti === "function") {
        confetti({ particleCount: 200, spread: 120, origin: { y: 0.5 }, colors: ["#10a37f", "#34d399", "#fbbf24", "#ffffff"] });
      }
      setTimeout(function () {
        handleQuery("Are you open to new opportunities?");
      }, 500);
      return;
    }

    // "annu" → fun personal fact
    if (val === "annu") {
      chatInput.value = "";
      updateSendState();
      handleQuery("Tell me a fun fact about yourself");
      return;
    }
  });
})();

/* ═══════════════════════════════════════════
   PWA INSTALLATION LOGIC
═══════════════════════════════════════════ */
(function initPWA() {
  var deferredPrompt;
  var pwaPrompt = document.getElementById("pwaPrompt");
  var installBtn = document.getElementById("pwaInstallBtn");
  var cancelBtn = document.getElementById("pwaCancelBtn");

  if (!pwaPrompt || !installBtn || !cancelBtn) return;

  var pwaState = localStorage.getItem("anant_pwa_state");
  if (pwaState === "installed" || pwaState === "dismissed") return;

  var isIOS = /ipad|iphone|ipod/.test(navigator.userAgent.toLowerCase()) && !window.MSStream;
  var isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

  if (isStandalone) {
    localStorage.setItem("anant_pwa_state", "installed");
    return;
  }

  // Handle standard Android/Chrome beforeinstallprompt
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredPrompt = e;
    setTimeout(function() {
      if (localStorage.getItem("anant_pwa_state") !== "dismissed") pwaPrompt.classList.add("visible");
    }, 2500);
  });

  // Handle iOS fallback (since iOS doesn't support beforeinstallprompt)
  if (isIOS && !isStandalone) {
    setTimeout(function() {
      if (localStorage.getItem("anant_pwa_state") !== "dismissed") {
        document.querySelector(".pwa-prompt-desc").innerHTML = "Tap the <b>Share</b> icon below and select <b>Add to Home Screen</b>.";
        installBtn.style.display = "none"; // iOS doesn't support programmatic install
        pwaPrompt.classList.add("visible");
      }
    }, 2500);
  }

  installBtn.addEventListener("click", async function () {
    pwaPrompt.classList.remove("visible");
    if (deferredPrompt) {
      deferredPrompt.prompt();
      var choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        localStorage.setItem("anant_pwa_state", "installed");
      }
      deferredPrompt = null;
    }
  });

  cancelBtn.addEventListener("click", function () {
    pwaPrompt.classList.remove("visible");
    localStorage.setItem("anant_pwa_state", "dismissed");
  });

  window.addEventListener("appinstalled", function () {
    localStorage.setItem("anant_pwa_state", "installed");
    pwaPrompt.classList.remove("visible");
  });
})();
