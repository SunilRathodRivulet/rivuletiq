import { ExternalLink } from 'lucide-react';
import Tilt3D from '../components/Tilt3D';
import AnimatedBackground from '../components/AnimatedBackground';
import PageHero from '../components/shared/PageHero';
import portfolioData from '../data/portfolioData.json';

interface Client {
  client_name: string;
  description: string;
  client_website: string;
  photo_links: string[];
  category: string;
  metrics: Array<{ value: string; label: string }>;
  features: string[];
  tech: string[];
}

export default function Portfolio() {
  const clients: Client[] = portfolioData;

  return (
    <>

      <section className="relative py-32 px-6 overflow-hidden">
        <AnimatedBackground particleCount={40} opacity={0.2} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Featured Client Showcase */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Featured Work</h3>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Take a closer look at some of our most impactful projects
              </p>
            </div>

            <div className="space-y-24">
              {clients.slice(0, 3).map((client, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="glass-panel p-8 lg:p-10">
                      <div className="mb-6">
                        <span className="text-sm font-light text-vivid-orange uppercase tracking-wider">
                          {client.category}
                        </span>
                        <h3 className="mt-2 mb-4 text-3xl">{client.client_name}</h3>
                        <p className="text-neutral-400 leading-relaxed text-lg">
                          {client.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 py-6 border-y border-white/10">
                        {client.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center sm:text-left">
                            <div className="text-2xl lg:text-3xl font-bold text-vivid-orange mb-1">
                              {metric.value}
                            </div>
                            <div className="text-xs lg:text-sm text-neutral-400 font-light">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg mb-4 font-medium">Project Highlights</h4>
                        <ul className="space-y-3">
                          {client.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-neutral-300"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-vivid-orange flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {client.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full bg-vivid-orange/10 text-vivid-orange border border-vivid-orange/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <a 
                          href={client.client_website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-primary group"
                        >
                          <ExternalLink className="inline-block mr-2 w-5 h-5" />
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                    <Tilt3D intensity={10}>
                      <div className="relative">
                        <div className="glass-panel p-4 glow-orange">
                          <div className="aspect-video bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg overflow-hidden relative group">
                            {client.photo_links[0] ? (
                              <>
                                <img
                                  src={client.photo_links[0].replace('public/', '/')}
                                  alt={client.client_name}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-vivid-orange/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </>
                            ) : (
                              <>
                                <div className="absolute inset-0 bg-gradient-to-tr from-vivid-orange/20 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-vivid-orange/20 flex items-center justify-center border border-vivid-orange/30">
                                      <div className="w-0 h-0 border-l-[15px] border-l-vivid-orange border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                                    </div>
                                    <p className="text-sm text-neutral-400 font-light">
                                      {client.client_name}
                                    </p>
                                  </div>
                                </div>
                              </>
                            )}

                            <div className="absolute top-4 left-4 right-4 flex gap-2">
                              <div className="w-3 h-3 rounded-full bg-red-500/50" />
                              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                              <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                          </div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-vivid-orange/20 rounded-full blur-3xl" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-vivid-orange/10 rounded-full blur-3xl" />
                      </div>
                    </Tilt3D>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-24">
            <div className="glass-panel p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">Ready to join our portfolio?</h3>
              <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Our team is ready to help you 
                build a digital presence that truly represents your brand.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Start Your Project
                </a>
                <a href="/deliver" className="btn-outline">
                  Our Process
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
