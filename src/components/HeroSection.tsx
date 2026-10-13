import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface HeroSectionProps {
  onShowerPetals: () => void;
  onScrollToScratch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShowerPetals,
  onScrollToScratch,
}) => {
  return (
    <section id="bismillah" className="relative pt-8 pb-20 md:py-24 overflow-hidden luxury-paper">
      {/* Symmetrical Grand Mughal Arch Background with Warm Lighting */}
      <div className="absolute top-0 inset-x-0 h-[560px] md:h-[680px] pointer-events-none opacity-25 overflow-hidden">
        <img
          src="/src/assets/images/mughal_floral_arch_1790680981761.jpg"
          alt="Mughal Floral Arch"
          className="w-full h-full object-cover object-top filter blur-[0.6px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF7F2]/50 to-[#FAF7F2]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Bride's Family Warm Presentation Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EB] border border-[#D4AF37]/50 shadow-xs mb-6 text-[#996515] font-cinzel text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
          <span>With Blessings from Hazi Raisuddin & the Bride's Family</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
        </motion.div>

        {/* Islamic Traditional Lanterns & Crescent Arch Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-6 mb-6"
        >
          <svg className="w-6 h-10 text-[#C59A3F]/80 drop-shadow-sm" viewBox="0 0 24 40" fill="none" stroke="currentColor">
            <path d="M12 2v6M8 8h8l2 6-3 12h-6l-3-12 2-6zM10 26l2 4 2-4" strokeWidth="1.2" />
            <circle cx="12" cy="18" r="2.5" fill="#FFE28A" />
          </svg>
          <svg className="w-14 h-8 text-[#C59A3F]" viewBox="0 0 100 50" fill="currentColor">
            <path d="M 0 50 Q 50 0 100 50 Z" />
          </svg>
          <svg className="w-6 h-10 text-[#C59A3F]/80 drop-shadow-sm" viewBox="0 0 24 40" fill="none" stroke="currentColor">
            <path d="M12 2v6M8 8h8l2 6-3 12h-6l-3-12 2-6zM10 26l2 4 2-4" strokeWidth="1.2" />
            <circle cx="12" cy="18" r="2.5" fill="#FFE28A" />
          </svg>
        </motion.div>

        {/* 1. BISMILLAH CALLIGRAPHY */}
        <div className="mb-8">
          <motion.p
            dir="rtl"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-amiri text-3xl sm:text-5xl text-[#996515] tracking-wide leading-relaxed font-normal drop-shadow-xs"
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#8C6D3B] uppercase mt-2 font-medium"
          >
            In the name of Allah, the Most Gracious, the Most Merciful
          </motion.p>
          <motion.p
            dir="rtl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-amiri text-2xl sm:text-3xl text-[#996515] tracking-wide leading-relaxed mt-3"
          >
            الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
          </motion.p>
        </div>

        {/* Decorative Gold Filigree Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-3 my-6"
        >
          <div className="w-20 sm:w-36 h-px bg-gradient-to-r from-transparent to-[#C59A3F]" />
          <div className="w-3 h-3 rotate-45 border-2 border-[#C59A3F] bg-[#FAF7F2]" />
          <div className="w-20 sm:w-36 h-px bg-gradient-to-l from-transparent to-[#C59A3F]" />
        </motion.div>

        {/* 2. ROSHAN (UPAR), WEDS (BICH ME), JAVED (NICHE) — EK SATH LIKHA HUA */}
        <div id="couple" className="py-4 my-2 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-40 bg-[#FFE5A3]/25 blur-3xl rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl bg-[#FFFDF9] border-2 border-[#D4AF37]/70 p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_-10px_rgba(200,162,81,0.25)] max-w-xl mx-auto text-center"
          >
            {/* Corner Gold Brackets */}
            <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-lg pointer-events-none" />
            <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-[#D4AF37] rounded-br-lg pointer-events-none" />

            {/* UNIFIED COUPLE TYPOGRAPHY: ROSHAN (UPAR) -> WEDS (BICH ME) -> JAVED (NICHE) */}
            <div className="flex flex-col items-center justify-center py-2 sm:py-3">
              {/* 1. ROSHAN ANSARI (UPAR) */}
              <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black tracking-wider text-[#2B1D12] uppercase leading-tight">
                ROSHAN ANSARI
              </h1>

              {/* 2. WEDS (BICH ME) — Beautiful gold calligraphy divider */}
              <div className="flex items-center justify-center gap-3 py-3 sm:py-4 w-full max-w-xs">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
                <span className="font-cinzel-decorative italic text-2xl sm:text-3xl text-[#C59A3F] font-bold tracking-widest lowercase px-3 select-none">
                  weds
                </span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
              </div>

              {/* 3. JAVED ANSARI (NICHE) */}
              <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black tracking-wider text-[#2B1D12] uppercase leading-tight">
                JAVED ANSARI
              </h1>
            </div>
          </motion.div>
        </div>

        {/* Action Callouts */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={onShowerPetals}
            className="px-5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/70 hover:bg-[#FAF5EB] text-[#5C3B0E] font-cinzel text-xs font-semibold tracking-wider flex items-center gap-2 shadow-xs transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Shower Rose Petals</span>
          </button>

          <button
            onClick={onScrollToScratch}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#996515] via-[#C59A3F] to-[#996515] hover:brightness-110 text-white font-cinzel text-xs font-bold tracking-widest uppercase shadow-md transition-all active:scale-95 flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Discover Wedding Date</span>
          </button>
        </motion.div>

        {/* Scroll Down Arrow Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 flex justify-center"
        >
          <button
            onClick={() => {
              const el = document.getElementById('bride-family');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 group text-[#996515] hover:text-[#5C3B0E] transition-all focus:outline-none"
            aria-label="Scroll down to explore wedding invitation"
          >
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#996515] group-hover:text-[#5C3B0E] transition-colors">
              Explore Family & Ceremonies
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-10 h-10 rounded-full border-2 border-[#D4AF37] bg-white/90 shadow-[0_4px_15px_rgba(212,175,55,0.25)] flex items-center justify-center group-hover:bg-[#FAF5EB] group-hover:scale-105 transition-transform"
            >
              <ChevronDown className="w-5 h-5 text-[#996515]" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
