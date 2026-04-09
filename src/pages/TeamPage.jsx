import TeamMemberCard from '../components/cards/TeamMemberCard';
import { teamData } from '../data/teamData';

export default function TeamPage() {
  return (
    <section className="relative min-h-screen overflow-y-auto py-14">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/20 bg-[#071328]/70 p-8 backdrop-blur-md">
        <h2 className="text-4xl uppercase tracking-wide text-white font-orbitron md:text-5xl">Team</h2>
        <p className="mt-2 text-base text-[#c3ddff] md:text-lg">Researchers, scholars, and students driving advanced propulsion science.</p>

        {teamData.map((section) => (
          <section key={section.category} className="mt-8">
            <h3 className="mb-4 text-2xl uppercase tracking-wide text-[#9dd1ff] font-orbitron">{section.category}</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {section.members.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
