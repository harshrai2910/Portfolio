import { useLocation } from "react-router-dom";
import { engineeringComponentData } from "../../data/engineeringComponentData";
import { Footer } from "../Footer";
import { EngineeredCardHeader } from "./EngineeredCard/EngineeredCardHeader";
import { EngineeredCardMain } from "./EngineeredCard/EngineeredCardMain";

export const EngineeringDataComponent = () => {
  const location = useLocation();
  const data = engineeringComponentData.find(
    (data) => data.path === location.pathname,
  );
  return (
    <>
      <EngineeredCardHeader data={data.header} />
      <EngineeredCardMain data={data} />
      <Footer />
    </>
  );
};
