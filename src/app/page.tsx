import { Hero } from "@/components/Hero";
import { StatBand } from "@/components/StatBand";
import { WhatIsGraves } from "@/components/WhatIsGraves";
import { Symptoms } from "@/components/Symptoms";
import { Impact } from "@/components/Impact";
import { TreatmentGap } from "@/components/TreatmentGap";
import { StoriesTeaser } from "@/components/StoriesTeaser";
import { References } from "@/components/References";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBand />
      <WhatIsGraves />
      <Symptoms />
      <Impact />
      <TreatmentGap />
      <StoriesTeaser />
      <References />
    </>
  );
}
