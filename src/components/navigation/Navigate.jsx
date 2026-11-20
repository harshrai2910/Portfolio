import { useLocation, Link } from "react-router-dom";
import { useTheme } from "../../redux/hooks/themeHook";

export const Navigate = () => {
  const location = useLocation();
  const { theme } = useTheme();

  const navClass = (path) =>
    `px-5 py-3 rounded-full border-none transition-all tracking-wider ${
      location.pathname === path
        ? `shadow-sm ${theme ? "bg-white text-zinc-500" : "bg-zinc-800 text-white"}`
        : `${theme ? "text-zinc-500" : "text-zinc-300"}`
    }`;

  return (
    <>
      <Link to="/" className={navClass("/")}>
        ORIGIN
      </Link>
      |
      <Link to="/projects" className={navClass("/projects")}>
        PROJECTS
      </Link>
      |
      <Link to="/engineering" className={navClass("/engineering")}>
        ENGINEERING
      </Link>
      |
      <Link to="/experiment" className={navClass("/experiment")}>
        EXPERIMENTS
      </Link>
      |
      <Link to="/contact" className={navClass("/contact")}>
        CONTACT
      </Link>
    </>
  );
};
