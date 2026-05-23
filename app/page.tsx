"use client";

import { HomePageLayout } from "@/components/layout/HomePageLayout";

import { HeroSection } from "@/page-components/home/HeroSection";
import { CoreFeaturesSection } from "@/page-components/home/CoreFeaturesSection";
import { UseCasesSection } from "@/page-components/home/UseCasesSection";
import { BentoShowcaseSection } from "@/page-components/home/BentoShowcaseSection";
import { ComponentShowcaseSection } from "@/page-components/home/ComponentShowcaseSection";
import { DeveloperExperienceSection } from "@/page-components/home/DeveloperExperienceSection";
import { GettingStartedSection } from "@/page-components/home/GettingStartedSection";
import { CtaSection } from "@/page-components/home/CtaSection";

export default function Page() {
  return (
    <HomePageLayout>
      <HeroSection />
      <CoreFeaturesSection />
      <UseCasesSection />
      <BentoShowcaseSection />
      <ComponentShowcaseSection />
      <DeveloperExperienceSection />
      <GettingStartedSection />
      <CtaSection />
    </HomePageLayout>
  );
}
