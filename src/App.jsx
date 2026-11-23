import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/navigation/Navbar";
import { useTheme } from "./redux/hooks/themeHook";
import { Background } from "./components/Background";
import { OriginSection } from "./components/origin/OriginSection";
import { Route, Routes, useLocation } from "react-router-dom";
import { ProjectSection } from "./components/Projects/ProjectSection";
import { ContactSection } from "./components/Contact/ContactSection";
import { EngineeringSection } from "./components/Engineering/EngineeringSection";
import { EngineeringDataComponent } from "./components/Engineering/EngineeringDataComponent";
import { ProjectCardComponent } from "./components/Projects/ProjectCardComponent";

function App() {
  const { theme } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.backgroundColor = theme ? "#e9edf5" : "#0e1011";
  }, [theme]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <>
      <Background />
      <main className="space-y-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<OriginSection />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/engineering" element={<EngineeringSection />} />
          <Route path="/experiment" element={<p>experiment</p>} />
          <Route path="/contact" element={<ContactSection />} />
          <Route
            path="/engineering/:name"
            element={<EngineeringDataComponent />}
          />

          <Route path="/project/:name" element={<ProjectCardComponent />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
