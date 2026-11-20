import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/navigation/Navbar";
import { useTheme } from "./redux/hooks/themeHook";
import { Background } from "./components/Background";
import { OriginSection } from "./components/origin/OriginSection";

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
        <OriginSection />
      </main>
    </>
  );
}

export default App;
