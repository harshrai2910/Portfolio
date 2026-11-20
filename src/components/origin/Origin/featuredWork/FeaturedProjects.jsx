import { useTheme } from "../../../../redux/hooks/themeHook";
import { ProjectHeader } from "./ProjectHeader";

export const FeaturedProjects = () => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center w-full px-2 sm:px-4">
      <div
        className={`flex items-center justify-between w-full max-w-6xl
          p-5 md:p-10 border-2 shadow-sm rounded-4xl
          ${theme ? "border-white bg-gray-50" : "border-zinc-700 bg-zinc-800"}`}
      >
        <ProjectHeader />
      </div>
    </div>
  );
};
