import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append("emailAddress", email);
    formData.append("entry.461691355", name);
    formData.append("entry.903271772", message);
  
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfjbcZCppBgjLo-cTb6GifZDmUZ2imRBek4lDhba5FpN0p1Wg/formResponse", {
        method: "POST",
        mode: "no-cors",
        body: formData
    }).then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
    }).catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl shadow-slate-200/50 rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-6 leading-[1.1]">Ready to Scale Your Technology?</h2>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Whether you need to integrate generative AI, optimize cloud costs, or bring in experienced technical leadership, Galbrain is ready to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-12 h-12 bg-white/60 backdrop-blur-md rounded-xl flex items-center justify-center shadow-sm border border-white/80">
                    <Mail className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="font-bold text-indigo-950 text-lg">contact@galbrain.com</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-12 h-12 bg-white/60 backdrop-blur-md rounded-xl flex items-center justify-center shadow-sm border border-white/80">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="font-bold text-indigo-950 text-lg">Bangkok, Thailand (Available across SEA & Australia)</span>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white/80 h-full">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[300px]"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-indigo-950 mb-4">Message Sent!</h3>
                  <p className="text-slate-600 max-w-sm">
                    Thank you for reaching out. We have received your message and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-black text-indigo-950 mb-6">Send a Message</h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/80 bg-white/50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/80 bg-white/50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" 
                        placeholder="john@company.com" 
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">How can we help?</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/80 bg-white/50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none shadow-sm" 
                        placeholder="Tell us about your project or technical needs..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors mt-4 shadow-xl shadow-indigo-100"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="w-4 h-4" />}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
