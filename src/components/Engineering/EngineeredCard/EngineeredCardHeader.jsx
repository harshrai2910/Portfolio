import { useTheme } from "../../../redux/hooks/themeHook";

const tags = [
  "Performance Engineering",
  "ConnectSD",
  "Node.js",
  "Express",
  "MongoDB",
  "Gemini API",
];

export const EngineeredCardHeader = ({ data }) => {
  const { theme } = useTheme(); // true = light, false = dark

  return (
    <div className="flex items-center justify-center w-full px-2 sm:px-4">
      <div
        className={`relative overflow-hidden flex flex-col items-start w-full max-w-6xl
          py-6 px-4 md:p-10 border-2 shadow-sm rounded-4xl
          ${theme ? "border-white bg-white/20" : "border-white/5 bg-white/3"}`}
      >
        <div className="relative w-full">
          {/* tags */}
          <div className="mb-5 flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full border px-3 py-1 font-roboto text-xs
                  ${
                    theme
                      ? "border-slate-300/70 bg-white/60 text-slate-600"
                      : "border-white/15 bg-white/6 text-white/70"
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* title */}
          <h1
            className={`text-4xl font-bold tracking-wide sm:text-5xl md:text-5xl font-inter
              ${theme ? "text-slate-900" : "text-white"}`}
          >
            {data.title}
          </h1>

          {/* subtitle */}
          <p
            className={`mt-3 max-w-2xl text-base sm:text-lg font-inter
              ${theme ? "text-slate-600" : "text-white/70"}`}
          >
            {data.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
