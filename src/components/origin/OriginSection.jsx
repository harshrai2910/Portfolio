import { Footer } from "../Footer";
import { About } from "./Origin/AboutMe/About";
import { Systems } from "./Origin/BehindCode/Systems";
import { Engineerd } from "./Origin/Engineering/Engineerd";
import { FeaturedProjects } from "./Origin/featuredWork/FeaturedProjects";

export const OriginSection = () => {
  return (
    <>
      <About />
      <FeaturedProjects />
      <Engineerd />
      <Systems />
      <Footer back={"/"} />
    </>
  );
};
