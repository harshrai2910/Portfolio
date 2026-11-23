import { ArrowUp, CircleLetterH } from "lucide-react";
import { useTheme } from "../redux/hooks/themeHook";
import { Link } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io";
import { DiGithubBadge } from "react-icons/di";
import { TbBrandLeetcode } from "react-icons/tb";
// import { Logo } from "./Logo";

const links = [
  { label: "Origin", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Engineering", to: "/engineering" },
  { label: "Experiments", to: "/experiment" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-rai-842126333/",
    icon: IoLogoLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/harshrai2910",
    icon: DiGithubBadge,
  },
  {
    label: "LeetCode",
    href: "hthttps://leetcode.com/u/Harsh_rai_2025/",
    icon: TbBrandLeetcode,
  },
];

export const Footer = ({ back }) => {
  const { theme } = useTheme();

  const muted = theme ? "text-zinc-500" : "text-zinc-400";
  const strong = theme ? "text-zinc-900" : "text-zinc-100";
  const chip = theme
    ? "bg-zinc-200 text-zinc-700 hover:bg-zinc-300"
    : "bg-zinc-700 text-zinc-100 hover:bg-zinc-600";

  return (
    <footer className="w-full px-2 pb-4 sm:px-4">
      <div
        className={`mx-auto w-full max-w-6xl rounded-3xl border-2 p-6 shadow-sm md:p-10
        ${theme ? "border-white bg-white/20" : "border-white/5 bg-white/3"}`}
      >
        {/* Top: brand, nav, socials */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-4">
            <CircleLetterH
              className={theme ? "text-zinc-800" : "text-zinc-300"}
            />
            <p
              className={`max-w-xs font-inter text-sm leading-relaxed ${muted}`}
            >
              Building cool things, breaking limits, and exploring what’s
              possible with code.
            </p>
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs font-medium tracking-wider
                ${theme ? "border-zinc-200 bg-white text-zinc-700" : "border-zinc-700 bg-zinc-900/60 text-zinc-200"}`}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-orange-500" />
              </span>
              OPEN TO WORK
            </span>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="mb-4 flex items-center gap-3 font-mono text-xs font-medium tracking-widest text-zinc-500">
              <span className="h-0.5 w-5 rounded-full bg-orange-500" />
              NAVIGATE
            </p>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className={`font-mono text-xs font-semibold uppercase tracking-widest transition hover:text-orange-500 ${strong}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <p className="mb-4 flex items-center gap-3 font-mono text-xs font-medium tracking-widest text-zinc-500">
              <span className="h-0.5 w-5 rounded-full bg-orange-500" />
              CONNECT
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`grid size-11 place-items-center rounded-full transition hover:-translate-y-0.5 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${chip}`}
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
            <a
              href="mailto:harsh.azm292005@gmail.com"
              className={`mt-4 inline-block font-inter text-sm transition hover:text-orange-500 ${muted}`}
            >
              harsh.azm292005@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-10 flex items-center justify-center gap-4 border-t pt-6 sm:flex-row sm:items-center
            ${theme ? "border-zinc-200" : "border-zinc-700"}`}
        >
          <p className={`font-mono text-xs tracking-wider ${muted}`}>
            © {new Date().getFullYear()} HARSH RAI. BUILT WITH REACT &amp;
            TAILWIND.
          </p>
        </div>
      </div>
    </footer>
  );
};
