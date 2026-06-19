import { CheckCircle2 } from 'lucide-react';

const trustPoints = [
  {
    title: 'Lokal verankert in Wolfurt',
    description: 'Wir kennen die Region und den lokalen Markt. Kurze Wege und persönliche Ansprechpartner sind unser Standard.'
  },
  {
    title: 'Klare Kommunikation',
    description: 'Keine versteckten Kosten, kein Fachjargon. Wir sprechen Ihre Sprache und erklären jeden Schritt transparent.'
  },
  {
    title: 'Fokus auf Ergebnisse',
    description: 'Schönes Design allein reicht nicht. Unsere Marketing Aktivitäten sind darauf ausgerichtet, messbaren Mehrwert zu schaffen.'
  },
  {
    title: 'Minimalistisch & Effizient',
    description: 'Wir konzentrieren uns auf das Wesentliche. Zeitgemäßes Marketing, das direkt auf den Punkt kommt.'
  }
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Warum (you) bist wichtig?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
