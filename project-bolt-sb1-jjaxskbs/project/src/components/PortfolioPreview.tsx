import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Image, FileText, LayoutGrid, User, Sparkles, ArrowRight } from 'lucide-react';

export default function PortfolioPreview() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'elite-banner',
      title: 'Elite Banner Design',
      icon: Image,
      description: 'Premium banners that command attention',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 'carousel',
      title: 'Carousel Design',
      icon: LayoutGrid,
      description: 'High-converting carousels that generate leads',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'linkedin-post',
      title: 'LinkedIn Post Design',
      icon: FileText,
      description: 'Eye-catching posts that stop the scroll',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'profile-revamp',
      title: 'Profile Revamp',
      icon: User,
      description: 'Profile transformation that converts visitors',
      gradient: 'from-cyan-500 to-green-600'
    }
  ];

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate('/portfolio');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6 border border-green-500/20">
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">Our Work</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Work That <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Delivers Results</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every design is strategically crafted to position you as the go-to authority and convert profile visitors into paying clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: index * 0.1
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3, type: "spring", stiffness: 400 }
                }}
                onClick={handleNavigate}
                className="group cursor-pointer relative"
              >
                <div className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-500 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 glow-green`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {category.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm mb-4">
                    {category.description}
                  </p>

                  <div className="inline-flex items-center text-green-400 font-medium group-hover:gap-3 gap-2 transition-all duration-300 text-sm">
                    <span>View Work</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            onClick={handleNavigate}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-xl font-bold text-lg glow-green hover:glow-green-strong transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Full Portfolio
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
