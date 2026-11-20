import { useTheme } from "../../redux/hooks/themeHook";
import { Logo } from "./Logo";
import { Navigate } from "./Navigate";
import { ToggleMode } from "./ToggleMode";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center w-full px-2 sm:px-4">
      <div
        className={`flex items-center justify-between w-full max-w-6xl border-2 shadow-sm rounded-3xl p-1
          ${theme ? "border-white bg-gray-50" : "border-zinc-700 bg-zinc-800"}`}
      >
        <div className="shrink-0">
          <Logo />
        </div>

        <div className="hidden lg:block">
          <div
            className={`flex items-center gap-1 text-xs font-medium font-roboto shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]
              ${theme ? "text-zinc-600 border-white bg-zinc-200" : "text-zinc-100 border-zinc-700 bg-zinc-700"}
              border p-1 rounded-full`}
          >
            <Navigate />
          </div>
        </div>

        <div className="shrink-0">
          <ToggleMode />
        </div>
      </div>
    </div>
  );
};
