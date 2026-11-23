import {
  AlertTriangle,
  Boxes,
  CheckCircle2,
  Cloud,
  Database,
  GraduationCap,
  Globe,
  Lightbulb,
  MessageSquare,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCircle,
  Users,
  Wrench,
} from "lucide-react";
import { useTheme } from "../../../redux/hooks/themeHook";

/* theme === true  -> light mode
   theme === false -> dark mode  (same convention as ProjectCardHeader) */
function useStyles() {
  const { theme } = useTheme();
  return {
    theme,
    panel: theme ? "border-white bg-white/20" : "border-white/5 bg-white/3",
    card: theme
      ? "border-slate-300/70 bg-white/60"
      : "border-white/15 bg-white/[0.07]",
    title: theme ? "text-slate-900" : "text-white",
    body: theme ? "text-slate-600" : "text-white/70",
    muted: theme ? "text-slate-500" : "text-white/50",
    accent: theme ? "text-orange-600" : "text-orange-400",
  };
}

const FEATURE_ICONS = {
  Authentication: ShieldCheck,
  "Student Profiles": UserCircle,
  "Connection System": Users,
  "Community Posts": MessageSquare,
  "User Discovery": Search,
};

const DEPLOYMENT_ICONS = {
  frontend: Globe,
  backend: Server,
  database: Database,
  storage: Cloud,
};

function IconBadge({ icon: Icon, size = 18 }) {
  return (
    <span className="inline-flex rounded-full bg-orange-500 p-2.5 text-white shadow-[inset_0_2px_8px_rgba(255,255,255,0.5)]">
      <Icon size={size} aria-hidden="true" />
    </span>
  );
}

function Panel({ n, title, children }) {
  const { theme } = useTheme();
  const s = useStyles();
  return (
    <section
      className={`relative overflow-hidden w-full max-w-6xl py-6 px-4 md:p-10 border-2 shadow-sm rounded-4xl ${s.panel}`}
    >
      {title && (
        <div className="flex items-center gap-4 mb-5">
          <span
            className={`grid place-items-center h-11 w-11 shrink-0 rounded-xl border-2 font-mono text-sm ${
              theme
                ? "border-slate-300 text-slate-700"
                : "border-white/25 text-white/80"
            } `}
          >
            {n}
          </span>
          <h2 className={`text-xl sm:text-2xl font-semibold ${s.title}`}>
            {title}
          </h2>
        </div>
      )}
      {children}
    </section>
  );
}

function CheckList({ items }) {
  const s = useStyles();
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-2.5 font-inter ${s.body}`}
        >
          <CheckCircle2
            className={`mt-1 h-4 w-4 shrink-0 ${s.accent}`}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectMainSection({ project }) {
  const s = useStyles();
  const { theme } = useTheme();

  if (!project) return null;

  const {
    name,
    image,
    statistics,
    overview,
    features,
    engineering,
    deployment,
    learnings,
    futureScope,
    id,
  } = project;

  const card = `rounded-2xl border p-5 shadow-sm ${s.card}`;

  return (
    <main className="flex w-full flex-col items-center gap-6 px-2 sm:px-4">
      {/* Statistics */}
      {statistics?.length > 0 && (
        <Panel>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {statistics.map(({ value, label }) => (
              <div
                key={label}
                className={`flex items-center justify-between rounded-2xl border p-5 shadow-sm
                    ${
                      theme
                        ? "border-slate-300/70 bg-white/60"
                        : "border-white/15 bg-white/[0.07]"
                    }`}
              >
                <dd className={`mt-1 font-roboto text-sm ${s.muted}`}>
                  {label}
                </dd>
                <dt className={`font-inter text-xl font-bold ${s.title}`}>
                  {value}
                </dt>
              </div>
            ))}
          </dl>
        </Panel>
      )}

      {/* Overview + preview */}
      <Panel n={"01"} title="Project overview">
        <div className="grid gap-4 md:grid-cols-2">
          <div className={card}>
            <h3
              className={`flex items-center gap-2 font-inter font-semibold ${s.title}`}
            >
              <AlertTriangle
                className="h-4 w-4 text-amber-500"
                aria-hidden="true"
              />
              The problem
            </h3>
            <p className={`mt-2 font-inter leading-relaxed ${s.body}`}>
              {overview.problem}
            </p>
          </div>
          <div className={card}>
            <h3
              className={`flex items-center gap-2 font-inter font-semibold ${s.title}`}
            >
              <Lightbulb
                className="h-4 w-4 text-emerald-500"
                aria-hidden="true"
              />
              The solution
            </h3>
            <p className={`mt-2 font-inter leading-relaxed ${s.body}`}>
              {overview.solution}
            </p>
          </div>
        </div>

        {/* {image && (
          <img
            src={image}
            alt={`${name} preview`}
            loading="lazy"
            className={`mt-6 w-full rounded-2xl border object-cover shadow-lg ${s.card}`}
          />
        )} */}
      </Panel>

      {/* Features */}
      <Panel n={"02"} title="Key features">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description }) => {
            const Icon = FEATURE_ICONS[title] ?? CheckCircle2;
            return (
              <article key={title} className={card}>
                <Icon className={`h-5 w-5 ${s.accent}`} aria-hidden="true" />
                <h3 className={`mt-3 font-inter font-semibold ${s.title}`}>
                  {title}
                </h3>
                <p
                  className={`mt-1.5 font-inter text-sm leading-relaxed ${s.body}`}
                >
                  {description}
                </p>
              </article>
            );
          })}
        </div>
      </Panel>

      {/* Engineering */}
      <Panel n={"03"} title="Engineering decisions">
        <div className="grid gap-4 md:grid-cols-2">
          <div className={card}>
            <h3 className={`mb-3 font-inter font-semibold ${s.title}`}>
              Architecture
            </h3>
            <CheckList items={engineering.architecture} />
          </div>
          <div className={card}>
            <h3 className={`mb-3 font-inter font-semibold ${s.title}`}>
              Implementation
            </h3>
            <CheckList items={engineering.implementations} />
          </div>
        </div>
      </Panel>

      {/* Challenges */}
      {engineering.challenges?.length > 0 && (
        <Panel n={"04"} title="Challenges & solutions">
          <div className="space-y-4">
            {engineering.challenges.map((c) => (
              <article key={c.title} className={card}>
                <h3 className={`font-inter text-lg font-semibold ${s.title}`}>
                  {c.title}
                </h3>
                <dl className="mt-4 space-y-4">
                  {[
                    ["Problem", c.problem],
                    ["Solution", c.solution],
                    ["Result", c.result],
                  ].map(([label, text]) => (
                    <div
                      key={label}
                      className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-4"
                    >
                      <dt
                        className={`font-roboto text-sm font-medium ${s.accent}`}
                      >
                        {label}
                      </dt>
                      <dd className={`font-inter ${s.body}`}>{text}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </Panel>
      )}

      {/* Deployment */}
      <Panel n={"05"} title="Deployment">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Object.entries(deployment).map(([key, value]) => {
            const Icon = DEPLOYMENT_ICONS[key] ?? Server;
            return (
              <div key={key} className={card}>
                <Icon className={`h-5 w-5 ${s.accent}`} aria-hidden="true" />
                <dt
                  className={`mt-3 font-roboto text-sm capitalize ${s.muted}`}
                >
                  {key}
                </dt>
                <dd className={`font-inter font-semibold ${s.title}`}>
                  {value}
                </dd>
              </div>
            );
          })}
        </dl>
      </Panel>

      {/* Learnings + future scope */}
      <Panel>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <IconBadge icon={GraduationCap} size={16} />
              <h2 className={`font-inter text-xl font-bold ${s.title}`}>
                What I learned
              </h2>
            </div>
            <CheckList items={learnings} />
          </div>
          <div>
            <div className="mb-5 flex items-center gap-3">
              <IconBadge icon={Rocket} size={16} />
              <h2 className={`font-inter text-xl font-bold ${s.title}`}>
                What's next
              </h2>
            </div>
            <CheckList items={futureScope} />
          </div>
        </div>
      </Panel>
    </main>
  );
}
