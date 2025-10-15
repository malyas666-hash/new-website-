import { Sparkles, Layout, TrendingUp, Target, FileEdit, MessageSquare, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Layout,
      title: 'Complete Profile Transformation',
      description: 'We rebuild your entire LinkedIn presence from scratch—optimized headline, compelling summary, strategic positioning, and conversion-focused design.',
      features: ['Strategic headline optimization', 'Authority-driven about section', 'Custom banner design', 'Complete profile audit']
    },
    {
      icon: FileEdit,
      title: 'High-Converting Content Strategy',
      description: 'Strategic content that positions you as THE authority and generates leads consistently without spending hours writing posts.',
      features: ['30-day content calendar', 'Viral post templates', 'Engagement optimization', 'Content pillars framework']
    },
    {
      icon: Target,
      title: 'Lead Generation System',
      description: 'A proven framework that brings qualified prospects directly to your DMs—no cold outreach, no paid ads, just strategic positioning.',
      features: ['Inbound lead magnet system', 'DM conversation frameworks', 'Lead qualification process', 'CRM integration setup']
    },
    {
      icon: TrendingUp,
      title: 'Authority Content Design',
      description: 'Eye-catching carousels, cheatsheets, and visual content that stops the scroll and establishes you as the go-to expert.',
      features: ['Custom carousel designs', 'Branded cheatsheets', 'Infographic templates', 'Video thumbnail design']
    },
    {
      icon: Users,
      title: 'Complete Profile Management',
      description: 'We handle everything—content creation, posting, engagement, optimization. You focus on closing deals while we generate the leads.',
      features: ['Daily content posting', 'Strategic engagement', 'Connection growth', 'Monthly performance reports']
    },
    {
      icon: MessageSquare,
      title: 'Premium Banner Design',
      description: 'A professionally designed banner that instantly communicates your value proposition and makes visitors want to learn more.',
      features: ['Custom design concepts', 'Brand alignment', 'Conversion psychology', 'Multiple revisions']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">What We Offer</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Actually Generate ROI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No fluff. No vanity metrics. Just proven strategies that turn your LinkedIn profile into a consistent revenue stream.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 border border-blue-900/20 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-12 backdrop-blur-sm text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Custom Packages Available
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Every business is unique. We create custom packages tailored to your specific goals, industry, and target audience.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Discuss Your Needs
          </a>
        </div>
      </div>
    </section>
  );
}
