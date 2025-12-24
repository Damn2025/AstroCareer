export interface FormData {
    fullName: string;
    mobile: string;
    email: string;
    cityState: string;
    age: string;
    skills: string[];
    otherSkill: string;
    experience: string;
    clientCount: string;
    languages: string[];
    otherLanguage: string;
    proficiency: string;
    modes: string[];
    guruName: string;
    institute: string;
    formalTraining: string;
    dailyHours: string;
    nightAvailability: string;
    workedBefore: string;
    appName: string;
    interview: string;
    additionalInfo: string;
    declaration: boolean;
    // Astrology Assessment Questions
    aboutYourself: string;
    problemIdentification: string;
    
    // File uploads (Base64 encoded)
    profilePic: FileData | null;
    certificate: FileData | null;
    idProof: FileData | null;
    introVideo: FileData | null;
   
}

export interface FileData {
    name: string;
    type: string;
    data: string; // Base64 string
}

export const INITIAL_FORM_DATA: FormData = {
    fullName: '',
    mobile: '',
    email: '',
    cityState: '',
    age: '',
    skills: [],
    otherSkill: '',
    experience: '',
    clientCount: '',
    languages: [],
    otherLanguage: '',
    proficiency: '',
    modes: [],
    guruName: '',
    institute: '',
    formalTraining: '',
    dailyHours: '',
    nightAvailability: '',
    workedBefore: '',
    appName: '',
  
    interview: '',
    additionalInfo: '',
    declaration: false,
    // Astrology Assessment Questions
    aboutYourself: '',
    problemIdentification: '',
    profilePic: null,
    certificate: null,
    idProof: null,
    introVideo: null,
};
