import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nick Keesey",
      role: "Business Expert",
      text: "If you're looking for someone who can elevate your personal brand and make the process seamless, I can't recommend him enough!",
      rating: 5
    },
    {
      name: "Nikolett Jaksa",
      role: "Personal Branding Expert",
      text: "His creativity, punctuality, and attention to detail have made a huge difference, and I truly recommend working with him!",
      rating: 5
    },
    {
      name: "Long Nguyen",
      role: "Marketing Fixer",
      text: "Thanks for the work buddy. Wish you only the best",
      rating: 5
    },
    {
      name: "Jap Gielink",
      role: "Co-Founder Contentoo",
      text: "I worked with Obeidullah on a LinkedIn banner redesign. Although I saw his previous work, he surprised me with the quality he delivered.",
      rating: 5
    },
    {
      name: "Muhammad Ali",
      role: "Business Owner",
      text: "Really enjoyed working with Muhammad. He prepared some amazing designs for my LinkedIn profile. Quick to reply and proactive.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Founder",
      text: "Obeidullah has been an absolute pleasure to work with. I saw how amazing he was at Banners so I used him for redesigns.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "CEO",
      text: "As a busy founder, I don't have time for personal projects, but Obeidullah made the entire process effortless.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      role: "Marketing Director",
      text: "All I had to do was fill out a questionnaire, and he handled everything with impressive precision.",
      rating: 5
    },
    {
      name: "Michael Brown",
      role: "Consultant",
      text: "He kept me in the loop throughout the process, sending regular updates and Loom videos.",
      rating: 5
    },
    {
      name: "Lisa Anderson",
      role: "Entrepreneur",
      text: "If you're looking for someone to elevate your LinkedIn profile, I highly recommend him. Talents like his are rare!",
      rating: 5
    },
    {
      name: "Robert Taylor",
      role: "Sales Director",
      text: "The transformation was incredible. My profile now attracts the right clients consistently.",
      rating: 5
    },
    {
      name: "Jennifer White",
      role: "Business Coach",
      text: "Working with Muhammad was seamless. The results speak for themselves.",
      rating: 5
    }
  ];

  const column1 = testimonials.slice(0, 3);
  const column2 = testimonials.slice(3, 6);
  const column3 = testimonials.slice(6, 9);
  const column4 = testimonials.slice(9, 12);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            What do the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">best creators</span> say about us
          </h2>
          <p className="text-xl text-gray-400">
            Our services are endorsed by top industry leaders on LinkedIn
          </p>
        </motion.div>
      </div>

      <div className="relative h-[600px] overflow-hidden testimonial-fade-vertical">
        <div className="flex gap-6 justify-center px-6 max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 animate-scroll-vertical">
            {[...column1, ...column1, ...column1].map((testimonial, index) => (
              <div
                key={`col1-${index}`}
                className="flex-shrink-0 w-[280px] glass-effect border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 animate-scroll-vertical-reverse">
            {[...column2, ...column2, ...column2].map((testimonial, index) => (
              <div
                key={`col2-${index}`}
                className="flex-shrink-0 w-[280px] glass-effect border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 animate-scroll-vertical hidden md:flex">
            {[...column3, ...column3, ...column3].map((testimonial, index) => (
              <div
                key={`col3-${index}`}
                className="flex-shrink-0 w-[280px] glass-effect border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 animate-scroll-vertical-reverse hidden lg:flex">
            {[...column4, ...column4, ...column4].map((testimonial, index) => (
              <div
                key={`col4-${index}`}
                className="flex-shrink-0 w-[280px] glass-effect border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-green-600 rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
