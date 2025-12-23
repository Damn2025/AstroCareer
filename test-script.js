// Test data for verifying the Google Apps Script
const testData = {
  "fullName": "Rajesh Kumar Sharma",
  "mobile": "+91-9876543210",
  "email": "rajesh.sharma@example.com",
  "cityState": "Mumbai, Maharashtra",
  "age": "35",
  "skills": ["Vedic Astrology", "KP Astrology", "Vastu Shastra"],
  "otherSkill": "",
  "experience": "8",
  "clientCount": "1000+",
  "languages": ["Hindi", "English", "Marathi"],
  "otherLanguage": "",
  "proficiency": "Expert",
  "modes": ["Voice Call", "Video Call", "Chat"],
  "guruName": "Pt. Sanjay Rath",
  "institute": "Bhartiya Vidya Bhavan",
  "formalTraining": "Yes",
  "dailyHours": "6",
  "nightAvailability": "Yes",
  "workedBefore": "Yes",
  "appName": "AstroConnect",
  "earningsModel": "Commission + Fixed",
  "interview": "Available anytime",
  "additionalInfo": "Specialized in career and relationship consultations",
  "declaration": true,
  "aboutYourself": "I am a dedicated Vedic astrologer with 8 years of experience helping clients navigate life's challenges through ancient wisdom and modern insights.",
  "problemIdentification": "I use Lagna, Moon sign, and the 6th/8th/12th house connections to identify core issues without asking direct questions.",
  "kundliIndicators": "1. Lagna lord placement, 2. Moon sign and its aspects, 3. Current dasha and its effects",
  "generalToActualProblem": "I start with general well-being analysis and gradually guide them to specific concerns through targeted questions about their life areas.",
  "fiveMinuteStructure": "1. Quick kundli scan (1 min), 2. Identify main concern (1.5 min), 3. Provide immediate remedy (1.5 min), 4. Set expectations (1 min)",
  "clientUnderstanding": "I use active listening, repeat their concerns in my own words, and show how their kundli reflects their experiences.",
  "repeatClientStrategy": "I provide personalized gemstone recommendations, follow-up analysis, and exclusive insights that only I can offer based on their unique chart.",
  "uncertaintyHandling": "I say 'Based on current planetary positions, there are indications of [situation], however, free will can influence outcomes. Let's focus on remedies to improve the situation.'",
  "planetaryVsPsychological": "Planetary issues show consistent patterns across life areas and have specific planetary periods. Psychological issues are more situational and can be addressed through counseling.",
  "liveKundliTest": "I would analyze the 7th house for relationships, 10th for career, and current dasha to identify the most pressing concern without direct questioning.",
  "successfulConsultation": "A successful consultation is when the client leaves feeling heard, understood, empowered with practical solutions, and confident in their path forward.",
  "additionalThoughts": "Astrology is a tool for guidance, not destiny. I believe in empowering clients to make informed decisions."
};

// Function to test the Google Apps Script endpoint
async function testGoogleAppsScript() {
  const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    console.log('Test submission completed');
    console.log('Response:', response);

  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Export for use in browser console or Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testData, testGoogleAppsScript };
}