interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  linkedin: string;
  github: string;
  resume: string;
}

interface WorkExperience {
  title: string;
  company: string;
  dates: string;
  location: string;
  description: string[];
  technologyStack: string[];
}

interface Education {
  degree: string;
  university: string;
  dates: string;
  location: string;
}

export interface PersonalProject {
  name: string;
  description: string;
  technologyStack: string[];
  images: string[];
}

interface Certification {
  name: string;
  dates: string;
  issuer: string;
  description: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education;
  skills: string[];
  personalProjects: PersonalProject[];
  certifications: Certification[];
}
