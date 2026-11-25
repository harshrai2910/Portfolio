import {
  ChevronRight,
  ArrowRight,
  Timer,
  Zap,
  Lightbulb,
  AlertTriangle,
  Activity,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Code,
  Cookie,
  Copy,
  Database,
  Gauge,
  Globe,
  Hourglass,
  KeyRound,
  Layers,
  Lock,
  Monitor,
  Network,
  RefreshCw,
  Route,
  Send,
  Server,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Split,
  User,
  UserCheck,
  Workflow,
  XCircle,
} from "lucide-react";
import { useTheme } from "../../../redux/hooks/themeHook";

const iconMap = {
  ChevronRight,
  ArrowRight,
  Timer,
  Zap,
  Lightbulb,
  AlertTriangle,
  Activity,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Code,
  Cookie,
  Copy,
  Database,
  Gauge,
  Globe,
  Hourglass,
  KeyRound,
  Layers,
  Lock,
  Monitor,
  Network,
  RefreshCw,
  Route,
  Send,
  Server,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Split,
  User,
  UserCheck,
  Workflow,
  XCircle,
};

const SectionHeader = ({ n, title, t }) => (
  <div className="flex items-center gap-4 mb-5 font-inter">
    <span
      className={`grid place-items-center h-11 w-11 shrink-0 rounded-xl border font-mono text-sm ${t.box}`}
    >
      {n}
    </span>
    <h2 className={`text-xl sm:text-2xl font-semibold ${t.text}`}>{title}</h2>
  </div>
);

const Flow = ({ steps, label, accent, t }) => (
  <div>
    {label && <p className={`mb-2 font-mono text-xs ${t.faint}`}>{label}</p>}
    <div className="flex flex-wrap items-center gap-2">
      {steps.map(({ icon, label: text, hot }, i) => (
        <div key={text} className="flex items-center gap-2">
          <div
            className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm ${
              hot
                ? "border-orange-500/50 bg-orange-500/10 text-orange-500"
                : `${t.inner} ${t.text}`
            }`}
          >
            {renderIcon({ icon, style: "", size: 16 })}
            <span>{text}</span>
          </div>
          {i < steps.length - 1 && (
            <ChevronRight
              size={16}
              className={accent ? "text-orange-500" : t.faint}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);

const renderIcon = ({ icon, style, size }) => {
  const Icon = iconMap[icon];
  return <Icon className={style} size={size} />;
};

export const EngineeredCardMain = ({ data }) => {
  const { theme } = useTheme();

  const t = {
    text: theme ? "text-slate-900" : "text-white",
    muted: theme ? "text-slate-600" : "text-white/70",
    faint: theme ? "text-slate-400" : "text-white/40",
    inner: theme
      ? "bg-white/70 border-white/80"
      : "bg-white/[0.07] border-white/15",
    box: theme
      ? "border-slate-400/60 text-slate-700"
      : "border-white/25 text-white/80",
    line: theme ? "border-slate-300/70" : "border-white/10",
  };

  const divider = `w-full border-t ${t.line}`;

  return (
    <div className="flex items-center justify-center w-full px-2 sm:px-4">
      <div
        className={`flex flex-col gap-10 w-full max-w-6xl
          py-6 px-4 md:p-10 border-2 shadow-sm rounded-4xl 
          ${theme ? "border-white bg-white/20" : "border-white/5 bg-white/3"}`}
      >
        <section>
          <SectionHeader
            n={data.challenge.number}
            title={data.challenge.title}
            t={t}
          />
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] font-inter">
            <div className={`space-y-3 leading-relaxed ${t.muted}`}>
              {data.challenge.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
            <div
              className={`flex flex-col justify-center gap-2 rounded-2xl border p-6 ${t.inner}`}
            >
              {/* <challengeIcon className="text-orange-500" size={22} /> */}
              {renderIcon({
                icon: data.challenge.stat.icon,
                style: "text-orange-500",
                size: 22,
              })}
              <p className={`text-4xl font-bold ${t.text}`}>
                {data.challenge.stat.value}
              </p>
              <p className={`text-sm ${t.muted}`}>
                {data.challenge.stat.label}
              </p>
            </div>
          </div>
        </section>

        <div className={divider} />

        <section>
          <SectionHeader
            n={data.bottleneck.number}
            title={data.bottleneck.title}
            t={t}
          />
          <p className={`leading-relaxed font-inter ${t.muted}`}>
            {data.bottleneck.intro}
          </p>
          <div className={`mt-5 rounded-2xl border p-5 font-inter ${t.inner}`}>
            <Flow
              steps={data.bottleneck.flow}
              label="Original execution flow"
              t={t}
            />
            <div className="mt-4 flex items-start gap-2 text-sm text-orange-500">
              <AlertTriangle size={16} className="mt-0.5 shrink-0" />
              <span>{data.bottleneck.warning}</span>
            </div>
          </div>
          <p className={`mt-5 leading-relaxed font-inter ${t.muted}`}>
            {data.bottleneck.closing}
          </p>
        </section>

        <div className={divider} />

        <section className="font-inter">
          <SectionHeader
            n={data.solution.number}
            title={data.solution.statusTitle}
            t={t}
          />
          <p className={`mb-5 leading-relaxed ${t.muted}`}>
            {data.solution.intro}
          </p>

          <div className="space-y-4">
            <div className={`rounded-2xl border p-5 ${t.inner}`}>
              <Flow
                steps={data.solution.mainFlow.steps}
                label={data.solution.mainFlow.label}
                accent
                t={t}
              />
            </div>
            <div className={`rounded-2xl border p-5 ${t.inner}`}>
              <Flow
                steps={data.solution.backgroundFlow.steps}
                label={data.solution.backgroundFlow.label}
                accent
                t={t}
              />
            </div>
          </div>

          <h3 className={`mb-3 mt-7 font-semibold ${t.text}`}>
            {data.solution.title}
          </h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {data.solution.statuses.map(({ icon, name, desc, tone }) => (
              <div key={name} className={`rounded-2xl border p-4 ${t.inner}`}>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${tone}`}
                >
                  {renderIcon({ icon, style: "", size: 14 })}
                  {name}
                </span>
                <p className={`mt-3 text-sm ${t.muted}`}>{desc}</p>
              </div>
            ))}
          </div>

          <p className={`mt-5 leading-relaxed ${t.muted}`}>
            {data.solution.closing}
          </p>
        </section>

        <div className={divider} />

        <section className="font-inter">
          <SectionHeader
            n={data.results.number}
            title={data.results.title}
            t={t}
          />

          <div
            className={`mb-5 flex flex-wrap items-center justify-center gap-4 rounded-2xl border p-6 sm:gap-8 ${t.inner}`}
          >
            <span
              className={`text-3xl font-bold line-through decoration-2 sm:text-5xl ${t.faint}`}
            >
              {data.results.before}
            </span>
            <ArrowRight className="text-orange-500" size={28} />
            <span className="flex items-center gap-2 text-4xl font-bold text-orange-500 sm:text-6xl">
              <Zap size={32} className="hidden sm:block" />
              {data.results.after}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-105 text-left text-sm">
              <thead>
                <tr
                  className={`border-b font-mono text-xs ${t.line} ${t.faint}`}
                >
                  <th className="py-3 pr-4 font-medium">Metric</th>
                  <th className="py-3 pr-4 font-medium">Before</th>
                  <th className="py-3 font-medium">After</th>
                </tr>
              </thead>
              <tbody>
                {data.results.metrics.map((m) => (
                  <tr
                    key={m.label}
                    className={`border-b last:border-0 ${t.line}`}
                  >
                    <td className={`py-3 pr-4 font-medium ${t.text}`}>
                      {m.label}
                    </td>
                    <td className={`py-3 pr-4 ${t.muted}`}>{m.before}</td>
                    <td className="py-3 font-medium text-orange-500">
                      {m.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={`mt-5 leading-relaxed ${t.muted}`}>
            {data.solution.closing}
          </p>
        </section>

        <div className={divider} />

        <section className="font-inter">
          <SectionHeader
            n={data.takeaways.number}
            title={data.takeaways.title}
            t={t}
          />
          <p className={`mb-5 ${t.muted}`}>{data.takeaways.intro}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {data.takeaways.items.map(({ icon, title, desc }) => (
              <div
                key={title}
                className={`flex gap-4 rounded-2xl border p-5 ${t.inner}`}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-500/10 text-orange-500">
                  {renderIcon({ icon, style: "", size: 20 })}
                </span>
                <div>
                  <h3 className={`font-semibold ${t.text}`}>{title}</h3>
                  <p className={`mt-1 text-sm ${t.muted}`}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="mt-6 flex gap-4 rounded-2xl border border-orange-500/30 bg-orange-500/[0.07] p-5">
            <Lightbulb className="mt-1 shrink-0 text-orange-500" size={22} />
            <p className={`leading-relaxed ${t.text}`}>
              <span className="font-semibold">
                {data.takeaways.quote.label}
              </span>
              {data.takeaways.quote.text}
            </p>
          </blockquote>
        </section>
      </div>
    </div>
  );
};
