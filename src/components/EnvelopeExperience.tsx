import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { royalAudio } from '../utils/audio';

// Reference image matching royal burgundy velvet doors with gold floral artwork
import burgundyDoorImg from '../assets/images/royal_burgundy_door_1790696646563.jpg';

interface EnvelopeExperienceProps {
  onOpened: () => void;
  onDoorsOpening?: () => void;
  isOpen: boolean;
}

type Stage = 'idle' | 'light_orbit' | 'doors_opening' | 'complete';

export const EnvelopeExperience: React.FC<EnvelopeExperienceProps> = ({
  onOpened,
  onDoorsOpening,
  isOpen,
}) => {
  const [stage, setStage] = useState<Stage>('idle');
  const [isLocked, setIsLocked] = useState(false);

  const handleTap = () => {
    if (isLocked || stage !== 'idle') return;
    setIsLocked(true);

    // Step 1: Tap karne ke baad neon light round ghumni chahiye (~1.4s full circular orbit)
    setStage('light_orbit');
    royalAudio.playLightTravelChime();

    // Step 2: Uske baad door ki tarha kholna chahiye (smoothly mixes and swings open like real doors)
    setTimeout(() => {
      setStage('doors_opening');
      if (onDoorsOpening) {
        onDoorsOpening();
      }
      royalAudio.playDoorOpenSound();
      royalAudio.playWaxSealCrack();
      royalAudio.start();
    }, 1400);

    // Step 3: Seamless completion handoff into full website
    setTimeout(() => {
      setStage('complete');
      onOpened();
    }, 4000);
  };

  const handleSkipDirectly = (e: React.MouseEvent) => {
    e.stopPropagation();
    royalAudio.start();
    setStage('complete');
    if (onDoorsOpening) onDoorsOpening();
    onOpened();
  };

  if (isOpen && stage === 'complete') {
    return null;
  }

  const isLightOrbiting = stage === 'light_orbit';
  const isDoorsOpening = stage === 'doors_opening' || stage === 'complete';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: stage === 'complete' ? 0 : 1,
        }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
        className="fixed inset-0 z-50 w-screen h-screen overflow-hidden select-none pointer-events-auto"
        style={{ perspective: 1600 }}
      >
        {/* Soft dark vignette background that gently fades out as doors open to reveal website underneath */}
        <motion.div
          animate={{
            opacity: isDoorsOpening ? 0 : 0.65,
          }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="absolute inset-0 bg-[#120407] pointer-events-none"
        />

        {/* ======================================================== */}
        {/* 1. LEFT DOOR PANEL (Swings open smoothly to the left)   */}
        {/* ======================================================== */}
        <motion.div
          style={{
            transformOrigin: 'left center',
            transformStyle: 'preserve-3d',
          }}
          animate={
            isDoorsOpening
              ? {
                  rotateY: -105,
                  x: '-6%',
                  opacity: [1, 1, 0.95, 0.6, 0],
                  transition: {
                    duration: 2.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : { rotateY: 0, x: '0%', opacity: 1 }
          }
          className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[#240A10] border-r border-[#E0BC62] shadow-[15px_0_40px_rgba(0,0,0,0.85)] z-20"
        >
          {/* Deep Burgundy Velvet Texture */}
          <img
            src={burgundyDoorImg}
            alt="Royal Burgundy Velvet Left Door"
            className="absolute inset-0 w-full h-full object-cover object-left"
          />

          {/* Velvet Wine Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 pointer-events-none" />

          {/* Outer Golden Border Filigree */}
          <div className="absolute inset-2 sm:inset-4 border-2 border-[#D4AF37]/80 pointer-events-none rounded-l-2xl shadow-inner" />
          <div className="absolute inset-3 sm:inset-6 border border-[#FFE28A]/45 pointer-events-none rounded-l-xl" />

          {/* Center Vertical Gold Trim Strip (Left Half) */}
          <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-r from-[#996515] via-[#FFE28A] to-[#C59A3F] border-l border-[#805010] shadow-[0_0_15px_rgba(212,175,55,0.45)] pointer-events-none" />

          {/* Left Half of Center Oval Medallion when parting */}
          {isDoorsOpening && (
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 pointer-events-none z-30">
              <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-full border-2 border-[#FFE28A] bg-gradient-to-b from-[#8C5E1B] via-[#4A2F0A] to-[#201006] shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full border border-[#D4AF37]/50 rounded-full flex flex-col items-center justify-center p-1 text-center">
                  <span className="text-[#FFE28A] text-xl sm:text-2xl font-bold font-cinzel-decorative">
                    J
                  </span>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* ======================================================== */}
        {/* 2. RIGHT DOOR PANEL (Swings open smoothly to the right) */}
        {/* ======================================================== */}
        <motion.div
          style={{
            transformOrigin: 'right center',
            transformStyle: 'preserve-3d',
          }}
          animate={
            isDoorsOpening
              ? {
                  rotateY: 105,
                  x: '6%',
                  opacity: [1, 1, 0.95, 0.6, 0],
                  transition: {
                    duration: 2.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : { rotateY: 0, x: '0%', opacity: 1 }
          }
          className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[#240A10] border-l border-[#E0BC62] shadow-[-15px_0_40px_rgba(0,0,0,0.85)] z-20"
        >
          {/* Deep Burgundy Velvet Texture Mirrored for Symmetrical Grand Entrance */}
          <img
            src={burgundyDoorImg}
            alt="Royal Burgundy Velvet Right Door"
            className="absolute inset-0 w-full h-full object-cover object-right scale-x-[-1]"
          />

          {/* Velvet Wine Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-black/40 pointer-events-none" />

          {/* Outer Golden Border Filigree */}
          <div className="absolute inset-2 sm:inset-4 border-2 border-[#D4AF37]/80 pointer-events-none rounded-r-2xl shadow-inner" />
          <div className="absolute inset-3 sm:inset-6 border border-[#FFE28A]/45 pointer-events-none rounded-r-xl" />

          {/* Center Vertical Gold Trim Strip (Right Half) */}
          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#C59A3F] via-[#FFE28A] to-[#996515] border-r border-[#805010] shadow-[0_0_15px_rgba(212,175,55,0.45)] pointer-events-none" />

          {/* Right Half of Center Oval Medallion when parting */}
          {isDoorsOpening && (
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-30">
              <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-full border-2 border-[#FFE28A] bg-gradient-to-b from-[#8C5E1B] via-[#4A2F0A] to-[#201006] shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full border border-[#D4AF37]/50 rounded-full flex flex-col items-center justify-center p-1 text-center">
                  <span className="text-[#FFE28A] text-xl sm:text-2xl font-bold font-cinzel-decorative">
                    R
                  </span>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* ======================================================== */}
        {/* 3. CENTER MEDALLION & NEON LIGHT ORBIT (ROUND GHUMNA)    */}
        {/* ======================================================== */}
        {!isDoorsOpening && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center pointer-events-auto">
            {/* NEON LIGHT ROUND GHUMNI CHAHIYE (Circular/Oval Orbit around medallion) */}
            {isLightOrbiting && (
              <>
                {/* Luminous rotating light ring with neon comet tail */}
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.45, 0.05, 0.25, 0.95],
                  }}
                  className="absolute w-36 h-48 sm:w-44 sm:h-56 rounded-full pointer-events-none z-40 flex items-center justify-center"
                >
                  {/* Neon Golden Laser Head with high-intensity glow */}
                  <div
                    className="absolute -top-3.5 w-8 h-8 rounded-full bg-white shadow-[0_0_30px_10px_#FFE885,0_0_55px_20px_#D4AF37,0_0_80px_30px_#FFD700]"
                    style={{ filter: 'blur(0.5px)' }}
                  />
                  {/* Glowing Neon Comet Tail along the oval perimeter */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        'conic-gradient(from 0deg, rgba(255,255,255,1) 0deg, rgba(255,232,133,0.95) 55deg, rgba(212,175,55,0.6) 110deg, transparent 180deg)',
                      maskImage:
                        'radial-gradient(circle, transparent 65%, black 66%)',
                      WebkitMaskImage:
                        'radial-gradient(circle, transparent 65%, black 66%)',
                    }}
                  />
                </motion.div>

                {/* Radiant Neon Golden Pulse on orbit */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.95 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 1.4, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full border-2 border-[#FFE885] shadow-[0_0_50px_#FFE885] pointer-events-none"
                />
              </>
            )}

            {/* Pulsing Outer Neon Golden Ring */}
            <div
              className={`absolute -inset-4 rounded-full border transition-all duration-500 pointer-events-none ${
                isLightOrbiting
                  ? 'border-[#FFE885] shadow-[0_0_45px_rgba(255,232,133,1)] scale-105'
                  : 'border-[#FFE28A]/60 animate-pulse shadow-[0_0_20px_rgba(212,175,55,0.3)]'
              }`}
            />

            {/* Central Royal Oval Medallion Lock Button */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              animate={
                isLightOrbiting
                  ? {
                      scale: [1, 1.08, 1.04],
                      boxShadow: '0 0 60px rgba(255, 232, 133, 1)',
                    }
                  : {}
              }
              onClick={handleTap}
              className="relative w-24 h-32 sm:w-28 sm:h-36 rounded-full bg-gradient-to-b from-[#A06F24] via-[#6B420F] to-[#2B1607] border-3 border-[#FFE28A] p-2 flex flex-col items-center justify-center text-center cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.85),_inset_0_2px_10px_rgba(255,255,255,0.5)] transition-all group focus:outline-none select-none"
              aria-label="Tap to unlock and open royal doors"
            >
              {/* Inner Golden Rim Line */}
              <div className="absolute inset-1.5 rounded-full border border-[#FFDF85]/60 pointer-events-none" />

              {/* Medallion Monogram & Flower Engraving */}
              <div className="text-[9px] tracking-widest text-[#FFDF85] font-cinzel uppercase font-semibold">
                NIKAH
              </div>

              {/* Central Golden Monogram */}
              <div className="font-cinzel-decorative text-xl sm:text-2xl font-bold tracking-widest text-[#FFF8E1] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] my-0.5 sm:my-1">
                R & J
              </div>

              <div className="w-8 h-px bg-[#FFDF85]/60 my-0.5" />

              <div className="text-[8px] sm:text-[9px] tracking-[0.25em] text-[#FFE8A3] font-cinzel uppercase font-bold">
                OPEN
              </div>

              {/* Specular Gloss Reflection */}
              <div className="absolute top-2 left-3 w-8 h-4 rounded-full bg-white/30 blur-[1px] -rotate-30 pointer-events-none" />
            </motion.button>

            {/* Prompt indicator badge below button */}
            {stage === 'idle' && (
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-11 whitespace-nowrap flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#18080C]/90 border border-[#D4AF37]/80 shadow-xl text-[#FFE8A3] font-cinzel text-[10px] sm:text-xs tracking-wider uppercase font-semibold pointer-events-none"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFE8A3] animate-spin" />
                <span>Tap to open doors</span>
              </motion.div>
            )}
          </div>
        )}

        {/* Golden Volumetric Light Burst from center seam when doors open */}
        {isDoorsOpening && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 1, 0.4, 0], scaleX: [0, 8, 4, 1] }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-20 bg-gradient-to-r from-transparent via-[#FFF8E1] to-transparent pointer-events-none z-30 blur-md"
          />
        )}

        {/* Direct Skip Button at Bottom */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30">
          <button
            onClick={handleSkipDirectly}
            className="text-[11px] font-cinzel text-[#FFE28A]/80 hover:text-[#FFF4D0] hover:underline underline-offset-4 tracking-widest uppercase transition-colors"
          >
            Directly Enter Website →
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
