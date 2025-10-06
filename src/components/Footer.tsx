import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: 'Design & Creative', href: '/create/design' },
      { label: 'Websites', href: '/create/websites' },
      { label: 'Web Apps & SaaS', href: '/create/web-apps-saas' },
      { label: 'eCommerce', href: '/create/ecommerce' },
      { label: 'AI Solutions', href: '/create/ai-solutions' },
      { label: 'Audits & Reviews', href: '/create/audits' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'How We Deliver', href: '/deliver' },
      { label: 'Ways to Work', href: '/engage' },
      { label: 'Tech & Tools', href: '/tech' },
      { label: 'Careers', href: '/careers/open-roles' },
      { label: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/Logo.svg"
                alt="Rivulet IQ"
                className="h-8 mb-4"
              />
              <p className="text-neutral-400 font-light leading-relaxed max-w-sm">
                Design-First. AI-Smart. Human at Heart. Creating digital
                experiences that inspire, engage, and deliver results.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:hello@rivuletiq.com"
                className="flex items-center gap-3 text-neutral-400 hover:text-vivid-orange transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-light">hello@rivuletiq.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-neutral-400 hover:text-vivid-orange transition-colors group"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-light">+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-light">San Francisco, CA</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Github, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-vivid-orange/10 hover:border-vivid-orange/30 transition-all group"
                  >
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-vivid-orange transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-medium mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-neutral-400 hover:text-vivid-orange transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500 font-light">
            © {currentYear} Rivulet IQ. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-neutral-500 hover:text-vivid-orange transition-colors font-light"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-neutral-500 hover:text-vivid-orange transition-colors font-light"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-neutral-500 hover:text-vivid-orange transition-colors font-light"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
