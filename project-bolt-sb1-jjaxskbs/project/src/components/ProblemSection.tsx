import { motion } from 'framer-motion';
import { AlertCircle, XCircle, DollarSign } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      problem: "Invisible to Your Ideal Clients",
      cost: "$10K-50K/month in lost revenue",
      description: "Your dream clients are searching for someone like you RIGHT NOW... but they're finding your competitors instead."
    },
    {
      problem: "Content That Gets Ignored",
      cost: "20+ hours wasted every week",
      description: "You're posting consistently but getting zero leads. No comments, no DMs, no business. Just crickets."
    },
    {
      problem: "Stuck in the Hustle Trap",
      cost: "Your time & sanity",
      description: "You're always chasing the next client, sending cold DMs, begging for referrals. There's no system, no consistency."
    },
    {
      problem: "Competitors Stealing YOUR Opportunities",
      cost: "Deals you should be closing",
      description: "Less qualified people are closing deals you deserve because they understand positioning and you don't."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const leftCardVariants = {
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const rightCardVariants = {
    hidden: {
      opacity: 0,
      x: 100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, transparent, #1a1a1a, transparent)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6 border border-red-500/20">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">The Painful Truth</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your LinkedIn Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Bleeding Money</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every single day without a strategic LinkedIn presence, you're leaving $1,000s on the table. Here's what it's REALLY costing you:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? leftCardVariants : rightCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group glass-effect border border-white/10 hover:border-red-500/30 rounded-2xl p-8 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {item.problem}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 font-semibold text-sm">{item.cost}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="glass-effect border border-red-500/20 rounded-2xl p-10 max-w-4xl mx-auto">
            <p className="text-3xl font-bold text-white mb-4 text-center">
              Here's The Truth You Need To Hear:
            </p>
            <p className="text-xl text-gray-300 text-center leading-relaxed">
              You don't have a "LinkedIn problem." You have a <span className="text-red-400 font-bold">positioning, visibility, and conversion problem</span>. And while you're waiting to "figure it out," your competitors are building authority, generating leads, and closing the deals that should be yours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
