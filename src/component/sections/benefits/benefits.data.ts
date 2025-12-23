import { Shield, Target, Users, TrendingUp, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Benefit {
    title: string;
    description: string;
    icon: LucideIcon;
}

export const BENEFITS: Benefit[] = [
    {
        title: "Assured Work",
        description: "We provide consistent client opportunities, so you can focus on what you do best — guiding and helping people — without worrying about irregular work.",
        icon: Shield
    },
    {
        title: "Performance-Based Incentives",
        description: "Your dedication and quality matter. Astrologers who deliver excellent consultations are rewarded with attractive incentives and recognition for good work.",
        icon: Target
    },
    {
        title: "Real-Time Client Experience",
        description: "Get hands-on, real-time experience with genuine clients across different life concerns. This helps you sharpen your skills, gain confidence, and build long-term credibility.",
        icon: Users
    },
    {
        title: "Increased Visibility on Our Platform",
        description: "We actively promote our astrologers. As you perform well, your visibility increases on the platform, helping you reach more clients and grow your personal brand.",
        icon: TrendingUp
    },
    {
        title: "Complete Transparency",
        description: "We maintain clear and honest communication between astrologers and CastroRemedis. No hidden policies, no confusion — just trust and mutual respect.",
        icon: Search
    }
];
