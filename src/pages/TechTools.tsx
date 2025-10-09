import PageHero from '../components/shared/PageHero';
import Section from '../components/shared/Section';
import CTASection from '../components/shared/CTASection';
import { Database, Code, ShoppingCart, Palette, Calendar, GitCommit, Monitor, MessageSquare } from 'lucide-react';

export default function TechTools() {
  const cms = [
    { name: 'WordPress', desc: 'Custom themes, block-based editing, and long-term scalability.', icon: Database },
    { name: 'Craft CMS', desc: 'Lightweight, secure, and ideal for design-forward content sites.', icon: Database },
    { name: 'Drupal', desc: 'Enterprise-grade content systems with complex user management.', icon: Database },
    { name: 'Joomla', desc: 'Robust structure for community or multilingual sites.', icon: Database },
  ];

  const customDev = [
    { name: 'Laravel', desc: 'Elegant PHP framework for secure, scalable backends.', icon: Code },
    { name: 'Vue.js', desc: 'Reactive front-end for fluid user interactions.', icon: Code },
    { name: 'React.js', desc: 'Dynamic interfaces built for speed and reusability.', icon: Code },
    { name: 'Ruby', desc: 'Reliable and efficient for structured web applications.', icon: Code },
    { name: 'Python', desc: 'Perfect for automation, AI integrations, and data-rich platforms.', icon: Code },
    { name: 'Node.js', desc: 'Event-driven architecture for real-time experiences.', icon: Code },
  ];

  const ecommerce = [
    { name: 'Shopify', desc: 'Fast, secure, and perfect for growing brands.', icon: ShoppingCart },
    { name: 'WooCommerce', desc: 'Ideal for content + commerce experiences.', icon: ShoppingCart },
    { name: 'Magento', desc: 'Enterprise-grade flexibility for high-volume stores.', icon: ShoppingCart },
    { name: 'BigCommerce', desc: 'API-friendly platform for scalable, modern retail.', icon: ShoppingCart },
  ];

  const tools = [
    { name: 'Figma', category: 'Design collaboration', icon: Palette },
    { name: 'ClickUp / Asana', category: 'Project tracking', icon: Calendar },
    { name: 'GitHub / Bitbucket', category: 'Version control', icon: GitCommit },
    { name: 'BrowserStack', category: 'Cross-browser QA', icon: Monitor },
    { name: 'Slack / Zoom', category: 'Real-time communication', icon: MessageSquare },
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
            <div className="grid md:grid-cols-2 gap-8">
              {cms.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="group relative">
                    <div className="glass-panel p-8 h-full relative overflow-hidden hover:scale-105 transition-all duration-300">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-vivid-orange/5 to-vivid-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon Container */}
                      <div className="relative z-10 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-vivid-orange/20 border border-vivid-orange/30 flex items-center justify-center group-hover:bg-vivid-orange/30 group-hover:border-vivid-orange/50 group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-8 h-8 text-vivid-orange" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-vivid-orange transition-colors">{item.name}</h4>
                        <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">{item.desc}</p>
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-vivid-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-vivid-orange group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-12">
            <h3 className="text-2xl font-medium mb-8 text-center">Custom Development</h3>
            <p className="text-neutral-400 text-center mb-8 max-w-2xl mx-auto">
              When your idea deserves its own framework, we craft it from the ground up.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customDev.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="group relative">
                    <div className="glass-panel p-8 h-full relative overflow-hidden hover:scale-105 transition-all duration-300">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-vivid-orange/5 to-vivid-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon Container */}
                      <div className="relative z-10 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-vivid-orange/20 border border-vivid-orange/30 flex items-center justify-center group-hover:bg-vivid-orange/30 group-hover:border-vivid-orange/50 group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-8 h-8 text-vivid-orange" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-vivid-orange transition-colors">{item.name}</h4>
                        <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">{item.desc}</p>
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-vivid-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-vivid-orange group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-8 text-center">eCommerce Development</h3>
            <p className="text-neutral-400 text-center mb-8 max-w-2xl mx-auto">
              Where design meets conversion. We build stores that perform beautifully and scale smoothly.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {ecommerce.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="group relative">
                    <div className="glass-panel p-8 h-full relative overflow-hidden hover:scale-105 transition-all duration-300">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-vivid-orange/5 to-vivid-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon Container */}
                      <div className="relative z-10 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-vivid-orange/20 border border-vivid-orange/30 flex items-center justify-center group-hover:bg-vivid-orange/30 group-hover:border-vivid-orange/50 group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-8 h-8 text-vivid-orange" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-vivid-orange transition-colors">{item.name}</h4>
                        <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">{item.desc}</p>
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-vivid-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-vivid-orange group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section headline="Clarity at every step." subheadline="Collaboration & Versioning" centered className="bg-white/5">
        <p className="text-neutral-300 max-w-3xl mx-auto mb-12">
          We work in systems that make collaboration easy — for both internal teams and external partners.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className="group relative">
                <div className="glass-panel p-8 h-full relative overflow-hidden hover:scale-105 transition-all duration-300">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vivid-orange/5 to-vivid-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-vivid-orange/20 border border-vivid-orange/30 flex items-center justify-center group-hover:bg-vivid-orange/30 group-hover:border-vivid-orange/50 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-vivid-orange" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-vivid-orange transition-colors">{tool.name}</h4>
                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">{tool.category}</p>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vivid-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-vivid-orange group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
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
