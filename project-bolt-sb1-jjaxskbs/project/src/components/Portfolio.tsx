import { useState } from 'react';
import { Image, FileText, LayoutGrid } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'banners' | 'carousels' | 'cheatsheets'>('banners');

  const portfolioItems = {
    banners: [
      { id: 1, title: 'Tech CEO Profile Banner', category: 'Corporate' },
      { id: 2, title: 'Marketing Expert Banner', category: 'Marketing' },
      { id: 3, title: 'Sales Leader Banner', category: 'Sales' },
      { id: 4, title: 'Consultant Authority Banner', category: 'Consulting' },
      { id: 5, title: 'Coach Personal Brand', category: 'Coaching' },
      { id: 6, title: 'Entrepreneur Showcase', category: 'Business' }
    ],
    carousels: [
      { id: 1, title: '7 LinkedIn Mistakes Carousel', category: 'Educational' },
      { id: 2, title: 'Client Success Stories', category: 'Social Proof' },
      { id: 3, title: 'Authority Building Framework', category: 'Strategy' },
      { id: 4, title: 'Lead Generation Blueprint', category: 'Strategy' },
      { id: 5, title: 'Content Calendar Template', category: 'Templates' },
      { id: 6, title: 'Profile Optimization Guide', category: 'Educational' }
    ],
    cheatsheets: [
      { id: 1, title: 'Perfect LinkedIn Post Formula', category: 'Content' },
      { id: 2, title: 'Engagement Hacks Cheatsheet', category: 'Growth' },
      { id: 3, title: 'Headline Formulas That Convert', category: 'Copywriting' },
      { id: 4, title: 'DM Conversation Starters', category: 'Networking' },
      { id: 5, title: 'Profile Checklist', category: 'Optimization' },
      { id: 6, title: 'Content Hooks Library', category: 'Content' }
    ]
  };

  const tabs = [
    { id: 'banners' as const, label: 'Profile Banners', icon: Image },
    { id: 'carousels' as const, label: 'Carousels', icon: LayoutGrid },
    { id: 'cheatsheets' as const, label: 'Cheatsheets', icon: FileText }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Premium Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every design is strategically crafted to position you as the authority and convert profile visitors into leads.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-800/50 text-gray-300 border border-slate-700 hover:border-blue-500/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems[activeTab].map((item, index) => (
            <div
              key={item.id}
              className="group bg-slate-800/50 border border-blue-900/20 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/60 transition-all duration-300"></div>
                <div className="relative z-10 text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {activeTab === 'banners' && <Image className="w-8 h-8 text-white" />}
                    {activeTab === 'carousels' && <LayoutGrid className="w-8 h-8 text-white" />}
                    {activeTab === 'cheatsheets' && <FileText className="w-8 h-8 text-white" />}
                  </div>
                  <div className="text-sm text-blue-400 font-medium mb-1">{item.category}</div>
                  <div className="text-white font-semibold">{item.title}</div>
                </div>
              </div>
              <div className="p-4 bg-slate-900/50">
                <button className="w-full py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-400 font-medium hover:bg-blue-600/30 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Get Your Custom Design
          </a>
        </div>
      </div>
    </section>
  );
}
