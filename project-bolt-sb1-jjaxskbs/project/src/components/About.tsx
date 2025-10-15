import { Award, Users, Target, TrendingUp, Linkedin } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Profiles Transformed' },
    { icon: Target, value: '10x', label: 'Average Lead Increase' },
    { icon: TrendingUp, value: '$5M+', label: 'Revenue Generated for Clients' },
    { icon: Award, value: '98%', label: 'Client Satisfaction Rate' }
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
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Muhammad Ilyas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founder & LinkedIn Authority Builder
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-800/50 border border-blue-900/20 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Linkedin className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Muhammad Ilyas</h3>
                <p className="text-blue-400">LinkedIn Growth Specialist</p>
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

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/muhammadilyas666/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
              <a
                href="#contact"
                className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
              >
                Work Together
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {journey.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-blue-900/20 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{item.year}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 border border-blue-900/20 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-10 h-10 text-blue-400 mb-4 mx-auto" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-12 backdrop-blur-sm text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your LinkedIn?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build your authority and turn your profile into a lead generation machine that works 24/7.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
}
