import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, Mail, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/', type: 'route' },
    { label: 'Portfolio', href: '/portfolio', type: 'route' },
    { label: 'Pricing', href: '/pricing', type: 'route' },
    { label: 'About', href: '/about', type: 'route' }
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.type === 'route') {
      navigate(link.href);
      setIsMobileMenuOpen(false);
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-lg shadow-lg border-b border-green-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-green">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-white text-lg">Muhammad Ilyas</div>
              <div className="text-xs text-green-400">LinkedIn Authority Builder</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="text-gray-300 hover:text-green-400 font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+923185444527"
              className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:m.alyas666@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
            <motion.button
              onClick={() => handleNavClick({ label: 'Contact', href: '#contact', type: 'scroll' })}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold glow-green hover:glow-green-strong transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-black/98 backdrop-blur-lg border-t border-green-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className="text-gray-300 hover:text-green-400 font-medium transition-colors duration-200 py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-green-500/20">
                <a
                  href="tel:+923185444527"
                  className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </a>
                <a
                  href="mailto:m.alyas666@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
              <button
                onClick={() => handleNavClick({ label: 'Contact', href: '#contact', type: 'scroll' })}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-center glow-green transition-all duration-300"
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
