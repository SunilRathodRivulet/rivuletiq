import Header from './components/Header';
import Hero from './components/Hero';
import DualIntro from './components/DualIntro';
import ProofBar from './components/ProofBar';
import FeaturedCase from './components/FeaturedCase';
import WhatWeCreate from './components/WhatWeCreate';
import DesignPhilosophy from './components/DesignPhilosophy';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DualIntro />
        <ProofBar />
        <FeaturedCase />
        <WhatWeCreate />
        <DesignPhilosophy />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
