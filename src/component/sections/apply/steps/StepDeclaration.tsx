import type { ChangeEvent } from 'react';
import {  Sparkles, Star, Moon } from 'lucide-react';
import type { FormData } from '../Form';
import SectionHeader from '../SectionHeader';

interface StepProps {
    formData: FormData;
    onDeclarationChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StepDeclaration = ({ formData, onDeclarationChange }: StepProps) => {
    return (
        <div className="animate-fade-in h-full flex flex-col justify-center space-y-8">
            <SectionHeader number={10} title="Declaration"  />

            <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full blur-sm animate-pulse" />
                <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-sm animate-pulse animation-delay-300" />
                <div className="absolute -bottom-4 left-1/4 w-4 h-4 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-sm animate-pulse animation-delay-600" />

                <div className="bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-amber-500/10 border border-amber-500/30 rounded-2xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-4 left-4"><Star className="w-4 h-4 text-amber-400" /></div>
                        <div className="absolute top-8 right-8"><Moon className="w-5 h-5 text-purple-400" /></div>
                        <div className="absolute bottom-6 left-1/3"><Sparkles className="w-3 h-3 text-yellow-400" /></div>
                    </div>

                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
                                <h3 className="text-xl font-serif font-semibold text-amber-400">
                                    Sacred Oath of the Stars
                                </h3>
                                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                            </div>
                        </div>

                        <p className="text-lg text-slate-300 italic mb-8 leading-relaxed text-center font-light">
                            "I hereby declare that all information provided is true and correct. I agree to follow Nebula Navigators' ethical standards, quality guidelines, and consultation policies. I understand that my cosmic journey begins with trust and truth."
                        </p>

                        <div className="flex justify-center">
                            <label className="group flex items-center gap-4 cursor-pointer p-6 bg-gradient-to-r from-zinc-950/80 to-zinc-900/80 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.declaration}
                                        onChange={onDeclarationChange}
                                        className="w-6 h-6 rounded border-amber-500/50 text-amber-600 focus:ring-amber-500 bg-zinc-900 transition-all checked:bg-amber-600 checked:border-amber-600"
                                    />
                                    <div className="absolute inset-0 bg-amber-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-slate-200 font-semibold group-hover:text-white transition-colors text-lg">
                                        I Agree and Consent
                                    </span>
                                    <span className="text-slate-400 text-sm font-light">
                                        To the sacred covenant of the cosmos
                                    </span>
                                </div>
                                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Star className="w-5 h-5 text-amber-400 animate-pulse" />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inspirational Footer */}
            <div className="text-center animate-fade-in-up animation-delay-500">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-purple-500/10 border border-purple-500/20">
                    <Moon className="w-4 h-4 text-purple-400 animate-pulse" />
                    <p className="text-purple-400 font-serif italic text-sm">
                        "May the stars guide your path and illuminate your truth"
                    </p>
                    <Moon className="w-4 h-4 text-indigo-400 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default StepDeclaration;
