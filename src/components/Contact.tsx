import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950 to-zinc-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 mb-16 lg:mb-0"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Lassen Sie uns <span className="text-gradient-blue">zusammenarbeiten.</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-md font-light leading-relaxed">
              Bereit, Ihre Marketing Aktivitäten auf das nächste Level zu heben? 
              Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:yourcommunication@gmail.com" className="group flex items-start p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full border border-white/10 bg-zinc-900 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors">
                  <Mail className="h-5 w-5 text-indigo-400" />
                </div>
                <div className="ml-6 flex-grow">
                  <p className="text-sm text-zinc-500 font-medium mb-1 uppercase tracking-wider">Lassen Sie uns schreiben</p>
                  <p className="text-xl font-display text-white group-hover:text-indigo-300 transition-colors flex items-center">
                    yourcommunication@gmail.com
                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </p>
                </div>
              </a>
              
              <div className="flex items-start p-4 -ml-4">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full border border-white/10 bg-zinc-900">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                </div>
                <div className="ml-6">
                  <p className="text-sm text-zinc-500 font-medium mb-1 uppercase tracking-wider">Standort</p>
                  <p className="text-xl font-display text-white">
                    Wolfurt, Österreich
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass shadow-2xl shadow-black/50 p-8 sm:p-12 rounded-[2rem] border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-display font-bold text-white mb-8">Senden Sie uns eine Nachricht</h3>
              
              <form className="space-y-6 relative z-10" action="mailto:yourcommunication@gmail.com" method="post" encType="text/plain">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      className="w-full px-5 py-4 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="Max Mustermann"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400">E-Mail</label>
                    <input
                      type="email"
                      id="email"
                      name="E-Mail"
                      className="w-full px-5 py-4 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="mail@beispiel.at"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400">Nachricht</label>
                  <textarea
                    id="message"
                    name="Nachricht"
                    rows={4}
                    className="w-full px-5 py-4 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    placeholder="Wie können wir Ihr Marketing verbessern?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-indigo-600 rounded-xl hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span className="relative flex items-center">
                    Anfrage absenden
                    <ArrowUpRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
