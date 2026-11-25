import { sections } from "../../../../data/sectionsData";
import { systems } from "../../../../data/systemsData";
import { useTheme } from "../../../../redux/hooks/themeHook";
import { Headers } from "../../Headers";
import SystemCard from "./SystemCard";

export const Systems = () => {
  const { theme } = useTheme();
  console.log(systems);
  return (
    <>
      <div className="flex items-center justify-center w-full px-2 sm:px-4">
        <div
          className={`flex items-center justify-between flex-col w-full max-w-6xl 
              py-5 px-2 md:p-10 border-2 shadow-sm rounded-4xl 
              ${theme ? "border-white bg-white/20" : "border-white/5 bg-white/3"}
              `}
        >
          <Headers data={sections.find((section) => section.id === 3)} />
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((data) => (
              <SystemCard key={data.id} theme={theme} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
