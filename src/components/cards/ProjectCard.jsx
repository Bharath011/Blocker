import { STATUS_CLASS } from '../../styles/theme';

export default function ProjectCard({ project }) {
  const borderClass = project.color === 'orange' ? 'border-[#d95a2b]/30 hover:border-[#d95a2b]' : 'border-[#3b82f6]/30 hover:border-[#3b82f6]';

  return (
    <article className={`flex h-full flex-col rounded-lg border bg-[#0b1016]/80 p-6 transition-all duration-300 ${borderClass}`}>
      <div className="mb-4 flex items-start justify-between">
        <h3 className="pr-4 text-xl leading-tight text-white font-orbitron">{project.title}</h3>
        <span className={`whitespace-nowrap rounded px-2 py-1 text-xs font-orbitron ${STATUS_CLASS[project.status] ?? STATUS_CLASS.Proposed}`}>{project.status}</span>
      </div>
      <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-300 font-rajdhani">{project.desc}</p>
      <div className="border-t border-gray-800 pt-4 text-xs text-gray-500 font-rajdhani"><span className="text-gray-400">Sponsor:</span> {project.sponsor}</div>
    </article>
  );
}
