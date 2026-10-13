import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Award, MapPin } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const BrideFamilySection: React.FC = () => {
  const { bride } = WEDDING_DATA;

  return (
    <section
      id="bride-family"
      className="py-16 md:py-24 relative bg-[#FAF7F2] border-t border-[#E8DFC8] overflow-hidden"
    >
      {/* Symmetrical Botanical Floral Corner Vignette */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 opacity-20 pointer-events-none">
        <img
          src="/src/assets/images/floral_botanical_corner_1790681003724.jpg"
          alt="Botanical corner"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Prominent, Royal Ivory & Gold Paper Frame for Bride's Family */}
        <div className="rounded-3xl bg-[#FFFDF9] border-2 border-[#D4AF37]/60 p-8 sm:p-12 shadow-[0_20px_50px_-10px_rgba(200,162,81,0.22)] text-center relative">
          {/* Corner Gold Brackets */}
          <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-lg pointer-events-none" />
          <div className="absolute top-4 right-4 w-9 h-9 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-9 h-9 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-[#D4AF37] rounded-br-lg pointer-events-none" />

          {/* Section Host Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EB] border border-[#D4AF37]/70 shadow-xs mb-4 text-[#996515] font-cinzel text-xs font-bold tracking-widest uppercase"
          >
            <Award className="w-4 h-4 text-[#C59A3F]" />
            <span>Bride's Esteemed Family · The Hosts</span>
            <Award className="w-4 h-4 text-[#C59A3F]" />
          </motion.div>

          {/* 1. ROSHAN ANSARI */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-[#2B1D12] uppercase mb-1"
          >
            {bride.name}
          </motion.h2>

          {/* 2. DAUGHTER OF HAZI RAISUDDIN (Separately underneath) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-sm sm:text-base font-bold tracking-[0.2em] text-[#996515] uppercase mb-4"
          >
            {bride.parentLine}
          </motion.p>

          {/* DEDICATED ADDRESS COLUMN FOR BRIDE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="max-w-md mx-auto mb-8 p-5 rounded-2xl bg-[#FAF5EB] border border-[#E8DFC8] shadow-xs text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2.5">
              <span className="w-6 h-px bg-[#C59A3F]/50" />
              <div className="flex items-center gap-1.5 text-[#5C3B0E]">
                <MapPin className="w-3.5 h-3.5 text-[#C59A3F]" />
                <h3 className="font-cinzel text-xs font-bold uppercase tracking-[0.25em]">
                  ADDRESS
                </h3>
              </div>
              <span className="w-6 h-px bg-[#C59A3F]/50" />
            </div>

            <div className="font-cinzel">
              <p className="text-base sm:text-lg font-bold text-[#2B1D12] tracking-wide">
                {bride.address}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#C59A3F] to-transparent mx-auto mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-8">
            {/* FATHER BLOCK */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.35 }}
              className="p-5 rounded-2xl bg-[#FAF5EB] border border-[#E8DFC8] flex flex-col justify-center text-center"
            >
              <h3 className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#5C3B0E] mb-2 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
                <span>FATHER</span>
                <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
              </h3>
              <p className="font-cinzel text-lg sm:text-xl font-bold text-[#2B1D12]">
                {bride.father}
              </p>
            </motion.div>

            {/* BROTHER BLOCK */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.4 }}
              className="p-5 rounded-2xl bg-[#FAF5EB] border border-[#E8DFC8] flex flex-col justify-center text-center"
            >
              <h3 className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#5C3B0E] mb-2 flex items-center justify-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#C59A3F]" />
                <span>BROTHER</span>
                <Heart className="w-3.5 h-3.5 text-[#C59A3F]" />
              </h3>
              <p className="font-cinzel text-lg sm:text-xl font-bold text-[#2B1D12]">
                {bride.brother}
              </p>
            </motion.div>
          </div>

          {/* UNCLES & BROTHERS-IN-LAW GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* UNCLES (Hazi Saiduddin, Sharifuddin, Kamruddin) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="p-5 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs text-center"
            >
              <h3 className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#8C6D3B] mb-3">
                UNCLES
              </h3>
              <div className="space-y-2">
                {bride.uncles.map((uncle, idx) => (
                  <p
                    key={idx}
                    className="font-cinzel text-base font-semibold text-[#3A291A]"
                  >
                    {uncle}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* BROTHERS-IN-LAW (Nadeem Ansari, Aafak Ansari, Jahid Ansari) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="p-5 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs text-center"
            >
              <h3 className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#8C6D3B] mb-3">
                BROTHERS-IN-LAW
              </h3>
              <div className="space-y-2">
                {bride.brothersInLaw.map((bil, idx) => (
                  <p
                    key={idx}
                    className="font-cinzel text-base font-semibold text-[#3A291A]"
                  >
                    {bil}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
