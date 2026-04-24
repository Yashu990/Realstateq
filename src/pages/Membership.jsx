import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ShieldCheck, CheckCircle2, Gem, ArrowRight, Zap,
  Users2, Building2, Landmark, AreaChart, Gavel,
  Handshake, Calendar, Mail, TrendingUp, History,
  MessageSquare, HeartHandshake, Briefcase, FileText,
  Search, BarChart3, Scale, PhoneCall
} from 'lucide-react';

// Asset Import
import hero4 from '../assets/hero4.png';
import eventImg from '../assets/event.png';

const Membership = () => {
  const heroRef = useRef(null);
  const ctaRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const ctaY = useTransform(ctaScroll, [0, 1], ["-20%", "20%"]);

  const protocolPillars = [
    {
      title: "Property Access and Search",
      icon: <Building2 />,
      items: [
        "Access to 1000 plus premium NLCT listings",
        "Properties at 20 to 50 percent below market value",
        "Dedicated personal agent",
        "Early access to newly listed assets",
        "High resolution photos videos and location maps",
        "Comparative property analysis reports"
      ]
    },
    {
      title: "Legal and Compliance",
      icon: <Scale />,
      items: [
        "Unlimited consultations with senior advocates",
        "Comprehensive property due diligence",
        "Title verification and encumbrance checks",
        "Complete registration and mutation management",
        "12 month legal warranty on ownership",
        "Post purchase legal support"
      ]
    },
    {
      title: "Valuation and Analysis",
      icon: <BarChart3 />,
      items: [
        "Professional valuations from certified experts",
        "ROI projections for 1 3 and 5 year periods",
        "Location growth indicator reports",
        "Appreciation potential forecasting",
        "Risk assessment and mitigation strategies",
        "Personalized investment advisory meetings"
      ]
    },
    {
      title: "Auction and Bidding",
      icon: <Gavel />,
      items: [
        "Auction strategy consultation",
        "Real time support during auction bidding",
        "EMD arrangement coordination",
        "Post bid documentation handling",
        "Appeal filing support",
        "Multiple auction participation support"
      ]
    },
    {
      title: "Exclusive Networking",
      icon: <Users2 />,
      items: [
        "Quarterly investor meet events 4 per year",
        "Networking with 800 plus successful investors",
        "Member exclusive WhatsApp community",
        "Property exchange opportunities",
        "Expert speaker sessions and seminars",
        "Exclusive member dinners and receptions"
      ]
    },
    {
      title: "Selling and Exit Strategy",
      icon: <Briefcase />,
      items: [
        "Lifetime FREE selling services zero commission",
        "Direct access to verified buyer network",
        "Market valuation for optimal pricing",
        "Documentation preparation for sale",
        "Buyer verification and qualification",
        "Tax and financial guidance for exits"
      ]
    },
    {
      title: "Personal Agent Service",
      icon: <HeartHandshake />,
      items: [
        "Dedicated agent knows your profile intimately",
        "Proactive search aligned with your criteria",
        "Direct access priority hotline",
        "WhatsApp and Email availability",
        "Portfolio management assistance",
        "Quarterly goal review and adjustment"
      ]
    },
    {
      title: "Support and Advisory",
      icon: <PhoneCall />,
      items: [
        "24 7 dedicated support hotline",
        "Priority email response within 2 hours",
        "Video conference consultations",
        "Quarterly portfolio reviews",
        "Annual investment strategy sessions",
        "Escalation to senior management"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* INSTITUTIONAL HERO */}
      <section ref={heroRef} className="relative pt-48 pb-32 bg-[#0a1128] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y: heroY }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src={hero4}
            className="w-full h-full object-cover opacity-60"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/70 via-transparent to-[#0a1128]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">Member Admission Protocol</span>
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-none uppercase drop-shadow-2xl">
              The <span className="text-brand-gold italic lowercase">Vault</span> Status.
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-16">
              Access India most comprehensive institutional real estate service
              Built for serious property investors and verified high net worth individuals
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRICING AND REFUND LOGIC */}
      <section className="relative z-20 -mt-24 pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[50px] shadow-3xl border border-zinc-100 p-10 lg:p-14 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>

            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7">
                <h2 className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Annual Membership Fee</h2>

                <div className="flex items-center gap-8 mb-8">
                  <div className="text-6xl font-black text-brand-navy tracking-tighter uppercase leading-none">
                    INR 100000
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest mb-8">
                  <ShieldCheck size={14} />
                  <span>100 percent Fully Refundable</span>
                </div>

                <p className="text-zinc-500 font-medium leading-relaxed mb-10 text-sm max-w-md">
                  Your membership is an investment not a cost The entire INR 100000 fee is credited back to your account upon your first property purchase through the platform
                </p>

                <button className="px-12 py-5 bg-brand-navy text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl flex items-center justify-center gap-3">
                  <span>Start Verification</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="lg:col-span-5 relative h-full min-h-[300px] rounded-[40px] overflow-hidden p-10 flex flex-col justify-center border border-zinc-100">
                <div className="absolute inset-0 z-0">
                  <img src={hero4} className="w-full h-full object-cover" alt="Elite Background" />
                  <div className="absolute inset-0 bg-brand-navy/30"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] mb-8 border-b border-brand-gold/20 pb-4">Membership Duration</h3>
                  <ul className="space-y-6">
                    {[
                      { l: "Initial Term", v: "12 Months" },
                      { l: "Renewal Policy", v: "INR 70000" },
                      { l: "Availability", v: "Instant Access" }
                    ].map((s, i) => (
                      <li key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0">
                        <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest">{s.l}</span>
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{s.v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE 8 PILLARS OF MEMBERSHIP */}
      <section className="section-padding bg-zinc-50 rounded-t-[100px] -mt-24 relative z-10 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">The Service Protocol</span>
            <h2 className="text-4xl lg:text-7xl font-black text-brand-navy tracking-tight mb-8">
              Complete <span className="text-brand-gold italic">Member Infrastructure.</span>
            </h2>
            <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto">
              Every category is meticulously designed to provide institutional grade support throughout your investment lifecycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {protocolPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-10 rounded-[40px] border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-700 group h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-8 group-hover:bg-brand-navy group-hover:text-brand-gold transition-all duration-500">
                  {React.cloneElement(pillar.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-black text-brand-navy mb-8 leading-tight">{pillar.title}</h3>
                <ul className="space-y-4 flex-grow">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-xs text-zinc-500 font-medium leading-relaxed items-start text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5 opacity-50"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE CALCULATION SECTION */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Profit Logic</span>
              <h2 className="text-4xl lg:text-7xl font-black text-brand-navy mb-10 tracking-tighter uppercase leading-none">
                Unlimited Value <br /><span className="text-zinc-300">Zero Net Cost</span>
              </h2>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-12">
                While membership is INR 100000 annually and fully refundable the actual value delivered through professional services exceeds INR 1450000 plus per member
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Legal Services", value: "INR 200000 plus" },
                  { label: "Valuations and Analysis", value: "INR 150000 plus" },
                  { label: "Dedicated Agent", value: "INR 300000 plus" },
                  { label: "Quarterly Events", value: "INR 100000 plus" },
                  { label: "Investment Advisory", value: "INR 200000 plus" },
                  { label: "Free Selling Services", value: "INR 500000 plus" }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 group hover:bg-brand-navy transition-all duration-500">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-2 text-zinc-400 group-hover:text-brand-gold">{item.label}</p>
                    <p className="text-2xl font-black text-brand-navy group-hover:text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-brand-navy rounded-[60px] p-20 flex flex-col items-center justify-center text-center shadow-3xl">
                <div className="absolute inset-0 bg-brand-gold/5 rounded-[60px] blur-3xl animate-pulse"></div>
                <h4 className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.5em] mb-8">Total Perceived Value</h4>
                <div className="text-6xl lg:text-7xl font-black text-brand-gold tracking-tighter mb-4 uppercase">INR 1450000 plus</div>
                <p className="text-white font-bold text-lg uppercase tracking-widest italic opacity-40">Annually per member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE - Standard vs Vault */}
      <section className="section-padding bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-brand-navy mb-20 tracking-tight uppercase">Standard Market and The Vault</h2>

          <div className="overflow-hidden rounded-[40px] border border-zinc-200 shadow-2xl bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-brand-navy text-white uppercase text-[10px] font-black tracking-widest">
                  <tr>
                    <th className="px-10 py-8">Service Category</th>
                    <th className="px-10 py-8 text-zinc-400 text-center">Regular Market</th>
                    <th className="px-10 py-8 text-brand-gold text-center">The Vault Member</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-bold text-zinc-600 tracking-wide divide-y divide-zinc-100">
                  {[
                    { cat: "Legal Due Diligence", std: "INR 25000 to 50000 per property", vlt: "Unlimited and Free" },
                    { cat: "Selling Commissions", std: "1 to 2 percent of value", vlt: "0 percent Commission Lifetime" },
                    { cat: "Asset Pricing", std: "Market Value", vlt: "20 to 50 percent Below Market" },
                    { cat: "Agent Support", std: "Transactional Only", vlt: "Dedicated Scouter Exclusive" },
                    { cat: "Network Access", std: "Public Listings", vlt: "Private Institutional Inventory" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-50 transition-colors">
                      <td className="px-10 py-8 text-brand-navy font-black uppercase">{row.cat}</td>
                      <td className="px-10 py-8 text-center text-zinc-400 font-medium">{row.std}</td>
                      <td className="px-10 py-8 text-brand-navy text-center">
                        <div className="flex items-center justify-center gap-3">
                          <CheckCircle2 size={16} className="text-brand-gold" />
                          <span>{row.vlt}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section ref={ctaRef} className="py-32 bg-[#0a1128] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y: ctaY }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src={eventImg} 
            className="w-full h-full object-cover opacity-80" 
            alt="Event" 
          />
          <div className="absolute inset-0 bg-brand-navy/40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h3 className="text-4xl lg:text-7xl font-black mb-12 tracking-tighter uppercase leading-tight text-white drop-shadow-2xl">
            Ready to Secure <br />Your Elite Status
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <button className="px-14 py-6 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl hover:scale-105 transition-transform">Apply for Membership</button>
            <button className="px-14 py-6 border border-white/20 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all">Schedule Consultation</button>
          </div>
          <p className="mt-12 text-zinc-500 font-bold uppercase text-[9px] tracking-[0.4em]">Limited seats remaining for current intake cycle</p>
        </div>
      </section>
    </div>
  );
};

export default Membership;
