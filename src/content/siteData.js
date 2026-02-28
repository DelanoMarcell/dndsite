export const STOCK_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1720&q=80',
  operations: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80',
  about: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=80',
  consulting: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
  software: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
  generative: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
  contact: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
};

export const SERVICES = [
  {
    id: 'generative-ai',
    name: 'Generative AI & Agents',
    focus: 'AI assistants and workflow automation for internal and customer-facing operations',
    deliverables: 'RAG systems, agent orchestration, guardrails, observability, governance',
    href: '/services/generative-ai',
  },
  {
    id: 'consulting',
    name: 'AI Consulting & Strategy',
    focus: 'Executive advisory, roadmap definition, and implementation planning',
    deliverables: 'Opportunity mapping, business case modeling, risk planning, rollout roadmap',
    href: '/services/consulting',
  },
  {
    id: 'software',
    name: 'Software Development',
    focus: 'Custom product and platform engineering aligned to business operations',
    deliverables: 'Web applications, API integrations, cloud architecture, performance hardening',
    href: '/services/software',
  },
];

export const SERVICE_DETAILS = {
  'generative-ai': {
    eyebrow: 'Generative AI & Agents',
    title: 'Deploy intelligent agents and workflows',
    summary:
      'We design and operationalise AI systems that retrieve trusted information, complete multi-step tasks, and integrate with the platforms your teams already use.',
    image: STOCK_IMAGES.generative,
    examples: [
      {
        title: 'Internal and customer-facing chatbots',
        detail:
          'Internal chatbots help teams with company policies and internal process guidance, while external chatbots handle client interactions with accurate, business-approved responses.',
      },
      {
        title: 'Knowledge retrieval systems',
        detail: 'Search and answer systems connected to documents, SOPs, and internal content.',
      },
      {
        title: 'Workflow automations',
        detail: 'Agentic workflows where AI can take actions across systems to complete multi-step business tasks.',
      },
      {
        title: 'Evaluation and guardrails',
        detail: 'Safety, quality, and monitoring setups for more reliable production usage.',
      },
    ],
  },
  consulting: {
    eyebrow: 'AI Consulting & Strategy',
    title: 'Build a practical AI roadmap with clear priorities and measurable value',
    summary:
      'We partner with you to make AI adoption less overwhelming, guiding strategy, execution, and change management in one coordinated approach.',
    image: STOCK_IMAGES.consulting,
    examples: [
      {
        title: 'Opportunity assessments',
        detail: 'Structured evaluations of where AI can create measurable value in your operations.',
      },
      {
        title: 'Use-case prioritisation',
        detail: 'Ranking initiatives by impact, effort, and practical feasibility.',
      },
      {
        title: 'Implementation roadmaps',
        detail: 'Phased plans that move from pilot to production with clear milestones.',
      },
      {
        title: 'Governance and risk',
        detail: 'Policies and controls for responsible adoption, compliance, and quality.',
      },
    ],
  },
  software: {
    eyebrow: 'Software Development',
    title: 'Engineer reliable software platforms that support operational growth',
    summary:
      'From custom applications to integrated ecosystems, we build and modernize systems that are maintainable, scalable, and aligned to business-critical operations.',
    image: STOCK_IMAGES.software,
    examples: [
      {
        title: 'Applications',
        detail: 'Custom web, mobile, and desktop applications with secure authentication, workflow logic, and backend integration.',
      },
      {
        title: 'API services',
        detail: 'API design and integration across internal and third-party systems, including auth, validation, and monitoring.',
      },
      {
        title: 'Automation',
        detail: 'Business process automation using event-driven workflows, system triggers, and reliable task orchestration.',
      },
      {
        title: 'Platform modernisation',
        detail: 'Modernisation of legacy platforms to improve performance, reliability, maintainability, and deployment readiness.',
      },
    ],
  },
};
