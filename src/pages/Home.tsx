import Hero from '../components/Hero';
import DualIntro from '../components/DualIntro';
import ProofBar from '../components/ProofBar';
import FeaturedCase from '../components/FeaturedCase';
import WhatWeCreate from '../components/WhatWeCreate';
import DesignPhilosophy from '../components/DesignPhilosophy';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <DualIntro />
      <ProofBar />
      <FeaturedCase />
      <WhatWeCreate />
      <DesignPhilosophy />
      <FinalCTA />
    </>
  );
}
