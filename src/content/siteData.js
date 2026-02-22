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
    title: 'Deploy intelligent assistants and workflows grounded in your business data',
    summary:
      'We design and operationalize AI systems that retrieve trusted information, complete multi-step tasks, and integrate with the platforms your teams already use.',
    image: STOCK_IMAGES.generative,
    outcomes: [
      'Reduced repetitive manual effort across core workflows',
      'Higher consistency in internal and customer support responses',
      'Faster decision support with role-specific AI copilots',
    ],
    deliverables: [
      'Knowledge integration and RAG architecture design',
      'Agent workflow orchestration and control patterns',
      'Evaluation methodology, guardrails, and observability setup',
      'Operational governance and handover documentation',
    ],
    stack: ['OpenAI', 'Anthropic', 'Google', 'LangChain', 'n8n', 'Vector Databases'],
  },
  consulting: {
    eyebrow: 'AI Consulting & Strategy',
    title: 'Build a practical AI roadmap with clear priorities and measurable value',
    summary:
      'We work with leadership teams to identify high-impact use cases, align stakeholders, and define an executable plan for implementation and adoption.',
    image: STOCK_IMAGES.consulting,
    outcomes: [
      'Clear prioritization of near-term and long-term AI opportunities',
      'Reduced delivery risk through staged rollout planning',
      'Improved alignment between business and technical teams',
    ],
    deliverables: [
      'Readiness assessment and opportunity discovery',
      'Business value modeling and initiative ranking',
      'Governance, risk, and compliance framework recommendations',
      'Delivery roadmap and change management plan',
    ],
    stack: ['Roadmapping', 'Governance', 'Risk Management', 'Change Enablement'],
  },
  software: {
    eyebrow: 'Software Development',
    title: 'Engineer reliable software platforms that support operational growth',
    summary:
      'From custom applications to integrated ecosystems, we build and modernize systems that are maintainable, scalable, and aligned to business-critical operations.',
    image: STOCK_IMAGES.software,
    outcomes: [
      'Modernized systems with improved scalability and resilience',
      'Better operational visibility through integrated platforms',
      'Faster delivery cycles supported by robust engineering practices',
    ],
    deliverables: [
      'Custom web and platform application development',
      'Systems integration and API orchestration',
      'Cloud architecture and deployment enablement',
      'Performance, reliability, and security hardening',
    ],
    stack: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL'],
  },
};
