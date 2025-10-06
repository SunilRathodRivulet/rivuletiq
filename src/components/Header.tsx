import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    {
      label: 'What We Create',
      href: '/create',
      submenu: [
        { label: 'Design & Creative', href: '/create/design' },
        { label: 'Websites', href: '/create/websites' },
        { label: 'Web Apps & SaaS', href: '/create/web-apps-saas' },
        { label: 'eCommerce', href: '/create/ecommerce' },
        { label: 'AI Solutions', href: '/create/ai-solutions' },
        { label: 'Audits & Reviews', href: '/create/audits' },
      ]
    },
    { label: 'How We Deliver', href: '/deliver' },
    { label: 'Work Together', href: '/engage' },
    { label: 'Tech & Tools', href: '/tech' },
    { label: 'About', href: '/about' },
    {
      label: 'Careers',
      href: '/careers/open-roles',
      submenu: [
        { label: 'Open Roles', href: '/careers/open-roles' },
        { label: 'Life & Growth', href: '/careers/life-growth' },
        { label: 'Learning', href: '/careers/learning' },
      ]
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-brand-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="/Logo.svg" alt="Rivulet IQ" className="h-8" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className="text-sm font-light text-neutral-300 hover:text-vivid-orange transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                {link.submenu && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 glass-panel p-2">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-neutral-300 hover:text-vivid-orange hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">Book a Call</Link>
          </div>

          <button
            className="lg:hidden p-2 text-neutral-300 hover:text-vivid-orange transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10 glass-panel">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  className="text-base font-light text-neutral-300 hover:text-vivid-orange transition-colors py-2 block"
                  onClick={() => !link.submenu && setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="text-sm text-neutral-400 hover:text-vivid-orange transition-colors py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-primary w-full mt-4 text-center" onClick={() => setIsMenuOpen(false)}>Book a Call</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
