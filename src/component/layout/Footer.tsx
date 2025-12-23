import { Instagram, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react';
import AstroLogo from '../../assets/Astro_LOGO.png';

const Footer = () => (
    <footer className="relative z-10 border-t border-white/10 bg-zinc-950 pt-12 md:pt-20 pb-8 md:pb-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-row flex-wrap items-start justify-between gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="max-w-[450px] flex-1">
                <div className="flex items-center space-x-3 mb-4 md:mb-6">
                    <div className="relative">
                        <img
                            src={AstroLogo}
                            alt="AstroCareer Logo"
                            className="w-8 h-8 md:w-10 md:h-10 object-contain"
                        />
                        <div className="absolute -inset-1 bg-amber-500/20 rounded-full animate-ping" />
                    </div>
                    <div className="flex items-center space-x-2">
                             <span className="text-xl font-[cinzel] font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-500">
                    AstroRemedis
                </span>
                    </div>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Guiding astrologers to their cosmic calling. Connect with the stars, transform lives, and build your celestial career path.
                     Your trusted guide to the cosmos. We provide authentic Vedic astrology services and remedies to help you navigate life's journey.
                </p>
            </div>

            <div className="text-right min-w-[48px] flex-shrink-0 self-start">
                <div className="md:block">
                    <h4 className="hidden md:block text-white font-bold md:mb-4 text-base font-serif">Connect With Us</h4>
                    <div className="flex flex-col items-end gap-3 md:flex-row md:flex-wrap md:justify-end">
                    <a
                        href="https://www.instagram.com/astroremedis_official/"
                        target='_blank'
                        className="group relative p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-4 h-4 md:w-5 md:h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                        <div className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61581288903212"
                        target='_blank'
                        className="group relative p-2 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg border border-blue-600/30 hover:border-blue-600/50 transition-all duration-300 hover:scale-110"
                        aria-label="Facebook"
                    >
                        <Facebook className="w-4 h-4 md:w-5 md:h-5 text-blue-500 group-hover:text-blue-400 transition-colors" />
                        <div className="absolute inset-0 bg-blue-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </div>
                </div>
                <p className="hidden md:block text-xs text-slate-500 mt-3">Follow our cosmic journey</p>
            </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-row flex-wrap justify-between items-center text-xs text-slate-600 border-t border-white/5 pt-6 md:pt-8">
            <p>&copy; 2025 AstroRemedis. All celestial rights reserved.</p>
            <div className="flex items-center space-x-6 mt-0">
                <a href="https://astroremedis.com/pages/privacy-policy"  target='_blank' className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            </div>
        </div>
    </footer>
);

export default Footer;
