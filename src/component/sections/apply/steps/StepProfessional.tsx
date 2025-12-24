import type { ChangeEvent } from 'react';
import type { FormData } from '../Form';
import SectionHeader from '../SectionHeader';

interface StepProps {
    formData: FormData;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const StepProfessional = ({ formData, onChange }: StepProps) => {
    return (
        <div className="animate-fade-in">
            <SectionHeader number={7} title="Professional Experience"  />
            <div className="space-y-8">
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-4">Have you worked on using an Astrology App before?</label>
                    <div className="flex flex-col space-y-3">
                        <label className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all ${formData.workedBefore === 'Yes' ? 'bg-amber-500/20 border-amber-500' : 'bg-zinc-950 border-white/10 hover:border-white/30'}`}>
                            <input
                                type="radio"
                                name="workedBefore"
                                value="Yes"
                                checked={formData.workedBefore === 'Yes'}
                                onChange={onChange}
                                className="text-amber-600 focus:ring-amber-500 bg-zinc-950 border-slate-600"
                            />
                            <span className="text-slate-300 font-medium">Yes</span>
                        </label>
                        <label className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all ${formData.workedBefore === 'No' ? 'bg-amber-500/20 border-amber-500' : 'bg-zinc-950 border-white/10 hover:border-white/30'}`}>
                            <input
                                type="radio"
                                name="workedBefore"
                                value="No"
                                checked={formData.workedBefore === 'No'}
                                onChange={onChange}
                                className="text-amber-600 focus:ring-amber-500 bg-zinc-950 border-slate-600"
                            />
                            <span className="text-slate-300 font-medium">No</span>
                        </label>
                    </div>
                    {formData.workedBefore === 'Yes' && (
                        <div className="mt-4 animate-fade-in-up">
                            <label className="block text-xs font-medium text-slate-500 mb-2">Which App?</label>
                            <input
                                type="text"
                                name="appName"
                                value={formData.appName}
                                onChange={onChange}
                                className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-600"
                                placeholder="App Name..."
                            />
                        </div>
                    )}
                </div>
               
            </div>
        </div>
    );
};

export default StepProfessional;
