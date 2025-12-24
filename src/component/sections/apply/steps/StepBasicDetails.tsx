import type { ChangeEvent } from 'react';
import { User, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import type { FormData } from '../Form';
import SectionHeader from '../SectionHeader';

interface StepProps {
    formData: FormData;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const StepBasicDetails = ({ formData, onChange }: StepProps) => {
    return (
        <div className="animate-fade-in space-y-8">
            <SectionHeader number={1} title="Basic Details"/>

            <div className="space-y-8">
                {/* Full Name Field */}
                <div className="group animate-slide-in-left animation-delay-100">
                    <label className="form-label-enhanced flex items-center gap-2">
                        <User className="w-4 h-4 text-yellow-400 animate-pulse" />
                        Full Name
                    </label>
                    <div className="relative">
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={onChange}
                            type="text"
                            className="form-input-enhanced w-full pl-12 pr-4"
                            placeholder="e.g. Pt. Sharma"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                </div>

                {/* Contact Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mobile Number */}
                    <div className="group animate-slide-in-left animation-delay-200">
                        <label className="form-label-enhanced flex items-center gap-2">
                            <Phone className="w-4 h-4 text-amber-400" />
                            Mobile Number (WhatsApp)
                        </label>
                        <div className="relative">
                            <input
                                name="mobile"
                                value={formData.mobile}
                                onChange={onChange}
                                type="tel"
                                className="form-input-enhanced w-full pl-12 pr-4"
                                placeholder="+91..."
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="group animate-slide-in-right animation-delay-300">
                        <label className="form-label-enhanced flex items-center gap-2">
                            <Mail className="w-4 h-4 text-amber-400" />
                            Email ID
                        </label>
                        <div className="relative">
                            <input
                                name="email"
                                value={formData.email}
                                onChange={onChange}
                                type="email"
                                className="form-input-enhanced w-full pl-12 pr-4"
                                placeholder="email@domain.com"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Location and Age Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* City & State */}
                    <div className="group animate-slide-in-left animation-delay-400">
                        <label className="form-label-enhanced flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-amber-400" />
                            City & State
                        </label>
                        <div className="relative">
                            <input
                                name="cityState"
                                value={formData.cityState}
                                onChange={onChange}
                                type="text"
                                className="form-input-enhanced w-full pl-12 pr-4"
                                placeholder="Mumbai, Maharashtra"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    </div>

                    {/* Age */}
                    <div className="group animate-slide-in-right animation-delay-500">
                        <label className="form-label-enhanced flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                            Age
                        </label>
                        <div className="relative">
                            <input
                                name="age"
                                value={formData.age}
                                onChange={onChange}
                                type="number"
                                className="form-input-enhanced w-full pl-4 pr-4 hide-number-spinners"
                                placeholder="Years"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="flex justify-center pt-4 animate-fade-in-up animation-delay-600">
                    <div className="flex items-center gap-4 text-amber-400/60 text-xs sm:text-sm font-serif">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500/50" />
                        <span>Your journey begins here</span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-500/50" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepBasicDetails;
