export default function TeamMemberCard({ member }) {
  return (
    <article className="flex items-center gap-4 rounded-lg border border-gray-800 bg-[#0b1016]/60 p-4 transition-colors duration-300 hover:border-[#d95a2b]/50">
      <img src={member.img} alt={member.name} className="h-16 w-16 rounded-full border-2 border-gray-700 object-cover md:h-20 md:w-20" />
      <div>
        <h4 className="text-lg font-bold text-white font-rajdhani">{member.name}</h4>
        <p className="mb-1 text-sm text-[#ffaa77] font-orbitron">{member.role}</p>
        <p className="line-clamp-2 text-xs text-gray-400 font-rajdhani">Focus: {member.focus}</p>
      </div>
    </article>
  );
}
