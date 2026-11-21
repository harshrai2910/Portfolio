import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../redux/hooks/themeHook";
import { Link } from "react-router-dom";

export const EngineeringSectionCard = ({
  image,
  number,
  category,
  description,
  to,
}) => {
  const { theme } = useTheme();
  return (
    <>
      <Link
        to={to}
        className={`group grid w-full grid-cols-1 md:grid-cols-12  md:gap-10 gap-5 rounded-3xl p-3 transition border-2
        hover:-translate-y-0.5 focus-visible:outline-2 shadow-sm focus-visible:outline-offset-4 focus-visible:outline-orange-500 
        ${theme ? "bg-white/50 border-white/10" : "bg-white/7 border-white/10"}`}
      >
        {/* Left: image */}
        <div className="aspect-16/10 md:col-span-5 overflow-hidden rounded-2xl shadow-sm">
          <img
            src={image}
            alt="ConnectSD preview"
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Right: content */}
        <div className="flex min-w-0 flex-col md:col-span-7 justify-between gap-6 px-2 pb-2 md:py-4 md:pr-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-roboto text-xs font-medium tracking-widest text-slate-500">
              <span className={`${theme ? "text-zinc-600" : "text-zinc-400"}`}>
                0{number}
              </span>
              <span className="h-0.5 w-8 rounded-full bg-orange-500" />
              <span className={`${theme ? "text-zinc-600" : "text-zinc-400"}`}>
                {category}
              </span>
            </div>

            <h2
              className={`font-inter text-xl font-bold tracking-tight text-slate-900 md:text-3xl
          ${theme ? "text-zinc-900" : "text-zinc-100"}`}
            >
              {category}
            </h2>

            <p
              className={`max-w-prose font-inter text-sm leading-relaxed text-slate-600 md:text-base
            ${theme ? "text-zinc-600" : "text-zinc-400"}`}
            >
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div
              className={`flex gap-2 font-inter text-sm font-medium text-slate-900 md:text-base
            ${theme ? "text-zinc-600" : "text-zinc-400"}`}
            >
              <span>Explore Now</span>
              <ArrowUpRight
                size={16}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
            <span
              className={`grid size-11 place-items-center rounded-full border-2 text-orange-500 shadow-sm transition group-hover:translate-x-1 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white
            ${theme ? "bg-black/5 border-black/1" : "bg-black/10 border-white/20"}`}
            >
              <ArrowRight size={18} />
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};
