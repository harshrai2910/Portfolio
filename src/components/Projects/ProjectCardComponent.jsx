import { useLocation } from "react-router-dom";
import { projects } from "../../data/projectsData";
import ProjectCardHeader from "./ProjectCard/ProjectCardHeader";
import ProjectCardMain from "./ProjectCard/ProjectCardMain";
import { Footer } from "../Footer";

export const ProjectCardComponent = () => {
  const location = useLocation();
  const data = projects.find((data) => data.path === location.pathname);

  return (
    <>
      <ProjectCardHeader
        name={data.name}
        tagline={data.tagline}
        links={data.links}
        category={data.category}
        techStack={data.techStack}
        image={data.image}
        web={data.web}
      />
      <ProjectCardMain project={data} />
      <Footer />
    </>
  );
};
