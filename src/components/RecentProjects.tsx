import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tilt3D from './Tilt3D';
import AnimatedBackground from './AnimatedBackground';
import portfolioData from '../data/portfolioData.json';

interface Project {
  category: string;
  title: string;
  description: string;
  metrics: Array<{ value: string; label: string }>;
  features: string[];
  tech: string[];
  image?: string;
  liveUrl?: string;
}

export default function RecentProjects() {
  // Convert portfolio data to project format
  const projects: Project[] = portfolioData.map(client => ({
    category: client.category,
    title: client.client_name,
    description: client.description,
    metrics: client.metrics,
    features: client.features,
    tech: client.tech,
    image: client.photo_links[0]?.replace('public/', '/'),
    liveUrl: client.client_website,
  }));

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <AnimatedBackground particleCount={35} opacity={0.3} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Design that thinks. Code that <span className="text-vivid-orange">feels</span>.
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            We measure success not in pixels but in purpose.
            <br /><br />
            Each project is a reflection of the brands we help shape — intelligent, intuitive, and built to grow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/portfolio" className="btn-primary">
              View Full Portfolio
            </Link>
            <Link to="/deliver" className="btn-outline">
              See Our Approach
            </Link>
          </div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
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
                      {project.category}
                    </span>
                    <h3 className="mt-2 mb-4">{project.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-white/10">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx}>
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
                    <h4 className="text-lg mb-4 font-medium">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
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
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-vivid-orange/10 text-vivid-orange border border-vivid-orange/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href={project.liveUrl || '#'} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                      <ExternalLink className="inline-block mr-2 w-5 h-5" />
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                <Tilt3D intensity={10}>
                  <div className="relative">
                    <div className="glass-panel p-4 glow-orange">
                      <div className="aspect-video bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg overflow-hidden relative group">
                        {project.image ? (
                          <>
                            <img
                              src={project.image}
                              alt={project.title}
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
                                  Project Preview
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
    </section>
  );
}
