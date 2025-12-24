import type { ChangeEvent } from 'react';
import { Video, Upload, Sparkles} from 'lucide-react';
import type { FormData } from '../Form';
import SectionHeader from '../SectionHeader';

interface StepProps {
    formData: FormData;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const StepOptional = ({ formData, onChange, onFileChange }: StepProps & { onFileChange: (field: string, file: any) => void }) => {

    const handleFileSelect = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const result = reader.result as string;
                const base64String = result.split(',')[1];

                onFileChange(field, {
                    name: file.name,
                    type: file.type,
                    data: base64String
                });
            };

            reader.readAsDataURL(file);
        }
    };

    const renderUploadField = (id: 'introVideo' | 'samplePrediction', label: string, sub: string, icon: any, accept: string) => {
        // @ts-ignore
        const currentFile = formData[id];

        return (
            <div className={`group relative border border-white/20 rounded-xl p-6 transition-all duration-300 backdrop-blur-sm ${currentFile ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/40 shadow-lg shadow-green-500/10' : 'bg-gradient-to-br from-zinc-950/50 to-zinc-900/50 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5'}`}>
                {/* Decorative corner elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-amber-400/30 to-yellow-400/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 animation-delay-200" />

                <label className="flex items-center gap-3 text-sm sm:text-base font-medium text-slate-300 mb-3 group-hover:text-white transition-colors">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 group-hover:border-amber-500/50 transition-all duration-300">
                        {icon}
                    </div>
                    <span className="font-serif">{label}</span>
                </label>
                <div className="text-xs text-slate-500 mb-4 font-light italic">{sub}</div>

                {currentFile ? (
                    <div className="text-center space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <div className="text-xs text-green-400 font-semibold">File Selected</div>
                        </div>
                        <div className="text-sm text-white break-words max-w-[200px] mx-auto font-medium">{currentFile.name}</div>
                        <button
                            type="button"
                            onClick={() => onFileChange(id, null)}
                            className="text-xs text-red-400 hover:text-red-300 underline hover:no-underline transition-all duration-200"
                        >
                            Remove File
                        </button>
                    </div>
                ) : (
                    <label className="w-full py-4 border-2 border-dashed border-amber-500/40 rounded-xl text-amber-400 text-sm font-medium hover:bg-amber-500/10 hover:border-amber-500/60 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer group/upload">
                        <div className="p-3 rounded-full bg-amber-500/10 group-hover/upload:bg-amber-500/20 transition-colors duration-300">
                            <Upload className="w-5 h-5" />
                        </div>
                        <span className="group-hover/upload:text-amber-300 transition-colors duration-300">Upload File</span>
                        <input type="file" className="hidden" accept={accept} onChange={handleFileSelect(id)} />
                    </label>
                )}
            </div>
        );
    };

    return (
        <div className="animate-fade-in space-y-10">
            <SectionHeader number={9} title="Optional" />

            <div className="space-y-10">
                {/* Upload Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-slide-in-left animation-delay-100">
                        {renderUploadField('introVideo', 'Introduction Video (30-60s)', 'Briefly introduce yourself and expertise.', <Video className="w-5 h-5 text-amber-400" />, "video/*")}
                    </div>
                </div>

                {/* Interview Question */}
                <div className="animate-slide-in-left animation-delay-300">
                    <label className="form-label-enhanced flex items-center gap-3 mb-6">
                      
                        Are you willing to appear for an Interview & Trial Session?
                    </label>
                    <div className="flex flex-wrap items-center gap-4">
                        {['Yes', 'No'].map((opt, index) => (
                            <label
                                key={opt}
                                className={`group flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                                    formData.interview === opt
                                        ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-amber-500/50 shadow-lg shadow-amber-500/10'
                                        : 'bg-gradient-to-br from-zinc-950/50 to-zinc-900/50 border-white/20 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5'
                                }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <input
                                    type="radio"
                                    name="interview"
                                    value={opt}
                                    checked={formData.interview === opt}
                                    onChange={onChange}
                                    className="text-amber-600 focus:ring-amber-500 bg-zinc-950 border-slate-600"
                                />
                                <span className={`text-sm font-medium transition-colors ${
                                    formData.interview === opt ? 'text-amber-400' : 'text-slate-300 group-hover:text-white'
                                }`}>
                                    {opt}
                                </span>
                                {formData.interview === opt && (
                                    <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                                )}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Additional Information */}
                <div className="animate-slide-in-right animation-delay-400">
                    <label className="form-label-enhanced flex items-center gap-3 mb-4">
                      
                        Additional Information
                    </label>
                    <div className="relative">
                        <textarea
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={onChange}
                            rows={4}
                            className="form-textarea-enhanced w-full"
                            placeholder="Achievements, awards, publications, special skills..."
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 font-light italic">
                        Share anything that makes you uniquely qualified for this cosmic journey
                    </p>
                </div>

                {/* Inspirational Quote */}
                <div className="text-center py-6 animate-fade-in-up animation-delay-500">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/20">
                        <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                        <p className="text-amber-400 font-serif italic text-xs sm:text-sm">
                            "Every star has a story; yours is about to shine brighter"
                        </p>
                        <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepOptional;
