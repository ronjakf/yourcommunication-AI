/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen font-sans text-zinc-50 bg-zinc-950 selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden">
      <div className="bg-noise"></div>
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
