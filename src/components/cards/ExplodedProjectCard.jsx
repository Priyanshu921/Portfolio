import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ExplodedProjectCard({ repo }) {
  const [isExploded, setIsExploded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`git clone ${repo.url}.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatSize = (kb) => {
    if (!kb) return '0 KB';
    if (kb > 1024) return `${(kb / 1024).toFixed(1)} MB`;
    return `${kb} KB`;
  };

  return (
    <div 
      className="relative w-[320px] md:w-[380px] h-[400px] shrink-0 flex items-center justify-center group/card perspective-[2000px]"
    >
      <motion.div
        animate={{
          rotateX: isExploded ? 15 : 0,
          rotateY: isExploded ? -15 : 0,
          scale: isExploded ? 0.95 : 1,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        
        {/* Base Layer: Blueprint Glass Background */}
        <motion.div
          animate={{ z: isExploded ? -20 : 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className={`absolute inset-0 rounded-2xl transition-colors duration-500 ${
            isExploded 
              ? 'bg-[#050505]/60 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.15)]' 
              : 'bg-slate-950/80 border border-slate-800 backdrop-blur-xl group-hover/card:border-cyan-500/30 group-hover/card:shadow-[0_0_30px_rgba(0,240,255,0.05)]'
          }`}
        >
          {isExploded && (
            <div className="absolute inset-0 rounded-2xl opacity-20 bg-[linear-gradient(rgba(0,240,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.5)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0"></div>
          )}
        </motion.div>

        {/* Content Stack */}
        <div className="absolute inset-0 p-5 flex flex-col justify-between [transform-style:preserve-3d] pointer-events-none">
          
          {/* Header Layer (Always Visible, Floats Highest) */}
          <motion.div
            animate={{ z: isExploded ? 50 : 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="flex justify-between items-center pointer-events-auto relative z-20"
          >
            <div className="flex flex-col max-w-[65%]">
              <span className="font-mono text-cyan-500 text-[10px] tracking-widest mb-1 uppercase drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">Repository</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-100 tracking-tight truncate drop-shadow-md leading-none pb-1">{repo.name}</h3>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsExploded(!isExploded);
              }}
              className={`px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-widest transition-all rounded shrink-0 cursor-pointer shadow-md ${
                isExploded 
                  ? 'bg-cyan-950/60 backdrop-blur-md border-2 border-cyan-500/80 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'bg-slate-800 border-2 border-slate-600 text-slate-200 hover:border-cyan-500 hover:text-cyan-400'
              }`}
            >
              {isExploded ? "Decompile" : "Explode"}
            </button>
          </motion.div>

          {/* Cover Layer: Visible ONLY when NOT exploded */}
          <motion.div
            animate={{ 
              opacity: isExploded ? 0 : 1,
              scale: isExploded ? 0.8 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            style={{ zIndex: 10 }}
          >
            {/* Spinning/Glowing Centerpiece representing the "Packaged" Repo */}
            <div className="relative w-28 h-28 flex items-center justify-center mb-6 mt-10">
              <div className="absolute inset-0 border-2 border-slate-700/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-2 border border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <i className="fab fa-github text-5xl text-slate-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover/card:text-cyan-400 group-hover/card:drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-500"></i>
            </div>
            
            {/* Minimal Stats */}
            <div className="flex gap-4 mt-6">
              {repo.primaryLanguage && (
                <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.primaryLanguage.color }}></span>
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider">{repo.primaryLanguage.name}</span>
                </div>
              )}
              <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
                <i className="fas fa-star text-orange-400 text-xs"></i>
                <span className="text-[10px] font-mono text-slate-300">{repo.stargazers?.totalCount || 0}</span>
              </div>
            </div>
          </motion.div>

          {/* Hidden Data Layers: Visible ONLY when Exploded */}
          
          {/* Middle Layer: Description & Clone Box */}
          <motion.div
            animate={{ 
              z: isExploded ? 30 : 0,
              opacity: isExploded ? 1 : 0,
              y: isExploded ? 0 : 20,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className={`flex flex-col gap-2 ${isExploded ? 'pointer-events-auto' : 'pointer-events-none'}`}
          >
            <p className="font-medium text-xs leading-relaxed line-clamp-2 h-[36px] text-slate-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              {repo.description || "Core repository module containing foundational logic and project architecture."}
            </p>

            <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
              <span className="text-cyan-400 font-mono text-[9px] uppercase tracking-widest mb-1.5 block font-bold">Quick Clone</span>
              <div 
                onClick={handleCopy}
                className="flex items-center justify-between bg-slate-950 border border-slate-700 hover:border-cyan-400 p-2 rounded-lg cursor-pointer transition-colors group"
              >
                <span className="font-mono text-xs font-bold text-slate-200 truncate mr-3 group-hover:text-cyan-300 transition-colors drop-shadow-md">
                  git clone {repo.url}.git
                </span>
                <i className={`fas text-xs ${copied ? 'fa-check text-emerald-400' : 'fa-copy text-slate-400 group-hover:text-cyan-400'}`}></i>
              </div>
            </div>
          </motion.div>

          {/* Bottom Layer: Telemetry Grid */}
          <motion.div
            animate={{ 
              z: isExploded ? 10 : 0,
              opacity: isExploded ? 1 : 0,
              y: isExploded ? 0 : 20,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className={`flex flex-col gap-2 ${isExploded ? 'pointer-events-auto' : 'pointer-events-none'}`}
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-lg flex flex-col gap-1 bg-slate-900/90 border border-slate-700 shadow-lg">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-widest font-bold">Disk Usage</span>
                <span className="text-cyan-300 font-black font-mono text-sm drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">{formatSize(repo.diskUsage)}</span>
              </div>
              <div className="p-2 rounded-lg flex flex-col gap-1 bg-slate-900/90 border border-slate-700 shadow-lg">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-widest font-bold">Forks</span>
                <span className="text-cyan-300 font-black font-mono text-sm drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">{repo.forkCount || 0}</span>
              </div>
              <div className="p-2 rounded-lg flex flex-col gap-1 bg-slate-900/90 border border-slate-700 shadow-lg">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-widest font-bold">Stars</span>
                <span className="text-orange-400 font-black font-mono text-sm drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]">{repo.stargazers?.totalCount || 0}</span>
              </div>
              <div className="p-2 rounded-lg flex flex-col gap-1 bg-slate-900/90 border border-slate-700 shadow-lg">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-widest font-bold">Language</span>
                <span className="font-black font-mono text-sm truncate drop-shadow-md" style={{ color: repo.primaryLanguage?.color || '#fff' }}>
                  {repo.primaryLanguage?.name || 'N/A'}
                </span>
              </div>
            </div>
            
            {/* Footer Link Button */}
            <a 
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="w-full py-1.5 bg-slate-900/80 border border-slate-700 hover:border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-widest transition-all text-center rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              Open Source <i className="fas fa-external-link-alt"></i>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
