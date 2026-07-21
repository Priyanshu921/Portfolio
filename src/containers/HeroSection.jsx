import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import BootSequence from '../components/animations/BootSequence';
import ScrambleText from '../components/animations/ScrambleText';
import CounterMetric from '../components/animations/CounterMetric';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 40, damping: 20 } }
};

export default function HeroSection({ greeting, social }) {
  const containerRef = useRef(null);
  const [bootComplete, setBootComplete] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-24">
      
      {/* ASCII Boot Terminal overlay */}
      {!bootComplete && (
        <BootSequence onComplete={() => setBootComplete(true)} />
      )}

      <motion.div 
        style={{ y, opacity }}
        initial="hidden"
        animate={bootComplete ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col pt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Title Area */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <motion.div variants={fadeUpVariant} className="mb-6 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase">
                System Active // Node Online
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-white mb-6 leading-[1.1] uppercase">
              {bootComplete ? (
                <ScrambleText text={greeting.title} delay={100} />
              ) : (
                <span className="opacity-0">{greeting.title}</span>
              )}
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 font-mono leading-relaxed">
              {greeting.subTitle}
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex gap-4">
              <a href="#work" className="magnetic-target px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider text-sm transition-colors rounded-none border border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                Initialize Sequence
              </a>
              {greeting.resumeLink && (
                <a href={greeting.resumeLink} target="_blank" rel="noreferrer" className="magnetic-target px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold uppercase tracking-wider text-sm transition-colors rounded-none flex items-center gap-2">
                  <i className="fas fa-terminal"></i> Extract.Log
                </a>
              )}
            </motion.div>
          </div>

          {/* Metrics Panel */}
          <motion.div variants={fadeUpVariant} className="lg:col-span-4 flex flex-col justify-center border border-slate-800 bg-slate-900/20 backdrop-blur-md p-8 relative">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></div>
            
            <CounterMetric label="01 // GitHub Repositories" value={14} delay={1500} />
            <CounterMetric label="02 // Tech Stack Nodes" value={22} delay={1800} />
            <CounterMetric label="03 // Years Architecture" value={4} suffix="+" delay={2100} />
          </motion.div>

        </div>
      </motion.div>

      {/* Grid Coordinates (Bottom Left) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-24 text-[10px] font-mono text-slate-500 tracking-widest uppercase rotate-90 origin-left"
      >
        Y-AXIS SCROLL ACTIVE
      </motion.div>
    </section>
  );
}
