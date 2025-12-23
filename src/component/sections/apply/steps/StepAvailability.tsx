import type { ChangeEvent } from 'react';
import { Clock } from 'lucide-react';
import type { FormData } from '../Form';
import SectionHeader from '../SectionHeader';

interface StepProps {
    formData: FormData;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const StepAvailability = ({ formData, onChange }: StepProps) => {
    return (
        <div className="animate-fade-in">
            <SectionHeader number={5} title="Availability" icon={Clock} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Daily Availability (Hours/Day)</label>
                    <select name="dailyHours" value={formData.dailyHours} onChange={onChange} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                        <option value="">Select...</option>
                        <option value="1-2">1–2 Hours</option>
                        <option value="3-4">3–4 Hours</option>
                        <option value="5-6">5–6 Hours</option>
                        <option value="Full Time">Full Time</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Night Availability (After 10 PM IST)</label>
                    <select name="nightAvailability" value={formData.nightAvailability} onChange={onChange} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                        <option value="">Select...</option>
                        <option value="Regularly">Yes, Regularly</option>
                        <option value="Occasionally">Yes, Occasionally</option>
                        <option value="Weekends">Only on Weekends</option>
                        <option value="No">Not Available</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default StepAvailability;
