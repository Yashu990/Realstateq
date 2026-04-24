import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ShieldCheck, CheckCircle2,
  MapPin, Gavel, Scale, Handshake, TrendingUp,
  Users, Info, Lock, Zap, Award, Briefcase, HeartHandshake, History,
  ArrowUpRight, Users2, Building2, Landmark, AreaChart, XCircle, CheckCircle,
  Gem, Calendar, Rocket, MessageSquare, Globe2, X
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Asset Imports
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import agentImg from '../assets/agent.png';
import eventImg from '../assets/event.png';
import legalImg from '../assets/legal.png';
import resImg from '../assets/res.png';
import commImg from '../assets/comm.png';
import offImg from '../assets/off.png';
import aboutImg from '../assets/about-img.png';
import chaosImg from '../assets/chaos.png';
import advantageImg from '../assets/advantage.png';
import prop1 from '../assets/prop1.png';
import prop2 from '../assets/prop2.png';
import prop3 from '../assets/prop3.png';

// New Asset Imports (Temporary placeholders until user runs copy_images.bat)
import institutionalImg from '../assets/prop1.png';
import analyticsImg from '../assets/prop2.png';
import infrastructureImg from '../assets/prop3.png';
import legalMainImg from '../assets/about-img.png';

const heroImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-brand-navy">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0 bg-brand-navy">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-brand-navy/10 z-10"></div>
            <img
              src={heroImages[current]}
              className="w-full h-full object-cover"
              alt="Premium Land Auctions"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT */}
      <div className="container relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 mb-8 bg-brand-gold/10 px-4 py-2 rounded-full border border-brand-gold/20">
            <Gem size={14} className="text-brand-gold" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold">Invitation-Only Platform</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase">
            Access India <br />One Thousand <span className="text-brand-gold">Plus</span> Premium <br />NLCT Assets.
          </h1>

          <p className="text-base md:text-lg lg:text-xl font-medium text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our exclusive network connecting serious buyers with verified judicial assets Discover properties twenty to fifty percent below market valuation
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/membership" className="btn-pill btn-gold px-12 py-5 !rounded-lg text-sm uppercase flex items-center gap-3 shadow-2xl">
              <span>Apply for Membership</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsBanner = () => (
  <section className="relative py-24 bg-[#0a1128] overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed opacity-80"
      style={{ backgroundImage: `url(${hero2})` }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/80 via-[#0a1128]/40 to-transparent"></div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center lg:text-left">
      <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Why Partner With Us?</span>
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 italic">Your Premier Real Estate Ally</h2>

      <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-12 gap-y-6">
        {[
          { v: "1000 plus", l: "Properties Curated" },
          { v: "15 plus", l: "Years Elevating Real Estate" },
          { v: "INR 5000 Crores plus", l: "Value Managed" }
        ].map((s, i) => (
          <div key={i} className="flex items-baseline gap-3 whitespace-nowrap">
            <span className="text-xl md:text-2xl font-black text-white">{s.v}</span>
            <span className="text-[9px] font-black uppercase tracking-widest text-brand-gold/60">{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PropertySolutions = () => {
  const solutions = [
    { title: "Residential Properties", img: resImg },
    { title: "Commercial Properties", img: commImg },
    { title: "Offices", img: offImg }
  ];

  return (
    <section className="py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Complete Real Estate Solutions in NLCT</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-16 leading-tight">Residential Commercial and<br /> Investment Property Solutions</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-3xl group cursor-pointer shadow-2xl">
              <img src={s.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={s.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-10 left-0 w-full text-center">
                <span className="text-white text-xl font-bold tracking-tight">{s.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PropertyVaultSolution = () => {
  const points = [
    { t: "Centralized Database", d: "10,000+ auctions curated annually.", icon: <Building2 size={20} /> },
    { t: "Legal Due Diligence", d: "In-house expert lawyers for clear titles.", icon: <Scale size={20} /> },
    { t: "AI-Powered Valuation", d: "Predictive ML for risk scoring.", icon: <AreaChart size={20} /> },
    { t: "Exclusive Network", d: "Membership access to vetted buyers.", icon: <ShieldCheck size={20} /> },
    { t: "End-to-End Support", d: "From auction win to physical possession.", icon: <Handshake size={20} /> }
  ];

  return (
    <section className="py-32 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/3">
            <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Integrated Ecosystem</span>
            <h2 className="text-5xl font-black text-brand-navy uppercase tracking-tighter leading-none mb-8">PropertyVault <br /><span className="text-brand-gold italic">Solution.</span></h2>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-sm">
              An all-in-one institutional marketplace designed specifically for distressed asset acquisition and management.
            </p>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-12 gap-y-12">
            {points.map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 text-brand-gold flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 shadow-sm">
                  {p.icon}
                </div>
                <div>
                  <h4 className="text-base font-black text-brand-navy mb-1 uppercase tracking-tight">{p.t}</h4>
                  <p className="text-zinc-400 text-xs font-medium leading-relaxed">{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PlatformDifferentiation = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      t: "Lawyer Experts",
      d: "3+ lawyers with DRT/NCLT/SARFAESI expertise",
      detailedDesc: "Our legal team specializes in complex asset recovery and judicial auctions. With decades of combined experience in DRT (Debt Recovery Tribunal), NCLT (National Company Law Tribunal), and SARFAESI Act protocols, they ensure every property on our platform is litigation-free and has a clear, marketable title. We handle all the 'heavy lifting' of legal due diligence so you don't have to.",
      img: institutionalImg,
      icon: <Scale size={24} />,
      color: "gold"
    },
    {
      t: "Ex-Bankers",
      d: "2+ professionals from top banks; banking relationships intact",
      detailedDesc: "Our banking veterans bring deep-rooted relationships with top-tier financial institutions. This 'insider' access allows us to source high-yield REO (Real Estate Owned) inventories and distressed land blocks before they ever hit the public market. They understand the nuances of bank valuations and liquidation mandates, providing our members with a significant price advantage.",
      img: analyticsImg,
      icon: <Landmark size={24} />,
      color: "teal"
    },
    {
      t: "Tech Team",
      d: "Full-stack engineers; AI/ML for valuation & automation",
      detailedDesc: "The backbone of our platform is built by elite full-stack engineers and data scientists. We leverage proprietary AI/ML algorithms to analyze historical auction data, project future market uplift, and automate the bidding process. Our technology provides real-time heat maps and predictive analytics that give you an unfair advantage in identifying the next growth corridor.",
      img: infrastructureImg,
      icon: <Rocket size={24} />,
      color: "navy"
    },
    {
      t: "Business Team",
      d: "Direct sales, partnerships, and go-to-market",
      detailedDesc: "Our business development experts bridge the gap between institutional assets and serious investors. They manage our 'Invitation-Only' network, fostering exclusive partnerships and ensuring a seamless go-to-market strategy for every asset. From personalized investment advisory to coordinating large-scale mandates, they are dedicated to maximizing your portfolio's performance.",
      img: hero4,
      icon: <Briefcase size={24} />,
      color: "gold"
    }
  ];

  return (
    <section id="platform" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block"
          >
            Core Team & Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-7xl font-black text-brand-navy tracking-tight"
          >
            Why Our Platform is <span className="text-brand-gold italic">Superior.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
              onClick={() => setSelectedCard(card)}
              className="group relative flex flex-col h-full bg-zinc-50 rounded-[40px] overflow-hidden border border-zinc-100 shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer"
            >
              {/* Image Container - FIT */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={card.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt={card.t}
                />
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors"></div>
                <div className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl text-brand-navy shadow-lg">
                  {card.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{card.t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium mb-8 flex-grow">
                  {card.d}
                </p>
                <div className="pt-6 border-t border-zinc-200">
                  <button className="text-brand-navy font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                    Discover More <Zap size={14} className="text-brand-gold" />
                  </button>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-tl-[80px] -mr-12 -mb-12 group-hover:scale-150 transition-transform duration-1000"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12"
          >
            <div className="absolute inset-0 bg-brand-navy/80 backdrop-blur-xl" onClick={() => setSelectedCard(null)}></div>
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="relative w-full max-w-3xl bg-white rounded-[40px] overflow-hidden shadow-3xl flex flex-col lg:flex-row"
            >
              <button 
                onClick={() => setSelectedCard(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-zinc-100 hover:bg-brand-gold hover:text-brand-navy transition-all rounded-full flex items-center justify-center text-zinc-400 shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="lg:w-[45%] aspect-square lg:aspect-auto relative overflow-hidden">
                <img src={selectedCard.img} className="w-full h-full object-cover" alt={selectedCard.t} />
                <div className="absolute inset-0 bg-brand-navy/10"></div>
                <div className="absolute bottom-6 left-6 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                   {React.cloneElement(selectedCard.icon, { size: 24, className: "text-brand-gold" })}
                </div>
              </div>

              <div className="lg:w-[55%] p-10 lg:p-12 flex flex-col justify-center">
                 <span className="text-brand-gold text-[9px] font-black uppercase tracking-[0.3em] mb-4 block">Platform Expertise</span>
                 <h2 className="text-3xl lg:text-4xl font-black text-brand-navy uppercase tracking-tighter leading-none mb-6">{selectedCard.t}</h2>
                 <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8">
                   {selectedCard.detailedDesc}
                 </p>
                 <button className="w-full py-4 bg-brand-navy text-white rounded-xl font-black uppercase text-[9px] tracking-widest shadow-xl hover:bg-brand-gold hover:text-brand-navy transition-all">
                    Inquire About Expertise
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


const InvestorEvents = () => {
  const events = [
    { t: "Spring Summit", m: "Q1", d: "Major portfolio discovery and seasonal market entry brief." },
    { t: "Mid-Year Showcase", m: "Q2", d: "Live auction demonstrations and primary asset reveals." },
    { t: "Portfolio Review", m: "Q3", d: "Performance analysis and strategic asset re-allocation." },
    { t: "Annual Gala", m: "Q4", d: "Investor awards and exclusive upcoming mandate preview." }
  ];

  return (
    <section id="events" className="section-padding bg-[#0a1128] text-white overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-90"
        style={{ backgroundImage: `url(${eventImg})` }}
      ></div>
      <div className="absolute inset-0 bg-[#0a1128]/30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block drop-shadow-md">Exclusive Community</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white italic drop-shadow-lg">Quarterly Investor Events</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((e, i) => (
            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500 group cursor-default backdrop-blur-sm">
              <span className="text-brand-gold font-bold text-xs mb-6 block tracking-widest uppercase">{e.m}</span>
              <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-gold transition-colors">{e.t}</h4>
              <p className="text-sm text-zinc-300 leading-relaxed font-medium group-hover:text-white transition-colors">{e.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const coreBenefits = [
    { t: "1000 plus Premium Properties at 20 to 50 percent Discount", d: "Largest curated NLCT portfolio in India with value over INR 5000 crores.", icon: <Building2 className="text-brand-gold" size={32} />, img: hero1 },
    { t: "Dedicated Personal Agent - Your Property Scout", d: "Expert scout familiar with your budget and goals manages your journey.", icon: <Users2 className="text-brand-gold" size={32} />, img: agentImg },
    { t: "Expert Legal Support and Compliance", d: "Senior advocates handling document verification and 12 month warranties.", icon: <Landmark className="text-brand-gold" size={32} />, img: legalImg },
    { t: "Quarterly Investor Events (4 Per Year)", d: "Networking designed for serious investors. Spring, Mid-Year, Portfolio, Gala.", icon: <Calendar className="text-brand-gold" size={32} />, img: eventImg },
    { t: "Free Lifetime Selling Services", d: "Sell properties purchased through us at zero commission, forever.", icon: <ArrowUpRight className="text-brand-gold" size={32} />, img: aboutImg },
    { t: "Verified Buyers and Sellers Platform", d: "Controlled platform for serious investors. No casual browsers.", icon: <ShieldCheck className="text-brand-gold" size={32} />, img: prop1 },
    { t: "Transparent Auction Process", d: "Complete clarity, bidding strategy consultation, and filling management.", icon: <Gavel className="text-brand-gold" size={32} />, img: prop2 },
    { t: "Stress-Free Property Handover", d: "From win to possession, we handle registration and inspection.", icon: <Handshake className="text-brand-gold" size={32} />, img: agentImg },
    { t: "Investment Insights & Analysis", d: "Comprehensive research achieving 15-25% average member ROI.", icon: <AreaChart className="text-brand-gold" size={32} />, img: prop3 }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-24">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block"
        >
          Foundation & Trust
        </motion.span>
        <h2 className="text-4xl lg:text-7xl font-black text-brand-navy tracking-tight">Platform <span className="text-brand-gold italic">Infrastructure.</span></h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {coreBenefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[450px] rounded-[40px] overflow-hidden border border-zinc-100 bg-zinc-50 shadow-xl hover:shadow-2xl transition-all duration-700"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img src={b.img} className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000" alt={b.t} />
              <div className="absolute inset-0 bg-white/5 group-hover:bg-brand-navy/80 transition-colors duration-700"></div>
            </div>

            <div className="relative p-12 h-full flex flex-col justify-between z-10">
              <div className="w-16 h-16 rounded-2xl bg-brand-navy text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500 shadow-xl">
                {b.icon}
              </div>
              <div>
                <h4 className="text-xl font-black text-brand-navy mb-4 group-hover:text-white transition-colors leading-tight tracking-tight">{b.t}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium group-hover:text-white/60 transition-colors">{b.d}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


const MarketInsights = () => (
  <section className="section-padding bg-zinc-50/50">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
      >
        <div>
          <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Market Insights</p>
          <h2 className="text-4xl lg:text-6xl font-serif font-black text-brand-dark max-w-2xl leading-[1.1]">Expert Perspectives and <br />Luxury Real Estate Trends</h2>
        </div>
        <Link to="/insights" className="px-8 py-3 bg-brand-navy text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl">
          <span>View All Insights</span>
          <ArrowUpRight size={16} />
        </Link>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Main Article */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 bg-white rounded-[40px] overflow-hidden border border-zinc-100 shadow-xl group"
        >
          <div className="aspect-[16/8] overflow-hidden">
            <img src={legalMainImg} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Legal" />
          </div>
          <div className="p-12">
            <span className="bg-brand-dark text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-8 inline-block">Must Read</span>
            <h3 className="text-3xl lg:text-4xl font-serif font-black mb-6 text-brand-dark group-hover:text-brand-gold transition-colors">Legal Aspects of Property Buying in NLCT...</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium line-clamp-2">Purchasing property in NLCT represents one of the most significant financial decisions you'll ever make. With the city's booming real estate market, legal due diligence is more critical than ever.</p>
          </div>
        </motion.div>

        {/* Secondary Articles List */}
        <div className="flex flex-col gap-8">
          {[
            { t: "Sector 103 NLCT Property Guide...", img: hero4 },
            { t: "How to Choose the Best Broker Fir...", img: institutionalImg },
            { t: "2BHK vs 3BHK Investment in NLCT...", img: analyticsImg }
          ].map((art, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-6 group cursor-pointer items-center"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                <img src={art.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={art.t} />
              </div>
              <div>
                <h4 className="text-sm font-black text-brand-navy leading-snug group-hover:text-brand-gold transition-colors">{art.t}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AboutConsultancy = () => (
  <section className="section-padding bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">About Our Consultancy</p>
        <h2 className="text-5xl lg:text-7xl font-serif font-black text-brand-dark mb-10 tracking-tighter leading-[0.95]">Leading Real Estate <br />Consultancy In <br /><span className="text-brand-gold italic">NLCT.</span></h2>
        <p className="text-zinc-500 text-sm leading-[1.8] font-medium mb-12 max-w-xl">
          Our firm is a premier real estate consultancy in NLCT with 200 plus professionals specializing in luxury residential and commercial properties Established in 2018 and RERA registered we serve clients across Sector 67 Golf Course Road Dwarka Expressway DLF Phases and all major NLCT locations Our comprehensive services include property buying and selling consultation investment advisory commercial leasing NRI property services and legal documentation support
        </p>
        <button className="px-10 py-4 bg-brand-dark text-white rounded-lg flex items-center gap-4 text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl group">
          <span>Discover More</span>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-navy/10 transition-colors"><ArrowUpRight size={16} /></div>
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="aspect-square rounded-[60px] overflow-hidden shadow-3xl">
          <img src={aboutImg} className="w-full h-full object-cover" alt="Interior" />
        </div>
        {/* Floating Badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[40px] shadow-3xl flex items-center gap-6 border border-zinc-100"
        >
          <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold">15+</div>
          <div>
            <p className="text-brand-dark font-black text-sm uppercase leading-none mb-1">Years Experience</p>
            <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Industry Leadership</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="py-40 relative bg-[#0a1128] overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed opacity-95"
      style={{ backgroundImage: `url(${hero1})` }}
    ></div>
    <div className="absolute inset-0 bg-[#0a1128]/20"></div>

    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <p className="text-white text-2xl md:text-3xl font-bold leading-relaxed mb-12 italic drop-shadow-lg">
        "I was completely lost when I started looking for a property in NLCT. My budget was tight, and I didn't know which sectors were actually good. The PremiumLand team didn't just show me random properties - they sat with me, understood my goals, and found me a perfect asset at 30% below market price."
      </p>
      <div className="flex items-center justify-center gap-4">
        <div className="w-14 h-14 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold font-bold text-lg shadow-2xl">PV</div>
        <div className="text-left">
          <p className="text-white font-bold text-base drop-shadow-md">Priya Verma</p>
          <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest drop-shadow-sm">Premium Member</p>
        </div>
      </div>
    </div>
  </section>
);

const TrustMetrics = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 text-center">
      {[
        { v: "1000 plus", l: "Properties" },
        { v: "INR 5000 Crores plus", l: "Portfolio" },
        { v: "800 plus", l: "Deals Done" },
        { v: "98 percent", l: "Satisfied" },
        { v: "15 to 25 percent", l: "Avg ROI" }
      ].map((m, i) => (
        <div key={i} className="flex flex-col gap-2">
          <span className="text-5xl font-black text-brand-navy transition-colors hover:text-brand-gold">{m.v}</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">{m.l}</span>
        </div>
      ))}
    </div>
  </section>
);

const Home = () => {
  return (
    <main className="bg-white">
      <Hero />
      <StatsBanner />
      <PropertySolutions />
      <AboutConsultancy />
      <PlatformDifferentiation />
      <MarketInsights />
      <InvestorEvents />
      <Benefits />
      <TestimonialSection />
      <PropertyVaultSolution />
      <TrustMetrics />

      <section className="section-padding bg-[#0a1128] text-white text-center rounded-t-[100px] mt-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-95"
          style={{ backgroundImage: `url(${hero4})` }}
        ></div>
        <div className="absolute inset-0 bg-[#0a1128]/20"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h3 className="text-5xl lg:text-7xl font-bold mb-12 italic text-white drop-shadow-2xl">Join a Private Network Built for Serious Investors</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/membership" className="btn-pill btn-gold px-12 py-5 !rounded-lg text-[12px] font-black uppercase shadow-2xl">Apply for Membership</Link>
            <button className="btn-pill !border-white/20 !text-white !px-12 !py-5 hover:bg-white/10 text-[12px] font-black uppercase">Schedule Consultation</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
