import React, { useState, type ChangeEvent } from 'react';
import { Star, ChevronRight, Send, Sparkles, Moon, Sun } from 'lucide-react';
import { INITIAL_FORM_DATA } from './Form';
import StepBasicDetails from './steps/StepBasicDetails';
import StepExpertise from './steps/StepExpertise';
import StepLanguage from './steps/StepLanguage';
import StepEducation from './steps/StepEducation';
import StepAvailability from './steps/StepAvailability';
import StepDocuments from './steps/StepDocuments';
import StepProfessional from './steps/StepProfessional';
import StepOptional from './steps/StepOptional';
import StepDeclaration from './steps/StepDeclaration';
import StepAstrologyAssessment1 from './steps/StepAstrologyAssessment1';


const AstrologerRegistrationForm = () => {
    // REPLACE WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzU2HBuUz8ztj94YxYKcoSZONNBCLv5X307iaQ-Q7ZYopG3NHUzcpI2NzXZlvKLCXK2rw/exec";

    const [isSuccess, setIsSuccess] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const totalSteps = 10;

    // Validation rules per step (excluding optional step 9)
    const isStepValid = (): boolean => {
        switch (currentStep) {
            case 1: // Basic Details
                return (
                    formData.fullName.trim() !== '' &&
                    formData.mobile.trim() !== '' &&
                    formData.email.trim() !== '' &&
                    formData.cityState.trim() !== '' &&
                    formData.age.trim() !== ''
                );
            case 2: // Expertise
                return formData.skills.length > 0 || formData.otherSkill.trim() !== '';
            case 3: // Language
                return (
                    (formData.languages.length > 0 || formData.otherLanguage.trim() !== '') &&
                    formData.proficiency.trim() !== ''
                );
            case 4: // Education
                return formData.guruName.trim() !== '';
            case 5: // Availability
                return formData.dailyHours.trim() !== '' && formData.nightAvailability.trim() !== '';
            case 6: // Documents
                return Boolean(formData.profilePic && formData.certificate && formData.idProof);
            case 7: // Professional
                return (
                    formData.workedBefore.trim() !== '' &&
                    (formData.workedBefore !== 'Yes' || formData.appName.trim() !== '')
                );
            case 8: // Assessment 1
                return formData.aboutYourself.trim() !== '' && formData.problemIdentification.trim() !== '';
            case 9: // Optional - always valid
                return true;
            case 10: // Declaration handled by submit disabled
                return formData.declaration === true;
            default:
                return true;
        }
    };

    const nextStep = () => {
        if (!isStepValid()) return;
        if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    const handleCheckbox = (field: 'skills' | 'languages' | 'modes', value: string) => {
        setFormData(prev => {
            const current = prev[field];
            if (current.includes(value)) {
                return { ...prev, [field]: current.filter(item => item !== value) };
            } else {
                return { ...prev, [field]: [...current, value] };
            }
        });
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(formData),
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // On success, switch to success view and reset form data internally
            setIsSuccess(true);
            setFormData(INITIAL_FORM_DATA);
            setCurrentStep(1);

        } catch (error) {
            console.error("Submission Error:", error);
            alert("Failed to submit. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setIsSuccess(false);
        setFormData(INITIAL_FORM_DATA);
        setCurrentStep(1);
    };

    if (isSuccess) {
        return (
            <section id="apply-form" className="relative z-10 py-24 px-4 md:px-6 bg-zinc-950/50 border-t border-white/5">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] animate-pulse" />
                </div>

                <div className="max-w-3xl mx-auto relative">
                    <div className="bg-gradient-to-br from-zinc-950/90 via-zinc-900/80 to-zinc-950/90 p-10 rounded-3xl border border-amber-500/20 backdrop-blur-xl shadow-2xl min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in group">
                        {/* Success Animation */}
                        <div className="relative mb-8">
                            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                                <Star className="w-12 h-12 text-white fill-current " />
                            </div>
                            <div className="absolute -inset-4 bg-amber-400/20 rounded-full animate-ping" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-6 animate-fade-in-up" style={{ fontFamily: 'Cinzel, serif' }}>
                            Application Received! 
                        </h2>
                        <p className="text-slate-300 max-w-lg mb-8 text-lg leading-relaxed animate-fade-in-up animation-delay-200" style={{ fontFamily: 'Cinzel, serif' }}>
                            Your celestial journey has begun. Our team  will review your details and reach out to you shortly.
                        </p>
                       
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="apply-form" className="relative z-10 py-12 md:py-16 px-4 md:px-6 bg-zinc-950/50 border-t border-white/5">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-amber-500/5 rounded-full animate-spin-slow" />
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Enhanced Header */}
                <div className="text-center mb-8 md:mb-10">
                  

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up font-serif text-[white]">
                        Join Our Circle
                        <span className="ml-3 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(245,158,11,0.5)] font-serif">
                            of Seers
                        </span>
                    </h2>

                    <p className="text-slate-400 text-base md:text-lg px-4 md:px-0 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-200">
                        Complete the form below to begin your journey with AstroRemedis Navigators.<br></br>
                        <span className="text-amber-400 font-medium"> Your cosmic destiny awaits.</span> 
                    </p>

                    {/* Decorative Elements */}
                    <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in-up animation-delay-400">
                        <Moon className="w-5 h-5 text-amber-700 animate-pulse" />
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                        <Sun className="w-5 h-5 text-amber-400 animate-pulse" />
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                        <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                    </div>
                </div>

                {/* Enhanced Form Container */}
                <div className="bg-gradient-to-br from-zinc-950/90 via-zinc-900/80 to-zinc-950/90 p-4 md:p-6 lg:p-8 rounded-3xl border border-amber-500/10 backdrop-blur-xl shadow-2xl min-h-[500px] md:min-h-[550px] flex flex-col animate-fade-in-up animation-delay-300 group">

                    {/* Enhanced Progress Bar */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-amber-400 font-semibold text-lg font-serif">
                                Step {currentStep} of {totalSteps}
                            </span>
                            <span className="text-slate-500 font-medium bg-slate-800/50 px-3 py-1 rounded-full text-sm">
                                {Math.round((currentStep / totalSteps) * 100)}% Complete
                            </span>
                        </div>

                        <div className="relative">
                            <div className="w-full bg-zinc-900/50 rounded-full h-3 overflow-hidden border border-amber-500/20">
                                <div
                                    className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 h-full rounded-full transition-all duration-700 ease-out shadow-lg animate-pulse"
                                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full animate-pulse" />
                        </div>

                        {/* Step Indicators */}
                        <div className="flex justify-between mt-4">
                            {Array.from({ length: totalSteps }, (_, i) => (
                                <div
                                    key={i}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        i + 1 <= currentStep
                                            ? 'bg-gradient-to-r from-amber-400 to-yellow-500 shadow-lg animate-pulse'
                                            : 'bg-zinc-700'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                        <div className="flex-1 animate-fade-in">
                            {currentStep === 1 && <StepBasicDetails formData={formData} onChange={handleInputChange} />}
                            {currentStep === 2 && <StepExpertise formData={formData} onChange={handleInputChange} onCheckboxChange={handleCheckbox} />}
                            {currentStep === 3 && <StepLanguage formData={formData} onChange={handleInputChange} onCheckboxChange={handleCheckbox} />}
                            {currentStep === 4 && <StepEducation formData={formData} onChange={handleInputChange} />}
                            {currentStep === 5 && <StepAvailability formData={formData} onChange={handleInputChange} />}
                            {currentStep === 6 && (
                                <StepDocuments
                                    formData={formData}
                                    onFileChange={(field, file) => {
                                        console.log('Main Form: File Changed', field, file);
                                        setFormData(prev => ({ ...prev, [field]: file }));
                                    }}
                                />
                            )}
                            {currentStep === 7 && <StepProfessional formData={formData} onChange={handleInputChange} />}
                            {currentStep === 8 && <StepAstrologyAssessment1 formData={formData} onChange={handleInputChange} />}
                            {currentStep === 9 && (
                                <StepOptional
                                    formData={formData}
                                    onChange={handleInputChange}
                                    onFileChange={(field, file) => setFormData(prev => ({ ...prev, [field]: file }))}
                                />
                            )}
                            {currentStep === 10 && (
                                <StepDeclaration
                                    formData={formData}
                                    onDeclarationChange={(e) => setFormData(prev => ({ ...prev, declaration: e.target.checked }))}
                                />
                            )}
                        </div>

                        {/* Enhanced Navigation Buttons */}
                        <div className="flex flex-row justify-between items-stretch sm:items-center pt-6 md:pt-8 border-t border-amber-500/10 mt-auto gap-2 sm:gap-0">
                            <button
                                type="button"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className={`group relative flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base md:text-lg overflow-hidden ${
                                    currentStep === 1
                                        ? 'opacity-0 pointer-events-none'
                                        : 'text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-slate-800/50 hover:to-slate-700/50 border border-slate-700/50 hover:border-slate-600/50'
                                }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/0 to-slate-700/0 group-hover:from-slate-800/20 group-hover:to-slate-700/20 transition-all duration-300" />
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rotate-180 transition-transform group-hover:-translate-x-1" />
                                <span className="relative z-10 font-serif">Previous</span>
                            </button>

                            {currentStep < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    disabled={!isStepValid()}
                                    className={`group relative flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full font-bold transition-all duration-300 text-sm sm:text-base md:text-lg overflow-hidden shadow-2xl ${
                                        !isStepValid()
                                            ? 'bg-zinc-700/60 text-slate-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-white to-amber-100 hover:from-amber-100 hover:to-yellow-200 text-slate-900 hover:shadow-white/30 hover:-translate-y-1 hover:scale-105'
                                    }`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 to-yellow-500/0 group-hover:from-amber-400/20 group-hover:to-yellow-500/20 transition-all duration-300" />
                                    <span className="relative z-10 font-serif">Next Step</span>
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1 relative z-10" />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={!formData.declaration || isSubmitting}
                                    className={`group relative flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-300 hover:via-yellow-400 hover:to-amber-500 text-zinc-900 rounded-full font-bold transition-all duration-300 shadow-2xl text-sm sm:text-base md:text-lg overflow-hidden ${
                                        (!formData.declaration || isSubmitting)
                                            ? 'opacity-50 cursor-not-allowed grayscale'
                                            : 'hover:shadow-amber-500/50 hover:-translate-y-1 hover:scale-105'
                                    }`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-300/0 to-yellow-500/0 group-hover:from-amber-300/20 group-hover:to-yellow-500/20 transition-all duration-300" />
                                    <span className="relative z-10 font-serif">
                                        {isSubmitting ? "Sending..." : "Submit Application"}
                                    </span>
                                    {!isSubmitting && <Send className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1 relative z-10" />}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AstrologerRegistrationForm;
