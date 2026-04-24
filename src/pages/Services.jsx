import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gavel, Scale, ShieldCheck, Building2, 
  Search, FileSearch, HardHat, Landmark,
  Briefcase, Activity, CheckCircle2, 
  ArrowRight, ShieldAlert, Zap
} from 'lucide-react';

// Asset Imports
import heroImg from '../assets/hero3.png';
import acquisitionImg from '../assets/prop1.png';
import managementImg from '../assets/off.png';

const Services = () => {
  const protocols = [
    {
      title: "Judicial Acquisition Protocol",
      desc: "End to end management of the bidding and acquisition process within NCLT and judicial auction frameworks including strategic valuation and bid positioning",
      icon: <Gavel size={32} />,
      points: ["Strategic Valuation", "NCLT Bid Management", "Judicial Liaison"]
    },
    {
      title: "Title Cleansing Mandate",
      desc: "Comprehensive legal audit and neutralization of historical debts encumbrances and liabilities to ensure an absolute and unencumbered title transfer",
      icon: <Scale size={32} />,
      points: ["Debt Neutralization", "Liability Audits", "Clearance Certificates"]
    },
    {
      title: "Secured Possession Mandate",
      desc: "Physical asset securitization and possession transition management including technical audits and infrastructure verification post acquisition",
      icon: <ShieldCheck size={32} />,
      points: ["Physical Possession", "Technical Audits", "Secure Transition"]
    }
  ];

  const desks = [
    {
      name: "The HNI Private Desk",
      desc: "Bespoke acquisition mandates for high value individuals focused on luxury residential and private estates",
      icon: <Briefcase size={24} />
    },
    {
      name: "The Institutional Desk",
      desc: "Bulk land banking and commercial portfolio management for corporate entities and real estate funds",
      icon: <Landmark size={24} />
    }
  ];

  return (
    <div className="bg-white">
      {/* CINEMATIC HERO - EXPANDED */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#0a1128]">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} className="w-full h-full object-cover opacity-40 scale-110" alt="Services" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-transparent to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full text-center lg:text-left">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl"
           >
             <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">Operational Mandates</span>
             <h1 className="text-6xl lg:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.8] uppercase">
               Strategic <br />Protocols.
             </h1>
             <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
               Sophisticated legal and technical frameworks designed to de risk judicial asset acquisitions and maximize capital efficiency
             </p>
           </motion.div>
        </div>
      </section>

      {/* CORE PROTOCOL GRID */}
      <section className="section-padding bg-white relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {protocols.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-12 rounded-[50px] shadow-3xl border border-zinc-50 hover:border-brand-gold/20 transition-all duration-500 group"
                >
                   <div className="w-20 h-20 bg-brand-navy text-white rounded-3xl flex items-center justify-center mb-12 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors shadow-2xl">
                      {p.icon}
                   </div>
                   <h3 className="text-3xl font-black text-brand-navy uppercase tracking-tighter mb-8 leading-none">
                      {p.title}
                   </h3>
                   <p className="text-zinc-500 font-medium leading-relaxed mb-10 text-base">
                      {p.desc}
                   </p>
                   <div className="space-y-4">
                      {p.points.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                           <CheckCircle2 size={16} className="text-brand-gold" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy opacity-60">{point}</span>
                        </div>
                      ))}
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* SPECIALIZED DESKS */}
      <section className="section-padding bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-5">
                 <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">Targeted Mandates</span>
                 <h2 className="text-4xl lg:text-7xl font-black text-brand-navy uppercase tracking-tighter mb-10 leading-none">
                   Specialized <br />Desks.
                 </h2>
                 <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-12">
                   We operate two distinct institutional desks to serve the unique requirements of private wealth and corporate real estate funds
                 </p>
                 <div className="space-y-8">
                    {desks.map((d, i) => (
                      <div key={i} className="flex gap-8 items-start">
                         <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0 shadow-xl">
                            {d.icon}
                         </div>
                         <div>
                            <h4 className="text-xl font-black text-brand-navy uppercase tracking-tight mb-2">{d.name}</h4>
                            <p className="text-sm text-zinc-500 font-medium leading-relaxed">{d.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:col-span-7 relative">
                 <div className="aspect-video rounded-[60px] overflow-hidden shadow-4xl relative z-10">
                    <img src={acquisitionImg} className="w-full h-full object-cover" alt="HNI Desk" />
                 </div>
                 <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-gold rounded-full blur-[80px] opacity-20"></div>
              </div>
           </div>
        </div>
      </section>

      {/* THE SECURE PATH - WORKFLOW */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
           <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-8 block uppercase">Mandate Lifecycle</span>
           <h2 className="text-4xl lg:text-6xl font-black text-brand-navy uppercase tracking-tighter mb-24 leading-none">
             The Secure <br />Acquisition Path.
           </h2>
           
           <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connector Line (Desktop Only) */}
              <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-zinc-100 -z-0"></div>
              
              {[
                { step: "Zero One", title: "Mandate Activation", icon: <Activity size={24} /> },
                { step: "Zero Two", title: "Legal Liquidation", icon: <FileSearch size={24} /> },
                { step: "Zero Three", title: "Judicial Bidding", icon: <Gavel size={24} /> },
                { step: "Zero Four", title: "Possession Handover", icon: <CheckCircle2 size={24} /> }
              ].map((s, i) => (
                <div key={i} className="relative z-10 bg-white group">
                   <div className="w-20 h-20 bg-zinc-50 border border-zinc-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 shadow-lg">
                      {s.icon}
                   </div>
                   <p className="text-brand-gold text-[8px] font-black tracking-[0.4em] uppercase mb-2">{s.step}</p>
                   <h4 className="text-base font-black text-brand-navy uppercase tracking-tight">{s.title}</h4>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FINAL CALL TO MANDATE - COMPACT VERSION */}
      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="bg-[#0a1128] rounded-[40px] p-10 lg:p-16 overflow-hidden relative shadow-3xl text-white group border border-white/5">
              <div className="max-w-3xl relative z-10">
                 <div className="flex items-center gap-3 mb-8 text-brand-gold">
                    <ShieldAlert size={20} />
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase">Confidential Institutional Mandate</span>
                 </div>
                 <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-8 leading-none">
                   Initiate Your <br />Strategic <span className="text-brand-gold">Mandate.</span>
                 </h2>
                 <p className="text-zinc-400 text-base font-medium mb-10 leading-relaxed max-w-2xl">
                   Engage our legal and technical team for a confidential discussion regarding your specific acquisition goals in the judicial real estate market
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <button className="px-10 py-5 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase text-[9px] tracking-widest shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                       <Zap size={16} />
                       <span>Register Mandate</span>
                    </button>
                    <button className="px-10 py-5 border border-white/20 text-white rounded-2xl font-black uppercase text-[9px] tracking-widest hover:bg-white/10 transition-all">
                       Corporate Deck
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
