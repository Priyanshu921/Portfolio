import { useEffect, useState } from 'react';

const BOOT_LOGS = [
  "SYS.INIT(0x00)",
  "LOADING KERNEL_MODULES...",
  "[OK] VFS MOUNTED",
  "ESTABLISHING SECURE CONNECTION...",
  "[WARN] ENCRYPTION HANDSHAKE DELAY",
  "BYPASSING SECURITY PROTOCOL...",
  "ACCESS GRANTED",
  "BOOT SEQUENCE COMPLETE"
];

export default function BootSequence({ onComplete }) {
  const [logs, setLogs] = useState([]);
  
  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < BOOT_LOGS.length) {
        setLogs(prev => [...prev, BOOT_LOGS[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
      }
    }, 150); // fast print speed

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="absolute top-8 left-8 md:top-24 md:left-24 font-mono text-[10px] md:text-xs text-emerald-500 max-w-xs z-50 pointer-events-none opacity-60">
      {logs.map((log, i) => (
        <div key={i} className="mb-1 leading-tight tracking-wider">
          <span className="text-slate-600 mr-2">{`>`}</span>
          {log}
        </div>
      ))}
      {logs.length < BOOT_LOGS.length && (
        <div className="animate-pulse w-2 h-4 bg-emerald-500 mt-1" />
      )}
    </div>
  );
}
