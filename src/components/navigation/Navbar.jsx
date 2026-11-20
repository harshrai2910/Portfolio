import { useTheme } from "../../redux/hooks/themeHook";
import { Logo } from "./Logo";
import { Navigate } from "./Navigate";
import { ToggleMode } from "./ToggleMode";

export const Navbar = () => {
  const { theme } = useTheme();
  const isLight = theme; // true = light mode

  return (
    <header className="fixed inset-x-0 top-2 z-50 flex justify-center px-2 sm:px-4">
      <nav
        aria-label="Main"
        className={`relative flex w-full max-w-6xl items-center justify-between rounded-3xl border p-1 shadow-sm backdrop-blur
          ${isLight ? "border-zinc-200 bg-gray-50/90" : "border-zinc-700 bg-zinc-800/90"}`}
      >
        <Logo />

        {/* Links: hidden on mobile and tablet, shown from lg up */}
        <div
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border p-1 font-roboto text-xs font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] lg:flex
            ${isLight ? "border-white bg-zinc-200 text-zinc-600" : "border-zinc-700 bg-zinc-700 text-zinc-100"}`}
        >
          <Navigate />
        </div>

        <ToggleMode />
      </nav>
    </header>
  );
};
