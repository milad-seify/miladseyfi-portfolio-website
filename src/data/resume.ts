import resumeData from '../content-data/resume.json' with { type: 'json' };

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
  identity: { name: string; professionalHeadline: string; summary: string };
  contact: ContactInfo;
  careerHighlights: CareerHighlight[];
  experience: Experience[];
  education: Education[];
  skillGroups: SkillGroup[];
  selectedProjects: ResumeProject[];
  certifications: Certification[];
}

export const resume: Resume = resumeData;
