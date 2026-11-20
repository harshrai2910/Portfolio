import { ArrowRight } from "lucide-react";
import { useTheme } from "../../redux/hooks/themeHook";
import { Link } from "react-router-dom";

export const Headers = ({ data }) => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 w-full mb-10">
      <div className="flex items-start gap-4 sm:gap-5 min-w-0">
        <div
          className={`shrink-0 px-3 py-2 border-2 rounded-lg font-medium text-lg font-roboto
            ${theme ? "text-zinc-600 border-zinc-600" : "text-zinc-400 border-zinc-400"}`}
        >
          0{data.id}
        </div>
        <div
          className={`w-0.5 rounded-full self-stretch shrink-0 ${theme ? "bg-zinc-600" : "bg-zinc-400"}`}
        />
        <div className="min-w-0 space-y-0 md:space-y-1">
          <p
            className={`font-medium font-roboto text-xs ${theme ? "text-zinc-600" : "text-zinc-400"}`}
          >
            // {data.label}
          </p>
          <h1
            className={`font-bold text-xl sm:text-2xl font-inter tracking-wide ${theme ? "text-zinc-900" : "text-zinc-100"}`}
          >
            {data.title}
          </h1>
          <p
            className={`max-w-3xl font-medium font-inter text-sm tracking-wider ${theme ? "text-zinc-600" : "text-zinc-400"}`}
          >
            {data.description}
          </p>
        </div>
      </div>

      <Link
        to={data.buttonLink}
        className={`self-start md:self-auto shrink-0 whitespace-nowrap border-none flex items-center gap-4
          font-medium p-1 pl-7 rounded-full shadow-lg transition-all
          ${theme ? "bg-zinc-100" : "bg-zinc-700"}`}
      >
        <span className={theme ? "text-zinc-700" : "text-zinc-300"}>
          {data.buttonText}
        </span>
        <span className="rounded-full border-2 text-orange-400 border-orange-400 p-3 shadow-sm">
          <ArrowRight size={18} />
        </span>
      </Link>
    </div>
  );
};
