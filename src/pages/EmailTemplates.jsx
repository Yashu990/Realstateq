import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Copy, CheckCircle2 } from 'lucide-react';

const EmailTemplates = () => {
  const templates = [
    {
      title: "Initial Inquiry (Institutional)",
      subject: "Expression of Interest: NLCT Land Acquisition Portfolio - [Organization Name]",
      body: "Dear Investment Desk,\n\nWe are interested in exploring the current NLCT land blocks listed on your platform. Specifically, we are looking for high-yield corridors in the Gurgaon region for a potential 500+ Cr mandate.\n\nPlease provide the confidential prospectus for the latest Q2 inventory.\n\nBest regards,\n[Your Name]",
      tag: "Acquisition"
    },
    {
      title: "Strategy Consultation Request",
      subject: "Request for Confidential Real Estate Strategy Discussion",
      body: "Hello Vault Advisors,\n\nI would like to schedule a private consultation to discuss our portfolio diversification strategy into distressed real estate assets in Gurgaon.\n\nAvailable slots: Tuesday 10 AM or Thursday 2 PM.\n\nRegards,\n[Your Name]",
      tag: "Strategy"
    },
    {
      title: "Membership Activation",
      subject: "Premium Membership Activation Request - [Member ID]",
      body: "Hi Team,\n\nI have completed the initial screening and would like to activate my premium membership to access the full bidding history and predictive analytics dashboard.\n\nLooking forward to the onboarding session.\n\nBest,\n[Your Name]",
      tag: "Membership"
    }
  ];

  return (
    <div className="pt-40 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <span className="text-brand-gold text-[10px] font-black tracking-[0.4em] mb-6 block uppercase text-center">Investor Communication</span>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-brand-navy text-center mb-10">Email <span className="italic font-normal">Templates.</span></h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto text-center font-medium">Use these professionally crafted templates to streamline your institutional communication with our desk and verified sellers.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {templates.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-50 rounded-[40px] p-10 border border-zinc-100 group hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-brand-navy text-brand-gold flex items-center justify-center shadow-xl">
                  <Mail size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-4 py-1.5 rounded-full">{t.tag}</span>
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-4">{t.title}</h3>
              <div className="bg-white rounded-2xl p-6 border border-zinc-200 mb-8 relative">
                <p className="text-xs font-bold text-zinc-400 mb-2 uppercase tracking-widest">Subject:</p>
                <p className="text-sm font-bold text-brand-navy mb-6">{t.subject}</p>
                <div className="h-px bg-zinc-100 mb-6"></div>
                <p className="text-sm text-zinc-600 leading-relaxed whitespace-pre-wrap italic font-medium">{t.body}</p>
              </div>
              <button className="flex items-center gap-3 text-brand-navy font-black text-[10px] uppercase tracking-widest hover:text-brand-gold transition-colors">
                <Copy size={16} />
                <span>Copy to Clipboard</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailTemplates;
