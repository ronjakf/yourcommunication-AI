import { BarChart3, Target, Megaphone } from 'lucide-react';

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

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 text-sm font-bold tracking-wide uppercase mb-2">Unsere Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Wirksame Marketing Aktivitäten
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Gezielte Maßnahmen für Ihren Geschäftserfolg. Minimalistisch im Ansatz, stark in der Wirkung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex flex-col bg-gray-50 p-8 rounded-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-blue-100 text-blue-600 mb-6">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
