import { useState, useEffect } from 'react';
import {  Quote, Sparkles, Moon, Sun } from 'lucide-react';
import MamtaImg from '../../assets/Mamta.jpeg';
import RitambharaJiImg from '../../assets/RitambharaJi.jpeg';
import SatyanandjiImg from '../../assets/Satyanandji.jpeg';
import ShrivaniImg from '../../assets/Shrivani.jpeg';

// --- Types & Interfaces ---
interface Testimonial {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  quote: string;

}

// --- Mock Data ---
const testimonials: Testimonial[] = [

     {
    id: 1,
    name: "Shrivani", 
    specialty: "Tarot & Numerology",
    experience: "12 Years Exp.",
    image: ShrivaniImg,
    quote: "I love the vibrant community here. It helps me grow my knowledge while serving others. The golden standard of astrology platforms!",
   
  },
 
  {
    id: 2,
    name: "Ritambhara Ji",
    specialty: "Vedic Astrology",
    experience: "8 Years Exp.",
    image: RitambharaJiImg,
    quote: "The energy of this team is golden. I feel supported not just as an employee, but as a practitioner. The amber theme truly reflects the warmth and wisdom we share.",

  },
  {
    id: 3,
    name: "Satyanand Ji",
    specialty: "Nadi Shastra",
    experience: "22 Years Exp.",
    image: SatyanandjiImg,
    quote: "A perfectly organized ecosystem for astrologers. The technology connects us seamlessly with devotees worldwide while maintaining the sanctity of our practice.",

  },
  {
    id: 4,
    name: "Mamta",
    specialty: "Gemology & Vastu" ,
    experience: "15+ Years Exp.",
    image: MamtaImg,
    quote: "Joining this platform was the best decision for my spiritual journey. The respect given to the ancient sciences here is unparalleled, and the clientele is genuinely seeking guidance.",

  },
];

// --- Components ---

const StarryBackground = () => {
  // Generates random stars for the background
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-amber-200 rounded-full opacity-60 animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ data, index }: { data: Testimonial; index: number }) => {
  return (
    <div
      className="group relative p-6 rounded-2xl border border-amber-500/30 bg-neutral-900/50 backdrop-blur-sm transition-all duration-500 hover:border-amber-400 hover:bg-neutral-900/80 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] animate-float"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Golden Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-500 rounded-tl-xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-500 rounded-br-xl" />

      {/* Quote Icon */}
      <div className="absolute -top-4 -right-2 bg-black border border-amber-500/50 p-2 rounded-full text-amber-500 group-hover:rotate-12 transition-transform duration-300">
        <Quote size={20} fill="currentColor" />
      </div>

      <div className="flex items-start gap-4 mb-4">
        {/* Profile Image with Golden Ring */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-amber-300 via-yellow-500 to-amber-700">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover rounded-full border-2 border-black"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-1 border border-amber-500/30">
            <Sparkles size={12} className="text-yellow-400 animate-pulse" />
          </div>
        </div>

        {/* Header Info */}
        <div>
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">
            {data.name}
          </h3>
          <p className="text-xs font-medium text-amber-500/80 uppercase tracking-wider">
            {data.specialty}
          </p>
          <p className="text-xs text-neutral-500 mt-0.5">
            {data.experience}
          </p>
        </div>
      </div>

      {/* Quote Body */}
      <p className="text-neutral-300 text-sm leading-relaxed italic mb-4 border-l-2 border-amber-500/20 pl-3">
        "{data.quote}"
      </p>

      {/* Footer / Rating */}
      <div className="flex justify-between items-center border-t border-amber-500/10 pt-4 mt-auto">
        <div className="flex items-center gap-2 opacity-50">
          <Moon size={12} className="text-amber-700" />
          <div className="h-px w-8 bg-amber-900/50" />
          <Sun size={12} className="text-amber-400" />
        </div>
      </div>
    </div>
  );
};

// --- Main Testimonials Component ---

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 selection:text-amber-200 relative py-24">

      {/* Inject Custom Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-twinkle {
          animation: twinkle 3s infinite ease-in-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
        @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: rotate-slow 20s linear infinite;
        }
      `}</style>

      {/* Background Layer */}
      <StarryBackground />

      {/* Decorative Gradient Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[128px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/20 backdrop-blur-md mb-4">
            <Sparkles size={14} className="text-yellow-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Our Celestial Team
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Voices of the 
            <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-600 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              Divine Wisdom
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
            Hear from the enlightened souls who found their true calling working with us.
            Where ancient tradition meets modern destiny.
          </p>

          {/* Decorative Zodiac Ring (Visual Only) */}
          <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[600px] h-[600px] border border-amber-500/5 rounded-full pointer-events-none animate-spin-slow" />
          <div className="absolute left-1/2 top-32 -translate-x-1/2 w-[500px] h-[500px] border border-dashed border-amber-500/10 rounded-full pointer-events-none animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              data={testimonial}
              index={index}
            />
          ))}
        </div>

      

      </div>
    </div>
  );
};

export default Testimonials;