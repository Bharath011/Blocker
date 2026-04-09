export default function TeamMemberCard({ member }) {
  return (
    <article className="flex items-center gap-3 rounded-2xl border border-[#7cb7ff]/30 bg-[#082244]/45 p-3">
      <img src={member.img} alt={member.name} className="h-14 w-14 rounded-full border-2 border-[#8fc5ff]/60 object-cover" />
      <div>
        <h4 className="text-xl text-white font-rajdhani">{member.name}</h4>
        <p className="text-xs uppercase tracking-[0.06em] text-[#ffbfb4] font-orbitron">{member.role}</p>
        <p className="mt-0.5 text-sm text-[#d6e9ff] font-rajdhani">Focus: {member.focus}</p>
      </div>
    </article>
  );
}
