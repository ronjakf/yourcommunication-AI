import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-bold text-xl tracking-tight text-gray-900">
              (you)<span className="text-blue-600">r</span> communication
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Leistungen</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Über uns</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Kontakt</a>
          </nav>

          <div className="hidden md:flex">
            <a
              href="mailto:yourcommunication@gmail.com"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Anfrage senden
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Leistungen
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
            <a
              href="mailto:yourcommunication@gmail.com"
              className="block w-full text-center mt-4 px-3 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Anfrage senden
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
