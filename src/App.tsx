/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { HeroSection, AboutSection } from './components/HeroAbout';
import { ResumeSection } from './components/ResumeSection';
import { PortfolioSection, ContactSection, CertificatesGallery } from './components/PortfolioContact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50 font-sans selection:bg-blue-500/30 p-4 md:p-5">
      <Navigation />
      <main className="max-w-[1200px] mx-auto pt-24 pb-8 grid lg:grid-cols-[280px_1fr_280px] gap-4 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <HeroSection />
          <ContactSection />
        </div>
        
        {/* Middle Column */}
        <div className="flex flex-col gap-4">
          <AboutSection />
          <ResumeSection />
          
        </div>
        
        {/* Right Column */}
        <div className="flex flex-col gap-4">
          
          <PortfolioSection />
          
          <CertificatesGallery />
          
        </div>
      </main>
    </div>
  );
}
