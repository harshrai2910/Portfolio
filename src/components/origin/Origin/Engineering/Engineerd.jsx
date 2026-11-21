import { engineering } from "../../../../data/engineeringData";
import { sections } from "../../../../data/sectionsData";
import { useTheme } from "../../../../redux/hooks/themeHook";
import { Headers } from "../../Headers";
import { EngineeringCard } from "./EngineeringCard";

export const Engineerd = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex items-center justify-center w-full px-2 sm:px-4">
        <div
          className={`flex items-center justify-between flex-col w-full max-w-6xl 
          py-5 px-2 md:p-10 border-2 shadow-sm rounded-4xl 
          ${theme ? "border-white bg-white/20" : "border-white/5 bg-white/3"}
          
          `}
        >
          <Headers data={sections.find((section) => section.id === 2)} />
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {engineering.map((data) => (
              <EngineeringCard
                key={data.id}
                image={data.image}
                category={data.category}
                title={data.title}
                description={data.description}
                link={data.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
