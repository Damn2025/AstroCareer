import { FileText } from 'lucide-react';
import type { FormData } from '../Form';
import SectionHeader from '../SectionHeader';

// Note: Documents upload logic wasn't fully implemented in the provided snippet, so keeping it UI-only as per request.
const StepDocuments = ({ formData, onFileChange }: { formData: FormData; onFileChange: (field: string, file: any) => void }) => {

    const handleFileSelect = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`File input changed for field: ${field}`);
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            console.log("File selected:", file.name, file.type, file.size);
            const reader = new FileReader();

            reader.onloadend = () => {
                console.log("File reading complete");
                // Get the base64 string (remove the data URL prefix "data:image/png;base64,")
                const result = reader.result as string;
                const base64String = result.split(',')[1];

                onFileChange(field, {
                    name: file.name,
                    type: file.type,
                    data: base64String
                });
            };

            reader.onerror = (error) => {
                console.error("File reading error:", error);
            };

            reader.readAsDataURL(file);
        }
    };

    const documents = [
        { id: 'profilePic', label: "Recent Photograph", sub: "Professional, clear", icon: FileText },
        { id: 'certificate', label: "Course Completion Certificate", sub: "PDF/JPG", icon: FileText },
        { id: 'idProof', label: "Govt ID Proof", sub: "Aadhaar/PAN", icon: FileText }
    ];

    return (
        <div className="animate-fade-in">
            <SectionHeader number={6} title="Documents Upload"  />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {documents.map((doc) => {
                    // @ts-ignore - Dynamic access to formData
                    const currentFile = formData[doc.id];

                    return (
                        <div key={doc.id} className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all h-64 relative overflow-hidden ${currentFile ? 'border-green-500/50 bg-green-500/10' : 'border-white/10 hover:border-amber-500/50 hover:bg-zinc-950 group'}`}>

                            <div className={`p-4 rounded-full mb-4 transition-colors ${currentFile ? 'bg-green-500/20' : 'bg-zinc-900 group-hover:bg-amber-500/20'}`}>
                                <doc.icon className={`w-8 h-8 ${currentFile ? 'text-green-400' : 'text-slate-400 group-hover:text-amber-400'}`} />
                            </div>

                            <span className="text-lg font-medium text-slate-300 mb-2">{doc.label}</span>

                            {currentFile ? (
                                <div className="text-center w-full px-2">
                                    <div className="text-xs text-green-400 font-bold mb-1">File Selected:</div>
                                    <div className="text-sm text-white break-words mb-4">{currentFile.name}</div>
                                    <button
                                        type="button"
                                        onClick={() => onFileChange(doc.id, null)}
                                        className="text-xs text-red-400 hover:text-red-300 underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <span className="text-sm text-slate-500 mb-4">{doc.sub}</span>
                                    <label
                                        className="px-4 py-2 bg-zinc-900 rounded-lg text-sm font-bold text-amber-400 hover:bg-amber-500/20 hover:text-amber-300 transition-colors cursor-pointer relative"
                                    >
                                        Choose File
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/*,application/pdf"
                                            onChange={handleFileSelect(doc.id)}
                                        />
                                    </label>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="mt-6 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20 text-sm text-amber-300">
                <p><strong>Note:</strong> Allowed formats are JPG, PNG, and PDF. Max file size 5MB.</p>
            </div>
        </div>
    );
};

export default StepDocuments;
