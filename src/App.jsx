import { ReactLenis } from '@studio-freight/react-lenis';
import { ScrollProgress } from './components/layout/ScrollProgress';
import HeroSection from './containers/HeroSection';
import ExperienceCard from './components/cards/ExperienceCard';
import GithubSection from './components/cards/GithubSection';
import BentoBox from './components/layout/BentoBox';
import ScrollCarousel from './components/cards/ScrollCarousel';
import LaserTimeline from './components/layout/LaserTimeline';
import { greeting, socialMediaLinks, workExperiences, achievementSection, skillsSection } from './portfolio';
import QuantumCanvas from './components/layout/QuantumCanvas';
import MagneticCursor from './components/layout/MagneticCursor';
import { motion } from 'framer-motion';
import './index.css';

function App() {

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
      <MagneticCursor />
      <div className="relative min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 z-0">
        <QuantumCanvas />
        <ScrollProgress />
        <main>
          <HeroSection greeting={greeting} social={socialMediaLinks} />
          
          {/* Cyber-Bento Skills Matrix */}
          {skillsSection.display && (
            <div id="work" className="py-32 relative z-10 px-6 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
                  {skillsSection.title}
                </h2>
                <p className="text-slate-400 mt-4 font-mono">{skillsSection.subTitle}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
                
                {/* Backend & Frameworks */}
                <BentoBox className="flex flex-col p-8" delay={0.1}>
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <h3 className="text-xl font-bold font-mono uppercase text-slate-200">Backend & Frameworks</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {skillsSection.softwareSkills.slice(0, 8).map((skill, i) => (
                      <div key={i} className="magnetic-target flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-colors">
                        <i className={`${skill.fontAwesomeClassname} text-lg text-emerald-400`}></i>
                        <span className="text-xs font-mono text-slate-300">{skill.skillName}</span>
                      </div>
                    ))}
                  </div>
                </BentoBox>

                {/* Frontend & State Management */}
                <BentoBox className="flex flex-col p-8" delay={0.2}>
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                    <h3 className="text-xl font-bold font-mono uppercase text-slate-200">Frontend & State</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {skillsSection.softwareSkills.slice(8, 13).map((skill, i) => (
                      <div key={i} className="magnetic-target flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition-colors">
                        <i className={`${skill.fontAwesomeClassname} text-lg text-cyan-400`}></i>
                        <span className="text-xs font-mono text-slate-300">{skill.skillName}</span>
                      </div>
                    ))}
                  </div>
                </BentoBox>

                {/* Databases & ORMs */}
                <BentoBox className="flex flex-col p-8" delay={0.3}>
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                    <h3 className="text-xl font-bold font-mono uppercase text-slate-200">Databases & ORMs</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {skillsSection.softwareSkills.slice(13, 19).map((skill, i) => (
                      <div key={i} className="magnetic-target flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-purple-500/50 transition-colors">
                        <i className={`${skill.fontAwesomeClassname} text-lg text-purple-400`}></i>
                        <span className="text-xs font-mono text-slate-300">{skill.skillName}</span>
                      </div>
                    ))}
                  </div>
                </BentoBox>

                {/* Libraries, Testing & Cloud */}
                <BentoBox className="flex flex-col p-8" delay={0.4}>
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                    <h3 className="text-xl font-bold font-mono uppercase text-slate-200">Cloud & Tooling</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {skillsSection.softwareSkills.slice(19, 26).map((skill, i) => (
                      <div key={i} className="magnetic-target flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-orange-500/50 transition-colors">
                        <i className={`${skill.fontAwesomeClassname} text-lg text-orange-400`}></i>
                        <span className="text-xs font-mono text-slate-300">{skill.skillName}</span>
                      </div>
                    ))}
                  </div>
                </BentoBox>

              </div>
            </div>
          )}

          {/* Chronicle Timeline (Work Experience) */}
          {workExperiences.display && (
            <LaserTimeline>
              {workExperiences.experience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </LaserTimeline>
          )}

          {/* Github Open Source Section */}
          <GithubSection />

          {/* Achievements */}
          {achievementSection.display && (
            <div className="py-32 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-transparent pointer-events-none" />
              <h2 className="text-4xl font-bold mb-4 text-center">
                {achievementSection.title}
              </h2>
              <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16 px-6">{achievementSection.subtitle}</p>
              <ScrollCarousel items={achievementSection.achievementsCards.map(card => {
                const url = card.footerLink && card.footerLink.length > 0 ? card.footerLink[0].url : null;
                const isValidLink = url && (url.startsWith('http://') || url.startsWith('https://'));
                return {
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  link: isValidLink ? url : null
                };
              })} />
            </div>
          )}

          {/* Simple Contact CTA */}
          <section className="relative py-32 px-6 max-w-4xl mx-auto border-t border-slate-900 mt-10 text-center">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 relative z-10">
              Initialize Contact
            </h2>
            <p className="text-slate-400 mb-12 font-mono relative z-10 max-w-lg mx-auto">
              My inbox is always open for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a 
              href={`mailto:${socialMediaLinks.gmail}`}
              className="inline-flex items-center justify-center magnetic-target px-10 py-5 bg-transparent border border-cyan-500/50 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 font-mono font-bold uppercase tracking-widest text-sm transition-all duration-300 relative z-10 shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:shadow-[0_0_50px_rgba(0,240,255,0.4)]"
            >
              <i className="fas fa-envelope mr-3"></i> Transmit Message
            </a>
          </section>
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
