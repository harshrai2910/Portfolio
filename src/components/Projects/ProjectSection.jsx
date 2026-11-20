import { projects } from "../../data/projectsData";
import { useTheme } from "../../redux/hooks/themeHook";
import { Footer } from "../Footer";
import { ProjectCard } from "../origin/Origin/featuredWork/ProjectCard";

export const ProjectSection = () => {
  const { theme } = useTheme();
  return (
    <>
      <section className="w-full px-2 sm:px-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
          <div className="mb-10 mt-5 flex w-full flex-col gap-5">
            <h1
              className={`font-inter text-5xl font-bold ${theme ? "text-zinc-900" : "text-zinc-100"}`}
            >
              Projects
            </h1>
            <p
              className={`font-inter text-lg font-medium ${theme ? "text-zinc-700" : "text-zinc-300"}`}
            >
              A collection of applications I’ve designed and developed, turning
              ideas into functional products. Each project reflects my passion
              for problem-solving, exploring technologies, and building
              meaningful solutions.
            </p>
          </div>

          <div className="flex w-full flex-col gap-5">
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
      </section>

      <Footer back="/projects" />
    </>
  );
};
