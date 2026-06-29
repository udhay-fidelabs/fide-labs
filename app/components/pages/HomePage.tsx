"use client";

import type { PageProps } from "../types";
import HeroSection from "../home/HeroSection";
import ProductShowcase from "../home/ProductShowcase";
import WhyChooseUs from "../home/WhyChooseUs";
import WorkflowTimeline from "../home/WorkflowTimeline";
import Testimonials from "../home/Testimonials";
import FaqSection from "../home/FaqSection";
import CtaBanner from "../home/CtaBanner";

export default function HomePage({ showPage, showToast }: PageProps) {
  return (
    <div className="page active" id="page-home">
      <HeroSection showPage={showPage} showToast={showToast} />
      <ProductShowcase showPage={showPage} />
      <WhyChooseUs showPage={showPage} />
      <WorkflowTimeline />
      <Testimonials />
      <FaqSection />
      <CtaBanner showToast={showToast} />
    </div>
  );
}
