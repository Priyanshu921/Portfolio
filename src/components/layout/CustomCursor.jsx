import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring configuration for the cursor trailing effect
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center the 32x32 cursor
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      if (
        e.target.tagName?.toLowerCase() === 'a' ||
        e.target.tagName?.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.group\\/card') // Target the experience/github cards
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
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

  // Hide default cursor globally when this component is active
  useEffect(() => {
    document.documentElement.style.cursor = 'none';
    // Ensure all hoverable elements also hide their cursor to avoid double cursors
    const style = document.createElement('style');
    style.innerHTML = `
      * { cursor: none !important; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.documentElement.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glowing Aura */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-screen flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: isHovering ? 2.5 : 1,
            opacity: isHovering ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.2 }}
          className="absolute w-full h-full bg-cyan-400 rounded-full blur-[10px]"
        />
        
        {/* Inner Solid Dot */}
        <motion.div
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        />
      </motion.div>
    </>
  );
}
