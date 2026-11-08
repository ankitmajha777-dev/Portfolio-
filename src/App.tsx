/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorksSection } from './components/WorksSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WorksSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
    </div>
  );
}
