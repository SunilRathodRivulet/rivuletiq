import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import Section from '../components/shared/Section';
import ResumeUpload from '../components/ResumeUpload';
import { Mail, Calendar, Send, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <PageHero
        headline="Let's build what's next."
        subhead="Whether you're an agency partner, a founder with a vision, or a creative mind looking to join our team — we'd love to hear your story."
      />

      <Section
        headline="We're just a conversation away."
        subheadline="Why Reach Out"
        copy="Every project, partnership, or idea begins with a simple talk. No forms hidden behind layers, no 'contact later' promises — just real people, ready to understand what you're building and how we can help."
        centered
      />

      <div className="pt-20 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Get in Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: Calendar,
                  title: 'Discovery Call',
                  description: 'Schedule a short conversation with our team to explore your goals and see if we\'re the right fit.',
                  action: { type: 'link', text: 'Book a Call', href: '/contact' }
                },
                {
                  icon: Mail,
                  title: 'Email',
                  description: 'Prefer to write it out? Send us a note — we respond within 1 business day.',
                  action: { type: 'email', text: 'contact@rivuletiq.com', href: 'mailto:contact@rivuletiq.com' }
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  description: 'Give us a call to discuss your project.',
                  action: { type: 'phone', text: '+91 879 922 5285', href: 'tel:+918799225285' }
                },
                {
                  icon: Send,
                  title: 'Careers',
                  description: 'Interested in joining the team?',
                  action: { type: 'email', text: 'hr@rivuletiq.com', href: 'mailto:hr@rivuletiq.com' }
                }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="glass-panel p-4 sm:p-6 h-full relative overflow-hidden hover:scale-105 transition-all duration-300">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-vivid-orange/5 to-vivid-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon Container */}
                      <div className="relative z-10 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-vivid-orange/20 border border-vivid-orange/30 flex items-center justify-center group-hover:bg-vivid-orange/30 group-hover:border-vivid-orange/50 group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-vivid-orange" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-vivid-orange transition-colors">{contact.title}</h3>
                        <p className="text-neutral-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm group-hover:text-neutral-200 transition-colors">
                          {contact.description}
                        </p>
                        {contact.action.type === 'link' ? (
                          <Link to={contact.action.href} className="btn-primary inline-block text-xs sm:text-sm px-3 sm:px-4 py-2 group-hover:bg-vivid-orange/90 transition-colors">
                            {contact.action.text}
                          </Link>
                        ) : (
                          <a href={contact.action.href} className="text-vivid-orange hover:underline text-xs sm:text-sm font-medium group-hover:text-vivid-orange/80 transition-colors">
                            {contact.action.text}
                          </a>
                        )}
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

          {/* Resume Upload and Message Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Resume Upload - Left Side */}
            <div className="flex flex-col">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Join Our Team</h3>
                <p className="text-neutral-300 text-sm sm:text-base">Ready to be part of our creative journey? Upload your resume and we'll help you get started.</p>
              </div>
              <div className="flex-1">
                <ResumeUpload />
              </div>
            </div>

            {/* Message Form - Right Side */}
            <div className="flex flex-col">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Send Us a Message</h3>
                <p className="text-neutral-300 text-sm sm:text-base">Ready to start your project? Tell us about your vision and we'll help bring it to life.</p>
              </div>
              
              <div className="flex-1">
                <div className="glass-panel p-6 sm:p-8 lg:p-10 h-full">
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none transition-colors text-white placeholder-neutral-400 text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none transition-colors text-white placeholder-neutral-400 text-sm sm:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-white">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none transition-colors text-white placeholder-neutral-400 text-sm sm:text-base"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="project" className="block text-sm font-medium mb-2 text-white">
                        Project Type *
                      </label>
                      <select
                        id="project"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none transition-colors text-white text-sm sm:text-base"
                      >
                        <option value="">Select Project Type</option>
                        <option value="website">Website Design & Development</option>
                        <option value="webapp">Web App / SaaS</option>
                        <option value="ecommerce">eCommerce</option>
                        <option value="ai">AI Solutions</option>
                        <option value="audit">Audit & Review</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2 text-white">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none transition-colors text-white text-sm sm:text-base"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                      <option value="discuss">Let's Discuss</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none transition-colors resize-none text-white placeholder-neutral-400 text-sm sm:text-base"
                      placeholder="Share your vision, goals, timeline, and any specific requirements..."
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 items-center">
                    <button type="submit" className="btn-primary flex-1 text-base sm:text-lg py-3 sm:py-4 hover:bg-vivid-orange/90 transition-colors">
                      Send Message
                    </button>
                    <div className="text-xs sm:text-sm text-neutral-400 text-center sm:text-left flex items-center">
                      We'll respond within 24 hours
                    </div>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
