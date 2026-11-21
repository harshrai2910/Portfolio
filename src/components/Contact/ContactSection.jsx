import { useLocation } from "react-router-dom";
import sectionData from "../../data/headerData";
import { UniversalHeader } from "../UniversalHeader";

export const ContactSection = () => {
  const location = useLocation();
  return (
    <>
      <section className="w-full px-2 sm:px-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
          <UniversalHeader
            data={sectionData.find((d) => d.path === location.pathname)}
          />
        </div>
      </section>
    </>
  );
};
