import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import BirdAnimation from './BirdAnimation';

export default function Hero() {
  const stats = [
    { value: '500+', label: 'Profiles Transformed' },
    { value: '300%', label: 'Avg. Lead Increase' },
    { value: '$5M+', label: 'Revenue Generated' }
  ];

  const benefits = [
    'No Cold Outreach',
    'No Paid Ads',
    '100% Organic Growth'
  ];

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center pt-20">
      <BirdAnimation />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f]/30 to-transparent pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <motion.div
            className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">LinkedIn Authority Builder</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stop Chasing Clients.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 animate-float">
              Make Them Come to You.
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your LinkedIn into a lead-generating machine that brings you 5-10 qualified prospects every week — without cold outreach, without paid ads, just strategic positioning.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg glow-green hover:glow-green-strong transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Transform My LinkedIn
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#portfolio"
              className="inline-flex items-center gap-2 glass-effect text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Our Work
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
