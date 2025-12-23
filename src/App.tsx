
import NavBar from './component/layout/Navbar';
import Hero from './component/sections/Hero';
import BenefitsGrid from './component/sections/benefits/BenefitsGrid';
import Culture from './component/sections/Culture';
import Testimonials from './component/sections/Testimonials';
import AstrologerRegistrationForm from './component/sections/apply/AstrologerRegistrationForm';
import Footer from './component/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-900 dark:text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-900 transition-colors duration-300 flex flex-col overflow-x-hidden">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <BenefitsGrid />
        <AstrologerRegistrationForm />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;
