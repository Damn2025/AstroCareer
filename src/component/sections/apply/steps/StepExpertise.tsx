import type { ChangeEvent } from 'react';

import type { FormData } from '../Form';
import SectionHeader from '../SectionHeader';

interface StepProps {
    formData: FormData;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onCheckboxChange: (field: 'skills' | 'languages' | 'modes', value: string) => void;
}

const StepExpertise = ({ formData, onChange, onCheckboxChange }: StepProps) => {
    return (
        <div className="animate-fade-in">
            <SectionHeader number={2} title="Astrology Expertise" />
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-3">Primary Astrology Skills (Select all that apply)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {[
                            "KP Astrology", "Vedic Astrology", "Parashari Astrology", "Jaimini Astrology",
                            "Bhrigu Nandi Nadi", "Tarot Card Reading", "Numerology", "Palmistry",
                            "Vastu Shastra", "Psychic / Intuitive Reading"
                        ].map(skill => (
                            <label key={skill} className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all ${formData.skills.includes(skill) ? 'bg-amber-500/20 border-amber-500' : 'bg-zinc-950/50 border-white/10 hover:border-white/30'}`}>
                                <input
                                    type="checkbox"
                                    checked={formData.skills.includes(skill)}
                                    onChange={() => onCheckboxChange('skills', skill)}
                                    className="w-4 h-4 rounded border-slate-500 text-amber-600 focus:ring-amber-500 bg-zinc-900"
                                />
                                <span className="text-sm text-slate-300">{skill}</span>
                            </label>
                        ))}
                        <label className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 bg-zinc-950/50">
                            <span className="text-sm text-slate-300 whitespace-nowrap">Other:</span>
                            <input
                                type="text"
                                name="otherSkill"
                                value={formData.otherSkill}
                                onChange={onChange}
                                className="w-full bg-transparent border-b border-slate-600 text-white text-sm focus:outline-none focus:border-amber-500 py-1"
                                placeholder="Specify..."
                            />
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Years of Experience</label>
                        <select name="experience" value={formData.experience} onChange={onChange} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                            <option value="">Select...</option>
                            <option value="0-2">0–2 Years</option>
                            <option value="3-5">3–5 Years</option>
                            <option value="6-10">6–10 Years</option>
                            <option value="10+">10+ Years</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Clients Consulted (Approx)</label>
                        <select name="clientCount" value={formData.clientCount} onChange={onChange} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                            <option value="">Select...</option>
                            <option value="<1000">Below 1,000</option>
                            <option value="1000-5000">1,000–5,000</option>
                            <option value="5000-20000">5,000–20,000</option>
                            <option value="20000+">20,000+</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepExpertise;
