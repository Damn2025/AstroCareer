import type { ChangeEvent } from 'react';

import type { FormData } from '../Form';
import SectionHeader from '../SectionHeader';

interface StepProps {
    formData: FormData;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onCheckboxChange: (field: 'skills' | 'languages' | 'modes', value: string) => void;
}

const StepLanguage = ({ formData, onChange, onCheckboxChange }: StepProps) => {
    return (
        <div className="animate-fade-in">
            <SectionHeader number={3} title="Language & Communication"  />
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-3">Languages Known</label>
                    <div className="flex flex-wrap gap-3">
                        {["Hindi", "English", "Marathi", "Gujarati", "Tamil", "Telugu", "Bengali"].map(lang => (
                            <label key={lang} className={`flex items-center space-x-2 px-4 py-2 rounded-full border cursor-pointer transition-all ${formData.languages.includes(lang) ? 'bg-amber-500 text-white border-amber-500' : 'bg-zinc-950 text-slate-300 border-white/10 hover:border-amber-500/50'}`}>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={formData.languages.includes(lang)}
                                    onChange={() => onCheckboxChange('languages', lang)}
                                />
                                <span className="text-sm font-medium">{lang}</span>
                            </label>
                        ))}
                        <input
                            type="text"
                            name="otherLanguage"
                            value={formData.otherLanguage}
                            onChange={onChange}
                            className="bg-zinc-950 border border-white/10 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-amber-500 w-32 placeholder:text-slate-600"
                            placeholder="Other..."
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Speaking Proficiency</label>
                        <div className="flex flex-col space-y-2">
                            {['Basic', 'Good', 'Excellent', 'Professional'].map(level => (
                                <label key={level} className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all ${formData.proficiency === level ? 'bg-amber-500/20 border-amber-500' : 'bg-zinc-950 border-white/10 hover:border-white/30'}`}>
                                    <input
                                        type="radio"
                                        name="proficiency"
                                        value={level}
                                        checked={formData.proficiency === level}
                                        onChange={onChange}
                                        className="text-amber-600 focus:ring-amber-500 bg-zinc-950 border-slate-600"
                                    />
                                    <span className="text-slate-300 text-sm">{level}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Comfortable Modes</label>
                        <div className="flex flex-col space-y-2">
                            {['Audio Call', 'Video Call', 'Chat', 'Live Sessions'].map(mode => (
                                <label key={mode} className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all ${formData.modes.includes(mode) ? 'bg-amber-500/20 border-amber-500' : 'bg-zinc-950 border-white/10 hover:border-white/30'}`}>
                                    <input
                                        type="checkbox"
                                        checked={formData.modes.includes(mode)}
                                        onChange={() => onCheckboxChange('modes', mode)}
                                        className="rounded border-slate-500 text-amber-600 focus:ring-amber-500 bg-zinc-900"
                                    />
                                    <span className="text-slate-300 text-sm">{mode}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepLanguage;
