import { ExternalLink, Layers } from "lucide-react";
import { DiGithubBadge } from "react-icons/di";
import { useTheme } from "../../../redux/hooks/themeHook";

export default function ProjectCardHeader({
  name,
  tagline,
  links,
  category,
  techStack,
}) {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center w-full px-2 sm:px-4">
      <div
        className={`relative overflow-hidden flex flex-col items-start w-full max-w-6xl py-6 px-4 md:p-10 border-2 shadow-sm rounded-4xl 
          ${theme ? "border-white bg-white/20" : "border-white/5 bg-white/3"}`}
      >
        <p
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm my-4 
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
            className={`border-none flex items-center gap-4 font-medium p-1 pr-7 rounded-full shadow-lg transition-all whitespace-nowrap
            ${theme ? "bg-white/70 border-white/80" : "bg-white/[0.07] border-white/15"}`}
          >
            <span className="rounded-full bg-orange-500 p-3 shadow-[inset_0_2px_8px_rgba(255,255,255,0.5)]">
              <ExternalLink size={18} />
            </span>
            <span className={theme ? "text-zinc-700" : "text-zinc-300"}>
              View live demo
            </span>
          </a>
          <a
            href={links.github}
            target="_blank"
            className={`border-none flex items-center gap-4 font-medium px-8 py-3 rounded-full shadow-lg transition-all whitespace-nowrap
            ${theme ? "bg-white/70 border-white/80 text-zinc-700" : "bg-white/[0.07] border-white/15 text-zinc-300"}`}
          >
            <DiGithubBadge size={20} aria-hidden="true" />
            View source on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
