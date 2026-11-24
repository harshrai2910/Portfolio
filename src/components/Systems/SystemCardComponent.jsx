import { useLocation } from "react-router-dom";
import { systems } from "../../data/systemsData";
import { SystemCardDetails } from "./SystemCardDetails";
import { useTheme } from "../../redux/hooks/themeHook";
import { Footer } from "../Footer";

export const SystemCardComponent = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const data = systems.find((data) => data.path === location.pathname);

  console.log(location.pathname);
  console.log(data);

  return (
    <>
      <SystemCardDetails theme={theme} data={data} />
      <Footer />
    </>
  );
};
