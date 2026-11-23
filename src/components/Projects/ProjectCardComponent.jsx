import { useLocation } from "react-router-dom";
import { projects } from "../../data/projectsData";
import ProjectCardHeader from "./ProjectCard/ProjectCardHeader";
import ProjectCardMain from "./ProjectCard/ProjectCardMain";
import { Footer } from "../Footer";

export const ProjectCardComponent = () => {
  const location = useLocation();
  const data = projects.find((data) => data.path === location.pathname);

  console.log(data);
  return (
    <>
      <ProjectCardHeader
        name={data.name}
        tagline={data.tagline}
        links={data.links}
        category={data.category}
        techStack={data.techStack}
      />
      <ProjectCardMain project={data} />
      <Footer />
    </>
  );
};
