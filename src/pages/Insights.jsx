import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, PieChart, Activity, Zap, ArrowRight, Download, 
  Globe, Lock, Calendar, Users2, ShieldCheck, Gem,
  ArrowUpRight, Star, Award, Coffee
} from 'lucide-react';

// Asset Imports
import eventImg from '../assets/event.png';
import heroImg from '../assets/hero3.png';

const Insights = () => {
  const quarterlyEvents = [
    {
      quarter: "Quarter One",
      title: "Spring Investor Summit",
      timing: "Early March - Typically two to three days",
      focus: "Year Planning and Market Outlook",
      sessions: [
        "2024 Market Outlook: Where to Invest",
        "Economic Trends Impacting Real Estate",
        "Portfolio Planning and Diversification Strategy",
        "Tax Efficient Property Investing",
        "Emerging Markets and Hotspot Analysis"
      ],
      networking: "Meet 200 plus investor members, speed networking sessions, and expert panel discussions",
      value: "Set investment strategy for the entire year with expert guidance"
    },
    {
      quarter: "Quarter Two",
      title: "Mid Year Property Showcase",
      timing: "Mid June - One to two day event",
      focus: "Featured Properties and Opportunities",
      sessions: [
        "Featured property launches of 50 to 100 new properties",
        "Expert valuations and analysis",
        "Success stories from first half acquisitions",
        "Investment opportunity presentations",
        "Live bidding demonstrations"
      ],
      networking: "Connect with fellow members who purchased properties and property manager roundtables",
      value: "Discover exceptional properties and learn from successful members"
    },
    {
      quarter: "Quarter Three",
      title: "Portfolio Review and Strategy Session",
      timing: "Mid September - Two days",
      focus: "Portfolio Assessment and Advanced Strategies",
      sessions: [
        "Mid Year Portfolio Review Techniques",
        "Exit Strategy: When to Sell and How",
        "Advanced Legal Issues in Property Investment",
        "Rental Income Optimization",
        "Property Management and Tenant Issues",
        "Real Estate and Tax Planning"
      ],
      networking: "Private portfolio consultations with experts and property performance analysis",
      value: "Professional assessment of your portfolio and optimization strategies"
    },
    {
      quarter: "Quarter Four",
      title: "Annual Awards and Gala Dinner",
      timing: "Mid December - One evening",
      focus: "Celebration and Next Year Planning",
      sessions: [
        "Gala dinner with members and leadership",
        "Awards ceremony recognizing top performers",
        "Member testimonials and success stories",
        "2025 Opportunity Preview",
        "Planning session for next year"
      ],
      awards: [
        "Largest ROI Achievement",
        "Most Properties Acquired",
        "Best Exit or Sale",
        "Excellence in Investor Community"
      ],
      value: "Celebrate success, build friendships, and plan for next year"
    }
  ];

  return (
    <div className="bg-white">
      {/* INSTITUTIONAL HERO - EXPANDED */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#0a1128]">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            className="w-full h-full object-cover opacity-40 scale-110" 
            alt="Intelligence Hub" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-transparent to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">The Intelligence Network</span>
            <h1 className="text-6xl lg:text-[8rem] font-black text-white mb-10 tracking-tighter leading-[0.9] uppercase">
              Intel and <br /><span className="text-brand-gold">Gatherings.</span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Exclusive market intelligence and physical investor summits reserved for the Vault institutional membership
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUARTERLY CALENDAR ROADMAP */}
      <section className="section-padding bg-[#0a1128] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-gold rounded-full blur-[200px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Annual Event Roadmap</span>
              <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-none">
                Four Strategic <br />Investor Gatherings
              </h2>
            </div>
            <p className="text-zinc-500 font-medium text-lg lg:text-right max-w-md">
              Each event is carefully curated to provide value beyond typical real estate conferences
            </p>
          </div>

          <div className="space-y-12">
            {quarterlyEvents.map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-12 bg-white/5 border border-white/10 rounded-[60px] overflow-hidden group hover:bg-white/10 transition-all duration-700"
              >
                <div className="lg:col-span-3 p-12 lg:border-r border-white/10 flex flex-col justify-between bg-brand-gold/5">
                   <div>
                      <span className="text-brand-gold text-[10px] font-black uppercase tracking-widest block mb-4">{event.quarter}</span>
                      <h3 className="text-3xl font-black text-white uppercase leading-none">{event.title}</h3>
                   </div>
                   <div className="mt-12">
                      <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Timing</p>
                      <p className="text-white font-bold text-sm">{event.timing}</p>
                   </div>
                </div>

                <div className="lg:col-span-5 p-12 lg:border-r border-white/10">
                   <p className="text-brand-gold text-[10px] font-black uppercase tracking-widest mb-8">Event Focus: {event.focus}</p>
                   <ul className="space-y-4">
                      {event.sessions.map((session, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                           <ArrowUpRight size={16} className="text-brand-gold mt-1 shrink-0" />
                           <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest leading-relaxed">{session}</span>
                        </li>
                      ))}
                   </ul>
                </div>

                <div className="lg:col-span-4 p-12 flex flex-col justify-between">
                   <div>
                      <p className="text-brand-gold text-[10px] font-black uppercase tracking-widest mb-6">Experience</p>
                      <p className="text-white text-sm font-medium leading-relaxed mb-8">{event.networking}</p>
                      {event.awards && (
                        <div className="flex flex-wrap gap-2">
                           {event.awards.map((award, idx) => (
                             <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-black text-brand-gold uppercase tracking-widest">{award}</span>
                           ))}
                        </div>
                      )}
                   </div>
                   <div className="pt-8 border-t border-white/10 mt-8">
                      <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mb-3">Core Value</p>
                      <p className="text-brand-gold text-xs font-bold uppercase tracking-wider italic">{event.value}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL BENEFITS SECTION */}
      <section className="section-padding bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-3xl">
                 <img src={eventImg} className="w-full h-full object-cover" alt="Event Benefits" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-navy p-12 rounded-[50px] shadow-3xl text-white max-w-xs border border-brand-gold/20">
                 <Gem className="text-brand-gold mb-6" size={40} />
                 <h4 className="text-2xl font-black uppercase mb-4 leading-none">The Guest <br />Protocol.</h4>
                 <p className="text-zinc-400 text-xs font-medium leading-relaxed">Members are invited to bring one guest to any physical event to share the institutional experience</p>
              </div>
            </div>

            <div>
              <span className="text-brand-navy/30 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Member Privileges</span>
              <h2 className="text-4xl lg:text-6xl font-black text-brand-navy mb-12 tracking-tighter uppercase leading-[0.9]">Beyond the <br />Four Summits</h2>
              
              <div className="grid sm:grid-cols-2 gap-8">
                 {[
                   { t: "Virtual Attendance", d: "Digital streaming options for all physical sessions", icon: <Globe /> },
                   { t: "Event Materials", d: "Post event recordings and research presentations", icon: <Download /> },
                   { t: "Member Directory", d: "Full networking database of all attendees", icon: <Users2 /> },
                   { t: "Exclusive Forum", d: "Member only digital discussion platforms", icon: <Star /> },
                   { t: "Travel Concierge", d: "Arrangement assistance for premium members", icon: <ShieldCheck /> },
                   { t: "Speaker Access", d: "Follow up consultations with expert presenters", icon: <ArrowRight /> }
                 ].map((benefit, i) => (
                   <div key={i} className="flex gap-4 items-start group">
                      <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-navy flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-white transition-all">
                         {React.cloneElement(benefit.icon, { size: 18 })}
                      </div>
                      <div>
                         <h5 className="text-xs font-black uppercase tracking-widest text-brand-navy mb-1">{benefit.t}</h5>
                         <p className="text-zinc-500 text-[10px] font-medium leading-relaxed">{benefit.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-32 bg-zinc-50">
         <div className="max-w-5xl mx-auto px-6">
            <div className="bg-[#0a1128] p-20 rounded-[80px] text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-brand-gold/5 animate-pulse"></div>
               <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 tracking-tight uppercase leading-none relative z-10">
                 Access the <br /><span className="text-brand-gold">Intelligence</span> Network
               </h2>
               <p className="text-zinc-400 text-lg font-medium mb-12 max-w-xl mx-auto relative z-10 leading-relaxed">
                 Join India most exclusive property investor gathering and elevate your portfolio through institutional grade insights
               </p>
               <button className="px-14 py-6 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-2xl hover:scale-105 transition-transform relative z-10">Register for Next Event</button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Insights;
