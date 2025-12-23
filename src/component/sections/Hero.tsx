import { Star, ArrowRight } from 'lucide-react';
import StarryBg from '../Background/StarryBg';

const Hero = () => (
    <div className="relative w-full flex flex-col items-center justify-center min-h-screen text-center px-4 py-16 md:py-0">
        <StarryBg />
        <div className="inline-block animate-fade-in-up mb-4 md:mb-6">
            <span className="py-1 px-3 md:px-4 border border-amber-500/30 rounded-full bg-amber-900/10 text-amber-200 text-xs md:text-sm tracking-[0.2em] uppercase backdrop-blur-sm">
                We are hiring
            </span>
        </div>

        <h1 className="z-10 text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-heading font-[cinzel] font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-amber-50 to-purple-200">
           Join Our Family of Trusted  <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-100 to-amber-400"> Astrologers</span>
        </h1>

        <p className="z-10 text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2 md:px-0">
            Join the team building the future of digital astrology. We combine ancient wisdom with cutting-edge AI to help the world navigate their destiny.
        </p>
        <div className="z-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 md:px-0">
            <button
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-amber-200 to-amber-400 text-zinc-900 rounded-full hover:brightness-110 transition-all flex items-center space-x-2 shadow-xl text-sm md:text-base"
            >
                <span>View Benefits</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
                onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 md:px-8 py-3 md:py-4 bg-transparent border border-amber-600/50 text-amber-100 rounded-full font-medium hover:border-amber-400 hover:bg-amber-500/10 transition-all text-sm md:text-base"
            >
                Apply as Astrologer
            </button>
        </div>
    </div>
);

export default Hero;
