
import logo from '../../assets/Astro_LOGO.png'

const NavBar = () => (
   
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>
                <img
                    src={logo}
                    alt="AstroRemedis Logo"
                    className="h-10 w-auto"
                />
                <span className="text-xl font-[cinzel] font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-500">
                    AstroRemedis
                </span>
            </div>



        </div>

    </nav>
);

export default NavBar;
