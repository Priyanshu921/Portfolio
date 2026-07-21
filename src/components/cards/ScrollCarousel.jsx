import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollCarousel({ items }) {
  const [selectedImg, setSelectedImg] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <>
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-6"
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="group relative overflow-hidden bg-slate-950/60 backdrop-blur-xl border border-slate-800 rounded-xl flex flex-col hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)] transition-all duration-500"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,240,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.5)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0"></div>

          {/* Left glowing accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500 transition-all duration-500 z-10"></div>

          {item.image && (
            <div 
              className="w-full h-56 bg-[#050505] flex items-center justify-center overflow-hidden border-b border-slate-800 p-4 cursor-pointer relative group/img z-10"
              onClick={() => setSelectedImg(item.image)}
            >
              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500/30 group-hover/img:border-cyan-400 transition-colors"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-500/30 group-hover/img:border-cyan-400 transition-colors"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-500/30 group-hover/img:border-cyan-400 transition-colors"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500/30 group-hover/img:border-cyan-400 transition-colors"></div>

              {/* Scanning Laser Effect */}
              <div className="absolute left-0 right-0 h-[1px] bg-cyan-400/80 shadow-[0_0_10px_rgba(0,240,255,1)] top-0 -translate-y-full group-hover/img:animate-[scan_2s_ease-in-out_infinite] z-20"></div>

              <img src={item.image} alt={item.title} className="w-full h-full object-contain filter grayscale-[30%] opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700" />
              
              <div className="absolute inset-0 bg-cyan-950/30 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                <i className="fas fa-expand text-3xl text-cyan-400 drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"></i>
              </div>
            </div>
          )}
          
          <div className="relative z-10 flex flex-col flex-1 p-6">
            <div className="flex-1">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-black text-slate-200 group-hover:text-cyan-400 tracking-tight transition-colors drop-shadow-md pr-4">{item.title}</h3>
                <span className="shrink-0 px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] uppercase tracking-widest rounded-sm flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Verified
                </span>
              </div>
              <p className="text-sm text-slate-400/90 font-medium line-clamp-3 leading-relaxed">{item.description}</p>
            </div>
            
            {item.link && (
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center group/link">
                <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest group-hover/link:text-cyan-500/70 transition-colors">Digital Credential</span>
                <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-500/10 px-3 py-1.5 rounded hover:bg-cyan-500/20">
                  Authenticate <i className="fas fa-external-link-alt text-[10px]"></i>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>

    <AnimatePresence>
      {selectedImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            src={selectedImg}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-700"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image itself
          />
          <button 
            className="absolute top-6 right-6 text-white bg-slate-800/50 hover:bg-slate-700 p-3 rounded-full transition-colors backdrop-blur-md border border-slate-600"
            onClick={() => setSelectedImg(null)}
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
