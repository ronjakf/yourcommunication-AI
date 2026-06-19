import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
            Ihre Marketing-Agentur in Wolfurt
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Klare Kommunikation.<br />
            <span className="text-blue-600">Sichtbare Erfolge.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Wir bringen Ihre Marke auf den Punkt. Als lokale Agentur für Marketing Aktivitäten entwickeln wir Strategien, die direkt zu Ihren Zielen führen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:yourcommunication@gmail.com"
              className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-base font-medium rounded-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all duration-200"
            >
              Jetzt Kontakt aufnehmen
            </a>
            <a
              href="#services"
              className="inline-flex justify-center items-center px-6 py-3.5 border border-gray-300 text-base font-medium rounded-sm text-gray-700 bg-white hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
            >
              Dienstleistungen ansehen
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/40 to-transparent blur-3xl" />
      </div>
    </section>
  );
}
