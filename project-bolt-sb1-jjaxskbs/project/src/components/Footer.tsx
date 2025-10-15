import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    services: [
      { label: 'Profile Transformation', href: '/#services', type: 'scroll' },
      { label: 'Content Strategy', href: '/#services', type: 'scroll' },
      { label: 'Lead Generation', href: '/#services', type: 'scroll' },
      { label: 'Authority Building', href: '/#services', type: 'scroll' },
      { label: 'Profile Management', href: '/#services', type: 'scroll' },
      { label: 'Banner Design', href: '/#services', type: 'scroll' }
    ],
    company: [
      { label: 'About', href: '/about', type: 'route' },
      { label: 'Portfolio', href: '/portfolio', type: 'route' },
      { label: 'Pricing', href: '/pricing', type: 'route' },
      { label: 'Home', href: '/', type: 'route' }
    ]
  };

  return (
    <footer className="border-t border-green-500/20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0f0f0f 0%, #1a1a1a 100%)' }}>
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">Muhammad Ilyas</div>
                <div className="text-xs text-green-400">LinkedIn Authority Builder</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming LinkedIn profiles into lead-generating machines. Strategic positioning, high-converting content, and systematic growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/muhammadilyas666/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-effect border border-green-500/20 rounded-lg flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:m.alyas666@gmail.com"
                className="w-10 h-10 glass-effect border border-green-500/20 rounded-lg flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+923185444527"
                className="w-10 h-10 glass-effect border border-green-500/20 rounded-lg flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+923185444527" className="hover:text-blue-400 transition-colors">
                    +92 318 5444527
                  </a>
                  <div className="text-sm text-gray-500">WhatsApp Available</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:m.alyas666@gmail.com" className="hover:text-blue-400 transition-colors break-all">
                  m.alyas666@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Linkedin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.linkedin.com/in/muhammadilyas666/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors break-all"
                >
                  linkedin.com/in/muhammadilyas666
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-green-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            {currentYear} Muhammad Ilyas. All rights reserved. Built for results, not vanity metrics.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-200 group"
          >
            <span className="text-sm">Back to Top</span>
            <div className="w-8 h-8 glass-effect border border-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-300">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
