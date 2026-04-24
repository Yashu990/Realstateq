import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, MapPin, Calendar, 
  ArrowUpRight, Lock, ShieldCheck, Gem,
  Home, Building2, Landmark, Factory,
  X, CheckCircle2, FileText, Activity,
  Phone, Mail, Download
} from 'lucide-react';

// Asset Imports
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import prop1 from '../assets/prop1.png';
import prop2 from '../assets/prop2.png';
import prop3 from '../assets/prop3.png';
import resImg from '../assets/res.png';
import commImg from '../assets/comm.png';
import offImg from '../assets/off.png';
import aboutImg from '../assets/about-img.png';
import advantageImg from '../assets/advantage.png';

const Properties = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const propertyData = [
    {
      id: 1,
      name: "M3M Luxury Penthouse",
      location: "Sector Sixty Five NLCT",
      price: "INR 45000000",
      valuation: "INR 65000000",
      auction: "Scheduled October Twenty",
      type: "Residential",
      img: hero1,
      status: "Premium Node",
      area: "Five Thousand Square Feet",
      specs: "Four Bedroom Penthouse with Private Deck",
      legal: "Court Verified Zero Litigations"
    },
    {
      id: 2,
      name: "Trump Tower Residence",
      location: "Sector Sixty Nine NLCT",
      price: "INR 85000000",
      valuation: "INR 110000000",
      auction: "Scheduled October Twenty Five",
      type: "Residential",
      img: prop1,
      status: "Verified Only",
      area: "Seven Thousand Square Feet",
      specs: "Ultra Luxury Floor with Panoramic Views",
      legal: "Title Deed Verified and Insured"
    },
    {
      id: 3,
      name: "Global Tech Park Campus",
      location: "Cyber City NLCT",
      price: "INR 250000000",
      valuation: "INR 350000000",
      auction: "Scheduled November Five",
      type: "Commercial",
      img: offImg,
      status: "Institutional",
      area: "Fifty Thousand Square Feet",
      specs: "Grade A Office Block with Full Occupancy",
      legal: "NCLT Supervised Asset Sale"
    },
    {
      id: 4,
      name: "DLF Camellias Executive",
      location: "Golf Course Road",
      price: "INR 120000000",
      valuation: "INR 160000000",
      auction: "Scheduled November Twelve",
      type: "Residential",
      img: prop2,
      status: "Ultra Luxury",
      area: "Eight Thousand Square Feet",
      specs: "Designer Residence with Exclusive Club Access",
      legal: "Zero Liability Certificate Issued"
    },
    {
      id: 5,
      name: "Strategic Logistics Hub",
      location: "Manesar Industrial Belt",
      price: "INR 65000000",
      valuation: "INR 85000000",
      auction: "Scheduled November Eighteen",
      type: "Industrial",
      img: prop3,
      status: "Asset Verified",
      area: "Twenty Thousand Square Feet",
      specs: "Cold Storage Enabled Modern Warehouse",
      legal: "Industrial Land Use Verified"
    },
    {
      id: 6,
      name: "Prime Retail Mall Block",
      location: "MG Road NLCT",
      price: "INR 95000000",
      valuation: "INR 135000000",
      auction: "Scheduled November Twenty Two",
      type: "Commercial",
      img: commImg,
      status: "Commercial Node",
      area: "Twelve Thousand Square Feet",
      specs: "Corner Retail Unit with High Footfall",
      legal: "Commercial Occupancy Verified"
    }
  ];

  const filteredProperties = filter === "All" 
    ? propertyData 
    : propertyData.filter(p => p.type === filter);

  return (
    <div className="bg-white">
      {/* CINEMATIC HERO - EXPANDED */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#0a1128]">
        <div className="absolute inset-0 z-0">
          <img src={hero1} className="w-full h-full object-cover opacity-50 scale-110" alt="Portfolio" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-transparent to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl"
           >
             <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">Exclusive NLCT Inventory</span>
             <h1 className="text-6xl lg:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.8] uppercase">
               The <br />Portfolio.
             </h1>
             <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
               Explore high value assets acquired through court supervised legal auctions
             </p>
           </motion.div>
        </div>
      </section>

      {/* INSTITUTIONAL FILTER BAR */}
      <section className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-xl border-b border-zinc-100 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-8">
           <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {["All", "Residential", "Commercial", "Land", "Industrial"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${filter === cat ? 'bg-brand-navy text-white shadow-2xl' : 'bg-zinc-50 text-zinc-400 hover:bg-zinc-100'}`}
                >
                  {cat}
                </button>
              ))}
           </div>
           
           <div className="flex items-center gap-6 text-zinc-400 text-[10px] font-black uppercase tracking-widest">
              <span className="flex items-center gap-2"><Filter size={14} /> Refine Search</span>
              <span className="text-brand-navy">{filteredProperties.length} Assets Found</span>
           </div>
        </div>
      </section>

      {/* PROPERTY PORTFOLIO GRID */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            <AnimatePresence mode="popLayout">
              {filteredProperties.map((p, i) => (
                <motion.div 
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden mb-8 shadow-3xl bg-zinc-100">
                    <img 
                      src={p.img} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      alt={p.name} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-8 left-8 flex flex-col gap-2">
                       <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[8px] font-black text-white uppercase tracking-widest">{p.type}</span>
                       <span className="px-4 py-2 bg-brand-gold text-brand-navy rounded-full text-[8px] font-black uppercase tracking-widest shadow-xl">{p.status}</span>
                    </div>

                    <div className="absolute bottom-10 left-10 right-10 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                       <button 
                         onClick={() => setSelectedProperty(p)}
                         className="w-full py-5 bg-white text-brand-navy rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 shadow-2xl"
                       >
                          <span>View Institutional Brief</span>
                          <ArrowUpRight size={16} />
                       </button>
                    </div>
                  </div>

                  <div className="px-4">
                    <div className="flex items-center gap-2 text-brand-gold mb-3">
                       <MapPin size={12} />
                       <span className="text-[9px] font-black uppercase tracking-[0.3em]">{p.location}</span>
                    </div>
                    <h3 className="text-2xl font-black text-brand-navy uppercase tracking-tighter mb-4 leading-tight group-hover:text-brand-gold transition-colors">{p.name}</h3>
                    <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                       <div>
                          <p className="text-zinc-400 text-[8px] font-black uppercase tracking-widest mb-1">Auction Price</p>
                          <p className="text-lg font-black text-brand-navy tracking-tight">{p.price}</p>
                       </div>
                       <div className="text-right">
                          <p className="text-zinc-400 text-[8px] font-black uppercase tracking-widest mb-1">Status</p>
                          <p className="text-[9px] font-bold text-brand-navy uppercase tracking-wider">{p.auction}</p>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PROPERTY DETAIL MODAL - COMPACT VERSION */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-navy/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-5xl rounded-[40px] overflow-hidden relative shadow-4xl flex flex-col lg:flex-row max-h-[90vh]"
            >
               {/* Close Button */}
               <button 
                 onClick={() => setSelectedProperty(null)}
                 className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all"
               >
                  <X size={20} />
               </button>

               {/* Left: Visual Sidebar */}
               <div className="lg:w-[40%] relative min-h-[300px] lg:min-h-0">
                  <img 
                    src={selectedProperty.img} 
                    className="w-full h-full object-cover" 
                    alt={selectedProperty.name} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                     <span className="text-brand-gold text-[8px] font-black uppercase tracking-[0.4em] mb-2 block">Asset Visual</span>
                     <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">{selectedProperty.name}</h2>
                  </div>
               </div>

               {/* Right: Technical Brief */}
               <div className="lg:w-[60%] p-8 lg:p-12 overflow-y-auto bg-white">
                  <div className="max-w-lg">
                     <div className="flex items-center gap-3 mb-8">
                        <span className="px-4 py-1.5 bg-brand-navy text-white rounded-full text-[8px] font-black uppercase tracking-widest">{selectedProperty.type}</span>
                        <span className="px-4 py-1.5 border border-brand-navy/10 text-brand-navy rounded-full text-[8px] font-black uppercase tracking-widest">{selectedProperty.status}</span>
                     </div>

                     <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                           <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest mb-1">Auction Entry</p>
                           <p className="text-xl font-black text-brand-navy tracking-tight">{selectedProperty.price}</p>
                        </div>
                        <div>
                           <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest mb-1">Market Value</p>
                           <p className="text-xl font-black text-brand-gold tracking-tight">{selectedProperty.valuation}</p>
                        </div>
                     </div>

                     <div className="space-y-6 mb-10">
                        <div className="flex gap-4 items-center">
                           <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center shrink-0"><CheckCircle2 size={14} className="text-brand-navy" /></div>
                           <div>
                              <p className="text-[8px] font-black uppercase text-zinc-400 tracking-widest">Asset Spec</p>
                              <p className="text-[11px] font-bold text-brand-navy uppercase tracking-tight">{selectedProperty.area} - {selectedProperty.specs}</p>
                           </div>
                        </div>
                        <div className="flex gap-4 items-center">
                           <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center shrink-0"><ShieldCheck size={14} className="text-brand-navy" /></div>
                           <div>
                              <p className="text-[8px] font-black uppercase text-zinc-400 tracking-widest">Legal Status</p>
                              <p className="text-[11px] font-bold text-brand-navy uppercase tracking-tight">{selectedProperty.legal}</p>
                           </div>
                        </div>
                        <div className="flex gap-4 items-center">
                           <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center shrink-0"><Calendar size={14} className="text-brand-navy" /></div>
                           <div>
                              <p className="text-[8px] font-black uppercase text-zinc-400 tracking-widest">Auction Date</p>
                              <p className="text-[11px] font-bold text-brand-navy uppercase tracking-tight">{selectedProperty.auction}</p>
                           </div>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-3 pt-8 border-t border-zinc-100">
                        <button className="py-4 bg-brand-navy text-white rounded-xl font-black uppercase text-[9px] tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-brand-gold hover:text-brand-navy transition-all">
                           <FileText size={14} />
                           <span>Get Files</span>
                        </button>
                        <button className="py-4 border border-brand-navy/10 text-brand-navy rounded-xl font-black uppercase text-[9px] tracking-widest flex items-center justify-center gap-2 hover:bg-brand-navy hover:text-white transition-all">
                           <Phone size={14} />
                           <span>Advisor</span>
                        </button>
                     </div>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LOCKED PORTFOLIO BANNER */}
      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="bg-[#0a1128] rounded-[40px] p-10 lg:p-16 overflow-hidden relative shadow-3xl text-white group border border-white/5">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]">
                 <Lock size={200} />
              </div>
              
              <div className="max-w-3xl relative z-10">
                 <div className="flex items-center gap-3 mb-6 text-brand-gold">
                    <ShieldCheck size={20} />
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase">Verified Institutional Access Only</span>
                 </div>
                 <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-8 leading-none">
                   Access One Thousand <br /><span className="text-brand-gold">Plus</span> Assets.
                 </h2>
                 <p className="text-zinc-400 text-base font-medium mb-10 leading-relaxed max-w-2xl">
                   Join the membership to unlock high resolution legal reports and direct bidding access to our full portfolio
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <button className="px-10 py-5 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase text-[9px] tracking-widest shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                       <Gem size={16} />
                       <span>Apply for Full Access</span>
                    </button>
                    <button className="px-10 py-5 border border-white/20 text-white rounded-2xl font-black uppercase text-[9px] tracking-widest hover:bg-white/10 transition-all">
                       Contact Advisor
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
