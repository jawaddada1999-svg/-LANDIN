/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoSection } from './components/VideoSection';
import { PipelineSteps } from './components/PipelineSteps';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { ComparisonSection } from './components/ComparisonSection';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToBooking = useCallback(() => {
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToVideo = useCallback(() => {
    const el = document.getElementById('video-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0d10] text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-neutral-950">
      {/* Top Bar Contract (3 Zones, Single Line) */}
      <Navbar onBookClick={scrollToBooking} onWatchVideoClick={scrollToVideo} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onBookClick={scrollToBooking} onWatchVideoClick={scrollToVideo} />

        {/* Video Walkthrough Section (requested: "ايكون فيها فيديو") */}
        <VideoSection onBookClick={scrollToBooking} />

        {/* How It Works: From First Message to Property Visit (4 Steps) */}
        <PipelineSteps />

        {/* Interactive Live WhatsApp Qualifier Simulator in Moroccan Darija */}
        <InteractiveSimulator />

        {/* Comparison: Traditional Agency vs AqarFlow */}
        <ComparisonSection />

        {/* Interactive ROI & Agency Commission Calculator */}
        <RoiCalculator onBookClick={scrollToBooking} />

        {/* Moroccan Agency Proof & Case Studies */}
        <CaseStudiesSection />

        {/* Interactive Appointment & Demo Booking Section (requested: "وحجز موعد") */}
        <BookingSection />

        {/* Real Estate Agency FAQ in Darija */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
