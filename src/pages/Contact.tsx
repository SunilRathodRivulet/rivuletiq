import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import Section from '../components/shared/Section';
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
            <div className="glass-panel p-8">
              <div className="w-14 h-14 rounded-xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-vivid-orange" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Discovery Call</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Schedule a short conversation with our team to explore your goals and see if we're the right fit.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Book a Call
              </Link>
            </div>

            <div className="glass-panel p-8">
              <div className="w-14 h-14 rounded-xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-vivid-orange" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Email</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Prefer to write it out? Send us a note — we respond within 1 business day.
              </p>
              <a href="mailto:contact@rivuletiq.com" className="text-vivid-orange hover:underline text-lg">
                contact@rivuletiq.com
              </a>
            </div>

            <div className="glass-panel p-8">
              <div className="w-14 h-14 rounded-xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-vivid-orange" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Phone</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Give us a call to discuss your project.
              </p>
              <a href="tel:+918799225285" className="text-vivid-orange hover:underline text-lg">
                +91 879 922 5285
              </a>
            </div>

            <div className="glass-panel p-8">
              <div className="w-14 h-14 rounded-xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mb-6">
                <Send className="w-7 h-7 text-vivid-orange" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Careers</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Interested in joining the team?
              </p>
              <a href="mailto:careers@rivuletiq.com" className="text-vivid-orange hover:underline text-lg">
                careers@rivuletiq.com
              </a>
            </div>
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

      <Section
        headline="We call Ahmedabad home."
        subheadline="Our Space"
        copy="Our studio is built around light, conversation, and creativity — a space where ideas move freely and work feels personal."
        centered
        className="bg-white/5"
      >
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-8">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-vivid-orange flex-shrink-0 mt-1" />
              <div>
                <p className="text-neutral-300 leading-relaxed">
                  1316-1324, Zion Z1, Nr. Avlon Hotel,<br />
                  Sindhubhavan Marg, Bodakdev,<br />
                  Ahmedabad 380054, Gujarat, India
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/Rivulet+IQ/@23.0453064,72.5073834,19z/data=!3m1!4b1!4m6!3m5!1s0x395e9b9f80664945:0x6dfe6d4a86edd3c2!8m2!3d23.0453052!4d72.5080271!16s%2Fg%2F11wv2625wb?coh=225987&entry=tts&g_ep=EgoyMDI1MDEwNy4wIPu8ASoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-block"
            >
              View on Google Maps
            </a>
          </div>
          <p className="text-neutral-400 mt-6 text-center">
            Drop by for a coffee, a chat, or a brainstorming session.
          </p>
        </div>
      </Section>
    </>
  );
}
