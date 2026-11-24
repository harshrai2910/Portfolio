import { ArrowLeft, ExternalLink, Layers } from "lucide-react";
import { DiGithubBadge } from "react-icons/di";
import { useTheme } from "../../../redux/hooks/themeHook";
import { Link } from "react-router-dom";

export default function ProjectCardHeader({
  name,
  tagline,
  links,
  category,
  techStack,
  image,
  web,
}) {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center w-full px-2 sm:px-4">
      <div
        className={`relative overflow-hidden grid grid-cols-1 md:grid-cols-12  md:gap-10 gap-5
           w-full max-w-6xl py-6 px-4 md:p-10 border-2 shadow-sm rounded-4xl 
          ${theme ? "border-white bg-white/20" : "border-white/5 bg-white/3"}`}
      >
        <Link
          to="/projects"
          className={`group inline-flex items-center gap-2 text-sm font-inter transition-colors hover:text-orange-500
            ${theme ? "text-slate-600" : "text-white/70"}`}
        >
          <span
            className={`grid size-7 place-items-center rounded-full border transition group-hover:-translate-x-1 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white`}
          >
            <ArrowLeft size={15} />
          </span>
          All projects
        </Link>

        <div className="md:col-span-7">
          <div className="absolute top-0 right-0 h-20 w-20 bg-orange-500 blur-3xl"></div>
          <p
            className={`inline-flex items-center gap-2 rounded-full border px-3 text-sm my-4 
         ${theme ? "border-slate-300/70 bg-white/60 text-slate-600" : "border-white/15 bg-white/6 text-white/70"}`}
          >
            <Layers className="h-4 w-4" aria-hidden="true" />
            {category}
          </p>
          <h1
            className={`text-4xl font-bold tracking-wide sm:text-5xl md:text-5xl font-inter
              ${theme ? "text-slate-900" : "text-white"}`}
          >
            {name}
          </h1>
          <p
            className={`mt-3 max-w-2xl text-base sm:text-lg font-inter
              ${theme ? "text-slate-600" : "text-white/70"}`}
          >
            {tagline}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
            {techStack.map((tech) => (
              <span
                key={tech}
                className={`rounded-full border px-3 py-1 font-roboto text-xs
                  ${
                    theme
                      ? "border-slate-300/70 bg-white/60 text-slate-600"
                      : "border-white/15 bg-white/6 text-white/70"
                  }`}
              >
                {tech}
              </span>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={links.live}
              target="_blank"
              className={`border-2 flex items-center gap-4 font-medium p-1 pr-7 rounded-full shadow-lg transition-all whitespace-nowrap
            ${theme ? "bg-white/70 border-white/80" : "bg-white/20 border-white/10"}`}
            >
              <span className="rounded-full bg-orange-500 p-3 shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]">
                <ExternalLink size={18} />
              </span>
              <span className={theme ? "text-zinc-700" : "text-white"}>
                View live demo
              </span>
            </a>
            <a
              href={links.github}
              target="_blank"
              className={`border-2 flex items-center gap-4 font-medium px-8 py-3 rounded-full shadow-sm transition-all whitespace-nowrap
            ${theme ? "bg-white border-white/80 text-zinc-700" : "bg-white/7 border-white/10 text-zinc-300"}`}
            >
              <DiGithubBadge size={25} aria-hidden="true" />
              View source on GitHub
            </a>
          </div>
        </div>
        <div
          className={`relative md:col-span-5 overflow-hidden rounded-2xl border-2 shadow-xl md:rotate-1 transition-transform duration-300 md:hover:rotate-0
          ${theme ? "border-white bg-white" : "border-zinc-700 bg-zinc-900"}`}
        >
          <div
            className={`flex items-center gap-2 border-b px-4 py-3
            ${theme ? "border-zinc-200 bg-zinc-100" : "border-zinc-700 bg-zinc-800"}`}
          >
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span
              className={`ml-3 font-mono text-sm ${theme ? "text-zinc-500" : "text-zinc-400"}`}
            >
              {web}
            </span>
          </div>
          <img
            src={image}
            alt="project image preview"
            className="aspect-16/10 w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
