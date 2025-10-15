import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    services: [] as string[],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Profile Rebrand',
    'Content Strategy',
    'Banner Design',
    'Carousel Design',
    'Lead Generation System'
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@yourdomain.com',
      link: 'mailto:contact@yourdomain.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 318 5444527',
      link: 'tel:+923185444527'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/yourprofile'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      link: null
    }
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        linkedinUrl: '',
        services: [],
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Transform Your LinkedIn?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fill out the form below and let's build your LinkedIn lead generation machine.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect border border-green-500/20 rounded-2xl p-6 md:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-premium-surface border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-premium-surface border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-premium-surface border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="linkedin" className="block text-sm font-semibold text-gray-300 mb-2">
                        LinkedIn Profile URL
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        value={formData.linkedinUrl}
                        onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                        className="w-full px-4 py-3 bg-premium-surface border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                        placeholder="linkedin.com/in/yourprofile"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Services You're Interested In
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                            formData.services.includes(service)
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'bg-premium-surface border-green-500/20 text-gray-300 hover:border-green-500'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                      Tell Us About Your Goals
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-premium-surface border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none"
                      placeholder="What are you looking to achieve with LinkedIn?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg glow-green-strong transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    Get Your Free Strategy Call
                  </button>

                  <p className="text-sm text-gray-400 text-center">
                    We typically respond within 24 hours. Your information is 100% secure.
                  </p>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-xl text-gray-300">
                    We've received your message and will contact you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect border border-green-500/20 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white font-medium hover:text-green-400 transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="glass-effect border border-green-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Why Work With Us?</h3>
              <ul className="space-y-3">
                {[
                  'Fast turnaround time',
                  'Premium quality designs',
                  'Strategic approach',
                  'Proven results',
                  '24/7 support'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
