export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="aspect-w-3 aspect-h-2 bg-gray-200 rounded-sm overflow-hidden mb-8 lg:mb-0">
               {/* Minimalist placeholder for an agency team or workspace image */}
              <div className="w-full h-full flex items-center justify-center bg-gray-100 min-h-[400px]">
                <span className="text-gray-400 font-medium tracking-widest uppercase text-sm">Lokale Expertise</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-blue-600 text-sm font-bold tracking-wide uppercase mb-2">Über Uns</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-6">
              (you)r communication
            </h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Als Marketing-Agentur im Herzen von Wolfurt haben wir eine klare Philosophie: Weniger Lärm, mehr Relevanz. Wir verzichten auf kompliziertes Agentur-Kauderwelsch und fokussieren uns stattdessen auf das, was wirklich zählt.
              </p>
              <p>
                Wir verstehen die lokalen Gegebenheiten und helfen Unternehmen dabei, ihre Sichtbarkeit auszubauen. Mit gezielten Marketing Aktivitäten sorgen wir dafür, dass Ihre Botschaft genau dort ankommt, wo sie wirken soll.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
