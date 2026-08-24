/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIIntegration from './components/AIIntegration';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-orange-50 font-sans text-slate-900 selection:bg-indigo-200 selection:text-indigo-950 relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <AIIntegration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
