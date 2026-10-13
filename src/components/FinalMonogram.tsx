import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface FinalMonogramProps {
  onReplayInvitation: () => void;
  onShowerPetals: () => void;
  isRevealed: boolean;
}

export const FinalMonogram: React.FC<FinalMonogramProps> = ({
  onReplayInvitation,
  onShowerPetals,
  isRevealed,
}) => {
  return (
    <footer className="py-20 md:py-28 relative luxury-paper border-t border-[#E8DFC8] overflow-hidden text-center">
      {/* Symmetrical Mughal Arch & Floral Garland Watermark in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#FFE8A3]/40 via-[#F5E6BE]/20 to-transparent blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl mx-auto px-4 sm:px-6"
      >
        {/* Handcrafted Botanical Invitation Card */}
        <div className="rounded-3xl bg-[#FFFDF9] border border-[#E2D2B5] p-8 sm:p-14 shadow-[0_20px_50px_-10px_rgba(200,162,81,0.2)] relative">
          {/* Corner Gold Filigree Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-lg pointer-events-none" />

          {/* 1. COUPLE NAMES */}
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2B1D12] uppercase mb-1">
            {WEDDING_DATA.bride.name}
          </h2>
          <div className="font-cinzel-decorative italic text-2xl sm:text-3xl text-[#C59A3F] font-bold my-1 lowercase">
            weds
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2B1D12] uppercase mb-6">
            {WEDDING_DATA.groom.name}
          </h2>

          {/* 2. SACRED WEDDING DATES (04 Dec Haldi, 05 Dec Baraat & Nikah) */}
          <div className="my-6 space-y-1.5 font-cinzel text-xs sm:text-sm font-bold tracking-widest text-[#996515] uppercase bg-[#FAF5EB] py-3 px-6 rounded-2xl border border-[#D4AF37]/40 max-w-md mx-auto">
            <p>04 DECEMBER • HALDI CEREMONY</p>
            <p>05 DECEMBER • BARAAT & NIKAH</p>
          </div>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C59A3F] to-transparent mx-auto my-6" />

          {/* 3. PREMIUM GOLD J & R MONOGRAM MEDALLION */}
          <div className="mx-auto my-6 relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
            {/* Outer spinning ornamental gold dashed ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37]/40 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border border-[#D4AF37]/60" />

            {/* Medallion Core */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#FAF5EB] via-[#FFFDF9] to-[#F5EFE3] border-2 border-[#D4AF37] flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(212,175,55,0.35)]">
              <span className="font-amiri text-xs text-[#996515]">
                بِسْمِ اللَّهِ
              </span>
              <div className="font-cinzel-decorative text-3xl sm:text-4xl font-extrabold tracking-widest text-[#996515] drop-shadow-xs my-0.5">
                J & R
              </div>
              <span className="font-cinzel text-[8px] uppercase tracking-[0.3em] text-[#C59A3F] font-bold">
                NIKAH
              </span>
            </div>
          </div>

          {/* 4. DUA BLESSING */}
          <p className="font-cormorant italic text-xl sm:text-2xl text-[#3A291A] max-w-xl mx-auto mb-6 leading-relaxed">
            “May Allah bless this union with love, happiness, peace and endless barakah.”
          </p>

          {/* 5. PRESENCE STATEMENT */}
          <p className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#996515] mb-8">
            YOUR PRESENCE IS OUR GREATEST BLESSING
          </p>

          {/* 6. BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onShowerPetals}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#D4AF37]/60 text-[#5C3B0E] text-xs font-cinzel font-semibold tracking-wider flex items-center gap-2 shadow-xs transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Shower Petals</span>
            </button>

            {/* VERIFIED BUTTON: REPLAY INVITATION */}
            <button
              onClick={onReplayInvitation}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#996515] via-[#C59A3F] to-[#996515] hover:brightness-110 text-white text-xs font-cinzel font-bold tracking-widest uppercase flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>REPLAY INVITATION</span>
            </button>
          </div>

          <div className="mt-12 pt-6 border-t border-[#EFE5D3] text-[11px] font-cinzel text-[#8C7A68] tracking-widest uppercase">
            Roshan Weds Javed · With Warm Du’as from Hazi Raisuddin & Family · Nehotur
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
