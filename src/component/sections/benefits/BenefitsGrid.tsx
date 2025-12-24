import { BENEFITS } from './benefits.data';
import { Sparkles, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';


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


const BenefitsGrid = () => (
    <section id="benefits" className="relative z-10 py-20 md:py-28 px-4 md:px-6 overflow-hidden">
          <StarryBackground />
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse animation-delay-300" />
            <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse animation-delay-600" />
            <div className="absolute bottom-40 right-10 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse animation-delay-900" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-16 md:mb-20">
                <div className="inline-flex items-center gap-3 mb-6">
                    <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[white]">
                        Celestial  Perks & <span className=' bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent'> Benefits </span>
                    </h2>
                    <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                </div>
                <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg px-4 md:px-0 leading-relaxed font-light">
                    We believe in nurturing the whole being. Our benefit-packages are designed to support your physical, mental, and spiritual trajectory through the cosmos.
                </p>
                <div className="mt-8 flex justify-center">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                </div>
            </div>

            {/* Enhanced Grid Layout */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
                {/* First row: Items 1, 2, 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {BENEFITS.slice(0, 3).map((benefit, index) => (
                        <div
                            key={index}
                            className="group animate-fade-in"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl border border-white/10 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)] hover:shadow-amber-500/10 overflow-hidden">
                                {/* Card Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Decorative Corner Elements */}
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-400/30 to-yellow-400/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 animation-delay-200" />

                                <div className="relative z-10">
                                    {/* Enhanced Icon */}
                                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 text-amber-400 mb-6 group-hover:from-amber-500 group-hover:to-yellow-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-amber-500/25">
                                        <benefit.icon className="w-7 h-7 md:w-8 md:h-8" />
                                    </div>

                                    {/* Enhanced Title */}
                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                                        {benefit.title}
                                    </h3>

                                    {/* Enhanced Description */}
                                    <p className="text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                        {benefit.description}
                                    </p>

                                    {/* Bottom Accent */}
                                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full group-hover:w-full transition-all duration-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second row: Items 4 & 5 centered together */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-4xl">
                        {BENEFITS.slice(3, 5).map((benefit, index) => (
                            <div
                                key={index + 3}
                                className="group animate-fade-in"
                                style={{ animationDelay: `${(index + 3) * 150}ms` }}
                            >
                                <div className="relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl border border-white/10 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)] hover:shadow-amber-500/10 overflow-hidden">
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Decorative Corner Elements */}
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-400/30 to-yellow-400/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 animation-delay-200" />

                                    <div className="relative z-10">
                                        {/* Enhanced Icon */}
                                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 text-amber-400 mb-6 group-hover:from-amber-500 group-hover:to-yellow-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-amber-500/25">
                                            <benefit.icon className="w-7 h-7 md:w-8 md:h-8" />
                                        </div>

                                        {/* Enhanced Title */}
                                        <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                                            {benefit.title}
                                        </h3>

                                        {/* Enhanced Description */}
                                        <p className="text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                            {benefit.description}
                                        </p>

                                        {/* Bottom Accent */}
                                        <div className="mt-6 h-1 w-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full group-hover:w-full transition-all duration-500" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Inspirational Footer */}
            <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
                <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
                    <Heart className="w-5 h-5 text-amber-400 animate-pulse" />
                    <p className="text-amber-400 font-serif italic text-lg">
                        " We are creating family , not business."
                    </p>
                    <Heart className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
            </div>
        </div>
    </section>
);

export default BenefitsGrid;
