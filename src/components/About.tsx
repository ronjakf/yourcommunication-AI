import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative mb-16 lg:mb-0"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
                  alt="Modernes Maketing-Büro (you) bist wichtig in Wolfurt" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-zinc-950 to-transparent">
                <div className="glass-card px-4 py-2 inline-flex items-center rounded-full">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                  <span className="text-sm font-medium text-white">Lokal in Wolfurt</span>
                </div>
              </div>
            </div>
            
            {/* Decorative abstract shape */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border border-blue-500/30 border-dashed animate-[spin_20s_linear_infinite]" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="text-blue-400 font-medium tracking-widest uppercase mb-4 text-sm">Über Uns</h2>
            <h3 className="font-display text-4xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              Nicht nur Dienstleister.<br />
              <span className="text-zinc-500">Ihr strategischer Partner.</span>
            </h3>
            
            <div className="space-y-6 text-xl text-zinc-400 leading-relaxed font-light">
              <p>
                Als Marketing-Agentur im Herzen von Wolfurt haben wir eine klare Philosophie: <strong className="text-white font-medium">Weniger Lärm, mehr Relevanz.</strong> Wir verzichten auf kompliziertes Agentur-Kauderwelsch und fokussieren uns stattdessen auf das, was wirklich zählt: Ihren Erfolg.
              </p>
              <div className="h-px w-24 bg-blue-500/30 my-8" />
              <p>
                Wir verstehen die lokalen Gegebenheiten und helfen Unternehmen dabei, ihre Sichtbarkeit auszubauen. Mit gezielten Marketing Aktivitäten sorgen wir dafür, dass Ihre Botschaft genau dort ankommt, wo sie wirken soll.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
