import profiles from '~/app/data/profile.json';
import educations from '~/app/data/education.json';
import careers from '~/app/data/career.json';
import skills from '~/app/data/skill.json';
import tools from '~/app/data/tool.json';
import languages from '~/app/data/language.json';

export const getProfile = () => {
  return Object.entries(profiles);
}

export const getEducation = () => {
  return Object.entries(educations);
}

export const getCareer = () => {
  return Object.entries(careers);
}

export const getSkill = () => {
  return Object.entries(skills);
}

export const getTool = () => {
  return Object.entries(tools);
}

export const getLanguage = () => {
  return Object.entries(languages);
}
