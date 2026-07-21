import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CounterMetric({ label, value, suffix = "", delay = 0 }) {
  const [hasStarted, setHasStarted] = useState(false);
  const count = useSpring(0, { damping: 30, stiffness: 100, duration: 2000 });
  const rounded = useTransform(count, Math.round);

  // Animate the counter only after the delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasStarted(true);
      count.set(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay, count]);

  return (
    <div className="flex flex-col border-l border-cyan-500/30 pl-4 mb-4">
      <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest uppercase mb-1">
        {label}
      </span>
      <motion.span className="text-3xl font-black text-slate-100 font-mono tracking-tighter flex items-center gap-1">
        {hasStarted ? <motion.span>{rounded}</motion.span> : <span>00</span>}
        {suffix && <span>{suffix}</span>}
      </motion.span>
    </div>
  );
}
