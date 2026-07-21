import { useEffect, useRef } from 'react';

export default function ParticleInput({ tag = "input", type = "text", placeholder, className, rows }) {
  const canvasRef = useRef(null);
  const inputRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const input = inputRef.current;
    
    let animationId;

    const resize = () => {
      canvas.width = input.offsetWidth;
      canvas.height = input.offsetHeight;
    };
    
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        p.size *= 0.95;

        if (p.life <= 0) {
          particles.current.splice(index, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 240, 255, ${p.life})`;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleInput = (e) => {
      // Very rough caret estimation for the particle effect
      const val = e.target.value;
      const textWidth = ctx.measureText(val).width * 2; // rough approx
      const x = Math.min(20 + textWidth, canvas.width - 20);
      const y = canvas.height / 2;

      // Spawn particles
      for (let i = 0; i < 5; i++) {
        particles.current.push({
          x: x,
          y: tag === "textarea" ? y - 30 : y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 1,
          size: Math.random() * 3 + 1
        });
      }
    };

    input.addEventListener('input', handleInput);

    return () => {
      window.removeEventListener('resize', resize);
      input.removeEventListener('input', handleInput);
      cancelAnimationFrame(animationId);
    };
  }, [tag]);

  const Tag = tag;

  return (
    <div className="relative w-full">
      <Tag
        ref={inputRef}
        type={type}
        rows={rows}
        placeholder={placeholder}
        className={`w-full bg-transparent border border-slate-700/50 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500/50 font-mono transition-colors relative z-10 ${className}`}
      />
      {/* Background to maintain fill */}
      <div className="absolute inset-0 bg-slate-900/50 rounded-lg z-0 pointer-events-none"></div>
      
      {/* Particle Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-20 rounded-lg"
      />
    </div>
  );
}
