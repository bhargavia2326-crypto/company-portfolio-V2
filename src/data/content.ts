import { ProjectItem, ServiceItem, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'SOUICE',
  fullName: 'SOUICE Technologies',
  tagline: 'Build smarter. Secure better. Grow further.',
  positioning: 'We build intelligent, secure and scalable technology for real-world problems.',
  subtext: 'We build AI-powered software, secure digital systems and intelligent automation for businesses, organizations and the future of agriculture.',
  contactEmail: 'contact@souice.tech',
  location: 'Global Engineering Headquarters',
  founder: {
    name: 'Bhargavi',
    role: 'Founder & Owner',
    company: 'SOUICE Technologies',
    quote: 'We founded SOUICE to bridge the gap between complex technology and effortless business impact.',
    statement: 'In a world flooded with superficial tech trends, our mission is to build robust, secure, and genuinely intelligent systems that empower organizations to scale with absolute confidence. Every line of code and AI model we deploy is engineered for precision and longevity.',
    bio: 'Bhargavi is the Founder and Owner of SOUICE Technologies, directing the firm’s engineering research, cybersecurity design, and agricultural technology initiatives. With an engineering-first philosophy, Bhargavi champions deterministic computing, zero-trust cloud infrastructure, and practical AI applications that solve tangible enterprise and community bottlenecks.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC95YOdm6PgR7gTKYT5bJsyyw4GVoO7pZzhGF6_JRctJ49MICSUiwum7IwjpcJePojWiKVfuapdjZIdM7GjxPgleDRdmcqGhr7swfwLQqWK3LTuDUboWTgIksICxehnwVCbexhIvUaTlhrBFd6zubzeHTyONy2Bqc5i9U2fR5XhLF4Bt13878vmk8eMLTVHEXTCkglZ1lCucbJsJ-f7Lq9dX2ixaa4x_2q_l1A-8NWbdE-ehlW5gZ4Ztg'
  },
  logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1V90Kk6d0qF3lP0M6XSertnXRbqut19dJIlFvEhLIaO7jr-7c_3oywqJNjIwd5t4L6I0M2GGey7o1MXsDrdfWkyt8mGeXtuM1ITUZeJ2dqsKkyiPS6qAtVXadAAkbv8TCmDmrH2fT8IMRO7yPBlURtcAWwvVE0HTCLhKwp5ArfcdrjYNP37ivByrxb6CWMtAhrzVmBoGf0dLIskdy722OqiAMIVk5gm5byz3WXE-owEazS-qEmfHHU6Kn5z'
};

export const FOUNDER_DATA = COMPANY_INFO.founder;

export const HERO_STATS = [
  { label: 'AI Engine', value: '98.7%', change: '↑ +2.4%', note: 'Autonomous optimization active' },
  { label: 'Security State', value: 'Protected', status: 'verified', note: 'Zero vulnerabilities found' },
  { label: 'Active Automations', value: '24', badge: 'Real-time sync', note: 'Multi-region deployment' },
  { label: 'Data Processed', value: '1.2M+', badge: 'Daily ops', note: 'Encrypted pipelines' }
];

export const CAPABILITY_METRICS = [
  {
    title: 'Predictive AI',
    change: '+14.2%',
    desc: 'Deep learning models forecasting market shifts accurately.',
    icon: 'analytics'
  },
  {
    title: 'Cyber Defense',
    change: '99.99%',
    desc: 'Military-grade encryption and automated threat neutralization.',
    icon: 'shield'
  },
  {
    title: 'Smart Automation',
    change: '10x',
    desc: 'Streamlining enterprise workflows with intelligent agents.',
    icon: 'bolt'
  },
  {
    title: 'Crop Intelligence',
    change: 'AgriTech',
    desc: 'Satellite monitoring and automated irrigation for high yields.',
    icon: 'eco'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'ai-ml',
    number: '01 / AI & MACHINE LEARNING',
    title: 'Next-Gen Intelligence & Neural Systems',
    category: 'ai',
    tag: 'Artificial Intelligence & LLMs',
    description: 'Custom neural models, fine-tuned transformers, and autonomous multi-agent systems tailored to your proprietary data streams with absolute security.',
    iconName: 'smart_toy',
    tags: ['LLMs', 'Neural Nets', 'Agents'],
    metrics: '99.8% model precision'
  },
  {
    id: 'cybersecurity',
    number: '02 / SECURITY',
    title: 'Zero-Trust Cybersecurity Architecture',
    category: 'security',
    tag: 'Enterprise Cybersecurity',
    description: 'Military-grade threat detection, continuous automated compliance auditing, zero-trust cryptographic infrastructure, and real-time defense against state-sponsored vectors.',
    iconName: 'shield_locked',
    tags: ['Zero-Trust', 'AES-256', 'FIDO2'],
    metrics: 'Real-time telemetry & mitigation'
  },
  {
    id: 'software',
    number: '03 / ARCHITECTURE',
    title: 'Scalable Software Platforms',
    category: 'software',
    tag: 'High-Performance Software',
    description: 'Cloud-native distributed systems built for high throughput, sub-millisecond execution, and infinite horizontal scaling with fault tolerance.',
    iconName: 'code',
    tags: ['Microservices', 'Cloud-Native', 'Low-Latency'],
    metrics: '<1ms execution latency'
  },
  {
    id: 'data-analytics',
    number: '04 / ANALYTICS',
    title: 'Data & Analytics Lakes',
    category: 'data',
    tag: 'Real-Time Intelligence',
    description: 'Transform raw enterprise telemetry streams into actionable real-time intelligence lakes with unified governance and interactive visual analytics.',
    iconName: 'analytics',
    tags: ['Big Data', 'ETL Pipelines', 'Power BI'],
    metrics: '1.2M+ daily operations'
  },
  {
    id: 'agritech',
    number: '05 / SPECIALIZED DOMAIN',
    title: 'AgriTech & Smart Farming Solutions',
    category: 'agritech',
    tag: 'Autonomous Agriculture',
    description: 'IoT crop sensor integration, satellite multispectral monitoring, computer vision crop stress detection, and automated irrigation ecosystems for precision agriculture.',
    iconName: 'agriculture',
    tags: ['IoT Telemetry', 'Computer Vision', 'NDVI Scans'],
    metrics: '1.2M+ acres monitored'
  },
  {
    id: 'automation',
    number: '06 / WORKFLOW ENGINE',
    title: 'Autonomous Process Automation',
    category: 'software',
    tag: 'Workflow Automation',
    description: 'End-to-end robotic process automation combined with cognitive decision loops to eliminate manual operational friction across enterprise departments.',
    iconName: 'hub',
    tags: ['Workflow Engine', 'RPA', 'Cognitive Loops'],
    metrics: '99.8% workflow accuracy rating'
  }
];

export const PHILOSOPHY_STEPS = [
  {
    number: '01 / PROBLEM',
    title: 'Fragmented Systems',
    desc: 'Legacy software creates data silos that slow down enterprise growth and increase operational security risks.'
  },
  {
    number: '02 / INSIGHT',
    title: 'Unified Architecture',
    desc: 'Centralized intelligence combined with autonomous automation creates seamless operational velocity.'
  },
  {
    number: '03 / TECHNOLOGY',
    title: 'AI Core & Cloud',
    desc: 'Leveraging cutting-edge cloud infrastructure and proprietary AI models for high-performance execution.'
  },
  {
    number: '04 / IMPACT',
    title: 'Exponential Scale',
    desc: 'Organizations achieve 3x operational efficiency and complete resilience against cyber threats.'
  }
];

export const PRODUCT_STUDIO_STEPS = [
  {
    step: 'STEP 01',
    title: 'Problem',
    desc: 'Deep discovery, user interviews, and market analysis.',
    duration: '2 Wks'
  },
  {
    step: 'STEP 02',
    title: 'Research',
    desc: 'Technical feasibility stress-tests and architecture.',
    duration: '3 Wks'
  },
  {
    step: 'STEP 03',
    title: 'MVP',
    desc: 'Rapid prototyping and core engine development.',
    duration: '8 Wks'
  },
  {
    step: 'STEP 04',
    title: 'Product',
    desc: 'Polished interaction design and rigorous automated QA.',
    duration: '2 Wks'
  },
  {
    step: 'STEP 05',
    title: 'SaaS',
    desc: 'Secure cloud deployment, SOC2 compliance, and monitoring.',
    duration: 'Continuous'
  },
  {
    step: 'STEP 06',
    title: 'Scale',
    desc: 'Multi-region deployment and global market expansion.',
    duration: 'Continuous'
  }
];

export const FEATURED_VENTURES = [
  {
    title: 'Aether Ledger: Decentralized Enterprise Treasury',
    tag: 'Fintech OS',
    status: 'Series B Incubated',
    desc: 'An enterprise-grade multi-currency liquidity engine capable of real-time cross-border settlement with zero-knowledge proof verification.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgTTnWGwS1wfMdpGf37vI3-S3NyLHVBLpb2LfYpMunp-hFJQlGWaA81WIjQNnDx8TYaqMH3t9EJE9TRyd1IFfLyxKnisJ4d9TpAeeMycp1jdkLc9gnj92aYnP4TAapKOtEQkp7Vpc93Hv4jgwbBclsRctuzaQ-oNxaxiT8q5ELIKqhHmCxOoQ-xXfpGV0WnHuping3fLPB7sh6NIvOYITs8_BBlI30dRsvogyyhBSaaiDA9NRTp9UsqQ'
  },
  {
    title: 'HelixMind',
    tag: 'BioAI',
    status: 'Internal Product',
    desc: 'Genomic sequence analysis platform utilizing proprietary transformer models to accelerate drug discovery pathways.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClQtKyIEkmAxrA779G0qYSRWuLJbulGSFHrx5Ag31EgpQjWujvG8g7YnT7upevxAK42jFKH-13ILUVRBUxtB-lXixJCxlc5hxeix2d_BptbJnpekJjmDxaNMcYNaeypwWi4OUqr3NgFD4rz5TfSUQ0JknzUkK3J39GFtoj84B8sgL0Hz5zCJvCLejcV7AuRXoCegOccfmgQ7kr-0cc_N2jWCkFL3grTRlDKBk-Amo78TBdmonJNCSKdA'
  },
  {
    title: 'Stratum Mesh',
    tag: 'Autonomous Infra',
    status: 'Prototype',
    desc: 'Edge-computing orchestrator providing ultra-low latency routing for connected autonomous drone swarms.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ18xSthqnqvuYYRwLDSZb-oyGmakcB_4wQdRv0ya9SnEFjK0PfuC1gqqxerhhCqiBCCkuwhcFklAZPZWBToBj1WkpdKhLVBNHM8o0FppGF6KA0OLk9GCzdiNt32bwWyuLdpC0RuG3ZdsA9wWsFhbNOWQ3y8niZxBdQVPiwkvCPnwJvzxie-E81OPrRoXH-1QNWTF9NNiE6bLGfIPqQGgjPRGLaiFBbZZcLZjxxhFGy5kSIOcmjjOyiw'
  },
  {
    title: 'Verdant Carbon Grid',
    tag: 'Climate Tech',
    status: 'Global Impact',
    desc: 'Satellite-verified carbon credit exchange leveraging computer vision to audit reforestation and regenerative agriculture metrics in real time.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3_Od3U9Fxi59K2vjEC-qeUoU2n1-8QZv01tg5FWLppzywLKpeSe1rDnaz6DWzan5WDEwf6rhwg-RNBFlWLwTyba6Jv4EF-NAoUpA4j7K_r__K-gc0tYM3_h0FFnfhL1Z9fECZL8Ca5aWfpqFDl93GzJhgE2d7oyZWj2lEoK0W_MW4AorgWg-qohQbgYdbk5a8J59qcRSOwKQaIMbmXIaiD39D2LM9ym8ZSgRh5fXrMqSLixV1VbhenA'
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'proj-erp',
    title: 'Autonomous Enterprise ERP',
    category: 'AI',
    status: 'Internal Product',
    year: '2025',
    description: 'Next-gen enterprise resource planning powered by autonomous AI agents, dynamic resource allocation, and real-time operational analytics.',
    metrics: '3.4x faster invoice processing',
    fullDetails: {
      challenge: 'Enterprise workflows suffered from fragmented departmental data silos and high manual latency in cross-system approvals.',
      architecture: 'Distributed microservices architecture integrated with autonomous LLM reasoning agents and real-time event streaming.',
      outcome: 'Streamlined approval chains down from 48 hours to under 4 minutes with 99.8% precision.',
      techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'Kubernetes']
    }
  },
  {
    id: 'proj-fincloud',
    title: 'Zero-Trust Financial Cloud',
    category: 'Cybersecurity',
    status: 'Client Project',
    year: '2025',
    description: 'Securing multi-billion dollar transactions with AI-driven threat neutralization, hardware token verification, and post-quantum encrypted nodes.',
    metrics: '0 unmitigated breach record',
    fullDetails: {
      challenge: 'High-frequency transaction hubs required instantaneous verification with zero tolerance for man-in-the-middle exploits or state-sponsored interception.',
      architecture: 'Lattice-based post-quantum cryptographic primitives, FIDO2 hardware token attestation, and dynamic micro-perimeter isolation.',
      outcome: 'Continuous 99.999% availability across 42 global regions with automated anomaly containment in <4ms.',
      techStack: ['Rust', 'gRPC', 'AES-256-GCM', 'TLS 1.3', 'AWS KMS']
    }
  },
  {
    id: 'proj-crop-intel',
    title: 'Global Crop Intelligence',
    category: 'AgriTech',
    status: 'Prototype',
    year: '2025',
    description: 'Satellite monitoring and IoT irrigation automation deployed across 500,000 acres of farmland with real-time NDVI spectral indices.',
    metrics: '428M L water conserved',
    fullDetails: {
      challenge: 'Commercial farmland faced extreme climate volatility, unpredictable rainfall, and nutrient depletion resulting in yield volatility.',
      architecture: 'Orbital multispectral satellite telemetry paired with ground-level capacitive soil probes and automated valve actuation.',
      outcome: 'Projected yield increase of +18.5% and a 24% reduction in seasonal water consumption.',
      techStack: ['Python', 'OpenCV', 'NDVI Analytics', 'IoT MQTT', 'React']
    }
  },
  {
    id: 'proj-stratum',
    title: 'Stratum Distributed Mesh',
    category: 'Software',
    status: 'Internal Product',
    year: '2025',
    description: 'Ultra-low latency runtime engine handling over 1.2M requests per second with deterministic sub-millisecond p99 execution.',
    metrics: '0.42ms p99 latency',
    fullDetails: {
      challenge: 'Financial and telemetry ingestion pipelines were bottlenecked by traditional garbage collection pauses and network serialization overhead.',
      architecture: 'Rust-compiled lock-free execution engines with protocol buffers over multiplexed gRPC connections.',
      outcome: 'Eliminated garbage collection freezes and scaled safely across multi-region Kubernetes clusters.',
      techStack: ['Rust', 'Tokio', 'Protobuf', 'Kubernetes', 'Prometheus']
    }
  },
  {
    id: 'proj-docu-mind',
    title: 'Cognitive Document Intelligence',
    category: 'AI',
    status: 'Concept',
    year: '2025',
    description: 'Zero-shot OCR, semantic synthesis, and automated regulatory compliance parsing across millions of unstructured corporate archives.',
    metrics: '99.4% extraction accuracy',
    fullDetails: {
      challenge: 'Unstructured legal and financial documentation took hundreds of compliance hours to parse and cross-check for regulatory standards.',
      architecture: 'Vision-language transformers coupled with vector embeddings and deterministic compliance rule evaluators.',
      outcome: 'Reduced manual audit workloads by 82% while maintaining complete auditable chain of custody.',
      techStack: ['PyTorch', 'Transformers', 'Vector Search', 'Python']
    }
  },
  {
    id: 'proj-soil-sync',
    title: 'Deep Soil Moisture Forecaster',
    category: 'AgriTech',
    status: 'Concept',
    year: '2025',
    description: 'Machine learning models forecasting moisture depletion down to 100cm depth across varied soil strata, eliminating drought risk.',
    metrics: 'Predictive accuracy 96.2%',
    fullDetails: {
      challenge: 'Traditional irrigation relies on surface-level guesswork, leading to both under-watering deep taproots and over-watering topsoil.',
      architecture: 'Stratified time-series neural networks combining evapotranspiration models with multi-depth telemetry.',
      outcome: 'Precision valve actuation preventing crop stress weeks ahead of visible heat wilt.',
      techStack: ['TensorFlow', 'IoT Telemetry', 'Cloud Run', 'React']
    }
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Deep analysis of operational bottlenecks, technical limitations, and strategic growth goals.'
  },
  {
    number: '02',
    title: 'Architect',
    desc: 'Designing bespoke AI models, zero-trust security postures, and resilient cloud infrastructure.'
  },
  {
    number: '03',
    title: 'Deploy',
    desc: 'Rigorous automated testing, security stress-profiling, and seamless enterprise rollout.'
  },
  {
    number: '04',
    title: 'Evolve',
    desc: 'Continuous autonomous monitoring, model fine-tuning, and algorithmic optimization.'
  }
];

export const TECH_STACK_ITEMS = [
  { name: 'Python', category: 'AI & Data Engine', highlight: 'Machine learning & neural pipelines' },
  { name: 'React / Next.js', category: 'Frontend', highlight: 'Responsive & fluid interfaces' },
  { name: 'Node.js', category: 'Backend Services', highlight: 'Asynchronous event orchestrators' },
  { name: 'PostgreSQL', category: 'Database', highlight: 'ACID compliant structured storage' },
  { name: 'Power BI', category: 'Analytics', highlight: 'Enterprise business intelligence' },
  { name: 'AWS Cloud', category: 'Infrastructure', highlight: 'Resilient multi-region compute' },
  { name: 'Vercel', category: 'Edge Network', highlight: 'Global low-latency deployment' }
];

export const FAQ_LIST: FAQItem[] = [
  {
    category: 'Company',
    question: 'Who leads and owns SOUICE Technologies?',
    answer: 'SOUICE Technologies is founded and owned by Bhargavi. Bhargavi directs company strategy, technological architecture, and product engineering, ensuring every deployed solution meets the highest standards of reliability, performance, and security.'
  },
  {
    category: 'Services',
    question: 'What are SOUICE’s core technological capabilities?',
    answer: 'We specialize in Artificial Intelligence (custom neural models, LLM pipelines, autonomous agents), Enterprise Software Engineering (cloud-native platforms, ultra-low latency runtimes), Zero-Trust Cybersecurity (threat mitigation, quantum-resistant encryption), Workflow Automation, Data & Analytics, and AgriTech (satellite monitoring, smart irrigation).'
  },
  {
    category: 'AgriTech',
    question: 'How do SOUICE AgriTech solutions work in practice?',
    answer: 'Our AgriTech platform merges orbital multispectral satellite imagery with real-time ground IoT sensors. We provide continuous NDVI crop vigor scans, deep soil moisture forecasting down to 100cm, and automated valve regulation to optimize yield while conserving precious water resources.'
  },
  {
    category: 'Security',
    question: 'What makes SOUICE’s cybersecurity architecture zero-trust?',
    answer: 'Our architecture enforces continuous identity attestation (FIDO2 hardware tokens), MDM device posture compliance checks, dynamic network anomaly scoring, and micro-perimeter isolation. No internal request is trusted by default; all communication is cryptographically verified.'
  },
  {
    category: 'Engagement',
    question: 'How does SOUICE collaborate with new clients?',
    answer: 'We operate through a 4-stage process: Discover, Architect, Deploy, and Evolve. We begin with a technical scoping consultation to dissect your core challenges, formulate custom architectural blueprints, build functional prototypes, and deploy resilient systems at scale.'
  }
];
