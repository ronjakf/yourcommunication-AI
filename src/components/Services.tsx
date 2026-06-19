import { BarChart3, Target, Megaphone } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Marketing Strategie',
    description: 'Wir entwickeln fundierte Konzepte, die Ihre Marke nachhaltig positionieren und Ihre Zielgruppe präzise erreichen.',
    icon: Target,
  },
  {
    title: 'Kommunikation & Kampagnen',
    description: 'Kreative Marketing Aktivitäten, die auffallen. Von der Idee bis zur erfolgreichen Umsetzung über alle relevanten Kanäle.',
    icon: Megaphone,
  },
  {
    title: 'Performance & Analyse',
    description: 'Messbare Erfolge durch kontinuierliche Optimierung. Wir werten Daten aus und passen Strategien für maximalen ROI an.',
    icon: BarChart3,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-indigo-400 font-medium tracking-widest uppercase mb-4 text-sm">Unsere Expertise</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Wirksame Marketing Aktivitäten
            </h3>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Gezielte Maßnahmen für Ihren Geschäftserfolg. Minimalistisch im Ansatz, <span className="text-zinc-200 font-medium">stark in der Wirkung.</span>
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                variants={item}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
                <div className="relative h-full flex flex-col glass-card border border-white/5 hover:border-indigo-500/30 p-8 lg:p-10 rounded-3xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="h-14 w-14 rounded-2xl bg-zinc-800 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-300">
                    <Icon className="h-6 w-6 text-zinc-300 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-zinc-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
