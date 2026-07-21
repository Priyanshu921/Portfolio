import { useEffect, useRef } from 'react';

export default function QuantumCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setSize();
    
    window.addEventListener('resize', setSize);
    
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const spacing = 40; // Space between dots
    const radius = 1.5;
    const interactionRadius = 250;

    const cols = Math.floor(width / spacing) + 1;
    const rows = Math.floor(height / spacing) + 1;

    // Create dot grid
    const dots = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        dots.push({
          ox: i * spacing,
          oy: j * spacing,
          x: i * spacing,
          y: j * spacing,
        });
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw interactive dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        
        // Calculate distance to mouse
        const dx = mx - dot.ox;
        const dy = my - dot.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let targetX = dot.ox;
        let targetY = dot.oy;

        // Gravitational wave repulsion
        if (dist < interactionRadius) {
          const force = (interactionRadius - dist) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          // Push away from mouse
          targetX = dot.ox - Math.cos(angle) * force * 15;
          targetY = dot.oy - Math.sin(angle) * force * 15;
        }

        // Spring back to original position
        dot.x += (targetX - dot.x) * 0.1;
        dot.y += (targetY - dot.y) * 0.1;

        // Determine color based on distance
        const intensity = Math.max(0, 1 - dist / interactionRadius);
        ctx.fillStyle = dist < interactionRadius 
          ? `rgba(0, 240, 255, ${0.1 + intensity * 0.8})` // Cyber blue glow
          : 'rgba(255, 255, 255, 0.15)'; // Default dot
          
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dist < interactionRadius ? radius * (1 + intensity * 1.5) : radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Blueprint Edge Coordinates */}
      <div className="absolute top-4 left-4 text-[10px] font-mono text-cyan-500/50 tracking-widest uppercase">
        SYS.COORD [0.00, 0.00]
      </div>
      <div className="absolute bottom-4 right-4 text-[10px] font-mono text-cyan-500/50 tracking-widest uppercase">
        SYS.COORD [1.00, 1.00]
      </div>
    </div>
  );
}
