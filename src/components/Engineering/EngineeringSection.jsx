import { useLocation } from "react-router-dom";
import sectionData from "../../data/headerData";
import { useTheme } from "../../redux/hooks/themeHook";
import { UniversalHeader } from "../universalHeader";
import { EngineeringSectionCard } from "./EngineeringSectionCard";
import { engineering } from "../../data/engineeringData";
import { Footer } from "../Footer";

export const EngineeringSection = () => {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <>
      <section className="w-full px-2 sm:px-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
          <UniversalHeader
            data={sectionData.find((d) => d.path === location.pathname)}
          />
          {engineering.map((data) => (
            <EngineeringSectionCard
              key={data.id}
              image={data.image}
              number={data.id}
              category={data.category}
              name={data.name}
              description={data.description}
              to={data.link}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
