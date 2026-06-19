export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
           <span className="font-bold text-xl tracking-tight text-white">
              (you)<span className="text-blue-500">r</span> communication
            </span>
            <p className="mt-2 text-sm text-gray-500">
              Ihre Marketing-Agentur in Wolfurt.
            </p>
        </div>
        
        <div className="flex space-x-6 text-sm">
          <a href="#services" className="hover:text-blue-400 transition-colors">
            Leistungen
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-900 text-sm text-center md:text-left text-gray-600 flex flex-col md:flex-row justify-between">
        <p>&copy; {currentYear} (you)r communication. Alle Rechte vorbehalten.</p>
        <div className="mt-4 md:mt-0 flex space-x-4 justify-center">
          <a href="#" className="hover:text-gray-300 transition-colors">Impressum</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
