import PageHero from '../components/shared/PageHero';
import Section from '../components/shared/Section';
import CTASection from '../components/shared/CTASection';

export default function TechTools() {
  const cms = [
    { name: 'WordPress', desc: 'Custom themes, block-based editing, and long-term scalability.' },
    { name: 'Craft CMS', desc: 'Lightweight, secure, and ideal for design-forward content sites.' },
    { name: 'Drupal', desc: 'Enterprise-grade content systems with complex user management.' },
    { name: 'Joomla', desc: 'Robust structure for community or multilingual sites.' },
  ];

  const customDev = [
    { name: 'Laravel', desc: 'Elegant PHP framework for secure, scalable backends.' },
    { name: 'Vue.js', desc: 'Reactive front-end for fluid user interactions.' },
    { name: 'React.js', desc: 'Dynamic interfaces built for speed and reusability.' },
    { name: 'Ruby', desc: 'Reliable and efficient for structured web applications.' },
    { name: 'Python', desc: 'Perfect for automation, AI integrations, and data-rich platforms.' },
    { name: 'Node.js', desc: 'Event-driven architecture for real-time experiences.' },
  ];

  const ecommerce = [
    { name: 'Shopify', desc: 'Fast, secure, and perfect for growing brands.' },
    { name: 'WooCommerce', desc: 'Ideal for content + commerce experiences.' },
    { name: 'Magento', desc: 'Enterprise-grade flexibility for high-volume stores.' },
    { name: 'BigCommerce', desc: 'API-friendly platform for scalable, modern retail.' },
  ];

  const tools = [
    { name: 'Figma', category: 'Design collaboration' },
    { name: 'ClickUp / Asana', category: 'Project tracking' },
    { name: 'GitHub / Bitbucket', category: 'Version control' },
    { name: 'BrowserStack', category: 'Cross-browser QA' },
    { name: 'Slack / Zoom', category: 'Real-time communication' },
  ];

  return (
    <>
      <PageHero
        headline="Tools evolve. Craft remains."
        subhead="We work with modern platforms and frameworks that give designers freedom, developers control, and clients results that last."
        ctaPrimary={{ text: 'Start a Discovery Call', href: '/contact' }}
      />

      <Section
        headline="Technology serves creativity — not the other way around."
        subheadline="Our Philosophy"
        copy="We don't chase trends or overcomplicate builds. Our tech choices are guided by purpose — using proven tools, clean code, and efficient systems that bring design ideas to life beautifully."
        centered
      />

      <Section headline="Our foundation of reliability and performance." subheadline="Core Stack Overview" centered>
        <p className="text-neutral-300 max-w-3xl mx-auto mb-12">
          We use a mix of modern frameworks and trusted platforms — chosen not for trends, but for purpose. Each tool serves one goal: helping design and code work together effortlessly.
        </p>

        <div className="space-y-16 mt-16">
          <div>
            <h3 className="text-2xl font-medium mb-8 text-center">CMS Platforms</h3>
            <p className="text-neutral-400 text-center mb-8 max-w-2xl mx-auto">
              Built for flexibility, content control, and seamless publishing experiences.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {cms.map((item) => (
                <div key={item.name} className="glass-panel p-6">
                  <h4 className="text-lg font-medium mb-2 text-vivid-orange">{item.name}</h4>
                  <p className="text-neutral-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-12">
            <h3 className="text-2xl font-medium mb-8 text-center">Custom Development</h3>
            <p className="text-neutral-400 text-center mb-8 max-w-2xl mx-auto">
              When your idea deserves its own framework, we craft it from the ground up.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customDev.map((item) => (
                <div key={item.name} className="glass-panel p-6">
                  <h4 className="text-lg font-medium mb-2 text-vivid-orange">{item.name}</h4>
                  <p className="text-neutral-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-8 text-center">eCommerce Development</h3>
            <p className="text-neutral-400 text-center mb-8 max-w-2xl mx-auto">
              Where design meets conversion. We build stores that perform beautifully and scale smoothly.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {ecommerce.map((item) => (
                <div key={item.name} className="glass-panel p-6">
                  <h4 className="text-lg font-medium mb-2 text-vivid-orange">{item.name}</h4>
                  <p className="text-neutral-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section headline="Clarity at every step." subheadline="Collaboration & Versioning" centered className="bg-white/5">
        <p className="text-neutral-300 max-w-3xl mx-auto mb-12">
          We work in systems that make collaboration easy — for both internal teams and external partners.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tools.map((tool) => (
            <div key={tool.name} className="glass-panel p-6">
              <h4 className="text-lg font-medium mb-1">{tool.name}</h4>
              <p className="text-neutral-400 text-sm">{tool.category}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 text-sm mt-12 max-w-3xl mx-auto">
          Every build stays organized, traceable, and transparent — no surprises, just structure.
        </p>
      </Section>

      <CTASection
        headline="Let's choose the right stack for your next project."
        subhead="Tell us what you're building — we'll help you match vision with the perfect technology."
        ctaPrimary={{ text: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
