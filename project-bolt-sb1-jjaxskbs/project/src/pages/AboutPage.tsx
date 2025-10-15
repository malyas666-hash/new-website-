import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp, Linkedin, Mail, Phone } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '500+', label: 'Profiles Transformed' },
    { icon: Target, value: '10x', label: 'Average Lead Increase' },
    { icon: TrendingUp, value: '$5M+', label: 'Revenue Generated' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' }
  ];

  const journey = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Started as a LinkedIn ghostwriter, quickly realized most profiles were bleeding money due to poor positioning.'
    },
    {
      year: '2020',
      title: 'System Development',
      description: 'Developed the proven framework that consistently generates 10x more leads through strategic profile optimization.'
    },
    {
      year: '2021',
      title: 'Scaling Success',
      description: 'Helped 200+ professionals transform their LinkedIn into lead generation machines, generating millions in revenue.'
    },
    {
      year: '2023',
      title: 'Authority Building',
      description: 'Launched comprehensive LinkedIn authority building service, helping clients become recognized experts in their industries.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Muhammad Ilyas</span>
            </h1>
            <p className="text-2xl text-gray-400">
              Founder & LinkedIn Authority Builder
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              className="glass-effect border border-green-500/20 rounded-2xl p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center glow-green">
                  <Linkedin className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Muhammad Ilyas</h2>
                  <p className="text-green-400">LinkedIn Growth Specialist</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I've spent years mastering the art and science of LinkedIn lead generation. Not through theory, but through real results—helping over 500 professionals transform their profiles into revenue-generating assets.
                </p>
                <p>
                  The truth is, most people have no idea how to use LinkedIn strategically. They post randomly, optimize for vanity metrics, and wonder why they're not getting clients. I cracked the code to consistent lead generation, and now I help others do the same.
                </p>
                <p>
                  My approach is simple: strategic positioning, high-converting content, and systematic lead generation. No fluff, no BS—just results that show up in your bank account.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/muhammadilyas666/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold glow-green transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:m.alyas666@gmail.com"
                  className="flex items-center gap-2 glass-effect border border-green-500/20 text-white px-6 py-3 rounded-lg font-semibold hover:border-green-500 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
                <a
                  href="tel:+923185444527"
                  className="flex items-center gap-2 glass-effect border border-green-500/20 text-white px-6 py-3 rounded-lg font-semibold hover:border-green-500 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-effect border border-green-500/20 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center glow-green">
                      <span className="text-white font-bold">{item.year}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-effect border border-green-500/20 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="w-10 h-10 text-green-400 mb-4 mx-auto" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="glass-effect border border-green-500/30 rounded-2xl p-12 text-center glow-green"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your LinkedIn?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's build your authority and turn your profile into a lead generation machine that works 24/7.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg glow-green-strong transition-all duration-300 hover:scale-105"
            >
              Start Your Transformation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
