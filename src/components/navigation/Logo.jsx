import { CircleLetterH } from "lucide-react";
import { useTheme } from "../../redux/hooks/themeHook";

export const Logo = () => {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`${theme ? "text-zinc-800" : "text-zinc-100"} font-roboto flex items-center justify-center gap-2`}
      >
        <div>
          <CircleLetterH size={40} strokeWidth={1} />
        </div>
        <div className="">
          <h1 className={`text-xl font-bold leading-tight tracking-widest`}>
            HARSH
          </h1>
          <p
            className={`${theme ? "text-zinc-500" : "text-zinc-400"} font-medium text-[10px] leading-tight tracking-widest`}
          >
            SOFTWARE DEVELOPER
          </p>
        </div>
      </div>
    </>
  );
};
