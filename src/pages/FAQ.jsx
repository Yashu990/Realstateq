import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Minus, ShieldCheck, ArrowRight, Landmark, Search, 
  Users2, Zap, Handshake, Gem, Award, CheckCircle2, 
  TrendingUp, Clock, FileCheck, Globe
} from 'lucide-react';

// Asset Imports
import legalImg from '../assets/legal.png';
import propImg from '../assets/prop1.png';
import agentImg from '../assets/agent.png';
import eventImg from '../assets/event.png';
import resImg from '../assets/res.png';
import commImg from '../assets/comm.png';
import offImg from '../assets/off.png';
import heroImg from '../assets/hero4.png';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("Membership");
  const [openIndex, setOpenIndex] = useState(0);

  const stats = [
    { label: "Acquisitions", value: "800 plus", icon: <CheckCircle2 /> },
    { label: "Portfolio Value", value: "INR 5000 Cr", icon: <TrendingUp /> },
    { label: "Satisfaction", value: "98 percent", icon: <Users2 /> },
    { label: "Establishment", value: "15 plus Years", icon: <Clock /> }
  ];

  const categories = [
    { name: "Properties", icon: <Search size={20} />, img: propImg },
    { name: "Agent Services", icon: <Users2 size={20} />, img: agentImg },
    { name: "Events", icon: <Landmark size={20} />, img: eventImg },
    { name: "Selling Services", icon: <Zap size={20} />, img: resImg },
    { name: "Platform", icon: <Handshake size={20} />, img: commImg },
    { name: "Membership", icon: <Gem size={20} />, img: offImg }
  ];

  const faqData = {
    "Properties": [
      {
        q: "How many properties do you have and are they 20 to 50 percent below market",
        a: "We maintain a curated portfolio of 1000 plus premium NLCT properties with a combined value exceeding INR 5000 crores Every property in our portfolio is listed at 20 to 50 percent below current market value This discount is possible because NLCT properties come from court supervised auctions where prices are set through competitive bidding rather than traditional market negotiations Your membership fee could be earned back many times over through the acquisition discounts alone"
      },
      {
        q: "Why are NLCT properties so much cheaper than market",
        a: "NLCT or Non Litigious Collateral Transfer properties are acquired through court supervised legal auctions resulting in prices set through competitive bidding rather than standard market negotiations These are primarily bank recovery properties government disposals and court ordered asset sales The court supervised process ensures transparency and competitive pricing often resulting in 20 to 50 percent discounts"
      },
      {
        q: "What types of properties are available",
        a: "Our 1000 plus property portfolio includes residential apartments from 1 to 4 BHK villas and plots commercial office spaces from 1 to 10000 plus square feet retail shops and warehouses as well as agricultural estates across pan India locations including Gurgaon Noida Delhi Bangalore and Mumbai"
      }
    ],
    "Agent Services": [
      {
        q: "What is a dedicated personal agent and how does it work",
        a: "Your dedicated personal agent is a professional assigned exclusively to you They begin with a comprehensive consultation about your investment goals and budget range They provide regular property recommendations from our 1000 plus portfolio and handle all transaction support through due diligence and bidding strategy Instead of randomly browsing you get expert guidance tailored to your specific investment profile"
      },
      {
        q: "Can I change my dedicated agent",
        a: "Yes while we carefully match members with agents based on expertise and personality fit you can request a change if you do not feel aligned Simply contact our member support team and we will pair you with a different agent whose expertise better matches your needs"
      }
    ],
    "Events": [
      {
        q: "Are the quarterly events mandatory",
        a: "No they are completely optional However we strongly encourage attendance because networking with 800 plus serious investors is invaluable and you can learn strategies from successful members For members who cannot attend in person we offer virtual participation options"
      },
      {
        q: "What are the costs for attending quarterly events",
        a: "Attendance is completely free for all members All costs are included in your membership including event registration meals and expert speaker fees The only cost might be travel and accommodation which is entirely optional"
      },
      {
        q: "Can I bring guests to events",
        a: "Yes each member can bring one guest to any quarterly event This is a great way to introduce friends or family members to the platform and give them a taste of the community"
      }
    ],
    "Selling Services": [
      {
        q: "What does free lifetime selling really mean",
        a: "When you want to sell any property you purchased through the platform we provide all selling services completely free This includes property marketing buyer verification and transaction management What it costs is INR 0 with zero commission and zero fees forever We connect you directly with serious verified buyers from our platform"
      },
      {
        q: "What if I want to sell a property several years after purchase",
        a: "Free selling applies to any property bought through us whenever you decide to sell whether it is one year or twenty years later There is no time limit on this benefit"
      }
    ],
    "Platform": [
      {
        q: "How is your verified network different from traditional real estate",
        a: "Traditional real estate involves multiple agents with 2 to 5 percent commissions and slow communication with information silos The PremiumLand platform provides a single verified network with direct communication and central accountability resulting in faster sales and better deals with zero middlemen taking cuts"
      }
    ],
    "Membership": [
      {
        q: "I am still not convinced about paying INR 100000 upfront What is the guarantee",
        a: "We offer multiple guarantees including a 30 Day Money Back Guarantee and a full membership fee refund with your first property purchase You also get immediate value from day one with access to 1000 plus properties at 20 to 50 percent discount and a dedicated agent worth INR 300000 plus if hired privately Our track record includes 800 plus successful acquisitions and 98 percent member satisfaction"
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* INSTITUTIONAL HERO - EXPANDED */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#0a1128]">
        <div className="absolute inset-0 z-0">
          <img src={legalImg} className="w-full h-full object-cover opacity-40 scale-110" alt="Knowledge Base" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-transparent to-white"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">Institutional Knowledge Portal</span>
            <h1 className="text-6xl lg:text-[10rem] font-black text-white mb-10 tracking-tighter leading-[0.8] uppercase">
              The <span className="text-brand-gold">Vault</span> <br />Guide.
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              Verified intelligence and protocol operations for the institutional real estate network
            </p>
          </motion.div>
        </div>
      </section>

      {/* INSTITUTIONAL ACCOUNTABILITY BAR */}
      <section className="relative z-20 -mt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="bg-white rounded-[50px] shadow-3xl p-12 border border-zinc-100 grid md:grid-cols-4 gap-12 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                   <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-4">
                      {React.cloneElement(stat.icon, { size: 24 })}
                   </div>
                   <h4 className="text-3xl font-black text-brand-navy leading-none mb-2">{stat.value}</h4>
                   <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* GUARANTEE CERTIFICATES SECTION */}
      <section className="section-padding bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
             <div className="bg-white p-16 rounded-[60px] border-l-8 border-brand-gold shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                   <ShieldCheck size={200} />
                </div>
                <span className="text-brand-gold text-[10px] font-black uppercase tracking-widest block mb-6">Guarantee One</span>
                <h3 className="text-3xl font-black text-brand-navy uppercase mb-6 leading-tight">30 Day Money Back Protocol</h3>
                <p className="text-zinc-500 font-medium leading-relaxed italic">If you are not satisfied within 30 days of joining for any reason you get a full refund No questions asked and zero conditions</p>
             </div>

             <div className="bg-brand-navy p-16 rounded-[60px] border-l-8 border-white shadow-2xl relative overflow-hidden group text-white">
                <div className="absolute top-0 right-0 p-12 opacity-10 scale-150 -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                   <Gem size={200} />
                </div>
                <span className="text-brand-gold text-[10px] font-black uppercase tracking-widest block mb-6">Guarantee Two</span>
                <h3 className="text-3xl font-black uppercase mb-6 leading-tight">100 Percent Refund Upon Purchase</h3>
                <p className="text-zinc-400 font-medium leading-relaxed italic">When you successfully acquire any property through our platform and take possession your entire INR 100000 membership fee is refunded</p>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ INTERFACE */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3">
               <div className="sticky top-32 space-y-3">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 mb-8 ml-4">Select Protocol</h5>
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => {
                        setActiveCategory(cat.name);
                        setOpenIndex(0);
                      }}
                      className={`w-full flex items-center justify-between p-6 rounded-3xl font-black uppercase text-[10px] tracking-widest transition-all ${activeCategory === cat.name ? 'bg-brand-navy text-white shadow-3xl' : 'bg-white text-brand-navy hover:bg-zinc-100 shadow-sm border border-zinc-50'}`}
                    >
                      <div className="flex items-center gap-4">
                         {React.cloneElement(cat.icon, { size: 18, className: activeCategory === cat.name ? 'text-brand-gold' : 'text-zinc-300' })}
                         <span>{cat.name}</span>
                      </div>
                    </button>
                  ))}
               </div>
            </div>

            {/* Questions Content */}
            <div className="lg:col-span-6">
               <div className="space-y-6">
                  {faqData[activeCategory].map((faq, i) => (
                    <motion.div 
                      key={`${activeCategory}-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-[40px] border border-zinc-100 shadow-sm overflow-hidden group"
                    >
                       <button 
                         onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                         className="w-full text-left p-10 flex items-start justify-between gap-8"
                       >
                          <div className="flex gap-6">
                             <span className="text-zinc-200 font-black text-2xl">0{i+1}</span>
                             <h3 className="text-xl font-black text-brand-navy uppercase tracking-tighter leading-tight group-hover:text-brand-gold transition-colors">{faq.q}</h3>
                          </div>
                          <div className={`mt-1 shrink-0 w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center transition-all ${openIndex === i ? 'bg-brand-gold border-transparent text-brand-navy' : 'text-zinc-400'}`}>
                             {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                          </div>
                       </button>

                       <AnimatePresence>
                          {openIndex === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                               <div className="px-10 lg:px-24 pb-12">
                                  <div className="border-t border-zinc-50 pt-10">
                                     <span className="text-[9px] font-black uppercase text-brand-gold tracking-widest block mb-4">Status: Verified Response</span>
                                     <p className="text-zinc-500 font-medium leading-relaxed text-lg italic">
                                        {faq.a}
                                     </p>
                                  </div>
                               </div>
                            </motion.div>
                          )}
                       </AnimatePresence>
                    </motion.div>
                  ))}
               </div>
            </div>

            {/* Dynamic Visual Side Panel */}
            <div className="lg:col-span-3 sticky top-32">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="aspect-[3/4] rounded-[60px] overflow-hidden shadow-3xl border-4 border-white relative group"
                  >
                     <img 
                       src={categories.find(c => c.name === activeCategory)?.img} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                       alt={activeCategory} 
                     />
                     <div className="absolute inset-0 bg-brand-navy/30"></div>
                     <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10">
                        <p className="text-white text-[10px] font-black uppercase tracking-[0.4em]">{activeCategory}</p>
                        <p className="text-brand-gold text-[8px] font-black uppercase tracking-widest mt-2">Institutional Node</p>
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL INSTITUTIONAL BANNER */}
      <section className="pb-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="bg-zinc-900 rounded-[80px] p-16 lg:p-24 overflow-hidden relative shadow-3xl text-white">
              <div className="absolute inset-0 z-0">
                 <img src={heroImg} className="w-full h-full object-cover opacity-20" alt="Final Banner" />
                 <div className="absolute inset-0 bg-brand-navy/60"></div>
              </div>
              
              <div className="relative z-10 text-center">
                 <Award className="text-brand-gold mx-auto mb-10" size={64} />
                 <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tight mb-10 leading-none">Established <br />Institutional Trust</h2>
                 <p className="text-zinc-400 text-lg font-medium max-w-2xl mx-auto mb-12">
                   With fifteen plus years in business and eight hundred plus successful acquisitions we are India most trusted platform for distressed real estate assets
                 </p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <button className="px-12 py-5 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-2xl hover:scale-105 transition-all">Download Portfolio Overview</button>
                    <button className="px-12 py-5 border border-white/20 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all">Verify Platform Credentials</button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
