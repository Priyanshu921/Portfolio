import { motion } from 'framer-motion';

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0B0F17]">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-[#0B0F17]" />

      {/* Aurora Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: ['-20%', '20%', '-20%'],
          y: ['-10%', '10%', '-10%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[100px] bg-cyan-900/40 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: ['20%', '-20%', '20%'],
          y: ['10%', '-10%', '10%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 right-0 w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[120px] bg-blue-900/40 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
          x: ['0%', '10%', '0%'],
          y: ['0%', '-20%', '0%'],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[90px] bg-emerald-900/30 pointer-events-none"
      />

      {/* Subtle Noise Texture Overlay (Optional, but adds premium feel) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
