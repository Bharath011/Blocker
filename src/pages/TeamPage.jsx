import TeamMemberCard from '../components/cards/TeamMemberCard';
import { teamData } from '../data/teamData';

export default function TeamPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold uppercase tracking-[0.08em] text-[#9ed0ff] font-orbitron">Team</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
        {teamData.flatMap((section) => section.members).map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
