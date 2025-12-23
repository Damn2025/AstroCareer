import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { 
  Star, 
  Clock, 
  Users, 
  ShieldAlert, 
  Brain, 
  Zap, 
  Scale, 
  CheckCircle, 
  Save,

  ChevronRight,
  ChevronLeft,
  Sparkles,
  Play
} from 'lucide-react';

// --- Type Definitions ---

interface Question {
  id: number;
  text: string;
  subtext?: string;
  list?: string[];
}

interface Section {
  title: string;
  icon: ReactNode;
  questions: Question[];
  isPractical?: boolean;
}

type Answers = Record<number, string>;

// --- Component ---

const AstrologyAssessment: React.FC = () => {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});

  const handleInputChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (activeSection < sections.length - 1) {
      setActiveSection(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (activeSection > 0) {
      setActiveSection(prev => prev - 1);
    } else {
      setHasStarted(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections: Section[] = [
    {
      title: "SECTION 1: Problem Identification",
      icon: <Star className="w-6 h-6" />,
      questions: [
        {
          id: 1,
          text: "Kya aap bina client bataye unki main samasya identify kar sakte hain? Agar haan, to kaun se tools / rules use karte hain?",
         
        },
        {
          id: 2,
          text: "Aap kundli dekhte hi sabse pehle kaun se 3 indicators check karte hain aur kyun?"
        },
        {
          id: 3,
          text: "Agar client “sirf general reading” bole, to aap kaise unki actual problem tak pahunchte hain?"
        },
        {
          id: 4,
          text: "Aap kaise judge karte hain ki client job, relationship ya health stress mein hai—bina pooche?"
        }
      ]
    },
    {
      title: "SECTION 2: Satisfaction Framework",
      icon: <Clock className="w-6 h-6" />,
      questions: [
        {
          id: 5,
          text: "Agar aapko sirf 5 minutes mile ho, to aap consultation ka structure kya rakhenge jisse client satisfied ho jaaye?",
          subtext: "Expected: 1st min: Correct problem ID | 2-3 min: Reason | 4th min: Direction | 5th min: Remedy"
        },
        {
          id: 6,
          text: "Client ko lagna chahiye ki “yeh astrologer sach mein mujhe samajh raha hai”—yeh feeling aap kaise create karte hain?"
        },
        {
          id: 7,
          text: "Agar first 2 minutes mein client ka trust na bane, to aap kya change karte hain apni approach mein?"
        }
      ]
    },
    {
      title: "SECTION 3: Repeat Client Creation ",
      icon: <Users className="w-6 h-6" />,
      questions: [
        {
          id: 8,
          text: "Aap client ko aisa kya dete hain ki woh dubara aapke paas hi aaye, kisi aur astrologer ke paas nahi?"
        },
        {
          id: 9,
          text: "Repeat client ke liye aap kaise follow-up structure banate hain?"
        },
        {
          id: 10,
          text: "Agar client 1 mahine baad aaye aur bole “last time aapne jo bola tha woh hua”, to aap agla step kaise plan karte hain?"
        }
      ]
    },
    {
      title: "SECTION 4: Accuracy, Honesty & Boundaries",
      icon: <ShieldAlert className="w-6 h-6" />,
      questions: [
        {
          id: 11,
          text: "Agar aap prediction mein sure nahi hain, to aap client ko kaise batate hain bina confidence lose kiye?"
        },
        {
          id: 12,
          text: "Aap kis stage par clearly bol dete hain ki “is question ka exact answer astrology mein possible nahi hai”?"
        },
        {
          id: 13,
          text: "Agar kundli average ho aur koi strong yog na ho, to client ko kaise handle karte hain?"
        }
      ]
    },
    {
      title: "SECTION 5: Psychology + Astrology Blend",
      icon: <Brain className="w-6 h-6" />,
      questions: [
        {
          id: 14,
          text: "Aap kaise differentiate karte hain ki problem planetary hai ya psychological?"
        },
        {
          id: 15,
          text: "Agar client sirf reassurance ke liye repeat aa raha ho, to aap kya karte hain?"
        },
        {
          id: 16,
          text: "Aap apni language kaise adjust karte hain—educated, rural, emotional, aggressive clients ke liye?"
        }
      ]
    },
    {
      title: "SECTION 6: Live Practical Challenge ",
      icon: <Zap className="w-6 h-6" />,
      isPractical: true,
      questions: [
        {
          id: 17,
          text: "Live kundli test:",
          list: [
            "Candidate ko birth details di jaayengi",
            "Task: Client ki main problem bina pooche batao",
            "Ek past event verify karo",
            "Ek near-future indication do"
          ]
        },
        {
          id: 18,
          text: "5-Minute Mock Call:",
          list: [
            "Interviewer client banega",
            "Goal: Client bole “Haan, aap bilkul sahi pakad rahe ho”"
          ]
        }
      ]
    },
    {
      title: "SECTION 7: Ethics & Brand Alignment",
      icon: <Scale className="w-6 h-6" />,
      questions: [
        {
          id: 19,
          text: "Aap kaise ensure karte hain ki client dependent na ban jaaye aap par?"
        },
        {
          id: 20,
          text: "Agar client aapse roz baat karna chahe, to aap boundaries kaise set karte hain?"
        }
      ]
    },
    {
      title: "SECTION 8: Killer Closing Questions",
      icon: <CheckCircle className="w-6 h-6" />,
      questions: [
        {
          id: 21,
          text: "Aapke hisaab se ek “successful consultation” ki definition kya hai?"
        },
        {
          id: 22,
          text: "Agar client aapki baat se disagree kare, to kaise prove karte hain—argument se ya accuracy se?"
        },
        {
          id: 23,
          text: "Aap apni sabse strong prediction ka ek real example share kariye jo bina hints ke accurate nikli ho."
        }
      ]
    }
  ];

  const currentSectionData = sections[activeSection];

  // Landing Page View
  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-900 via-yellow-700 to-amber-900"></div>
        </div>

        <div className="relative z-10 max-w-2xl w-full text-center space-y-12 animate-fadeIn">
          <div className="space-y-6">
            <div className="inline-flex p-4 rounded-full bg-neutral-900/50 border border-neutral-800 shadow-2xl mb-4">
              <Sparkles className="w-12 h-12 text-yellow-500" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 tracking-tight">
              Cosmic Quiz
            </h1>
            <p className="text-xl text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Unlock the depths of your astrological intuition. Test your skills in problem identification, psychology, and predictive accuracy.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setHasStarted(true)}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-transparent font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-2xl bg-gradient-to-br from-amber-600 to-yellow-600 group-hover:scale-105 group-hover:from-amber-500 group-hover:to-yellow-500"></div>
              <span className="relative flex items-center gap-3">
                Start Cosmic Quiz <Play size={20} className="fill-current" />
              </span>
            </button>
          </div>
          
          <div className="pt-12 text-sm text-neutral-600 font-medium tracking-widest uppercase">
            Professional Astrologer Evaluation Framework
          </div>
        </div>
      </div>
    );
  }

  // Assessment Wizard View
  return (
    <div className="min-h-screen bg-black py-4 md:py-8 px-3 md:px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 lg:space-y-8 animate-fadeIn">
        
        {/* Assessment Wizard View Heading */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 tracking-tight">
            Assessment View
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-neutral-400 mt-2">
            Professional Astrologer Evaluation Framework
          </p>
        </div>
        
        {/* Golden Separator Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-4 md:mb-6"></div>
        
        {/* Progress Bar */}
        <div className="w-full bg-neutral-900 rounded-full h-2.5 mb-2 border border-neutral-800">
           <div 
             className="bg-amber-500 h-2.5 rounded-full transition-all duration-300 ease-in-out box-border shadow-[0_0_15px_rgba(245,158,11,0.5)]" 
             style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
           ></div>
        </div>
        <div className="flex justify-between text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3 md:mb-4 lg:mb-6">
            <span>Start</span>
            <span>Section {activeSection + 1} of {sections.length}</span>
            <span>Finish</span>
        </div>

        {/* Golden Separator Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-6 md:mb-8"></div>
        
        {/* Current Section Window */}
        <div className="bg-neutral-900 rounded-xl shadow-2xl border border-neutral-800 overflow-hidden relative min-h-[250px] md:min-h-[300px] lg:min-h-[400px]">
            {/* Section Header */}
            <div className="bg-black/40 p-4 md:p-6 border-b border-neutral-800 flex items-center gap-3 md:gap-4">
                <div>
                    <h2 className="text-lg md:text-xl font-bold text-neutral-100">{currentSectionData.title}</h2>
                    <p className="text-xs md:text-sm text-neutral-400 mt-1">Please answer all questions below</p>
                </div>
            </div>

            {/* Questions Content */}
            <div className="p-2 md:p-4 lg:p-8 animate-fadeIn">
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                {currentSectionData.questions.map((q) => (
                    <div key={q.id} className="space-y-1 md:space-y-2">
                    <div className="flex gap-2 md:gap-3 lg:gap-4">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-neutral-800 border border-neutral-700 text-yellow-500 font-bold text-xs shadow-sm">
                            {q.id}
                        </span>
                        <div className="flex-1">
                        <p className="text-neutral-200 font-medium text-sm md:text-base lg:text-lg leading-tight md:leading-relaxed">{q.text}</p>
                        {q.subtext && (
                            <p className="text-xs text-yellow-200 mt-1 md:mt-2 bg-yellow-900/20 border border-yellow-500/20 inline-block px-2 py-1 rounded-md">
                            💡 {q.subtext}
                            </p>
                        )}
                        
                        {/* Practical Challenge Layout */}
                        {currentSectionData.isPractical && q.list && (
                            <div className="mt-2 md:mt-3 bg-black/40 rounded-lg p-2 md:p-3 lg:p-5 border border-neutral-800">
                            <ul className="space-y-1 md:space-y-2 mb-2 md:mb-3">
                                {q.list.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                                    <span className="mt-0.5 w-1 h-1 bg-amber-500 rounded-full flex-shrink-0 shadow-[0_0_5px_rgba(245,158,11,0.5)]"></span>
                                    {item}
                                </li>
                                ))}
                            </ul>
                            <div className="pt-2 md:pt-3 border-t border-neutral-800">
                                <label className="text-xs font-bold text-amber-500 uppercase tracking-wide">Interviewer Notes</label>
                                <textarea
                                className="w-full mt-1 md:mt-2 p-2 bg-neutral-900 border border-neutral-700 rounded focus:ring-1 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-xs text-neutral-200 placeholder-neutral-600"
                                rows={1}
                                placeholder="Enter observations..."
                                value={answers[q.id] || ''}
                                onChange={(e) => handleInputChange(q.id, e.target.value)}
                                />
                            </div>
                            </div>
                        )}

                        {/* Standard Question Input */}
                        {!currentSectionData.isPractical && (
                            <div className="mt-2 md:mt-3">
                            <textarea
                                className="w-full p-2 md:p-3 bg-black border border-neutral-800 rounded focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all shadow-inner text-neutral-200 placeholder-neutral-600 text-xs md:text-sm"
                                rows={1}
                                placeholder="Candidate's answer..."
                                value={answers[q.id] || ''}
                                onChange={(e) => handleInputChange(q.id, e.target.value)}
                            />
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

        {/* Golden Separator Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent my-6 md:my-8"></div>
        
        {/* Navigation Footer */}
        <div className="flex flex-row justify-between items-center gap-2 pt-3 pb-6 md:pb-8">
            <button 
                onClick={handlePrev}
                className="flex items-center justify-center gap-1 px-3 md:px-4 py-2 rounded-lg font-medium transition-all text-neutral-400 hover:bg-neutral-800 hover:text-amber-400 border border-transparent hover:border-neutral-700 text-xs md:text-sm"
            >
                <ChevronLeft size={16} className="md:w-4 md:h-4" />
                <span className="hidden sm:inline">{activeSection === 0 ? "Back to Start" : "Previous"}</span>
                <span className="sm:hidden">{activeSection === 0 ? "Back" : "Prev"}</span>
            </button>

            {activeSection === sections.length - 1 ? (
                <button 
                    className="flex items-center justify-center gap-1 bg-amber-600 hover:bg-amber-500 text-white px-4 md:px-6 py-2 rounded-lg shadow-md shadow-amber-900/40 transition-all transform hover:-translate-y-0.5 font-bold text-xs md:text-sm"
                >
                    <Save size={16} className="md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Complete</span>
                    <span className="sm:hidden">Done</span>
                </button>
            ) : (
                <button 
                    onClick={handleNext}
                    className="flex items-center justify-center gap-1 bg-amber-600 hover:bg-amber-500 text-white px-4 md:px-6 py-2 rounded-lg shadow-md shadow-amber-900/40 transition-all transform hover:-translate-y-0.5 font-bold text-xs md:text-sm"
                >
                    <span className="hidden sm:inline">Next</span>
                    <span className="sm:hidden">Next</span>
                    <ChevronRight size={16} className="md:w-4 md:h-4" />
                </button>
            )}
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @media print {
          button { display: none; }
          body { -webkit-print-color-adjust: exact; background: white !important; }
          .min-h-screen { background: white !important; padding: 0 !important; }
          /* Reset colors for print legibility */
          h1, h2, p, span, li { color: black !important; }
          textarea { border: 1px solid #ccc !important; color: black !important; background: white !important; }
          div { background: white !important; border-color: #ddd !important; box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
};

export default AstrologyAssessment;