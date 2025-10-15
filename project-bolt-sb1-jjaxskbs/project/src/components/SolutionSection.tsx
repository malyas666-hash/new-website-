import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, TrendingUp, DollarSign, Users, ArrowRight } from 'lucide-react';

export default function SolutionSection() {
  const steps = [
    {
      number: "01",
      title: "Profile Optimization & Strategic Positioning",
      metric: "Get found by your ideal clients",
      description: "Transform your profile from invisible to irresistible. Strategic positioning that makes you the obvious choice in your industry.",
      icon: Users,
      color: "from-green-400 to-emerald-500"
    },
    {
      number: "02",
      title: "Authority Building System",
      metric: "Become the recognized expert",
      description: "Establish yourself as the go-to authority. Build credibility that makes prospects pre-sold before they ever reach out.",
      icon: Sparkles,
      color: "from-emerald-400 to-teal-500"
    },
    {
      number: "03",
      title: "Content That Converts",
      metric: "Posts that generate leads, not likes",
      description: "Strategic content designed to attract, engage, and convert. Every post works as a lead generation tool.",
      icon: TrendingUp,
      color: "from-teal-400 to-cyan-500"
    },
    {
      number: "04",
      title: "Systematic Lead Generation",
      metric: "Predictable inbound opportunities",
      description: "Stop chasing. Build a system that brings qualified prospects to YOU. Consistent leads without cold outreach.",
      icon: DollarSign,
      color: "from-cyan-400 to-green-500"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6 border border-green-500/20">
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">The Transformation</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What You <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Actually Get</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Forget vanity metrics. Here's the REAL results you'll see when you work with us:
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500/0 via-green-500/50 to-green-500/0 hidden lg:block"></div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    delay: index * 0.1
                  }}
                >
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      className={`inline-block glass-effect border border-green-500/20 rounded-2xl p-8 ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-xl hover:border-green-500/50 transition-all duration-500 group`}
                      whileHover={{ scale: 1.03, y: -5 }}
                    >
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color} opacity-20`}>
                          {step.number}
                        </div>
                        <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 glow-green`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                        {step.title}
                      </h3>

                      <div className={`inline-block bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2 mb-4 ${isEven ? 'lg:float-right lg:ml-4' : 'lg:float-left lg:mr-4'}`}>
                        <span className="text-green-400 font-bold text-sm">{step.metric}</span>
                      </div>

                      <p className="text-gray-400 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full items-center justify-center glow-green-strong flex-shrink-0 relative z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.1 + 0.3
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="flex-1"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="mt-24 glass-effect border border-green-500/30 rounded-3xl p-8 md:p-12 glow-green relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/20 to-transparent rounded-full filter blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              This Isn't About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">"Looking Professional"</span>
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              It's about building a <span className="text-green-400 font-bold">systematic lead generation machine</span> that works while you sleep. No more chasing. No more guessing. Just qualified prospects reaching out to YOU, ready to buy.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-xl font-bold text-lg glow-green-strong transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              I Want These Results
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
