import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import Section from '../components/shared/Section';
import ResumeUpload from '../components/ResumeUpload';
import { Mail, MapPin, Calendar, Send, Phone } from 'lucide-react';

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

      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
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
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-vivid-orange transition-colors">{contact.title}</h3>
                      <p className="text-neutral-300 mb-6 leading-relaxed group-hover:text-neutral-200 transition-colors">
                        {contact.description}
                      </p>
                      {contact.action.type === 'link' ? (
                        <Link to={contact.action.href} className="btn-primary inline-block group-hover:bg-vivid-orange/90 transition-colors">
                          {contact.action.text}
                        </Link>
                      ) : (
                        <a href={contact.action.href} className="text-vivid-orange hover:underline text-lg font-medium group-hover:text-vivid-orange/80 transition-colors">
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

          <div className="glass-panel p-8 lg:p-10">
            <h3 className="text-2xl font-medium mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none transition-colors"
                >
                  <option>Website Design & Development</option>
                  <option>Web App / SaaS</option>
                  <option>eCommerce</option>
                  <option>AI Solutions</option>
                  <option>Audit & Review</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none transition-colors resize-none"
                  placeholder="Share your vision, goals, and any specific requirements..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Resume Upload Section */}
      <Section
        headline="Ready to join our team?"
        subheadline="Send Your Resume"
        copy="Upload your resume and we'll help you send it directly to our HR team. We're always looking for talented individuals to join our creative journey."
        centered
        className="bg-white/5"
      >
        <div className="max-w-2xl mx-auto">
          <ResumeUpload />
        </div>
      </Section>

    </>
  );
}
