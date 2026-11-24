import { useLocation } from "react-router-dom";
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { DiGithubBadge } from "react-icons/di";
import sectionData from "../../data/headerData";
import { UniversalHeader } from "../UniversalHeader";
import { IoLogoLinkedin } from "react-icons/io";
import { Footer } from "../Footer";
import { useTheme } from "../../redux/hooks/themeHook";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "Draft a mail",
    href: "mailto:harsh.azm292005@gmail.com",
  },
  {
    icon: IoLogoLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/harsh-rai-842126333/",
    href: "https://www.linkedin.com/in/harsh-rai-842126333/",
  },
  {
    icon: DiGithubBadge,
    label: "GitHub",
    value: "github.com/harshrai2910",
    href: "https://github.com/harshrai2910",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
  },
];

export const ContactSection = () => {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <>
      <section className="w-full px-2 sm:px-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
          <UniversalHeader
            data={sectionData.find((d) => d.path === location.pathname)}
          />

          {/* Intro card */}
          <div
            className={`relative overflow-hidden flex flex-col items-start gap-4 border-2 shadow-sm rounded-4xl py-6 px-4 md:p-10
            ${theme ? "border-white bg-white/20" : "border-white/5 bg-white/3"}`}
          >
            <div className="absolute top-0 right-0 h-20 w-20 bg-orange-500 blur-3xl"></div>

            <h2
              className={`relative text-3xl font-bold tracking-wide sm:text-4xl font-inter
              ${theme ? "text-slate-900" : "text-white"}`}
            >
              Let's work together
            </h2>
            <p
              className={`relative max-w-2xl text-base sm:text-lg font-inter
              ${theme ? "text-slate-600" : "text-white/70"}`}
            >
              Have a project in mind, a question, or just want to say hi? Reach
              out through any of the channels below and I'll get back to you.
            </p>

            <a
              href="mailto:harsh.azm292005@gmail.com"
              className={`relative mt-2 border-2 flex items-center gap-4 font-medium p-1 pr-7 rounded-full shadow-lg transition-all
              ${theme ? "bg-white/70 border-white/80" : "bg-white/20 border-white/10"}`}
            >
              <span className="rounded-full bg-orange-500 p-3 text-white shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span className={theme ? "text-zinc-700" : "text-white"}>
                Say hello
              </span>
            </a>
          </div>

          {/* Contact cards */}
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-orange-500 shadow-[inset_0_2px_8px_rgba(255,255,255,0.5)]">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-xs font-roboto
                      ${theme ? "text-slate-500" : "text-white/50"}`}
                    >
                      {label}
                    </p>
                    <p
                      className={`truncate text-sm font-medium font-inter
                      ${theme ? "text-slate-900" : "text-white"}`}
                    >
                      {value}
                    </p>
                  </div>
                  {href && (
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className={`shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                      ${theme ? "text-slate-400" : "text-white/40"}`}
                    />
                  )}
                </>
              );

              const cardClass = `group flex items-center gap-4 border-2 shadow-sm rounded-4xl p-4 transition-colors
              transition-transform duration-300 
                ${theme ? "border-white bg-white/20" : "border-white/5 bg-white/3"}
                ${href ? "hover:bg-white/5 hover:-translate-y-0.5 " : ""}`;

              return (
                <li key={label} className="min-w-0">
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className={cardClass}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={cardClass}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};
