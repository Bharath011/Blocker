import { STATUS_CLASS } from '../../styles/theme';

export default function ProjectCard({ project }) {
  const borderClass = project.color === 'orange' ? 'border-[#d56d47]/45 hover:border-[#f78f68]' : 'border-[#5e9ce0]/45 hover:border-[#8ec4ff]';

  return (
    <article className={`flex h-full flex-col rounded-xl border bg-[#0a1b35]/70 p-6 transition-all duration-300 ${borderClass}`}>
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-2xl leading-tight text-white font-orbitron">{project.title}</h3>
        <span className={`whitespace-nowrap rounded px-2 py-1 text-xs font-orbitron ${STATUS_CLASS[project.status] ?? STATUS_CLASS.Proposed}`}>{project.status}</span>
      </div>
      <p className="mb-4 flex-grow text-lg leading-relaxed text-[#d7e9ff] font-rajdhani">{project.desc}</p>
      <div className="border-t border-white/15 pt-3 text-sm text-[#99b9dc] font-rajdhani"><span className="text-white/80">Sponsor:</span> {project.sponsor}</div>
    </article>
  );
}
