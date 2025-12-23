import type { ChangeEvent } from 'react';
import { Clock, Zap, Users, Heart, Shield } from 'lucide-react';
import type { FormData } from '../Form';
import SectionHeader from '../SectionHeader';

interface StepProps {
    formData: FormData;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const StepAstrologyAssessment2 = ({ formData, onChange }: StepProps) => {
    return (
        <div className="animate-fade-in space-y-10">
            <SectionHeader number={9} title="Astrology Assessment - Part 2" icon={Clock} />

            <div className="space-y-10">
                {/* 5-Minute Structure */}
                <div className="group animate-slide-in-left animation-delay-100">
                    <label className="form-label-enhanced flex items-center gap-3 mb-4">
                       
                        Sirf 5 minutes ki consultation mein client ko satisfy karne ka aapka structure kya hoga?
                    </label>
                    <div className="relative">
                        <textarea
                            name="fiveMinuteStructure"
                            value={formData.fiveMinuteStructure || ''}
                            onChange={onChange}
                            rows={5}
                            className="form-textarea-enhanced w-full"
                            placeholder="Outline your 5-minute consultation structure..."
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 font-light italic">
                        Demonstrate your efficiency and client-focused approach
                    </p>
                </div>

                {/* Client Understanding */}
                <div className="group animate-slide-in-right animation-delay-200">
                    <label className="form-label-enhanced flex items-center gap-3 mb-4">
                       
                        Client ko kaise feel karvate hain ki "ye astrologer mujhe sach-mein samajh raha hai"?
                    </label>
                    <div className="relative">
                        <textarea
                            name="clientUnderstanding"
                            value={formData.clientUnderstanding || ''}
                            onChange={onChange}
                            rows={5}
                            className="form-textarea-enhanced w-full"
                            placeholder="How do you make clients feel truly understood?"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 font-light italic">
                        Show your empathy and connection-building skills
                    </p>
                </div>

                {/* Repeat Client Strategy */}
                <div className="group animate-slide-in-left animation-delay-300">
                    <label className="form-label-enhanced flex items-center gap-3 mb-4">
                       
                        Aap client ko aisa kya dete hain ki woh dubara sirf aapke paas hi aaye?
                    </label>
                    <div className="relative">
                        <textarea
                            name="repeatClientStrategy"
                            value={formData.repeatClientStrategy || ''}
                            onChange={onChange}
                            rows={5}
                            className="form-textarea-enhanced w-full"
                            placeholder="What unique value do you provide that ensures client loyalty?"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 font-light italic">
                        Highlight your unique selling proposition and client retention strategy
                    </p>
                </div>

                {/* Uncertainty Handling */}
                <div className="group animate-slide-in-right animation-delay-400">
                    <label className="form-label-enhanced flex items-center gap-3 mb-4">
                       
                        Agar prediction mein aap 100% sure na ho, to bina confidence lose kiye client ko kaise batate hain?
                    </label>
                    <div className="relative">
                        <textarea
                            name="uncertaintyHandling"
                            value={formData.uncertaintyHandling || ''}
                            onChange={onChange}
                            rows={5}
                            className="form-textarea-enhanced w-full"
                            placeholder="How do you handle uncertainty while maintaining client trust?"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 font-light italic">
                        Demonstrate your professionalism and ethical approach to uncertainty
                    </p>
                </div>

                {/* Inspirational Quote */}
                <div className="text-center py-8 animate-fade-in-up animation-delay-500">
                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-indigo-500/20">
                        <Zap className="w-5 h-5 text-indigo-400 animate-pulse" />
                        <p className="text-indigo-400 font-serif italic text-sm sm:text-lg">
                            "Wisdom lies not in certainty, but in the graceful dance with the unknown"
                        </p>
                        <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepAstrologyAssessment2;