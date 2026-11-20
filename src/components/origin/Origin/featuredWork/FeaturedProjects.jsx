import { useTheme } from "../../../../redux/hooks/themeHook";
import { ProjectCard } from "./ProjectCard";
import { Headers } from "../../Headers";
import { projects } from "../../../../data/projectsData";
import { sections } from "../../../../data/sectionsData";

export const FeaturedProjects = () => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center w-full px-2 sm:px-4">
      <div
        className={`flex items-center justify-between flex-col w-full max-w-6xl 
          p-5 md:p-10 border-2 shadow-sm rounded-4xl 
          ${theme ? "border-white bg-gray-50" : "border-zinc-700 bg-zinc-800"}`}
      >
        <Headers data={sections.find((section) => section.id === 1)} />
        <div className="space-y-5">
          {projects.map((data) => (
            <ProjectCard
              key={data.id}
              image={data.image}
              number={data.id}
              category={data.category}
              name={data.name}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
