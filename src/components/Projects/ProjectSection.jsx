import { useLocation } from "react-router-dom";
import sectionData from "../../data/headerData";
import { projects } from "../../data/projectsData";
import { useTheme } from "../../redux/hooks/themeHook";
import { Footer } from "../Footer";
import { ProjectCard } from "../origin/Origin/featuredWork/ProjectCard";
import { UniversalHeader } from "../UniversalHeader";
import { useEffect } from "react";

export const ProjectSection = () => {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <>
      <section className="w-full px-2 sm:px-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
          <UniversalHeader
            data={sectionData.find((d) => d.path === location.pathname)}
          />

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
