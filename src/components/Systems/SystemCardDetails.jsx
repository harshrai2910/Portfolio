import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, FlaskConical, X } from "lucide-react";
import { FaLinux, FaDocker } from "react-icons/fa";
import { IoGitNetworkOutline, IoTerminalOutline } from "react-icons/io5";
import { GoWorkflow } from "react-icons/go";
import { DiGithubBadge } from "react-icons/di";

const iconMap = {
  FaLinux,
  FaDocker,
  IoGitNetworkOutline,
  IoTerminalOutline,
  GoWorkflow,
  DiGithubBadge,
};

export const SystemCardDetails = ({ theme, data }) => {
  const Icon = iconMap[data.icon];

  const panel = `rounded-3xl border p-5 shadow-xl sm:rounded-2xl sm:p-6 ${
    theme ? "bg-white/50 border-white/10" : "bg-white/7 border-white/10"
  }`;
  const heading = theme ? "text-zinc-900" : "text-white";
  const body = theme ? "text-zinc-700" : "text-zinc-300";
  const muted = theme ? "text-zinc-500" : "text-zinc-400";
  const divider = theme ? "border-zinc-200" : "border-zinc-700/70";
  const chip = theme
    ? "bg-black/5 border-black/1 text-zinc-800"
    : "bg-black/10 border-white/20 text-zinc-300";

  const environment = Object.entries(data.environment || {});
  const images = data.exploration?.images || [];

  return (
    <main className="mx-auto w-full max-w-6xl px-2">
      {/* Back link */}
      <Link
        to="/systems"
        className={`group inline-flex items-center gap-2 text-sm font-inter transition-colors hover:text-orange-500 ${muted}`}
      >
        <span
          className={`grid size-8 place-items-center rounded-full border transition group-hover:-translate-x-1 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white ${chip}`}
        >
          <ArrowLeft size={15} />
        </span>
        All systems
      </Link>

      {/* Header */}
      <header className="mt-6 flex flex-col gap-4">
        <span
          className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 font-roboto text-[10px] uppercase tracking-wider ${chip}`}
        >
          {Icon && <Icon size={13} />}
          {data.tag}
        </span>
        <h1
          className={`font-inter text-3xl font-semibold tracking-wide sm:text-4xl ${heading}`}
        >
          {data.title}
        </h1>
        <p className={`max-w-2xl text-base leading-relaxed ${body}`}>
          {data.description}
        </p>
      </header>

      {/* Cover image */}
      <section className={`mt-8 p-1 sm:p-2 ${panel} !p-1 sm:!p-2`}>
        <div
          className={`overflow-hidden rounded-2xl ${theme ? "bg-zinc-100" : "bg-zinc-800"}`}
        >
          <img
            src={data.image}
            alt={`${data.name} preview`}
            className="aspect-16/9 w-full object-cover object-top"
          />
        </div>
        <div className="flex items-center justify-between gap-3 px-2 py-2">
          <h2 className={`font-inter text-lg font-semibold ${heading}`}>
            {data.name}
          </h2>
          <span
            className={`grid size-11 place-items-center rounded-full border-2 text-orange-500 shadow-sm ${
              theme
                ? "bg-black/5 border-black/1"
                : "bg-black/10 border-white/20"
            }`}
          >
            {Icon && <Icon size={18} />}
          </span>
        </div>
      </section>

      {/* Environment + Experience */}
      <div className="mt-6 grid gap-6 md:grid-cols-5">
        <section className={`${panel} md:col-span-2`}>
          <h2 className={`font-inter text-lg font-semibold ${heading}`}>
            Environment
          </h2>
          <div className={`mt-2 border-t ${divider}`} />
          <dl className="mt-3 flex flex-col">
            {environment.map(([key, value], i) => (
              <div
                key={key}
                className={`flex items-center justify-between gap-4 py-3 ${
                  i !== environment.length - 1 ? `border-b ${divider}` : ""
                }`}
              >
                <dt className={`font-roboto text-xs capitalize ${muted}`}>
                  {key}
                </dt>
                <dd className={`text-sm font-medium ${heading}`}>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={`${panel} md:col-span-3`}>
          <h2 className={`font-inter text-lg font-semibold ${heading}`}>
            What I've worked with
          </h2>
          <div className={`mt-2 border-t ${divider}`} />
          <ul className="mt-4 flex flex-wrap gap-2">
            {data.experience?.map((item) => (
              <li
                key={item}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs ${chip}`}
              >
                <Check size={13} className="text-orange-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};
