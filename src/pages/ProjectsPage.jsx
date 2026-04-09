import ProjectCard from '../components/cards/ProjectCard';
import { projectsData } from '../data/projectsData';

export default function ProjectsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold uppercase tracking-[0.08em] text-[#9ed0ff] font-orbitron">Projects</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
