import type { ChangeEvent } from 'react';

import type { FormData } from '../Form';
import SectionHeader from '../SectionHeader';

interface StepProps {
    formData: FormData;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const StepEducation = ({ formData, onChange }: StepProps) => {
    return (
        <div className="animate-fade-in">
            <SectionHeader number={4} title="Education "  />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-slate-400 mb-2">Guru / Teacher Name</label>
                    <input name="guruName" value={formData.guruName} onChange={onChange} type="text" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 placeholder:text-slate-600" placeholder="Or mention 'Self-Learnt'" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Institute / Gurukul Name</label>
                    <input name="institute" value={formData.institute} onChange={onChange} type="text" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 placeholder:text-slate-600" placeholder="If any" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Years of Formal Training</label>
                    <select name="formalTraining" value={formData.formalTraining} onChange={onChange} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                        <option value="">Select...</option>
                        <option value="<1">Less than 1 Year</option>
                        <option value="1-3">1–3 Years</option>
                        <option value="3-5">3–5 Years</option>
                        <option value="5+">5+ Years</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default StepEducation;
