import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
    number: number;
    title: string;
    icon: LucideIcon;
}

const SectionHeader = ({ number, title, icon: Icon }: SectionHeaderProps) => (
    <div className="flex items-center space-x-3 mb-6 border-b border-amber-500/20 pb-4 animate-fade-in-up animate-pulse">
        <div className="relative">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-amber-600/20 text-amber-400 font-bold border border-amber-500/30 text-lg font-serif shadow-lg animate-pulse-glow">
                {number}
            </div>
            <div className="absolute -inset-1 bg-amber-500/10 rounded-xl animate-pulse" />
        </div>
        <div className="flex items-center space-x-2 text-lg sm:text-2xl font-bold">
            {/* <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 animate-float">
                <Icon className="w-7 h-7 text-amber-400 icon-enhanced" />
            </div> */}
            <span className="text-gradient-gold font-serif tracking-wide">{title}</span>
        </div>
    </div>
);

export default SectionHeader;
