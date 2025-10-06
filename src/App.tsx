import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatWeCreatePage from './pages/WhatWeCreate';
import DesignCreative from './pages/create/DesignCreative';
import Websites from './pages/create/Websites';
import WebAppsSaaS from './pages/create/WebAppsSaaS';
import ECommerce from './pages/create/ECommerce';
import AISolutions from './pages/create/AISolutions';
import Audits from './pages/create/Audits';
import HowWeDeliver from './pages/HowWeDeliver';
import WaysToWork from './pages/WaysToWork';
import TechTools from './pages/TechTools';
import About from './pages/About';
import OpenRoles from './pages/careers/OpenRoles';
import LifeGrowth from './pages/careers/LifeGrowth';
import Learning from './pages/careers/Learning';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<WhatWeCreatePage />} />
            <Route path="/create/design" element={<DesignCreative />} />
            <Route path="/create/websites" element={<Websites />} />
            <Route path="/create/web-apps-saas" element={<WebAppsSaaS />} />
            <Route path="/create/ecommerce" element={<ECommerce />} />
            <Route path="/create/ai-solutions" element={<AISolutions />} />
            <Route path="/create/audits" element={<Audits />} />
            <Route path="/deliver" element={<HowWeDeliver />} />
            <Route path="/engage" element={<WaysToWork />} />
            <Route path="/tech" element={<TechTools />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers/open-roles" element={<OpenRoles />} />
            <Route path="/careers/life-growth" element={<LifeGrowth />} />
            <Route path="/careers/learning" element={<Learning />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
