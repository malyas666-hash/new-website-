import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image, FileText, LayoutGrid, User, FileEdit, Sparkles, ZoomIn } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

import banner1 from '../assets/portfolio/final banner.png';
import post1 from '../assets/portfolio/post one sample (2).png';
import carousel1 from '../assets/portfolio/Group 1171279446.png';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const categories = [
    {
      id: 'elite-banner',
      title: 'Elite Banner Design',
      icon: Image,
      description: 'Banners that stop the scroll and scream authority',
      gradient: 'from-green-500 to-emerald-600',
      items: [banner1, banner1, banner1, banner1]
    },
    {
      id: 'linkedin-post',
      title: 'LinkedIn Post Design',
      icon: FileText,
      description: 'Posts that drive engagement and generate leads',
      gradient: 'from-emerald-500 to-teal-600',
      items: [post1, post1, post1, post1]
    },
    {
      id: 'carousel',
      title: 'Carousel Design',
      icon: LayoutGrid,
      description: 'High-converting carousels that educate and sell',
      gradient: 'from-teal-500 to-cyan-600',
      items: [carousel1, carousel1, carousel1, carousel1]
    },
    {
      id: 'profile-revamp',
      title: 'Profile Revamp',
      icon: User,
      description: 'Complete transformations that convert visitors to clients',
      gradient: 'from-cyan-500 to-green-600',
      items: [banner1, post1, carousel1, post1]
    },
    {
      id: 'cheatsheet',
      title: 'Cheatsheet Design',
      icon: FileEdit,
      description: 'Value-packed cheatsheets that establish expertise',
      gradient: 'from-green-600 to-emerald-700',
      items: [post1, carousel1, banner1, carousel1]
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

  const categoryVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -20
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 0.8
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.15
      }
    })
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
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6 border border-green-500/20">
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">Our Portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Work That <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Speaks For Itself</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every design is strategically crafted to position our clients as industry authorities and convert profile visitors into paying clients.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={categoryVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedCategory(category.id)}
                className="group cursor-pointer relative"
                style={{ perspective: '1000px' }}
              >
                <div className="glass-effect rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-2xl transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 glow-green`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {category.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {category.description}
                    </p>

                    <div className="inline-flex items-center text-green-400 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>View Work</span>
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
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/90 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              style={{ backdropFilter: 'blur(20px)' }}
            />

            <motion.div
              className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="glass-effect border border-green-500/30 rounded-3xl p-8 max-w-6xl w-full mx-auto my-8 relative glow-green"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 right-4 w-12 h-12 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center transition-colors duration-300 glow-green"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>

                {categories.map((category) => {
                  if (category.id === selectedCategory) {
                    const Icon = category.icon;
                    return (
                      <div key={category.id}>
                        <div className="flex items-center gap-4 mb-8">
                          <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center glow-green`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                            <p className="text-gray-400">{category.description}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {category.items.map((item, index) => (
                            <motion.div
                              key={index}
                              custom={index}
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              className="group relative overflow-hidden rounded-xl border border-green-500/20 hover:border-green-500/60 transition-all duration-300 cursor-pointer"
                              onClick={() => setZoomedImage(item)}
                              whileHover={{ scale: 1.02 }}
                            >
                              <img
                                src={item}
                                alt={`${category.title} ${index + 1}`}
                                className="w-full h-auto object-cover"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}

                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg glow-green-strong hover:scale-105 transition-all duration-300"
                  >
                    Get Work Like This
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {zoomedImage && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/95 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomedImage(null)}
              style={{ backdropFilter: 'blur(10px)' }}
            />
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomedImage(null)}
            >
              <motion.div
                className="relative max-w-6xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setZoomedImage(null)}
                  className="absolute -top-12 right-0 w-10 h-10 bg-red-500/20 hover:bg-red-500/40 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <img
                  src={zoomedImage}
                  alt="Zoomed view"
                  className="w-full h-auto rounded-xl border-2 border-green-500/50 glow-green"
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Testimonials />
      <ContactForm />
    </div>
  );
}
