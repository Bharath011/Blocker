export default function TeamMemberCard({ member }) {
  return (
    <article className="flex items-center gap-4 rounded-xl border border-white/20 bg-[#0a1b35]/70 p-4 transition-all duration-300 hover:border-[#9dd1ff]/60 hover:bg-[#0c2244]/80">
      <img src={member.img} alt={member.name} className="h-16 w-16 rounded-full border-2 border-[#6ea8dc]/60 object-cover md:h-20 md:w-20" />
      <div>
        <h4 className="text-2xl text-white font-rajdhani">{member.name}</h4>
        <p className="text-sm uppercase tracking-wide text-[#ffb3a7] font-orbitron">{member.role}</p>
        <p className="mt-1 text-base text-[#c3ddff] font-rajdhani">Focus: {member.focus}</p>
      </div>
    </article>
  );
}
