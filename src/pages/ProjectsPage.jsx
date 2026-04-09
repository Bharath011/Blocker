import ProjectCard from '../components/cards/ProjectCard';
import { projectsData } from '../data/projectsData';

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen overflow-y-auto py-14">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/20 bg-[#071328]/70 p-8 backdrop-blur-md">
        <h2 className="text-4xl uppercase tracking-wide text-white font-orbitron md:text-5xl">Projects</h2>
        <p className="mt-2 text-base text-[#c3ddff] md:text-lg">Current and completed work across combustion, propellants, and electric propulsion.</p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
