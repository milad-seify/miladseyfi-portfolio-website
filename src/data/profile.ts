export interface LinkItem {
  label: string;
  href: string;
}

export const profile = {
  identity: {
    name: 'Milad Seyfi',
    role: 'Cloud Architect & DevOps Consultant',
    initials: 'MS',
    location: 'Location available on request',
    availability: 'Availability to be confirmed',
  },
  site: {
    title: 'Milad Seyfi — Cloud Architect & DevOps Consultant',
    description:
      'Cloud architecture, platform engineering, and DevOps consulting across OpenStack, Ceph, Kubernetes, and infrastructure automation.',
    locale: 'en',
    themeColor: '#07111f',
    socialImage: '/og-image.svg',
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Writing', href: '#writing' },
  ] satisfies LinkItem[],
  hero: {
    eyebrow: 'Cloud systems · Platforms · Delivery',
    title: 'Infrastructure that is clear, resilient, and ready to evolve.',
    summary:
      'I connect cloud architecture with hands-on platform engineering—helping teams turn complex infrastructure into dependable systems and sound technical decisions.',
  },
  about: {
    heading: 'Engineering depth, architecture perspective.',
    paragraphs: [
      'My work sits where infrastructure engineering, platform operations, and technical strategy meet. I focus on systems that teams can understand, operate, and improve over time.',
      'The practice spans private cloud, distributed storage, container platforms, delivery automation, and the business constraints that shape architecture. Specific experience history and credentials will be added after verification.',
    ],
    principles: [
      { value: '01', label: 'Design for operability' },
      { value: '02', label: 'Automate the repeatable' },
      { value: '03', label: 'Make trade-offs explicit' },
    ],
  },
  experience: {
    heading: 'Selected experience',
    note: 'Verified roles, organizations, and dates will be published here.',
    items: [
      {
        period: 'Details pending',
        role: 'Cloud architecture & platform engineering',
        organization: 'Organization to be confirmed',
        description:
          'Scope placeholder covering architecture, delivery, reliability, and technical leadership. Replace with verified employment details before launch.',
        tags: ['Architecture', 'Platforms', 'Operations'],
      },
    ],
  },
  expertise: [
    {
      index: '01',
      title: 'Cloud Architecture',
      description:
        'Architecture shaped around constraints, failure modes, operations, and sustainable ownership.',
      tags: ['Private cloud', 'Hybrid patterns', 'Architecture reviews'],
    },
    {
      index: '02',
      title: 'OpenStack & Ceph',
      description:
        'Compute, networking, and distributed storage considered as one operational system.',
      tags: ['OpenStack', 'Ceph', 'Capacity & resilience'],
    },
    {
      index: '03',
      title: 'Kubernetes & Platforms',
      description:
        'Platform foundations that give product teams a coherent path from source to production.',
      tags: ['Kubernetes', 'Platform engineering', 'Developer experience'],
    },
    {
      index: '04',
      title: 'DevOps & Automation',
      description:
        'Delivery systems and infrastructure automation that reduce drift and shorten feedback loops.',
      tags: ['CI/CD', 'IaC', 'Observability'],
    },
  ],
  services: [
    {
      title: 'Architecture advisory',
      description:
        'Independent reviews, target architecture, trade-off analysis, and pragmatic roadmaps.',
      deliverables: ['Discovery workshop', 'Decision record', 'Prioritized roadmap'],
    },
    {
      title: 'Platform assessment',
      description:
        'A focused examination of reliability, operability, delivery flow, and technical risk.',
      deliverables: ['Current-state map', 'Risk register', 'Improvement plan'],
    },
    {
      title: 'Delivery enablement',
      description:
        'Hands-on help turning an agreed platform direction into repeatable infrastructure and workflows.',
      deliverables: ['Reference patterns', 'Automation baseline', 'Team handover'],
    },
  ],
  stack: [
    { group: 'Cloud & compute', items: ['OpenStack', 'KVM', 'Linux', 'Networking'] },
    {
      group: 'Storage & data',
      items: ['Ceph', 'Object storage', 'Block storage', 'Backup design'],
    },
    { group: 'Containers', items: ['Kubernetes', 'Helm', 'Container runtimes', 'GitOps patterns'] },
    { group: 'Automation', items: ['Ansible', 'Terraform', 'CI/CD', 'Infrastructure as Code'] },
    {
      group: 'Operations',
      items: ['Observability', 'SRE practices', 'Capacity planning', 'Incident learning'],
    },
  ],
  contact: {
    heading: 'Let’s make the complex legible.',
    summary:
      'For cloud architecture, platform engineering, or infrastructure delivery conversations, use the verified contact channel once published.',
    email: undefined as string | undefined,
    socials: [] as LinkItem[],
    resumeUrl: undefined as string | undefined,
  },
} as const;
