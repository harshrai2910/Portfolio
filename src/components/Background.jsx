import { useTheme } from "../redux/hooks/themeHook";

export const Background = () => {
  const { theme } = useTheme();
  return (
    <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
      <div
        className={`relative h-full w-full ${theme ? "bg-indigo-50" : "bg-zinc-900"} overflow-hidden blur-2xl`}
      >
        <div className="absolute top-40 left-0 h-30 w-20 rounded-r-full bg-orange-500 md:bg-orange-400 shadow-[0_0_50px_rgba(249,115,22,0.5)]"></div>

        <div className="absolute top-90 right-0 h-20 w-10 rounded-l-full bg-orange-500 md:bg-orange-400 shadow-[0_0_50px_rgba(249,115,22,0.5)]"></div>
      </div>
    </div>
  );
};
