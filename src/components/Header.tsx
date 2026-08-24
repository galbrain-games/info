import { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/40 backdrop-blur-xl border-b border-white/60 shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div 
              className="w-32 h-14 bg-indigo-950 transition-colors group-hover:bg-indigo-600" 
              style={{ 
                WebkitMaskImage: 'url(/logo.png)', 
                WebkitMaskSize: 'contain', 
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'left center',
                maskImage: 'url(/logo.png)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'left center'
              }}
              aria-label="Galbrain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-semibold text-slate-600 uppercase tracking-widest hover:text-indigo-600 transition-colors">Expertise</a>
            <a href="#ai-integration" className="text-sm font-semibold text-slate-600 uppercase tracking-widest hover:text-indigo-600 transition-colors">AI Strategy</a>
            <a href="#contact" className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors">CONSULT NOW</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg">Services</a>
          <a href="#ai-integration" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg">AI Integration</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-bold text-white bg-indigo-600 text-center rounded-xl uppercase tracking-widest shadow-lg shadow-indigo-200">CONSULT NOW</a>
        </div>
      )}
    </header>
  );
}
