import sectionData from "../../data/headerData";
import { systems } from "../../data/systemsData";
import { Footer } from "../Footer";
import { ProjectCard } from "../origin/Origin/featuredWork/ProjectCard";
import { UniversalHeader } from "../UniversalHeader";

export const SystemsSection = () => {
  return (
    <>
      <section className="w-full px-2 sm:px-4 space-y-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
          <UniversalHeader
            data={sectionData.find((d) => d.path === location.pathname)}
          />

          <div className="flex w-full flex-col gap-5">
            {systems.map((data) => (
              <ProjectCard
                key={data.id}
                image={data.image}
                number={data.number}
                category={data.tag}
                name={data.name}
                description={data.description}
                path={data.path}
              />
            ))}
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};
