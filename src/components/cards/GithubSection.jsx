import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import ExplodedProjectCard from './ExplodedProjectCard';

export default function GithubSection() {
  const [repos, setRepos] = useState([]);
  const targetRef = useRef(null);
  
  // Horizontal Scroll Jacking
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  useEffect(() => {
    fetch('/profile.json')
      .then(res => res.json())
      .then(data => {
        if (data?.data?.user?.pinnedItems?.edges) {
          const fetchedRepos = data.data.user.pinnedItems.edges.map(edge => edge.node);
          setRepos(fetchedRepos);
        }
      })
      .catch(err => console.error("Error fetching github profile:", err));
  }, []);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#050505]">
      
      {/* Sticky container that holds the horizontal scroll track */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        
        {/* Massive Parallax Background Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.02] pointer-events-none select-none z-0">
          <h2 className="text-[15rem] md:text-[25rem] font-black tracking-tighter uppercase text-white">
            ARCHITECTURE
          </h2>
        </div>

        {/* Section Title */}
        <div className="relative pl-12 md:pl-24 z-30 pt-20 shrink-0">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
            Exploded
          </h2>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
            Blueprints
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mt-6"></div>
        </div>

        {/* Cards Wrapper */}
        <div className="flex-1 flex items-center w-full overflow-visible">
          {repos.length === 0 ? (
            <div className="px-[10vw] flex items-center gap-4 text-cyan-500 font-mono text-sm tracking-widest uppercase">
              <div className="w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              <span>Fetching Repositories...</span>
            </div>
          ) : (
            <motion.div style={{ x }} className="flex gap-12 md:gap-16 px-[10vw] md:px-[20vw] z-10 w-max">
              {repos.map((repo, idx) => (
                <ExplodedProjectCard key={repo.id} repo={repo} />
              ))}
              
              {/* Show More Card */}
              <a
                href="https://github.com/Priyanshu921"
                target="_blank"
                rel="noreferrer"
                className="relative w-[250px] md:w-[300px] h-[400px] shrink-0 flex flex-col items-center justify-center group/more perspective-[2000px] text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                <div className="absolute inset-0 bg-slate-950/40 border-2 border-dashed border-slate-800 rounded-2xl group-hover/more:border-cyan-500/50 group-hover/more:bg-cyan-950/20 transition-all duration-500"></div>
                <div className="relative flex flex-col items-center gap-6 group-hover/more:-translate-y-2 transition-transform duration-500">
                  <div className="w-24 h-24 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center group-hover/more:shadow-[0_0_30px_rgba(0,240,255,0.3)] group-hover/more:border-cyan-400 transition-all duration-500">
                    <i className="fab fa-github text-5xl"></i>
                  </div>
                  <span className="font-black tracking-widest uppercase text-xl text-center px-4">
                    View All<br />Projects
                  </span>
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-500/70 group-hover/more:text-cyan-400 uppercase tracking-widest mt-2 group-hover/more:translate-x-2 transition-all duration-500">
                    Show More <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </a>
            </motion.div>
          )}
        </div>
        
        {/* Scroll Progress Bar at bottom */}
        <div className="absolute bottom-10 left-24 right-24 h-px bg-slate-800">
          <motion.div 
            className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(0,240,255,0.8)] origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

      </div>
    </section>
  );
}
