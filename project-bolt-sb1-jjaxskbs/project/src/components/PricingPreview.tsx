import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Image, FileEdit, TrendingUp, Target, Users, Zap } from 'lucide-react';

export default function PricingPreview() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate('/pricing');
  };

  const services = [
    {
      id: 'elite-banner',
      title: 'Elite Banner Design',
      icon: Image,
      description: 'Stand out from the crowd with a banner that screams authority',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 'profile-optimization',
      title: 'Full Profile Optimization',
      icon: Target,
      description: 'Transform your profile into a lead-generating machine',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'profile-revamp',
      title: 'Complete Profile Revamp',
      icon: Users,
      description: 'Rebuild everything from scratch for maximum impact',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'content-writing',
      title: 'Content Writing',
      icon: FileEdit,
      description: 'High-converting copy that positions you as the expert',
      gradient: 'from-cyan-500 to-green-600'
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation System',
      icon: TrendingUp,
      description: 'Systematic approach to attracting qualified prospects daily',
      gradient: 'from-green-600 to-emerald-700'
    },
    {
      id: 'profile-management',
      title: 'Full Profile Management',
      icon: Zap,
      description: 'Done-for-you service while you focus on closing deals',
      gradient: 'from-emerald-600 to-teal-700'
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
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-transparent">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
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
            Investment That <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Pays For Itself</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your path to LinkedIn dominance. Every package is designed to deliver ROI, not vanity metrics.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onClick={handleNavigate}
                className="group cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <div className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-500 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 glow-green`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-sm mb-4">
                      {service.description}
                    </p>

                    <div className="inline-flex items-center text-green-400 font-semibold group-hover:gap-3 gap-2 transition-all duration-300 text-sm">
                      <span>View Packages</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            onClick={handleNavigate}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-xl font-bold text-lg glow-green hover:glow-green-strong transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Packages & Pricing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
