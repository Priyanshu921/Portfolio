import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MagneticCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [hoverState, setHoverState] = useState('default'); // 'default', 'text', 'magnetic'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center of 32x32
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const tag = e.target.tagName?.toLowerCase();
      
      if (
        tag === 'a' ||
        tag === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.magnetic-target')
      ) {
        setHoverState('magnetic');
      } else if (
        tag === 'p' || tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'span'
      ) {
        setHoverState('text');
      } else {
        setHoverState('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    document.documentElement.style.cursor = 'none';
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);
    return () => {
      document.documentElement.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, []);

  if (!isVisible) return null;

  const variants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(0, 240, 255, 1)', // Cyber blue
      border: '0px solid rgba(0, 240, 255, 0)',
      mixBlendMode: 'normal'
    },
    text: {
      scale: 2,
      backgroundColor: 'rgba(0, 240, 255, 0.1)',
      border: '1px solid rgba(0, 240, 255, 0.8)',
      mixBlendMode: 'difference'
    },
    magnetic: {
      scale: 3,
      backgroundColor: 'rgba(255, 90, 0, 0.1)', // Warning orange for buttons
      border: '2px solid rgba(255, 90, 0, 0.8)',
      mixBlendMode: 'screen'
    }
  };

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] flex items-center justify-center rounded-full"
      variants={variants}
      animate={hoverState}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Inner dot disappears on hover */}
      <motion.div
        animate={{ opacity: hoverState === 'default' ? 1 : 0, scale: hoverState === 'default' ? 1 : 0 }}
        className="w-1.5 h-1.5 bg-white rounded-full"
      />
    </motion.div>
  );
}
