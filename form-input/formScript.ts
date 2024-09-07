// validation.ts (for validation logic)
import { PersonalInfo, Education, Skill, WorkExperience } from './interface';

// Utility function to validate email
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Utility function to validate date
function validateDate(date: string): boolean {
  return !isNaN(Date.parse(date));
}

// Validate Personal Info
export function validatePersonalInfo(info: PersonalInfo): string[] {
  const errors: string[] = [];

  if (!info.fullName || info.fullName.trim().length < 3) {
    errors.push('Full Name must be at least 3 characters long.');
  }

  if (!validateEmail(info.email)) {
    errors.push('Invalid email address.');
  }

  if (!info.phone || info.phone.trim().length < 10) {
    errors.push('Phone number must be at least 10 digits long.');
  }

  if (!info.address) {
    errors.push('Address is required.');
  }

  if (!info.profileSummary || info.profileSummary.trim().length < 20) {
    errors.push('Profile Summary must be at least 20 characters long.');
  }

  return errors;
}

// Validate Education
export function validateEducation(education: Education): string[] {
  const errors: string[] = [];

  if (!education.institution || education.institution.trim().length < 3) {
    errors.push('Institution name must be at least 3 characters long.');
  }

  if (!education.degree) {
    errors.push('Degree is required.');
  }

  if (!validateDate(education.startDate) || !validateDate(education.endDate)) {
    errors.push('Invalid date format for education period.');
  }

  return errors;
}

// Validate Skills
export function validateSkills(skills: Skill[]): string[] {
  const errors: string[] = [];

  if (skills.length === 0) {
    errors.push('At least one skill is required.');
  }

  skills.forEach(skill => {
    if (!skill.skillName || skill.skillName.trim().length < 2) {
      errors.push('Each skill must be at least 2 characters long.');
    }
  });

  return errors;
}

// Validate Work Experience
export function validateWorkExperience(workExperiences: WorkExperience[]): string[] {
  const errors: string[] = [];

  workExperiences.forEach(exp => {
    if (!exp.company || exp.company.trim().length < 3) {
      errors.push('Company name must be at least 3 characters long.');
    }

    if (!exp.jobTitle) {
      errors.push('Job Title is required.');
    }

    if (!validateDate(exp.startDate) || !validateDate(exp.endDate)) {
      errors.push('Invalid date format for work experience period.');
    }

    if (!exp.jobDescription || exp.jobDescription.trim().length < 20) {
      errors.push('Job Description must be at least 20 characters long.');
    }
  });

  return errors;
}
