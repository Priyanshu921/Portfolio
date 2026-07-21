import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

export default function BentoBox({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5, type: 'spring' }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-xl bg-slate-950 border border-slate-800/50 overflow-hidden ${className}`}
    >
      {/* Proximity Glow Border */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 240, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Cyber Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative z-10 h-full p-6 flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
