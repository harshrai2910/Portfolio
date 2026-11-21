import { useTheme } from "../../../../redux/hooks/themeHook";
import { Introduction } from "./Intoduction";
import { CodeCard } from "./CodeCard";

export const About = () => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center w-full px-2 sm:px-4">
      <div
        className={`flex flex-col md:flex-row justify-between gap-8 w-full max-w-6xl
          p-5 sm:p-10 md:p-14 border-2 shadow-sm rounded-4xl
          ${theme ? "border-white bg-white/20" : "border-white/5 bg-white/3"}`}
      >
        <Introduction />
        <div className="w-full max-w-xs md:max-w-sm shrink-0">
          <CodeCard />
        </div>
      </div>
    </div>
  );
};
