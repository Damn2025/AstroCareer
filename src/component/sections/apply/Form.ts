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
    earningsModel: string;
    interview: string;
    additionalInfo: string;
    declaration: boolean;
    // Astrology Assessment Questions
    aboutYourself: string;
    problemIdentification: string;
    kundliIndicators: string;
    generalToActualProblem: string;
    fiveMinuteStructure: string;
    clientUnderstanding: string;
    repeatClientStrategy: string;
    uncertaintyHandling: string;
    planetaryVsPsychological: string;
    liveKundliTest: string;
    successfulConsultation: string;
    additionalThoughts: string;
    // File uploads (Base64 encoded)
    profilePic: FileData | null;
    certificate: FileData | null;
    idProof: FileData | null;
    introVideo: FileData | null;
    samplePrediction: FileData | null;
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
    earningsModel: '',
    interview: '',
    additionalInfo: '',
    declaration: false,
    // Astrology Assessment Questions
    aboutYourself: '',
    problemIdentification: '',
    kundliIndicators: '',
    generalToActualProblem: '',
    fiveMinuteStructure: '',
    clientUnderstanding: '',
    repeatClientStrategy: '',
    uncertaintyHandling: '',
    planetaryVsPsychological: '',
    liveKundliTest: '',
    successfulConsultation: '',
    additionalThoughts: '',
    profilePic: null,
    certificate: null,
    idProof: null,
    introVideo: null,
    samplePrediction: null
};
