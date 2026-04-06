import TeamMemberCard from '../components/cards/TeamMemberCard';
import SectionHeading from '../components/common/SectionHeading';
import { teamData } from '../data/teamData';

export default function TeamPage() {
  return (
    <div className="relative z-10 mx-auto mt-8 max-w-6xl px-4 pb-20">
      <SectionHeading title="Research" accent="Team" accentColor="text-[#d95a2b]" barColor="via-[#3b82f6]" />
      {teamData.map((section) => (
        <section key={section.category} className="mb-16">
          <h3 className="mb-6 border-b border-gray-800 pb-2 text-xl uppercase text-[#88bbee] font-orbitron">{section.category}</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.members.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
