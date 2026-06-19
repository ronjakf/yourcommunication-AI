import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span>Ihre Marketing-Agentur in Wolfurt</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-8"
          >
            Klare Kommunikation.<br />
            <span className="text-gradient">Sichtbare Erfolge.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Wir bringen Ihre Marke auf den Punkt. Als lokale Agentur entwickeln wir 
            Strategien, die direkt zu Ihren Zielen führen.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="mailto:yourcommunication@gmail.com"
              className="relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] group overflow-hidden"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
              <span className="relative">Jetzt Kontakt aufnehmen</span>
            </a>
            
            <a
              href="#services"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-medium text-zinc-300 transition-colors border border-zinc-800 rounded-full hover:bg-zinc-800/50 hover:text-white group"
            >
              Dienstleistungen entdecken
              <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
    </section>
  );
}
