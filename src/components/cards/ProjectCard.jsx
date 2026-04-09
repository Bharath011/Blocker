import { STATUS_CLASS } from '../../styles/theme';

export default function ProjectCard({ project }) {
  const borderClass = project.color === 'orange' ? 'border-[#d56d47]/45' : 'border-[#5e9ce0]/45';

  return (
    <article className={`rounded-2xl border bg-[#082244]/45 p-4 ${borderClass}`}>
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-xl leading-tight text-white font-orbitron">{project.title}</h3>
        <span className={`whitespace-nowrap rounded px-2 py-1 text-xs font-orbitron ${STATUS_CLASS[project.status] ?? STATUS_CLASS.Proposed}`}>{project.status}</span>
      </div>
      <p className="text-sm leading-relaxed text-[#d6e9ff] font-rajdhani">{project.desc}</p>
      <div className="mt-3 border-t border-white/15 pt-2 text-xs text-[#99b9dc] font-rajdhani"><span className="text-white/80">Sponsor:</span> {project.sponsor}</div>
    </article>
  );
}
