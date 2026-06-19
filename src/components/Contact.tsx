import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Lassen Sie uns sprechen.
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Bereit, Ihre Marketing Aktivitäten auf das nächste Level zu heben? Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-sm bg-gray-800">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-4 flex-grow">
                  <p className="text-sm text-gray-400 font-medium">E-Mail Adresse</p>
                  <a href="mailto:yourcommunication@gmail.com" className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                    yourcommunication@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-sm bg-gray-800">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400 font-medium">Standort</p>
                  <p className="text-lg font-medium text-white">
                    Wolfurt, Österreich
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-sm">
            <h3 className="text-xl font-bold mb-6">Direktnachricht senden</h3>
            <form className="space-y-4" action="mailto:yourcommunication@gmail.com" method="post" encType="text/plain">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Ihr Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="E-Mail"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="ihre@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Nachricht</label>
                <textarea
                  id="message"
                  name="Nachricht"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Wie können wir helfen?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-sm transition-colors duration-200"
              >
                Anfrage per E-Mail starten
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
