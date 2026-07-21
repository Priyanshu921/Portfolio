import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function LaserTimeline({ children }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full max-w-7xl mx-auto py-32 px-6">
      
      <div className="text-center mb-32">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
          Chronicle
        </h2>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
          Data Stream
        </h2>
      </div>

      {/* SVG Laser Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 w-[2px] overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="1"
            y1="0"
            x2="1"
            y2="100%"
            stroke="url(#laser-gradient)"
            strokeWidth="2"
            style={{ pathLength, opacity }}
          />
          <defs>
            <linearGradient id="laser-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="#FF5A00" />
              <stop offset="80%" stopColor="#FF5A00" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Glow effect matching the line progress */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-orange-500 to-transparent blur-[4px]"
          style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), opacity }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col gap-24">
        {children}
      </div>
      
    </div>
  );
}
