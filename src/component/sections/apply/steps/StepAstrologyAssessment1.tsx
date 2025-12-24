import type { ChangeEvent } from 'react';
import {  Sparkles } from 'lucide-react';
import type { FormData } from '../Form';
import SectionHeader from '../SectionHeader';

interface StepProps {
    formData: FormData;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const StepAstrologyAssessment1 = ({ formData, onChange }: StepProps) => {
    return (
        <div className="animate-fade-in space-y-10">
            <SectionHeader number={8} title="Astrology Assessment - Part 1" />

            <div className="space-y-10">
                {/* About Yourself */}
                <div className="group animate-slide-in-left animation-delay-100">
                    <label className="form-label-enhanced flex items-center gap-3 mb-4">
                        Write about yourself
                    </label>
                    <div className="relative">
                        <textarea
                            name="aboutYourself"
                            value={formData.aboutYourself || ''}
                            onChange={onChange}
                            rows={5}
                            className="form-textarea-enhanced w-full"
                            placeholder="Tell us about your background, experience, and what makes you passionate about astrology..."
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 font-light italic">
                        Share your journey and what draws you to the celestial arts
                    </p>
                </div>

                {/* Problem Identification */}
                <div className="group animate-slide-in-right animation-delay-200">
                    <label className="form-label-enhanced flex items-center gap-3 mb-4">
                        
                        Kya aap bina client bataye unki main samasya identify kar sakte hain? Agar haan, to kaun se astrology tools ya rules use karte hain?
                    </label>
                    <div className="relative">
                        <textarea
                            name="problemIdentification"
                            value={formData.problemIdentification || ''}
                            onChange={onChange}
                            rows={5}
                            className="form-textarea-enhanced w-full"
                            placeholder="Explain your approach to identifying client problems without being told..."
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 font-light italic">
                        Demonstrate your intuitive understanding of astrological patterns
                    </p>
                </div>
                {/* Inspirational Quote */}
                <div className="text-center py-8 animate-fade-in-up animation-delay-500">
                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/20">
                        <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                        <p className="text-amber-400 font-serif italic text-sm sm:text-lg">
                            "The stars whisper secrets to those who listen with their heart"
                        </p>
                        <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepAstrologyAssessment1;
