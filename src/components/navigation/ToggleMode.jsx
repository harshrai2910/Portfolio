import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../redux/hooks/themeHook";

export const ToggleMode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`border-2 p-0.5 rounded-full border-blue-300 ${theme ? "bg-zinc-100" : "bg-zinc-700"} hover:shadow-[0_0_5px_rgba(59,130,246,0.5)] transition-all`}
    >
      <button
        onClick={toggleTheme}
        className={`p-3 rounded-full cursor-pointer ${theme ? "bg-zinc-100 shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)]" : "bg-zinc-800 shadow-[inset_0_2px_8px_rgba(0,0,0,0.55)]"}`}
      >
        {theme ? (
          <Moon size={18} strokeWidth={1} />
        ) : (
          <Sun size={18} color="white" />
        )}
      </button>
    </div>
  );
};
