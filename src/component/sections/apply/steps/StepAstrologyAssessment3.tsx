import type { ChangeEvent } from 'react';
import { Star } from 'lucide-react';
import type { FormData } from '../Form';
import SectionHeader from '../SectionHeader';

interface StepProps {
    formData: FormData;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const StepAstrologyAssessment3 = ({ formData, onChange }: StepProps) => {
    return (
        <div className="animate-fade-in space-y-10">
            <SectionHeader number={10} title="Astrology Assessment - Part 3" />

            <div className="space-y-10">
                {/* Planetary vs Psychological */}
                <div className="group animate-slide-in-left animation-delay-100">
                    <label className="form-label-enhanced flex items-center gap-3 mb-4">
                        
                        Aap kaise differentiate karte hain ki problem planetary hai ya psychological?
                    </label>
                    <div className="relative">
                        <textarea
                            name="planetaryVsPsychological"
                            value={formData.planetaryVsPsychological || ''}
                            onChange={onChange}
                            rows={5}
                            className="form-textarea-enhanced w-full"
                            placeholder="How do you distinguish between astrological and psychological issues?"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 font-light italic">
                        Demonstrate your ability to differentiate between cosmic and mental influences
                    </p>
                </div>

                {/* Live Kundli Test */}
                <div className="group animate-slide-in-right animation-delay-200">
                    <label className="form-label-enhanced flex items-center gap-3 mb-4">
                       
                        Live kundli test mein bina pooche client ki main problem kaise identify karte hain?
                    </label>
                    <div className="relative">
                        <textarea
                            name="liveKundliTest"
                            value={formData.liveKundliTest || ''}
                            onChange={onChange}
                            rows={5}
                            className="form-textarea-enhanced w-full"
                            placeholder="Describe your approach to identifying problems in live kundli tests..."
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 font-light italic">
                        Show your intuitive reading skills and systematic analysis approach
                    </p>
                </div>

                {/* Successful Consultation Definition */}
                <div className="group animate-slide-in-left animation-delay-300">
                    <label className="form-label-enhanced flex items-center gap-3 mb-4">
                        
                        Aapke hisaab se ek "successful astrology consultation" ki definition kya hai?
                    </label>
                    <div className="relative">
                        <textarea
                            name="successfulConsultation"
                            value={formData.successfulConsultation || ''}
                            onChange={onChange}
                            rows={5}
                            className="form-textarea-enhanced w-full"
                            placeholder="What defines a successful astrology consultation in your view?"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 font-light italic">
                        Define your standards for excellence in astrological guidance
                    </p>
                </div>

                {/* Additional Thoughts */}
                <div className="group animate-slide-in-right animation-delay-400">
                    <label className="form-label-enhanced flex items-center gap-3 mb-4">
                        
                        Additional thoughts or unique approaches you bring to astrology consultations
                    </label>
                    <div className="relative">
                        <textarea
                            name="additionalThoughts"
                            value={formData.additionalThoughts || ''}
                            onChange={onChange}
                            rows={5}
                            className="form-textarea-enhanced w-full"
                            placeholder="Share any additional insights, techniques, or philosophies that guide your practice..."
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 font-light italic">
                        Share your unique perspective and specialized approaches
                    </p>
                </div>

                {/* Inspirational Quote */}
                <div className="text-center py-8 animate-fade-in-up animation-delay-500">
                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-indigo-500/20">
                        <Star className="w-5 h-5 text-indigo-400 animate-pulse" />
                        <p className="text-indigo-400 font-serif italic text-sm sm:text-lg">
                            "True wisdom lies in understanding both the stars above and the soul within"
                        </p>
                        <Star className="w-5 h-5 text-purple-400 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepAstrologyAssessment3;
