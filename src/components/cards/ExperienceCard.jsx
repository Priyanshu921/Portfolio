import { motion } from 'framer-motion';

export default function ExperienceCard({ experience, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring" }}
      className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      
      {/* Node Point on Timeline */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(255,90,0,0.8)] z-20 items-center justify-center">
        <div className="w-2 h-2 bg-slate-950 rounded-full animate-ping"></div>
      </div>

      {/* Date (Opposite Side) */}
      <div className={`hidden md:flex w-5/12 ${isEven ? 'justify-start' : 'justify-end'}`}>
        <span className="font-mono text-xl text-orange-400 font-bold tracking-widest bg-slate-900/50 backdrop-blur-md px-4 py-2 border border-slate-800 rounded-lg">
          {experience.date}
        </span>
      </div>

      {/* Content Card */}
      <div className="w-full md:w-5/12 pl-12 md:pl-0">
        <div className="group relative p-8 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-xl hover:border-orange-500/50 transition-colors duration-300">
          
          <div className="md:hidden font-mono text-sm text-orange-400 font-bold tracking-widest mb-4">
            {experience.date}
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0 border border-slate-200 overflow-hidden shadow-sm">
              {experience.companylogo ? (
                <img src={experience.companylogo} alt={experience.company} className="w-10 h-10 object-contain p-1" />
              ) : (
                <span className="text-xl font-black text-orange-500">{experience.company.charAt(0)}</span>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-100">{experience.role}</h3>
              <p className="text-sm font-mono text-slate-400 uppercase tracking-wide">{experience.company}</p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mb-6 font-medium">
            {experience.desc}
          </p>

          {experience.descBullets && (
            <ul className="space-y-2">
              {experience.descBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

    </motion.div>
  );
}
