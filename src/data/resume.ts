export type ResumeMonth = string;

export interface ContactInfo {
  email?: string;
  phone?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  telegram?: string;
  whatsapp?: string;
}

export interface CareerHighlight {
  id: string;
  label: string;
  value: string;
  detail: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  status?: string;
  startDate?: ResumeMonth;
  endDate?: ResumeMonth;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  startDate: ResumeMonth;
  endDate?: ResumeMonth;
  locations?: string[];
  summary: string;
  responsibilities: string[];
  highlights: string[];
  skills: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  summary: string;
  skills: string[];
}

export interface ResumeProject {
  id: string;
  title: string;
  summary: string;
  contributions: string[];
  technologies: string[];
  verifiedResult?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issuedDate?: ResumeMonth;
  credentialUrl?: string;
}

export interface Resume {
  identity: {
    name: string;
    professionalHeadline: string;
    summary: string;
  };
  contact: ContactInfo;
  careerHighlights: CareerHighlight[];
  experience: Experience[];
  education: Education[];
  skillGroups: SkillGroup[];
  selectedProjects: ResumeProject[];
  certifications: Certification[];
}

export const resume: Resume = {
  identity: {
    name: 'Milad Seyfi',
    professionalHeadline: 'Cloud Architect & DevOps Consultant',
    summary:
      'Cloud engineer and DevOps consultant with hands-on experience designing, operating, and modernizing OpenStack, Ceph, and Kubernetes platforms. Work spans multi-datacenter infrastructure, platform automation, observability, service ownership, technical documentation, and mentoring.',
  },
  contact: {
    linkedin: 'https://www.linkedin.com/in/milad-seyfi/',
  },
  careerHighlights: [
    {
      id: 'openstack-scale',
      label: 'OpenStack scale',
      value: '100+',
      detail: 'compute nodes across multi-datacenter infrastructure',
    },
    {
      id: 'ceph-scale',
      label: 'Ceph storage',
      value: '50+ TB',
      detail: 'distributed storage across multiple cluster topologies',
    },
    {
      id: 'delivery-improvement',
      label: 'Deployment turnaround',
      value: '60%+',
      detail: 'improvement from GitOps and CI/CD work',
    },
  ],
  experience: [
    {
      id: 'greenplus-cloud-engineer',
      organization: 'GreenPlus',
      role: 'Cloud Engineer',
      startDate: '2023-09',
      endDate: '2026-10',
      locations: ['Mashhad', 'Tabriz', 'Shiraz', 'Tehran'],
      summary:
        'Worked across the design, operation, and modernization of highly available OpenStack infrastructure spanning more than 100 compute nodes and multiple datacenter locations.',
      responsibilities: [
        'Designed, operated, and modernized OpenStack infrastructure across Nova, Neutron, Cinder, Glance, Octavia, and OVN networking.',
        'Worked with OpenStack-Ansible and Kolla-Ansible, including migration and modernization of legacy cloud environments.',
        'Designed and operated Ceph and RBD storage with three-node, five-node, and six-node architectures, SSD and NVMe pools, Cinder volume types, and storage QoS.',
        'Worked on Kubernetes-as-a-Service architecture using Kubernetes, Cluster API, CAPO, Kamaji, FastAPI orchestration, OpenStack project isolation, Octavia, and cluster lifecycle workflows.',
        'Built infrastructure automation and delivery workflows with Terraform, Ansible, AWX, self-hosted GitLab, GitLab CI, and GitOps practices.',
        'Worked across Ironic, MAAS, Proxmox, GPU passthrough, image building, L2/L3 networking, VLANs, DHCP relay, and DMZ/private network architecture.',
        'Supported infrastructure observability with Prometheus, Grafana, and ELK/EFK, alongside service ownership, runbooks, technical documentation, mentoring, and knowledge transfer.',
      ],
      highlights: [
        'Contributed to OpenStack upgrades across three datacenters and more than three major versions without product downtime.',
        'GitOps and CI/CD improvements reduced deployment turnaround by more than 60%.',
        'Participated in launching a new Tebyan cloud environment.',
      ],
      skills: [
        'OpenStack',
        'Ceph',
        'Kubernetes',
        'CAPI / CAPO',
        'Terraform',
        'Ansible / AWX',
        'Observability',
      ],
    },
  ],
  education: [
    {
      id: 'ferdowsi-msc-software-engineering',
      institution: 'Ferdowsi University of Mashhad',
      degree: 'Master of Science',
      field: 'Software Engineering',
      status: 'Current student',
    },
  ],
  skillGroups: [
    {
      id: 'private-cloud',
      title: 'Private Cloud Architecture',
      summary:
        'Highly available OpenStack design, modernization, migration planning, and service integration.',
      skills: ['OpenStack', 'Nova', 'Neutron', 'Cinder', 'Glance', 'Octavia', 'OVN'],
    },
    {
      id: 'storage',
      title: 'Storage Architecture',
      summary:
        'Ceph and RBD design for failure domains, workload separation, storage tiers, and Cinder integration.',
      skills: ['Ceph', 'RBD', 'Cinder volume types', 'SSD / NVMe pools', 'Storage QoS'],
    },
    {
      id: 'kubernetes',
      title: 'Kubernetes Platforms',
      summary:
        'Cluster lifecycle and internal platform architecture on OpenStack using infrastructure APIs.',
      skills: ['Kubernetes', 'Cluster API', 'CAPO', 'Kamaji', 'Calico', 'K3s'],
    },
    {
      id: 'automation',
      title: 'Automation & Delivery',
      summary:
        'Repeatable provisioning, configuration, and delivery workflows with a source-of-truth mindset.',
      skills: ['Terraform', 'Ansible', 'AWX', 'GitLab CI', 'GitOps', 'FastAPI'],
    },
    {
      id: 'infrastructure',
      title: 'Network & Provisioning',
      summary:
        'Cloud networking, load balancing, project isolation, and bare-metal lifecycle management.',
      skills: ['Ironic', 'MAAS', 'Proxmox', 'L2 / L3', 'VLAN', 'DHCP relay'],
    },
    {
      id: 'operations',
      title: 'Operations & Ownership',
      summary:
        'Operational visibility, runbooks, service ownership, documentation, and knowledge transfer.',
      skills: ['Prometheus', 'Grafana', 'ELK / EFK', 'Runbooks', 'Mentoring'],
    },
  ],
  selectedProjects: [
    {
      id: 'private-cloud-platform',
      title: 'Multi-Datacenter OpenStack Modernization',
      summary:
        'Controlled modernization of highly available OpenStack infrastructure across multiple locations.',
      contributions: [
        'Worked across more than 100 compute nodes and core OpenStack services.',
        'Contributed to upgrades across three datacenters and more than three major versions.',
      ],
      technologies: ['OpenStack', 'OVN', 'OpenStack-Ansible', 'Kolla-Ansible'],
      verifiedResult: 'Completed the covered upgrades without product downtime.',
    },
    {
      id: 'ceph-storage-architecture',
      title: 'Ceph Storage Architecture for OpenStack',
      summary:
        'Distributed Ceph and RBD storage designed around workload separation, storage tiers, and failure domains.',
      contributions: [
        'Worked with more than 50 TB of distributed Ceph storage.',
        'Used three-node, five-node, and six-node architectures according to environment requirements.',
      ],
      technologies: ['Ceph', 'RBD', 'Cinder', 'SSD / NVMe'],
    },
    {
      id: 'kubernetes-platform',
      title: 'Kubernetes-as-a-Service Platform',
      summary:
        'Internal platform architecture connecting portal workflows to OpenStack-backed Kubernetes lifecycle management.',
      contributions: [
        'Connected FastAPI orchestration, OpenStack resource preparation, Cluster API, and CAPO.',
        'Supported configurable cluster creation, scaling, deletion, networking, and load balancing workflows.',
      ],
      technologies: ['Kubernetes', 'CAPI / CAPO', 'FastAPI', 'OpenStack', 'Octavia'],
    },
    {
      id: 'infrastructure-automation',
      title: 'Infrastructure Automation & Operations Platform',
      summary:
        'Repeatable provisioning and operations through infrastructure as code, managed automation, and GitOps workflows.',
      contributions: [
        'Used Terraform, Ansible, AWX on K3s, self-hosted GitLab, and GitLab CI.',
        'Integrated runbooks, backup workflows, documentation, and infrastructure observability.',
      ],
      technologies: ['Terraform', 'Ansible / AWX', 'GitLab CI', 'Prometheus / Grafana'],
      verifiedResult: 'Reduced deployment turnaround by more than 60%.',
    },
  ],
  certifications: [],
};
