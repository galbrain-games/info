import { motion } from 'motion/react';
import { Bot, Sparkles, GraduationCap, Database, Settings, CheckCircle2, ArrowDown } from 'lucide-react';

export default function AIIntegration() {
  return (
    <section id="ai-integration" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-bold mb-6 uppercase tracking-tighter">
              <Sparkles className="w-4 h-4" />
              <span>Future-Proof Your Business</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-indigo-950 mb-6">
              Integrating Generative AI into Your Operations
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We don't just talk about AI; we build it into your core processes. Galbrain specializes in deep-diving into underlying AI tools to provide highly optimized, cost-effective solutions that outprice larger competitors.
            </p>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-indigo-950 mb-2">Custom AI & Automation</h4>
                  <p className="text-sm text-slate-600 leading-snug">Creating robust Linux Wayland containers and Docker environments that run AI models and automate browser actions effortlessly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-indigo-950 mb-2">Internal Team Training</h4>
                  <p className="text-sm text-slate-600 leading-snug">Ensuring long-term sustainability by upskilling your internal teams. We transfer knowledge so your staff achieves long-term AI proficiency.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/50 p-6 sm:p-8 flex items-center justify-center relative">
              <div className="flex flex-col w-full max-w-sm mx-auto">
                <div className="bg-white/80 p-4 sm:p-5 rounded-2xl shadow-sm border border-white flex items-center justify-between z-10">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                      <Database className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-bold text-slate-700 text-sm sm:text-base">Business Data & APIs</span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>

                <div className="flex justify-center my-2">
                  <ArrowDown className="w-5 h-5 text-indigo-300" />
                </div>

                <div className="bg-indigo-600 p-4 sm:p-5 rounded-2xl shadow-lg shadow-indigo-200 flex items-center justify-between transform scale-105 z-20">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 text-white rounded-xl flex items-center justify-center">
                      <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="font-bold text-white text-sm sm:text-base block">Custom AI Container</span>
                      <span className="text-indigo-200 text-[10px] sm:text-xs uppercase tracking-wider font-bold">Processing</span>
                    </div>
                  </div>
                  <div className="flex gap-1 pr-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-indigo-200 animate-bounce"></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-indigo-100 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>

                <div className="flex justify-center my-2">
                  <ArrowDown className="w-5 h-5 text-indigo-300" />
                </div>

                <div className="bg-white/80 p-4 sm:p-5 rounded-2xl shadow-sm border border-white flex items-center justify-between z-10">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                      <Settings className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-bold text-slate-700 text-sm sm:text-base">Automated Operations</span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
