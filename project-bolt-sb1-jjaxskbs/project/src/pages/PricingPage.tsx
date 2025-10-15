import { motion } from 'framer-motion';
import { Check, Shield, RefreshCw, CreditCard, TrendingUp, Users, Target } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function PricingPage() {
  const services = [
    {
      id: 'elite-banner',
      name: 'Elite Banner Design',
      tiers: [
        {
          name: 'Silver',
          price: '$297',
          features: [
            '1 premium banner design',
            '2 revision rounds',
            'Source files included',
            '3-day delivery',
            'Brand color integration'
          ]
        },
        {
          name: 'Gold',
          price: '$497',
          popular: true,
          features: [
            '2 premium banner concepts',
            'Unlimited revisions',
            'Source files + templates',
            '2-day priority delivery',
            'Brand strategy consultation',
            'Social media assets'
          ]
        },
        {
          name: 'Platinum',
          price: '$797',
          features: [
            '3 premium banner concepts',
            'Unlimited revisions',
            'Complete brand package',
            '24-hour express delivery',
            'Dedicated designer',
            'All social media assets',
            'Profile optimization guide'
          ]
        }
      ]
    },
    {
      id: 'profile-optimization',
      name: 'Full Profile Optimization',
      tiers: [
        {
          name: 'Silver',
          price: '$497',
          features: [
            'Headline optimization',
            'About section rewrite',
            'Experience section polish',
            'Profile audit report',
            '7-day delivery'
          ]
        },
        {
          name: 'Gold',
          price: '$797',
          popular: true,
          features: [
            'Everything in Silver',
            'Featured section setup',
            'Skills optimization',
            'Custom banner design',
            'Content strategy session',
            '5-day delivery'
          ]
        },
        {
          name: 'Platinum',
          price: '$1,297',
          features: [
            'Everything in Gold',
            'Complete profile rebuild',
            'SEO keyword integration',
            'Lead magnet creation',
            'Monthly strategy calls',
            '3-day priority delivery',
            '30-day support'
          ]
        }
      ]
    },
    {
      id: 'content-writing',
      name: 'Content Writing',
      tiers: [
        {
          name: 'Silver',
          price: '$697/month',
          features: [
            '8 high-converting posts',
            'Content calendar',
            'Engagement strategy',
            'Basic analytics'
          ]
        },
        {
          name: 'Gold',
          price: '$1,197/month',
          popular: true,
          features: [
            '16 posts + 2 carousels',
            'Advanced content strategy',
            'Hashtag research',
            'Weekly performance reports',
            'Comment management'
          ]
        },
        {
          name: 'Platinum',
          price: '$1,997/month',
          features: [
            '24 posts + 4 carousels',
            'Full content management',
            'Influencer outreach',
            'Lead generation focus',
            'Bi-weekly strategy calls',
            'Dedicated account manager'
          ]
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Investment That <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Pays For Itself</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your tier. Every package is designed to deliver measurable ROI, not vanity metrics.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: serviceIndex * 0.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8 text-center">{service.name}</h2>

              <motion.div
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {service.tiers.map((tier, tierIndex) => (
                  <motion.div
                    key={tierIndex}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.03,
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className={`relative glass-effect rounded-2xl p-8 transition-all duration-500 ${
                      tier.popular
                        ? 'border-2 border-green-500 glow-green'
                        : 'border border-white/10 hover:border-green-500/50'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold glow-green-strong">
                          MOST POPULAR
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-6">
                        {tier.price}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            tier.popular ? 'bg-green-500' : 'bg-green-500/50'
                          }`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href="#contact"
                      className={`block w-full text-center px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white glow-green-strong'
                          : 'glass-effect text-white hover:border-green-500/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-32 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-effect border border-green-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Why This Investment Makes Sense
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <motion.div
                className="glass-effect border border-green-500/20 rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <TrendingUp className="w-10 h-10 text-green-400 mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">230%</div>
                <p className="text-gray-400 text-sm">Visibility increase in 30 days</p>
              </motion.div>
              <motion.div
                className="glass-effect border border-green-500/20 rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Users className="w-10 h-10 text-green-400 mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">3-5x</div>
                <p className="text-gray-400 text-sm">More connection requests</p>
              </motion.div>
              <motion.div
                className="glass-effect border border-green-500/20 rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Target className="w-10 h-10 text-green-400 mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">4-8</div>
                <p className="text-gray-400 text-sm">Qualified leads per month</p>
              </motion.div>
            </div>

            <p className="text-xl text-center text-gray-300 mb-6">
              If this brings you just <span className="text-green-400 font-bold">ONE new client</span>, it pays for itself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="glass-effect border border-green-500/20 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <Shield className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Performance Guarantee</h3>
              <p className="text-gray-400 text-sm">
                No results in 90 days? Get 100% credit toward next month.
              </p>
            </motion.div>

            <motion.div
              className="glass-effect border border-green-500/20 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <RefreshCw className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Credit Rollover</h3>
              <p className="text-gray-400 text-sm">
                Upgrade anytime with 100% credit toward higher tier.
              </p>
            </motion.div>

            <motion.div
              className="glass-effect border border-green-500/20 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <CreditCard className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Payment Plans</h3>
              <p className="text-gray-400 text-sm">
                Flexible installments with zero interest or penalties.
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-6 rounded-xl font-bold text-xl glow-green-strong transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Transformation Today
            </motion.a>
          </div>
        </motion.div>
      </div>

      <Testimonials />
      <ContactForm />
    </div>
  );
}
