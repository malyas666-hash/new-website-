import { Check, Zap, Crown, Rocket } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: 'Profile Kickstart',
      icon: Zap,
      price: '$497',
      period: 'one-time',
      description: 'Perfect for getting started with a professional LinkedIn presence',
      features: [
        'Complete profile optimization',
        'Custom banner design',
        'Headline & about section rewrite',
        'Profile audit report',
        'Content strategy session',
        '14 days of support'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Authority Builder',
      icon: Crown,
      price: '$1,497',
      period: 'per month',
      description: 'For professionals ready to become the recognized authority in their space',
      features: [
        'Everything in Profile Kickstart',
        '20 high-converting posts per month',
        '4 custom carousel designs',
        '2 branded cheatsheets',
        'Weekly content calendar',
        'Engagement strategy',
        'Monthly strategy call',
        'Priority support'
      ],
      popular: true,
      cta: 'Start Building Authority'
    },
    {
      name: 'Lead Generation Machine',
      icon: Rocket,
      price: '$2,997',
      period: 'per month',
      description: 'Complete done-for-you LinkedIn system that generates consistent leads',
      features: [
        'Everything in Authority Builder',
        'Full profile management',
        'Daily posting & engagement',
        'Lead generation system setup',
        'DM conversation management',
        '8 carousel designs per month',
        '4 cheatsheet designs',
        'Bi-weekly strategy calls',
        'Dedicated account manager',
        'Lead tracking & CRM setup'
      ],
      popular: false,
      cta: 'Generate Leads Now'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Investment in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Your Growth</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the package that matches your ambitions. Each one is designed to deliver measurable ROI, not just vanity metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div
                key={index}
                className={`relative bg-slate-800/50 rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  pkg.popular
                    ? 'border-2 border-blue-500 shadow-2xl shadow-blue-500/20'
                    : 'border border-blue-900/20 hover:border-blue-500/30'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    pkg.popular
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-600'
                      : 'bg-gradient-to-br from-blue-900/50 to-cyan-900/50'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>

                  <div className="flex items-end justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold text-white">{pkg.price}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{pkg.period}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        pkg.popular ? 'bg-blue-500' : 'bg-blue-900/50'
                      }`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-2xl hover:shadow-blue-500/50'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-12 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have specific requirements or want to discuss a custom solution? Let's talk about building a package that perfectly fits your goals.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Schedule a Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
