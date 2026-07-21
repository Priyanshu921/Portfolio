import { useEffect, useState } from 'react';

const CYRILLIC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export default function ScrambleText({ text, delay = 0, className = "" }) {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let iteration = 0;
    let interval = null;
    
    // Initial empty state before delay
    setDisplayText("");

    const startAnimation = () => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return CYRILLIC[Math.floor(Math.random() * CYRILLIC.length)];
            })
            .join("")
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3; // Slows down the reveal
      }, 30);
    };

    const timeout = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
}
