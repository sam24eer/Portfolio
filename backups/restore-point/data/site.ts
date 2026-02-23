export type FeaturedCaseStudy = {
  title: string;
  problem: string;
  architectureLayers: { name: string; details: string }[];
  personas: { title: string; need: string }[];
  metrics: string[];
  workflows: string[];
  incidents: string[];
  releases: string[];
  stack: string[];
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
    'Support teams were overloaded by repetitive tickets, inconsistent triage quality, and delayed response loops between operations, product, and engineering.',
  architectureLayers: [
    {
      name: '1. User Interaction Layer',
      details:
        'End User UI (/ui): ticket submission form. Ops/Admin UI (/ops): ticket history and user search via FastAPI routes.'
    },
    {
      name: '2. API and Intake Layer',
      details:
        'FastAPI Ticket Intake API with POST /tickets (submission), GET /tickets (ops visibility), and CORS for browser clients.'
    },
    {
      name: '3. AI Intelligence Layer',
      details:
        'Intent classifier (stub / ML / LLM-ready) outputs intent and confidence score with no direct action authority.'
    },
    {
      name: '4. Decision and Ops Control Layer',
      details:
        'Rule-based decision engine with confidence thresholds, auto-resolve vs escalate logic, and human-in-the-loop safety.'
    },
    {
      name: '5. Data and Observability Layer',
      details:
        'In-memory ticket store (MVP), metrics and event logging, and decision audit trail exposed via /metrics.'
    },
    {
      name: '6. Deployment Layer',
      details:
        'Dockerized single service (FastAPI + User UI + Ops UI) with one-command startup via docker-compose.'
    }
  ],
  personas: [
    {
      title: 'Support Operations Lead',
      need: 'Needs queue health visibility, SLA prediction, and workforce balancing in real time.'
    },
    {
      title: 'Customer Support Agent',
      need: 'Needs reliable AI-assisted response drafts, policy-safe recommendations, and fast escalations.'
    },
    {
      title: 'Product Manager',
      need: 'Needs defect signals, feature request clustering, and release risk insights from support telemetry.'
    }
  ],
  metrics: [
    'Median first-response time',
    'Escalation rate by ticket type',
    'Auto-resolution precision and recall',
    'SLA breach probability',
    'Incident re-open rate',
    'Customer effort score trend'
  ],
  workflows: [
    'Controlled AI automation with human fallback.',
    'Separation of prediction and decision authority.',
    'Ops-first observability and metrics.',
    'Safe iteration with clear rollback paths.',
    'Deployment-ready via Docker for consistent environments.'
  ],
  incidents: [
    'Defined severity matrix (SEV-1 to SEV-4) with runbooks and communication ladders.',
    'Set 15-minute acknowledgement SLA for critical incidents with owner assignment.',
    'Implemented post-incident review templates with corrective action tracking.'
  ],
  releases: [
    'Canary releases on low-risk queues before broad production rollout.',
    'Release checklist gates: model quality, policy compliance, and rollback readiness.',
    'Biweekly release notes connecting ops outcomes to product decisions.'
  ],
  stack: ['FastAPI', 'Python', 'HTML / JavaScript', 'Docker', 'OpenAI API (optional / pluggable)', 'Metrics & Logging']
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

