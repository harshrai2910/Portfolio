import { ArrowRight } from "lucide-react";
import { useTheme } from "../../../../redux/hooks/themeHook";
import { IoLogoLinkedin } from "react-icons/io";
import { DiGithubBadge } from "react-icons/di";
import { TbBrandLeetcode } from "react-icons/tb";
import { Link } from "react-router-dom";

export const Introduction = () => {
  const { theme } = useTheme();

  const links = [
    {
      id: 1,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/harsh-rai-842126333/",
      icon: <IoLogoLinkedin />,
    },
    {
      id: 2,
      name: "Github",
      link: "https://github.com/harshrai2910",
      icon: <DiGithubBadge />,
    },
    {
      id: 3,
      name: "Leetcode",
      link: "https://leetcode.com/u/Harsh_rai_2025/",
      icon: <TbBrandLeetcode />,
    },
  ];

  return (
    <div className="space-y-4 min-w-0 w-full">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium font-roboto text-zinc-500">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500 shadow-[0_0_10px_4px_rgba(139,55,10,0.2)]"></span>
        <p>FULL-STACK DEVELOPER</p>
        <span>•</span>
        <p>CURIOUS ENGINEER</p>
      </div>

      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-bold font-inter tracking-wide mb-5 ${theme ? "text-zinc-900" : "text-zinc-100"}`}
      >
        Hi! I'm Harsh Rai
      </h1>

      <p
        className={`text-lg sm:text-xl font-medium max-w-sm font-inter tracking-wide mb-7 ${theme ? "text-zinc-600" : "text-zinc-400"}`}
      >
        Building cool things, breaking limits, and exploring what's possible
        with code.
      </p>

      <div className="flex flex-wrap gap-2 mb-7">
        <Link
          to="/projects"
          className={`border-2 flex items-center gap-4 font-medium p-1 pr-7 rounded-full shadow-lg transition-all whitespace-nowrap
            ${theme ? "bg-white/70 border-white/80" : "bg-white/20 border-white/10"}`}
        >
          <span className="rounded-full bg-orange-500 p-3 shadow-[inset_0_2px_8px_rgba(255,255,255,0.5)]">
            <ArrowRight size={18} />
          </span>
          <span className={theme ? "text-zinc-700" : "text-white"}>
            Explore Work
          </span>
        </Link>
        <Link
          to="/systems"
          className={`border-2 flex items-center gap-4 font-medium px-8 py-3 rounded-full shadow-sm transition-all whitespace-nowrap
            ${theme ? "bg-white border-white/80 text-zinc-700" : "bg-white/7 border-white/10 text-zinc-300"}`}
        >
          Behind The Code
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.link}
            title={link.name}
            aria-label={link.name}
            className={`text-2xl p-2 border-none rounded-full flex items-center justify-center shadow-lg hover:text-orange-500 transition-all duration-300
              ${theme ? "bg-white/70 border-white/80" : "bg-white/[0.07] border-white/15 text-white"}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
