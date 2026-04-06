import ResearchCard from '../components/cards/ResearchCard';
import { diagramByKey } from '../components/diagrams/ResearchDiagrams';
import { researchAreas } from '../data/researchAreas';

export default function HomePage() {
  const featured = researchAreas.find((area) => area.featured);
  const regularAreas = researchAreas.filter((area) => !area.featured);

  return (
    <div className="relative z-10 mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-4 pb-20 md:gap-8 lg:grid-cols-2">
      {regularAreas.map((area) => {
        const Diagram = diagramByKey[area.diagram];
        return (
          <ResearchCard key={area.id} title={area.title} color={area.color} desc={area.desc}>
            <Diagram />
          </ResearchCard>
        );
      })}

      {featured && (
        <div className="mt-4 flex justify-center lg:col-span-2">
          <div className="w-full lg:w-4/5">
            <ResearchCard title={featured.title} color={featured.color} desc={featured.desc}>
              {(() => {
                const FeaturedDiagram = diagramByKey[featured.diagram];
                return <FeaturedDiagram />;
              })()}
            </ResearchCard>
          </div>
        </div>
      )}
    </div>
  );
}
