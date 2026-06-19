import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center px-6 py-4 rounded-2xl transition-all duration-500 ${
          isScrolled ? 'glass shadow-2xl shadow-blue-500/5' : 'bg-transparent'
        }`}>
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-display font-bold text-2xl tracking-tighter text-white">
              (you)<span className="text-blue-400">r</span><span className="text-zinc-500 font-medium ml-2 text-xl">communication</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-10">
            {['Leistungen', 'Über uns', 'Kontakt'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href="mailto:yourcommunication@gmail.com"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-blue-600"></span>
              <span className="relative">Anfrage senden</span>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-zinc-400 hover:text-white transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            key="mobile-menu"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 px-4"
          >
            <div className="glass rounded-2xl p-4 shadow-2xl flex flex-col space-y-2">
              {['Leistungen', 'Über uns', 'Kontakt'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="block px-4 py-3 text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="mailto:yourcommunication@gmail.com"
                className="block text-center mt-4 px-4 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Anfrage senden
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
