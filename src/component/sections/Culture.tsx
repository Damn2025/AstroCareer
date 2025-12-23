import { Heart, Briefcase } from 'lucide-react';

const Culture = () => {
    return (
        <section className="relative z-10 py-16 md:py-24 px-4 md:px-6 bg-zinc-950/20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="order-2 md:order-1 space-y-6 md:space-y-8">
                    <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="p-2 md:p-3 bg-amber-500/10 rounded-xl flex-shrink-0">
                            <Heart className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Full Moon Benefits</h3>
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                Comprehensive health coverage, unlimited PTO (for spiritual recharge), and a yearly retreat to a dark sky preserve.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="p-2 md:p-3 bg-amber-500/10 rounded-xl flex-shrink-0">
                            <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Growth Charts</h3>
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                We map your career trajectory like a star chart, ensuring you are always ascending and never stagnant.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-yellow-500 rounded-2xl blur-2xl opacity-20"></div>
                    <div className="relative bg-zinc-950 border border-white/10 rounded-2xl p-6 md:p-8 lg:p-12 overflow-hidden">
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6">"Nebula Navigators isn't just a workplace; it's a constellation of brilliant minds."</h3>
                        <div className="flex items-center space-x-3 md:space-x-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500"></div>
                            <div>
                                <div className="text-white font-bold text-sm md:text-base">Cassiopeia Black</div>
                                <div className="text-amber-300 text-xs md:text-sm">Lead Astrologer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Culture;
