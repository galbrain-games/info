import { BrainCircuit } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full p-8 text-center border-t border-slate-200/50 bg-white/10 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
            <div 
              className="w-24 h-10 bg-indigo-950" 
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
        </div>
        
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">
          &copy; {new Date().getFullYear()} Galbrain. Fractional CTO Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
