import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/navigation/Navbar";
import { useTheme } from "./redux/hooks/themeHook";
import { Background } from "./components/Background";
import { OriginSection } from "./components/origin/OriginSection";
import { Route, Routes } from "react-router-dom";
import { ProjectSection } from "./components/Projects/ProjectSection";
import { ContactSection } from "./components/Contact/ContactSection";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = theme ? "#f5f5f5" : "#1a1d1e";
  }, [theme]);

  return (
    <>
      <Background />
      <main className="space-y-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<OriginSection />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/engineering" element={<p>engineering</p>} />
          <Route path="/experiment" element={<p>experiment</p>} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
