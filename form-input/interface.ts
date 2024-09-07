export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  profileSummary: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  skillName: string;
}

export interface WorkExperience {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
}
