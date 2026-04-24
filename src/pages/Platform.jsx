import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, ArrowRight, Zap, Users2, Building2, 
  Landmark, AreaChart, Gavel, Handshake, ShieldAlert,
  ArrowDownRight, CheckCircle2, Layers, Search, 
  MessageSquare, LayoutGrid
} from 'lucide-react';

// Asset Imports
import heroImg from '../assets/hero1.png';
import infrastructureImg from '../assets/prop3.png';

const Platform = () => {
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="bg-white">
      {/* INSTITUTIONAL HERO - EXPANDED */}
      <section ref={heroRef} className="relative h-[85vh] flex items-center overflow-hidden bg-[#0a1128]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            className="w-full h-full object-cover opacity-50" 
            alt="Real Estate Platform" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-transparent to-white"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div style={{ y: textY }} className="max-w-4xl">
            <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">The Future of Acquisitions</span>
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-none uppercase">
              The <span className="text-brand-gold">Single</span> <br />Controlled Platform.
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Eliminating fragmented intermediaries to deliver a unified institutional experience for serious property investors and verified sellers
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE TRADITIONAL PROBLEM SECTION */}
      <section className="section-padding bg-zinc-50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-brand-navy/30 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Industry Analysis</span>
              <h2 className="text-4xl lg:text-6xl font-black text-brand-navy mb-10 tracking-tight leading-none uppercase">
                Traditional Real Estate <br /><span className="text-red-600">The Problem.</span>
              </h2>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-12">
                Conventional real estate transactions involve multiple fragmented layers that increase cost and reduce transparency for everyone involved
              </p>
              
              <div className="space-y-6">
                {[
                  "Real estate agents taking 2 to 5 percent commission",
                  "Fragmented sub agents and local brokers",
                  "Inconsistent consultants and advisors",
                  "External lawyers and documentation specialists",
                  "Uncoordinated registration agents"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-zinc-100 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                      <ShieldAlert size={18} />
                    </div>
                    <span className="text-xs font-black text-brand-navy uppercase tracking-widest">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-brand-navy rounded-[60px] p-16 text-white relative overflow-hidden shadow-3xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
               <h3 className="text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-12">The Impact</h3>
               <div className="space-y-12">
                  {[
                    { t: "Increased Costs", d: "Layered commissions reduce your effective ROI" },
                    { t: "Delayed Transactions", i: "Miscommunication between fragmented parties" },
                    { t: "Reduced Value", d: "Standard market inefficiencies cost you millions" }
                  ].map((impact, i) => (
                    <div key={i} className="flex gap-8 items-start">
                       <span className="text-4xl font-black text-white/10">0{i+1}</span>
                       <div>
                          <h4 className="text-xl font-black mb-2 uppercase tracking-tight">{impact.t}</h4>
                          <p className="text-zinc-400 text-sm font-medium">{impact.d || impact.i}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION - THE INTEGRATED PLATFORM */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">The PremiumLand Advantage</span>
            <h2 className="text-4xl lg:text-7xl font-black text-brand-navy tracking-tight mb-8 uppercase">
              The <span className="text-brand-gold italic">Solution.</span>
            </h2>
            <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto">
              A single controlled platform that unites serious buyers and verified sellers under one institutional umbrella
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                t: "1 Serious Buyers and Verified Sellers",
                d: "We curate our membership to include only qualified serious investors and legitimate sellers No casual browsers and no time wasters",
                icon: <Users2 />
              },
              {
                t: "2 Eliminates Unnecessary Intermediaries",
                d: "Direct buyer to platform to seller connection No brokers and no sub agents taking cuts Cost savings go directly to you",
                icon: <Zap />
              },
              {
                t: "3 Complete Legal and Transaction Support",
                d: "Get end to end support from our integrated team One point of accountability and one seamless process",
                icon: <Landmark />
              },
              {
                t: "4 Ensures Transparency and Control",
                d: "Every transaction is managed on our platform with full visibility All parties see the same standardized information",
                icon: <LayoutGrid />
              }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-12 bg-zinc-50 rounded-[50px] border border-zinc-100 hover:bg-brand-navy transition-all duration-700"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-10 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500">
                  {React.cloneElement(s.icon, { size: 30 })}
                </div>
                <h3 className="text-2xl font-black text-brand-navy mb-6 uppercase tracking-tighter group-hover:text-white transition-colors leading-tight">{s.t}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-400 transition-colors">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL BENEFIT TRACKS */}
      <section className="section-padding bg-zinc-900 text-white rounded-[100px] mx-6 lg:mx-12 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src={infrastructureImg} className="w-full h-full object-cover opacity-20" alt="Infrastructure" />
           <div className="absolute inset-0 bg-brand-navy/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* BUYERS */}
            <div>
               <div className="w-14 h-14 rounded-2xl bg-brand-gold text-brand-navy flex items-center justify-center mb-10">
                  <Search size={28} />
               </div>
               <h3 className="text-4xl font-black mb-10 uppercase tracking-tighter">For <span className="text-brand-gold">Buyers</span></h3>
               <ul className="space-y-6">
                  {[
                    "Access to 1000 plus properties at 20 to 50 percent below market rates",
                    "No agent commissions paid ever",
                    "Direct negotiation with verified sellers only",
                    "Complete legal support from our integrated team",
                    "Quarterly networking with institutional level buyers"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start border-b border-white/5 pb-6">
                       <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={20} />
                       <span className="text-zinc-400 font-bold uppercase text-xs tracking-widest leading-relaxed">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>

            {/* SELLERS */}
            <div>
               <div className="w-14 h-14 rounded-2xl bg-white text-brand-navy flex items-center justify-center mb-10">
                  <ArrowRight size={28} />
               </div>
               <h3 className="text-4xl font-black mb-10 uppercase tracking-tighter text-white">For Sellers</h3>
               <ul className="space-y-6">
                  {[
                    "Free listing on our platform with 1000 plus verified buyers",
                    "Zero commission when selling through our network",
                    "Direct access to serious and qualified buyers only",
                    "Professional institutional transaction support",
                    "Faster sales cycle through our proprietary buyer network"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start border-b border-white/5 pb-6">
                       <CheckCircle2 className="text-white shrink-0 mt-1" size={20} />
                       <span className="text-zinc-400 font-bold uppercase text-xs tracking-widest leading-relaxed">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
           <div className="bg-brand-navy p-20 rounded-[80px] shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-gold/5 animate-pulse"></div>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 tracking-tight uppercase relative z-10 leading-none">
                Ready to Join <br />The <span className="text-brand-gold">Controlled</span> Market
              </h2>
              <p className="text-zinc-400 text-lg font-medium mb-12 max-w-xl mx-auto relative z-10">
                Experience the efficiency of institutional real estate acquisition without the intermediary friction
              </p>
              <div className="flex flex-wrap justify-center gap-6 relative z-10">
                 <button className="px-12 py-5 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-2xl hover:scale-105 transition-transform">Get Access Now</button>
                 <button className="px-12 py-5 border border-white/20 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all">View Our Model</button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
