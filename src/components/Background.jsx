import { useTheme } from "../redux/hooks/themeHook";

export const Background = () => {
  const { theme } = useTheme();
  return (
    <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
      <div
        className={`relative h-full w-full ${theme ? "bg-indigo-50" : "bg-zinc-900"} overflow-hidden blur-2xl`}
      >
        <div className="absolute top-40 left-0 h-60 w-30 rounded-r-full bg-orange-300 shadow-[0_0_50px_rgba(249,115,22,0.5)]"></div>

        <div className="absolute top-90 right-0 h-40 w-20 rounded-l-full bg-orange-300 shadow-[0_0_50px_rgba(249,115,22,0.5)]"></div>
      </div>
    </div>
  );
};
