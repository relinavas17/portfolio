// All site copy lives here. Anything wrapped in [brackets] is a placeholder
// that renders in burgundy italic until you replace it.

export const site = {
  name: "Relina Vas",
  title: "Relina Vas · Product Manager",
  description:
    "Product manager with a software engineering background. 0→1 SaaS, AI agents, and the data that shows whether they work.",
  links: {
    email: "mailto:[your-email]", // TODO: replace with your email
    linkedin: "#", // TODO: replace with your LinkedIn URL
    github: "https://github.com/relinavas17",
  },
};

export const hero = {
  lead: "I build products that",
  // Each phrase is typed out, held, then erased. Keep them short and true.
  phrases: [
    "answer the phone.",
    "pick the right model.",
    "explain why agents fail.",
    "ship to 150K+ users.",
  ],
  sub: "Frontend engineer turned product manager, with a detour through data. I still prototype before I write the spec.",
  stats: [
    { value: "150K+", label: "users on cross-platform mobile apps I shipped as a frontend engineer" },
    { value: "0→1", label: "SaaS platform scoped from ICP to MVP to launch plan" },
    { value: "6 × 6", label: "LLMs benchmarked across six weighted quality dimensions" },
  ],
};

export type Project = {
  slug: string;
  name: string; // short card title
  oneLiner: string; // one sentence for the card
  highlight: string; // one proof point for the card
  title: string; // full title on the project page
  meta: string;
  tags: string[];
  summary: string;
  sections: { label: string; body: string }[];
  stack: string[];
  demo?: string; // live demo link, shown as "Try it live"
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "mira",
    name: "Mira",
    oneLiner: "Filing a car insurance claim still means hold music. Mira answers the call, verifies the driver, and files the claim in about a minute and a half.",
    highlight: "100% intent accuracy",
    title: "Mira, a voice agent that files auto insurance claims",
    meta: "Independent build · 2026",
    tags: ["AI Systems", "Engineering"],
    summary:
      "An inbound agent that verifies the caller, captures the claim, and routes injured drivers to the nearest ER.",
    sections: [
      {
        label: "Problem",
        body: "First notice of loss is a stressful call that still runs on hold queues and manual forms. The caller needs speed and reassurance; the insurer needs complete, structured claim data.",
      },
      {
        label: "What I built",
        body: "A Retell AI conversation flow on GPT-4.1 mini with an ElevenLabs voice. Supabase holds policyholders, vehicles, and 211 California ERs. Val.town webhooks handle lookups, and a Mapbox → Photon → Nominatim fallback chain keeps geocoding from stalling a live call.",
      },
      {
        label: "How I knew it worked",
        body: "Across 10 test calls: 100% intent accuracy, 100% of claims filed, ~1.7 s average latency, and 1 m 34 s average handle time.",
      },
      { label: "What I'd change", body: "[Your answer]" },
    ],
    stack: ["Retell AI", "GPT-4.1 mini", "ElevenLabs", "Supabase", "Val.town", "Mapbox"],
    demo: "", // TODO: paste the Retell AI link for Mira
  },
  {
    slug: "llm-evaluator",
    name: "Claims LLM evaluator",
    oneLiner: "Before choosing a model for a live claims screen, I put six of them through the same calls and let the scores decide.",
    highlight: "Claude Sonnet 4 recommended",
    title: "Choosing a production model for claims intake, with evidence",
    meta: "Independent build · 2026",
    tags: ["AI Systems", "Data"],
    summary:
      "A two-sided claims app plus the evaluator that picked its model: six LLMs scored on six weighted dimensions before committing to one.",
    sections: [
      {
        label: "Problem",
        body: "A real-time adjuster screen needs a model that is accurate, stays faithful to the caller's words, and knows when to escalate. Picking one on vibes wasn't good enough.",
      },
      {
        label: "What I built",
        body: "A two-sided React app on the Claude API where a hidden JSON schema drives the adjuster UI in real time, plus a RAGAS-adapted evaluator that benchmarks candidate models on the same scenarios.",
      },
      {
        label: "How I knew it worked",
        body: "Claude Opus 4, Sonnet 4, Haiku 4.5, GPT-4o, GPT-4o-mini, and Llama 3.3 70B were scored on answer relevancy (22%), faithfulness (20%), smoothness (20%), context precision (15%), escalation accuracy (15%), and conciseness (8%). Sonnet 4 came out as the production pick.",
      },
      { label: "What I'd change", body: "[Your answer]" },
    ],
    stack: ["React", "Claude API", "RAGAS", "Groq", "Excel + Word reporting"],
    github: "https://github.com/relinavas17/llm-evaluator",
  },
  {
    slug: "agent-observability",
    name: "Agent failure analysis",
    oneLiner: "Knowing an agent failed is the easy part. This pipeline labels each failed call by why it failed, so the fix lands with the right owner.",
    highlight: "LLM-as-judge on ELT",
    title: "Finding out why AI agents fail on real calls",
    meta: "Independent build · 2026",
    tags: ["Data", "AI Systems"],
    summary:
      "A pipeline that classifies every failed transcript by root cause, so each fix goes to the right owner.",
    sections: [
      {
        label: "Problem",
        body: "Teams can see that their agents miss. They can't see why, so knowledge problems get prompt fixes and instruction problems get new docs.",
      },
      {
        label: "What I built",
        body: "Simulated contact center transcripts, an LLM-as-judge classifier that labels each failure as a knowledge, instruction, or execution gap, and an idempotent ELT pipeline modeled on production data platforms. I chose an LLM judge over manual review so it scales with call volume.",
      },
      { label: "How I knew it worked", body: "[Result, e.g. judge agreement with manual labels]" },
      { label: "What I'd change", body: "[Your answer]" },
    ],
    stack: ["Python", "LLM-as-judge", "ELT", "SQL"],
    github: "https://github.com/relinavas17/agent-observability",
  },
  {
    slug: "usda-dashboards",
    name: "USDA market dashboards",
    oneLiner: "USDA market data, rebuilt as 15+ Power BI dashboards and a chatbot that answers questions in plain English.",
    highlight: "50+ external stakeholders",
    title: "Turning USDA market data into dashboards 50+ stakeholders rely on",
    meta: "Dynamic Sustainability Lab, Syracuse University · 2024 to 2025",
    tags: ["Data", "AI Systems"],
    summary:
      "Dashboards and a natural-language query tool for the Advancing Markets for American Producers initiative, published on a GIS-based National Web Portal.",
    sections: [
      {
        label: "Problem",
        body: "The initiative needed financial, trade, and policy data from USDA reports and other sources turned into something external stakeholders could read and act on without a data team.",
      },
      {
        label: "What I built",
        body: "Owned design and delivery of 15+ Power BI dashboards: extracting data with SQL, organizing historical datasets, and translating them into clear visualizations and performance indicators. I also designed a RAG chatbot that turns SQL queries into natural language, so stakeholders get real-time answers without engineering support.",
      },
      {
        label: "How I knew it worked",
        body: "The dashboards serve 50+ external stakeholders through the National Web Portal. Requirements and progress were reviewed with faculty and researchers in regular check-ins. [Add a usage or feedback signal if you have one]",
      },
      { label: "What I'd change", body: "[Your answer]" },
    ],
    stack: ["Power BI", "SQL", "Excel", "RAG", "GIS"],
  },
];

export type Role = {
  company: string;
  role: string;
  dates: string;
  track: "Product" | "Analytics" | "Engineering";
  impact: { value: string; label: string }; // headline number for the detail panel
  current?: boolean;
  summary: string;
  points: string[];
};

export const experienceHeading = { lead: "From shipping code to", emphasis: "shipping products." };

export const experience: Role[] = [
  {
    company: "Phoenix Tech Solutions",
    role: "Product Manager",
    dates: "Jun 2026 to present",
    track: "Product",
    current: true,
    impact: { value: "0→1", label: "SaaS platform, from discovery to MVP roadmap" },
    summary: "Leading discovery and scoping for a 0→1 AI-powered workforce management SaaS platform.",
    points: [
      "Defining the core feature set with engineering, design, and client teams to set the MVP roadmap",
      "Scoped the MVP around one wedge, utilization and allocation visibility for agencies of 20 to 200 people",
    ],
  },
  {
    company: "Louisa AI",
    role: "Product Manager",
    dates: "Jun 2025 to Apr 2026",
    track: "Product",
    impact: { value: "3x", label: "weekly active users after an onboarding fix" },
    summary: "Owned 0→1 MVP delivery end to end at a Goldman Sachs spinoff ($5M seed).",
    points: [
      "Found onboarding drop-off through user interviews and funnel analysis; shipped a fix that drove a 3x increase in weekly active users",
      "Built a self-serve analytics workflow with n8n and Amplitude APIs, cutting manual reporting time by 60%",
      "Resolved a conflicting client request with a configuration-based solution instead of custom logic, keeping the platform standard",
    ],
  },
  {
    company: "Dynamic Sustainability Lab",
    role: "Data Analyst",
    dates: "Jun 2024 to May 2025",
    track: "Analytics",
    impact: { value: "50+", label: "external stakeholders using the dashboards" },
    summary: "Data and dashboards for a USDA-funded initiative at Syracuse University.",
    points: [
      "Owned design and delivery of 15+ Power BI dashboards for a GIS-based National Web Portal serving 50+ external stakeholders",
      "Designed a RAG chatbot that turns SQL queries into natural language for self-serve insights",
    ],
  },
  {
    company: "SpurTree Technologies",
    role: "Software Engineer",
    dates: "Aug 2021 to Jul 2023",
    track: "Engineering",
    impact: { value: "150K+", label: "users on apps I helped ship" },
    summary: "Built and launched cross-platform mobile applications in Bangalore.",
    points: [
      "Scaled engagement to 150K+ users, aligning technical requirements with business goals",
      "Resolved 500+ production issues, cutting repeat incidents by 40%",
    ],
  },
];

export const about = {
  heading: "Hi, I'm Relina.",
  paragraphs: [
    "I started as a frontend engineer, shipping cross-platform mobile apps to more than 150,000 users. Today I work as a product manager, but I never stopped building: when I want to understand a problem, I usually prototype it.",
    "Lately that has meant AI agents. Building them, evaluating them, and working out why they fail. I like the part of product work where a vague idea turns into something you can measure.",
    "[A line about you outside work]",
  ],
  facts: [
    { label: "Education", value: "M.S. Engineering Management · [School]" },
    { label: "Looking for", value: "Product and technical program roles" },
    { label: "Toolkit", value: "React, SQL, NLP/NER, API integration, Jira, Figma, Power BI" },
  ],
};

// Shown between About and Contact only when a real quote is filled in.
export const testimonial = {
  quote: "", // TODO: paste a real quote from a manager or collaborator
  name: "",
  context: "", // e.g. "Head of Product, Louisa AI · managed Relina directly"
};

export const availability = "Open to product and technical program roles";
