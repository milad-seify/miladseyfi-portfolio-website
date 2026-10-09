const { resume } = await import(new URL('../src/data/resume.ts', import.meta.url));

const issues = [];
const monthPattern = /^\d{4}-(0[1-9]|1[0-2])$/;
const placeholderPattern = /\b(todo|tbd|placeholder|to be confirmed|pending verification)\b/i;

const requireText = (value, path) => {
  if (typeof value !== 'string' || value.trim().length === 0) {
    issues.push(`${path} must be a non-empty string.`);
  }
};

const requireList = (value, path) => {
  if (!Array.isArray(value) || value.length === 0) {
    issues.push(`${path} must contain at least one item.`);
  }
};

const checkUrl = (value, path) => {
  if (!value) return;
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol)) {
      issues.push(`${path} must use http or https.`);
    }
  } catch {
    issues.push(`${path} is not a valid URL.`);
  }
};

requireText(resume.identity?.name, 'identity.name');
requireText(resume.identity?.professionalHeadline, 'identity.professionalHeadline');
requireText(resume.identity?.summary, 'identity.summary');
requireList(resume.experience, 'experience');
requireList(resume.education, 'education');
requireList(resume.skillGroups, 'skillGroups');
requireList(resume.selectedProjects, 'selectedProjects');

for (const [index, experience] of resume.experience.entries()) {
  const path = `experience[${index}]`;
  requireText(experience.organization, `${path}.organization`);
  requireText(experience.role, `${path}.role`);
  requireText(experience.summary, `${path}.summary`);
  requireList(experience.responsibilities, `${path}.responsibilities`);

  if (!monthPattern.test(experience.startDate)) {
    issues.push(`${path}.startDate must use YYYY-MM.`);
  }
  if (experience.endDate && !monthPattern.test(experience.endDate)) {
    issues.push(`${path}.endDate must use YYYY-MM.`);
  }
  if (
    monthPattern.test(experience.startDate) &&
    experience.endDate &&
    monthPattern.test(experience.endDate) &&
    experience.startDate > experience.endDate
  ) {
    issues.push(`${path} has an end date before its start date.`);
  }
}

for (const [index, education] of resume.education.entries()) {
  requireText(education.institution, `education[${index}].institution`);
  requireText(education.degree, `education[${index}].degree`);
  requireText(education.field, `education[${index}].field`);
}

for (const [index, group] of resume.skillGroups.entries()) {
  requireText(group.title, `skillGroups[${index}].title`);
  requireList(group.skills, `skillGroups[${index}].skills`);
}

for (const [index, project] of resume.selectedProjects.entries()) {
  requireText(project.title, `selectedProjects[${index}].title`);
  requireText(project.summary, `selectedProjects[${index}].summary`);
  requireList(project.contributions, `selectedProjects[${index}].contributions`);
  requireList(project.technologies, `selectedProjects[${index}].technologies`);
}

if (resume.contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resume.contact.email)) {
  issues.push('contact.email is not a valid email address.');
}
checkUrl(resume.contact.website, 'contact.website');
checkUrl(resume.contact.linkedin, 'contact.linkedin');
checkUrl(resume.contact.github, 'contact.github');
checkUrl(resume.contact.telegram, 'contact.telegram');
checkUrl(resume.contact.whatsapp, 'contact.whatsapp');

const inspectPlaceholders = (value, path = 'resume') => {
  if (typeof value === 'string' && placeholderPattern.test(value)) {
    issues.push(`${path} contains a publishable placeholder.`);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => inspectPlaceholders(item, `${path}[${index}]`));
    return;
  }
  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, item]) => inspectPlaceholders(item, `${path}.${key}`));
  }
};

inspectPlaceholders(resume);

if (issues.length > 0) {
  console.error('Resume validation failed:\n');
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exitCode = 1;
} else {
  console.log('Resume validation passed.');
}
