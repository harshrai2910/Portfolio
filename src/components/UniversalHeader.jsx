import { useTheme } from "../redux/hooks/themeHook";

export const UniversalHeader = ({ data }) => {
  const { theme } = useTheme();

  return (
    <>
      <div className="mb-8 mt-5 flex w-full flex-col gap-5">
        <h1
          className={`font-inter text-5xl font-bold ${theme ? "text-zinc-900" : "text-zinc-100"}`}
        >
          {data.title}
        </h1>
        <p
          className={`font-inter text-lg w-full md:w-3xl font-medium ${theme ? "text-zinc-700" : "text-zinc-300"}`}
        >
          {data.description}
        </p>
      </div>
    </>
  );
};
