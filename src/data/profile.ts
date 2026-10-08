import { resume } from './resume';

export interface LinkItem {
  label: string;
  href: string;
}

export const profile = {
  site: {
    title: `${resume.identity.name} — ${resume.identity.professionalHeadline}`,
    description:
      'Cloud architecture, platform engineering, and DevOps consulting across private cloud, Kubernetes, storage, and infrastructure automation.',
    locale: 'en',
    themeColor: '#07111f',
    socialImage: '/og-image.png',
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Writing', href: '#writing' },
  ] satisfies LinkItem[],
  hero: {
    title: 'Cloud architecture for infrastructure that has to work.',
  },
  about: {
    heading: 'Engineering depth, moving toward architecture.',
    paragraphs: [
      'My work connects infrastructure design to implementation, day-two operations, and the teams responsible for the platform.',
      'I approach reliability, repeatability, operational ownership, and clear technical documentation as architecture concerns—not follow-up tasks.',
    ],
    principles: [
      { value: '01', label: 'Make constraints explicit' },
      { value: '02', label: 'Design for day-two operations' },
      { value: '03', label: 'Automate repeatable work' },
    ],
  },
  experience: {
    heading: 'Infrastructure engineering at production scale.',
    note: 'A concise career view; implementation detail belongs in the selected case studies.',
  },
  expertiseIntro: {
    heading: 'Cloud systems viewed as operating platforms.',
    description:
      'Related technologies are grouped by the architecture and operational problems they solve.',
  },
  workIntro: {
    heading: 'Selected infrastructure work.',
    description:
      'Verified engineering work across private cloud, distributed storage, Kubernetes platforms, and infrastructure automation. Confidential details are omitted.',
  },
  servicesIntro: {
    heading: 'Consulting grounded in operating experience.',
    description:
      'Architecture and implementation support for organizations building or improving private-cloud and platform infrastructure.',
  },
  services: [
    {
      title: 'Cloud Architecture Consulting',
      description:
        'Architecture review, infrastructure design, modernization planning, and technical decision support.',
      deliverables: ['Architecture review', 'Decision record', 'Modernization roadmap'],
    },
    {
      title: 'OpenStack & Private Cloud',
      description:
        'Design, deployment, modernization, and operational architecture for OpenStack infrastructure.',
      deliverables: ['Platform design', 'Migration approach', 'Operations model'],
    },
    {
      title: 'Kubernetes & Platform Engineering',
      description:
        'Kubernetes architecture, Cluster API lifecycle management, and internal platform design.',
      deliverables: ['Platform architecture', 'Lifecycle design', 'API boundaries'],
    },
    {
      title: 'Infrastructure Automation',
      description:
        'Terraform, Ansible, AWX, GitOps, and repeatable infrastructure delivery workflows.',
      deliverables: ['Automation design', 'Workflow baseline', 'Source-of-truth model'],
    },
    {
      title: 'Cloud Storage Architecture',
      description:
        'Ceph architecture, OpenStack storage integration, storage tiers, and operational design.',
      deliverables: ['Storage topology', 'Pool strategy', 'Integration review'],
    },
    {
      title: 'Observability & Reliability',
      description:
        'Monitoring and logging architecture for cloud, network, hardware, and platform operations.',
      deliverables: ['Visibility assessment', 'Signal design', 'Operational runbook'],
    },
  ],
  writingIntro: {
    heading: 'Technical notes, without the noise.',
    description:
      'Working notes on cloud architecture, Kubernetes platforms, automation, and infrastructure operations.',
  },
  contact: {
    heading: 'Bring the platform problem.',
    summary:
      'For private-cloud architecture, Kubernetes platforms, storage, automation, or infrastructure modernization, connect with me on LinkedIn.',
    topics: ['Architecture review', 'Platform modernization', 'Delivery support'],
  },
} as const;
