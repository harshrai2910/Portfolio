import { ArrowRight, FlaskConical } from "lucide-react";
import { FaLinux } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { IoGitNetworkOutline } from "react-icons/io5";
import { IoTerminalOutline } from "react-icons/io5";
import { GoWorkflow } from "react-icons/go";
import { DiGithubBadge } from "react-icons/di";
import { Link } from "react-router-dom";

export default function SystemCard({ theme, data }) {
  const iconMap = {
    FaLinux,
    FaDocker,
    IoGitNetworkOutline,
    IoTerminalOutline,
    GoWorkflow,
    DiGithubBadge,
  };

  const renderIcon = ({ icon, style, size }) => {
    const Icon = iconMap[icon];
    return <Icon className={style} size={size} />;
  };
  return (
    <Link
      to={data.link}
      className={`relative flex h-full w-full min-w-0 flex-col rounded-3xl border p-1 shadow-xl sm:rounded-2xl sm:p-2 group
        transition-transform duration-300 ease-in-out hover:-translate-y-1
      ${theme ? "bg-white/50 hover:bg-white/60 border-white/10" : "bg-white/7 hover:bg-white/10 border-white/10"}`}
    >
      {/* Image with notched top-left corner */}
      <div className="relative">
        <div
          className={`flex items-center gap-1 absolute top-2 right-2 text-xs bg-black/60 text-zinc-100 pl-1.5 pr-1.5 py-0.5 rounded-lg
            transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-link-2 preview-icon"
          >
            <path d="M9 17H7A5 5 0 0 1 7 7h2" />
            <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
            <line x1="8" x2="16" y1="12" y2="12" />
          </svg>
          <p className="grid grid-cols-[0fr] opacity-0 transition-all duration-300 ease-in-out group-hover:grid-cols-[1fr] group-hover:opacity-100">
            <span className="overflow-hidden whitespace-nowrap">Explore</span>
          </p>
        </div>
        <div
          className={`overflow-hidden rounded-2xl ${theme ? "bg-zinc-100" : "bg-zinc-800"}`}
        >
          <img
            src={data.image}
            alt="Cell Architecture Studio preview"
            className="aspect-16/10 w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Title */}
      <h3
        className={`mt-1 px-2 text-lg font-semibold font-inter tracking-wide ${theme ? "text-zinc-900" : "text-white"}`}
      >
        {data.name}
      </h3>

      {/* Divider */}
      <div
        className={`mx-2 mt-1 border-t ${theme ? "border-zinc-200" : "border-zinc-700/70"}`}
      />

      {/* Footer: tag + arrow */}
      <div className="mt-2 flex items-center justify-between gap-3 px-2 pb-1">
        <span
          className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 font-roboto text-[10px] uppercase tracking-wider
          ${theme ? "bg-black/5 border-black/1 text-zinc-800" : "bg-black/10 border-white/20 text-zinc-300"}`}
        >
          {renderIcon({ icon: data.icon, style: "", size: 13 })}
          {data.tag}
        </span>

        <span
          className={`grid size-11 place-items-center rounded-full border-2 text-orange-500 shadow-sm transition group-hover:translate-x-1 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white
            ${theme ? "bg-black/5 border-black/1" : "bg-black/10 border-white/20"}`}
        >
          <ArrowRight size={18} />
        </span>
      </div>
    </Link>
  );
}
