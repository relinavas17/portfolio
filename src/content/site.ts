// All site copy lives here. Anything wrapped in [brackets] is a placeholder
// that renders in burgundy italic until you replace it.

export const site = {
  name: "Relina Vas",
  title: "Relina Vas · Product Manager",
  description:
    "Product manager with a software engineering background. 0→1 SaaS, AI agents, and the data that shows whether they work.",
  location: "Product Manager · San Diego · Open to relocation",
  links: {
    email: "mailto:[your-email]", // TODO: replace with your email
    linkedin: "#", // TODO: replace with your LinkedIn URL
    github: "https://github.com/relinavas17",
    resume: "/resume.pdf", // TODO: drop resume.pdf into /public
  },
};

export const hero = {
  headlineStart: "I scope products like a PM and build them like an",
  headlineEmphasis: "engineer.",
  sub: "Four years across product, software engineering, and analytics. I take ambiguous problems to shipped, measured products: 0→1 SaaS, AI agents, and the data that shows whether they work.",
  stats: [
    { value: "150K+", label: "users on cross-platform mobile apps I shipped as a frontend engineer" },
    { value: "0→1", label: "SaaS platform scoped from ICP to MVP to launch plan" },
    { value: "6 × 6", label: "LLMs benchmarked across six weighted quality dimensions" },
  ],
};

export type Tag = "AI Systems" | "Data" | "Engineering";

export type Project = {
  id: string;
  meta: string;
  tags: Tag[];
  title: string;
  summary: string;
  detail: { label: string; body: string }[];
  github?: string;
  demo?: string; // live demo link, shown as "Try it live"
  caseStudy?: string; // add a URL once a case study page exists
};

export const filters: ("All" | Tag)[] = ["All", "AI Systems", "Data", "Engineering"];

export const projects: Project[] = [
  {
    id: "mira",
    meta: "Independent build · 2026",
    tags: ["AI Systems", "Engineering"],
    title: "Mira, a voice agent that files auto insurance claims",
    summary:
      "An inbound agent that verifies the caller, captures the claim, and routes injured drivers to the nearest ER. 100% intent accuracy across 10 test calls.",
    detail: [
      { label: "Problem", body: "First notice of loss is a stressful call that still runs on hold queues and manual forms." },
      {
        label: "What I built",
        body: "Retell AI flow on GPT-4.1 mini with an ElevenLabs voice, Supabase data, and a Mapbox → Photon → Nominatim geocoding fallback.",
      },
      {
        label: "How I knew it worked",
        body: "10 test calls: 100% intent accuracy, 100% claims filed, ~1.7 s latency, 1 m 34 s handle time.",
      },
      { label: "What I'd change", body: "[Your answer]" },
    ],
    demo: "", // TODO: paste the Retell AI link for Mira
  },
  {
    id: "evaluator",
    meta: "Independent build · 2026",
    tags: ["AI Systems", "Data"],
    title: "Choosing a production model for claims intake, with evidence",
    summary:
      "A two-sided claims app plus the evaluator that picked its model: six LLMs scored on six weighted dimensions before committing to one.",
    detail: [
      {
        label: "Problem",
        body: "A real-time adjuster screen needs a model that is accurate, faithful, and knows when to escalate.",
      },
      {
        label: "What I built",
        body: "React app on the Claude API where a hidden JSON schema drives the adjuster UI, plus a RAGAS-adapted evaluator.",
      },
      {
        label: "How I knew it worked",
        body: "Claude, GPT, and Llama models scored on relevancy (22%), faithfulness (20%), and four more. Sonnet 4 won.",
      },
      { label: "What I'd change", body: "[Your answer]" },
    ],
    github: "https://github.com/relinavas17/llm-evaluator",
  },
  {
    id: "observability",
    meta: "Independent build · 2026",
    tags: ["Data", "AI Systems"],
    title: "Finding out why AI agents fail on real calls",
    summary:
      "A pipeline that sorts every failed transcript into a knowledge, instruction, or execution gap, so each fix goes to the right owner.",
    detail: [
      {
        label: "Problem",
        body: "Teams can see that their agents miss. They can't see why, so fixes land in the wrong place.",
      },
      {
        label: "What I built",
        body: "Simulated call transcripts, an LLM-as-judge classifier, and idempotent ELT modeled on production data platforms.",
      },
      { label: "How I knew it worked", body: "[Result, e.g. judge agreement with manual labels]" },
      { label: "What I'd change", body: "[Your answer]" },
    ],
    github: "https://github.com/relinavas17/agent-observability",
  },
];

export const experience = [
  {
    role: "Product Manager, contract · Phoenix Tech Solutions",
    note: "0→1 AI-powered workforce management SaaS",
    dates: "[Start] to present",
  },
  { role: "Product Manager · Louisa AI", note: "[One line on what you owned and shipped]", dates: "Jun 2025 to Feb 2026" },
  {
    role: "Data Analyst / PM · Dynamic Sustainability Lab",
    note: "[One line on what you owned and shipped]",
    dates: "[Dates]",
  },
  { role: "[Role] · SuperWorld", note: "[One line on what you owned and shipped]", dates: "[Dates]" },
  {
    role: "Frontend Software Engineer · SpurTree Technologies",
    note: "Shipped cross-platform mobile apps to 150K+ users",
    dates: "[Dates]",
  },
];

export const education = "M.S. Engineering Management · [School]";
export const skills = "React · SQL · NLP/NER · API integration · Jira · Figma · Power BI";

export const approach = [
  {
    label: "Spec",
    statement:
      "Start with who hurts and what they already do about it. Scope to the smallest wedge that proves the idea, and write down what's deferred and why.",
    exampleLabel: "In practice · 0→1 SaaS",
    example:
      "A 12-feature wishlist became one wedge, utilization visibility for agency ops leads. Everything else became a phased release, not a no.",
  },
  {
    label: "Prototype",
    statement:
      "Build a working version early, because a demo settles debates a doc can't. Engineering years mean I read the tradeoffs, not just hear about them.",
    exampleLabel: "In practice · Mira",
    example:
      "Built a working voice agent end to end, then added a three-tier geocoding fallback so a slow API could never stall a live call.",
  },
  {
    label: "Prove",
    statement:
      'Decide up front what "working" means, then measure it: user signals for products, benchmarks and failure analysis for AI systems.',
    exampleLabel: "In practice · LLM evaluator",
    example:
      "Six models scored on six weighted dimensions before picking one for production, with the weights set by what matters on a claims call.",
  },
];
