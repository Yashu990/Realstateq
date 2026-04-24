import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Landmark, History, Users2, 
  Scale, Award, Building2, Globe, 
  ArrowRight, CheckCircle2, Fingerprint,
  Zap
} from 'lucide-react';

// Asset Imports
import heroImg from '../assets/hero2.png';
import agentImg from '../assets/agent.png';
import aboutInterior from '../assets/about-img.png';
import advantageImg from '../assets/advantage.png';

const About = () => {
  const stats = [
    { label: "Years of Establishment", value: "Fifteen Plus" },
    { label: "Portfolio Managed", value: "INR 50000000000" },
    { label: "Verified Acquisitions", value: "Eight Hundred Plus" },
    { label: "Institutional Partners", value: "Forty Five Plus" }
  ];

  const protocols = [
    {
      title: "Judicial Verification",
      desc: "Direct coordination with National Company Law Tribunal and District Courts for absolute title clarity",
      icon: <Scale size={24} />
    },
    {
      title: "Debt Neutralization",
      desc: "Systematic clearance of all prior encumbrances and financial liabilities before asset transfer",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Physical Securitization",
      desc: "Verified physical possession and infrastructure audit conducted by in house technical teams",
      icon: <Building2 size={24} />
    }
  ];

  return (
    <div className="bg-white">
      {/* INSTITUTIONAL HERO - EXPANDED */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#0a1128]">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} className="w-full h-full object-cover opacity-40 scale-110" alt="Heritage" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-transparent to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl"
           >
             <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">Corporate Establishment</span>
             <h1 className="text-6xl lg:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.8] uppercase">
               The <br />Establishment.
             </h1>
             <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
               Defining the gold standard for judicial real estate acquisitions and institutional portfolio management since two thousand nine
             </p>
           </motion.div>
        </div>
      </section>

      {/* ACCOUNTABILITY DASHBOARD */}
      <section className="py-24 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
              {stats.map((s, i) => (
                <div key={i}>
                   <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest mb-4">{s.label}</p>
                   <p className="text-2xl lg:text-3xl font-black text-brand-navy tracking-tight uppercase leading-tight">{s.value}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* THE JUDICIAL DNA */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-6">
                 <div className="flex items-center gap-4 mb-8 text-brand-gold">
                    <Fingerprint size={32} />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Our Core Identity</span>
                 </div>
                 <h2 className="text-4xl lg:text-7xl font-black text-brand-navy uppercase tracking-tighter mb-10 leading-none">
                   Judicial <br />Authority.
                 </h2>
                 <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-12">
                   Unlike traditional brokers we operate as an institutional gateway for court supervised property auctions Our foundation is built on deep legal expertise and a direct relationship with judicial authorities ensuring that every asset we handle is cleared of historical complexities
                 </p>
                 <div className="space-y-6">
                    {["Direct NCLT Coordination", "Verified Court Auctions", "Strategic Asset Reclamation"].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                         <CheckCircle2 size={18} className="text-brand-gold" />
                         <span className="text-xs font-black uppercase tracking-widest text-brand-navy">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:col-span-6 relative">
                 <div className="aspect-square rounded-[80px] overflow-hidden shadow-4xl relative z-10">
                    <img src={aboutInterior} className="w-full h-full object-cover" alt="Institutional Office" />
                 </div>
                 <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-gold rounded-[60px] -z-0 flex items-center justify-center p-12 text-brand-navy font-black text-center text-[10px] uppercase tracking-widest">
                    Corporate Head Office Gurgaon Haryana
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* THE VERIFICATION PROTOCOL */}
      <section className="section-padding bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">Operational Excellence</span>
              <h2 className="text-4xl lg:text-6xl font-black text-brand-navy uppercase tracking-tighter mb-8 leading-none">
                The Verification <br />Protocol.
              </h2>
              <p className="text-zinc-500 font-medium">Every asset undergoes a rigorous three stage clearance process before it is listed on our platform</p>
           </div>

           <div className="grid lg:grid-cols-3 gap-12">
              {protocols.map((p, i) => (
                <div key={i} className="bg-white p-12 rounded-[50px] shadow-3xl hover:-translate-y-2 transition-all duration-500 group">
                   <div className="w-16 h-16 rounded-2xl bg-brand-navy text-white flex items-center justify-center mb-10 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                      {p.icon}
                   </div>
                   <h3 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">{p.title}</h3>
                   <p className="text-zinc-500 font-medium leading-relaxed text-sm">
                      {p.desc}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                 <div className="aspect-[4/5] rounded-[80px] overflow-hidden shadow-4xl grayscale hover:grayscale-0 transition-all duration-1000">
                    <img src={agentImg} className="w-full h-full object-cover" alt="Executive Director" />
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                 <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">Executive Leadership</span>
                 <h2 className="text-4xl lg:text-7xl font-black text-brand-navy uppercase tracking-tighter mb-10 leading-none">
                   Strategic <br />Vision.
                 </h2>
                 <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-12 italic">
                   "Our mission is to democratize institutional grade real estate investments by providing a secure transparent and judicial gateway for high value property acquisitions"
                 </p>
                 <div className="flex items-center gap-6">
                    <div>
                       <p className="text-xl font-black text-brand-navy uppercase tracking-tight">Executive Director</p>
                       <p className="text-[10px] font-black uppercase text-brand-gold tracking-widest mt-1">Chief Strategic Officer</p>
                    </div>
                    <div className="w-px h-12 bg-zinc-100"></div>
                    <Award size={32} className="text-brand-navy opacity-20" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FINAL TRUST BANNER */}
      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="bg-[#0a1128] rounded-[50px] p-16 lg:p-24 text-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                 <img src={advantageImg} className="w-full h-full object-cover" alt="Background" />
              </div>
              <div className="relative z-10">
                 <div className="w-20 h-20 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl">
                    <ShieldCheck size={40} />
                 </div>
                 <h2 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-10 leading-none">
                   Institutional Grade <br />Execution.
                 </h2>
                 <p className="text-zinc-400 text-lg font-medium max-w-2xl mx-auto mb-12">
                   Partner with an establishment that prioritizes legal certainty and capital protection above all else
                 </p>
                 <button className="px-12 py-6 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-2xl hover:scale-105 transition-all flex items-center gap-4 mx-auto">
                    <Zap size={18} />
                    <span>Inquire for Corporate Profile</span>
                 </button>
              </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default About;
