import ProjectCard from '../components/cards/ProjectCard';
import SectionHeading from '../components/common/SectionHeading';
import { projectsData } from '../data/projectsData';

export default function ProjectsPage() {
  return (
    <div className="relative z-10 mx-auto mt-8 max-w-6xl px-4 pb-20">
      <SectionHeading title="Current & Past" accent="Projects" accentColor="text-[#3b82f6]" barColor="via-[#d95a2b]" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
