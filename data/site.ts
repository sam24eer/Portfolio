export type FeaturedCaseStudy = {
  title: string;
  problem: string;
  featureLine: string;
  architectureLayers: { name: string; details: string }[];
  workflows: string[];
  stack: string[];
  modalTitle: string;
  modalSummary: string;
  modalSections: {
    title: string;
    details?: string;
    items?: string[];
  }[];
};

export type SecondaryProject = {
  title: string;
  summary: string;
  details: string[];
  stack: string[];
};

export type HobbyPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const aboutHighlights = [
  'Data Science major focused on Human-Centered Applications and product outcomes.',
  'Product Ops-oriented professional building and operating AI-enabled workflows.',
  'Paid Student Support Assistant at ASU International Students & Scholars Center for 1+ year.',
  'Interned in Voice UI/UX Research & Design at AnKaSumMor, shaping conversational product experiences.',
  'Led operations for programs serving 800+ attendees across campus events and sessions.',
  'Coordinated vendors, stakeholders, and volunteers in high-visibility environments.',
  'Organized an AI Summit with the Consulate General of India and AWS collaboration.',
  'Designed and structured voice command flows for human-bot interactions, enabling users to browse grocery lists, explore products, and complete orders through a conversational voice interface.'
];

export const featuredCaseStudy: FeaturedCaseStudy = {
  title: 'AI Customer Support Operations Platform',
  problem:
    'Support teams often face high ticket volume, slow triage, and limited visibility into automation performance. This system demonstrates a safe AI-assisted support operations workflow combining AI intent classification, retrieval-augmented knowledge lookup (RAG), automation guardrails, and human escalation.',
  featureLine:
    'AI intent classification • RAG knowledge retrieval • ticket lifecycle management • SLA monitoring • ops dashboard • agent workspace',
  architectureLayers: [
    {
      name: '1. User Interaction Layer',
      details:
        'Customer ticket UI, Ops dashboard, and agent workspace interfaces.'
    },
    {
      name: '2. API and Intake Layer',
      details:
        'FastAPI endpoints handling ticket ingestion, ticket history, and agent updates.'
    },
    {
      name: '3. AI Intelligence Layer',
      details:
        'Intent classification using local embedding models and confidence scoring.'
    },
    {
      name: '4. Retrieval Layer',
      details:
        'RAG pipeline retrieving relevant knowledge base articles for support responses.'
    },
    {
      name: '5. Decision Engine',
      details:
        'Rule-based automation deciding auto-resolution vs escalation using confidence thresholds.'
    },
    {
      name: '6. Data & Observability Layer',
      details:
        'SQLite ticket storage, SLA deadline tracking, metrics, and decision audit trail.'
    },
    {
      name: '7. Deployment Layer',
      details:
        'Dockerized service for consistent local and cloud environments.'
    }
  ],
  workflows: [
    'Human-in-the-loop AI automation with controlled escalation.',
    'Clear separation between AI predictions and operational decision rules.',
    'End-to-end observability through ticket metrics and dashboards.',
    'Ticket lifecycle management with SLA monitoring.',
    'Agent workspace for handling escalated support tickets.',
    'Deployment-ready architecture using Docker.'
  ],
  stack: [
    'FastAPI',
    'Python',
    'RAG Retrieval',
    'Sentence Transformers',
    'SQLite',
    'HTML / JavaScript',
    'Docker',
    'Metrics & Observability'
  ],
  modalTitle: 'AI Support Operations Platform',
  modalSummary:
    'Prototype AI system that automates customer support workflows while maintaining operational guardrails.',
  modalSections: [
    {
      title: 'System Overview',
      details:
        'AI-powered ticket intake, intent classification, RAG knowledge retrieval, and rule-based automation.'
    },
    {
      title: 'Ticket Lifecycle',
      details: 'Created → In Review → Resolved'
    },
    {
      title: 'Agent Workspace',
      details:
        'Interface for agents to review escalated tickets and update status.'
    },
    {
      title: 'Ops Dashboard',
      details:
        'Operational visibility including ticket metrics, SLA monitoring, and search.'
    },
    {
      title: 'Metrics Tracked',
      items: [
        'Total tickets',
        'Auto-resolution rate',
        'Escalation rate',
        'Resolved tickets',
        'SLA breaches'
      ]
    },
    {
      title: 'Technology Stack',
      items: [
        'FastAPI backend',
        'Sentence Transformers intent classifier',
        'RAG knowledge retrieval',
        'SQLite ticket database',
        'HTML / JavaScript frontend',
        'Docker deployment'
      ]
    },
    {
      title: 'Development Timeline',
      items: [
        'Week 1 — Architecture: Defined AI-assisted support workflow and backend structure.',
        'Week 2 — AI Decision Engine: Implemented intent classification and automation vs escalation logic.',
        'Week 3 — UI + Ops Dashboard: Built ticket UI, search, metrics visualization, and history tracking.',
        'Week 4 — AI Ops Enhancements: Added RAG retrieval, SLA monitoring, and agent workspace.'
      ]
    }
  ]
};



export const secondaryProjects: SecondaryProject[] = [
  {
    title: 'IBM AI Product Management Capstone',
    summary:
      'Designed an AI product strategy from discovery to roadmap with KPI framing, launch planning, and risk controls.',
    details: [
      'Converted ambiguous business opportunity into validated user and market problem statements.',
      'Defined north-star metric, operating metrics, and launch success criteria.',
      'Built phased roadmap balancing capability maturity, data readiness, and compliance constraints.'
    ],
    stack: ['Product Strategy', 'AI Lifecycle Planning', 'Roadmapping', 'KPI Design']
  },
  {
    title: 'Product Analytics and Ops Intelligence',
    summary:
      'Built analytics workflows translating operational events into actionable product and execution signals.',
    details: [
      'Created event taxonomy for funnel drop-off, throughput, and process variance visibility.',
      'Designed dashboards for weekly executive reviews and operator-level decision making.',
      'Instituted metric ownership and review cadence to reduce decision latency.'
    ],
    stack: ['SQL', 'Python', 'Tableau', 'Experiment Analysis', 'Ops Dashboards']
  }
];

export const experienceTimeline = [
  {
    role: 'AI Summit Operations Lead (Flagship)',
    org: 'Arizona State University | International Students & Scholars Center',
    period: '2025',
    bullets: [
      'Led end-to-end operations for the AI Summit with the Consulate General of India and AWS partner teams.',
      'Drove cross-functional coordination across vendors, university offices, student organizations, and external stakeholders.',
      'Built execution timelines, staffing plans, and contingency workflows for high-visibility event delivery.',
      'Resolved real-time operational issues under high-pressure conditions while maintaining execution quality.'
    ]
  },
  {
    role: 'Student Support Assistant',
    org: 'International Students & Scholars Center, Arizona State University',
    period: '2024 - Present',
    bullets: [
      'Led large-scale program and event operations for 800+ participants with delivery ownership from planning through on-site execution.',
      'Managed vendor coordination, logistics execution, contract-sensitive operations, and compliance requirements.',
      'Directed and trained 25+ volunteers to ensure smooth on-site operations and rapid issue resolution.',
      'Maintained cross-team communication rhythm to keep stakeholders aligned on execution milestones and dependencies.'
    ]
  },
  {
    role: 'Intern Voice UI/UX Research & Design',
    org: 'AnKaSumMor · Internship',
    period: 'Jan 2022 - Apr 2022 · 4 mos',
    bullets: [
      'Location: Bengaluru, Karnataka, India · Remote',
      'Worked on conversational UX research and design for voice-first user journeys.',
      'Tools and platforms: Actions Console (Google) and Voiceflow.'
    ]
  }
];

export const skills = {
  productOps: [
    'Operational Readiness',
    'SOP Design',
    'Stakeholder Orchestration',
    'Incident Triage',
    'Release Coordination'
  ],
  aiLifecycle: [
    'Model Ops Collaboration',
    'Prompt Ops',
    'Evaluation Frameworks',
    'Human-in-the-Loop Systems',
    'Risk and Policy Gates'
  ],
  analytics: ['KPI Trees', 'Process Metrics', 'SQL Analysis', 'Dashboard Narratives', 'Experiment Readouts'],
  tools: ['Jira', 'Notion', 'Figma', 'Tableau', 'Python', 'SQL', 'GitHub', 'Slack']
};

export const hobbyPhotos: HobbyPhoto[] = [
  {
    src: '/photography/hobby-01.jpg',
    alt: 'Travel photography shot 1',
    caption: 'Temple geometry and winter contrast',
    width: 1080,
    height: 1620
  },
  {
    src: '/photography/hobby-02.jpg',
    alt: 'Travel photography shot 2',
    caption: 'City lights with cinematic depth',
    width: 1620,
    height: 1080
  },
  {
    src: '/photography/hobby-03.jpg',
    alt: 'Travel photography shot 3',
    caption: 'Quiet streets and evening texture',
    width: 1080,
    height: 1350
  },
  {
    src: '/photography/hobby-04.jpg',
    alt: 'Travel photography shot 4',
    caption: 'Architecture frames and leading lines',
    width: 1080,
    height: 1620
  },
  {
    src: '/photography/hobby-05.jpg',
    alt: 'Travel photography shot 5',
    caption: 'Portrait mood in natural light',
    width: 1080,
    height: 1350
  },
  {
    src: '/photography/hobby-06.jpg',
    alt: 'Travel photography shot 6',
    caption: 'Landscape calm and open sky',
    width: 1620,
    height: 1080
  },
  {
    src: '/photography/hobby-07.jpg',
    alt: 'Travel photography shot 7',
    caption: 'Street details and shadow play',
    width: 1080,
    height: 1620
  },
  {
    src: '/photography/hobby-08.jpg',
    alt: 'Travel photography shot 8',
    caption: 'Color contrast and motion freeze',
    width: 1080,
    height: 1350
  },
  {
    src: '/photography/hobby-09.jpg',
    alt: 'Travel photography shot 9',
    caption: 'Mountain lines with soft haze',
    width: 1620,
    height: 1080
  },
  {
    src: '/photography/hobby-10.jpg',
    alt: 'Travel photography shot 10',
    caption: 'Urban reflections at blue hour',
    width: 1080,
    height: 1620
  },
  {
    src: '/photography/hobby-11.jpg',
    alt: 'Travel photography shot 11',
    caption: 'Window light and candid stillness',
    width: 1080,
    height: 1350
  },
  {
    src: '/photography/hobby-12.jpg',
    alt: 'Travel photography shot 12',
    caption: 'Minimal skyline and layered tones',
    width: 1620,
    height: 1080
  },
  {
    src: '/photography/hobby-13.jpg',
    alt: 'Travel photography shot 13',
    caption: 'Textured facades and symmetry',
    width: 1080,
    height: 1620
  },
  {
    src: '/photography/hobby-14.jpg',
    alt: 'Travel photography shot 14',
    caption: 'Street rhythm in late sunlight',
    width: 1080,
    height: 1350
  },
  {
    src: '/photography/hobby-15.jpg',
    alt: 'Travel photography shot 15',
    caption: 'Cloud drama over open water',
    width: 1620,
    height: 1080
  },
  {
    src: '/photography/hobby-16.jpg',
    alt: 'Travel photography shot 16',
    caption: 'Depth cues in narrow lanes',
    width: 1080,
    height: 1620
  },
  {
    src: '/photography/hobby-17.jpg',
    alt: 'Travel photography shot 17',
    caption: 'Golden-hour portrait silhouette',
    width: 1080,
    height: 1350
  },
  {
    src: '/photography/hobby-18.jpg',
    alt: 'Travel photography shot 18',
    caption: 'Night scene with neon accents',
    width: 1620,
    height: 1080
  },
  {
    src: '/photography/hobby-19.jpg',
    alt: 'Travel photography shot 19',
    caption: 'Historic architecture in detail',
    width: 1080,
    height: 1620
  },
  {
    src: '/photography/hobby-20.jpg',
    alt: 'Travel photography shot 20',
    caption: 'Wide landscape and calm horizon',
    width: 1620,
    height: 1080
  }
];



