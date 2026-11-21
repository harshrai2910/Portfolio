// EngineeringCard.jsx
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../../../redux/hooks/themeHook";
import { Link } from "react-router-dom";

export const EngineeringCard = ({
  image,
  category,
  title,
  description,
  link,
}) => {
  const { theme } = useTheme();
  return (
    <Link
      to={link}
      className={`group grid h-full grid-cols-1 gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md 
      focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 sm:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] sm:gap-5
      ${theme ? "bg-white/50 border-white/10" : "bg-white/7 border-white/10"}`}
    >
      {/* Image: absolutely positioned on sm+ so it fills the row height
          without ever making the card taller */}
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-200 sm:aspect-auto sm:min-h-48 border border-zinc-100">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover object-center sm:absolute sm:inset-0"
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-col justify-between gap-5 px-2 pb-2 sm:py-3 sm:pl-0 sm:pr-3">
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 font-inter text-xs font-medium text-slate-500 sm:text-sm">
            <span className="size-2 shrink-0 rounded-full bg-orange-500" />
            <span className={theme ? "text-zinc-600" : "text-zinc-400"}>
              {category}
            </span>
          </div>

          <h2
            className={`line-clamp-3 font-inter text-lg font-bold leading-snug tracking-tight text-slate-900 md:text-xl
            ${theme ? "text-zinc-900" : "text-zinc-100"}`}
          >
            {title}
          </h2>

          <p
            className={`line-clamp-3 font-inter text-sm leading-relaxed text-slate-500 md:text-base
            ${theme ? "text-zinc-600" : "text-zinc-400"}`}
          >
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-1.5 font-inter text-sm font-semibold text-slate-900 md:text-base
            ${theme ? "text-zinc-600" : "text-zinc-400"}`}
          >
            Read post
            <ArrowUpRight
              size={16}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
          <span
            className={`grid size-11 place-items-center rounded-full border-2 text-orange-500 shadow-sm transition group-hover:translate-x-1 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white
            ${theme ? "bg-black/5 border-black/1" : "bg-black/10 border-white/20"}`}
          >
            <ArrowRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
};
