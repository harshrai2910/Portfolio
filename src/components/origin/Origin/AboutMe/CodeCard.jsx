import { useEffect, useState } from "react";
import { useTheme } from "../../../../redux/hooks/themeHook";

// Each line is a list of [type, text] tokens, so we can color them
// and reveal them one character at a time.
const LINES = [
  [["comment", "// who I am"]],
  [
    ["kw", "const"],
    ["plain", " "],
    ["var", "harsh"],
    ["plain", " = {"],
  ],
  [
    ["plain", "  "],
    ["key", "role"],
    ["plain", ": "],
    ["str", '"Full-Stack Developer"'],
    ["plain", ","],
  ],
  [
    ["plain", "  "],
    ["key", "stack"],
    ["plain", ": ["],
    ["str", '"React"'],
    ["plain", ", "],
    ["str", '"Node.js"'],
    ["plain", ", "],
    ["str", '"Redux"'],
    ["plain", ", "],
    ["str", '"JavaScript"'],
    ["plain", "],"],
  ],
  [
    ["plain", "  "],
    ["key", "currently"],
    ["plain", ": "],
    ["str", '"Building cool things"'],
    ["plain", ","],
  ],
  [
    ["plain", "  "],
    ["key", "openToWork"],
    ["plain", ": "],
    ["bool", "true"],
    ["plain", ","],
  ],
  [["plain", "};"]],
];

// Precompute where each token starts in the full character stream.
let offset = 0;
const DATA = LINES.map((line) =>
  line.map(([type, text]) => {
    const token = { type, text, start: offset };
    offset += text.length;
    return token;
  }),
);
const TOTAL = offset;

const COLORS = {
  dark: {
    comment: "text-zinc-500 italic",
    kw: "text-orange-400",
    var: "text-zinc-100",
    key: "text-orange-300",
    str: "text-emerald-300",
    bool: "text-orange-400",
    plain: "text-zinc-400",
  },
  light: {
    comment: "text-zinc-400 italic",
    kw: "text-orange-600",
    var: "text-zinc-900",
    key: "text-orange-700",
    str: "text-emerald-700",
    bool: "text-orange-600",
    plain: "text-zinc-600",
  },
};

const Cursor = () => (
  <span
    className="relative inline-block h-4 w-0 align-middle"
    aria-hidden="true"
  >
    <span className="absolute left-0 top-0 h-full w-0.5 bg-orange-500 animate-pulse motion-reduce:animate-none" />
  </span>
);

export const CodeCard = () => {
  const { theme } = useTheme(); // true = light mode, same as the rest of the site
  const colors = theme ? COLORS.light : COLORS.dark;

  const [typed, setTyped] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setTyped(TOTAL);
      return;
    }

    let interval;
    const startDelay = setTimeout(() => {
      interval = setInterval(() => {
        setTyped((n) => {
          if (n >= TOTAL) {
            clearInterval(interval);
            return n;
          }
          return n + 1;
        });
      }, 35);
    }, 600);

    return () => {
      clearTimeout(startDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md md:max-w-sm lg:max-w-md shrink-0">
      {/* soft orange glow behind the card, ties into the background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-4xl bg-orange-500/20 blur-3xl"
      />

      <div
        role="img"
        aria-label="Code editor showing a JavaScript object describing Harsh Rai: full-stack developer working with React, Node.js, Redux and Tailwind, open to work."
        className={`relative overflow-hidden rounded-2xl border-2 shadow-xl md:rotate-1 transition-transform duration-300 md:hover:rotate-0
          ${theme ? "border-white bg-white" : "border-zinc-700 bg-zinc-900"}`}
      >
        {/* title bar */}
        <div
          className={`flex items-center gap-2 border-b px-4 py-3
            ${theme ? "border-zinc-200 bg-zinc-100" : "border-zinc-700 bg-zinc-800"}`}
        >
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span
            className={`ml-3 font-mono text-xs ${theme ? "text-zinc-500" : "text-zinc-400"}`}
          >
            harsh.js
          </span>
        </div>

        {/* code area */}
        <div className="flex gap-4 p-4 font-mono text-xs sm:text-sm leading-6">
          <div
            aria-hidden="true"
            className={`select-none text-right ${theme ? "text-zinc-300" : "text-zinc-600"}`}
          >
            {DATA.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          <div className="min-w-0 flex-1">
            {DATA.map((line, i) => (
              <div
                key={i}
                className="whitespace-pre-wrap wrap-break-words min-h-6"
              >
                {line.map((token, j) => {
                  const visible = Math.max(
                    0,
                    Math.min(token.text.length, typed - token.start),
                  );
                  const shown = token.text.slice(0, visible);
                  const hidden = token.text.slice(visible);

                  const cursorBefore = typed === 0 && token.start === 0;
                  const cursorAfter =
                    typed > token.start &&
                    typed <= token.start + token.text.length;

                  return (
                    <span key={j} className={colors[token.type]}>
                      {cursorBefore && <Cursor />}
                      {shown}
                      {cursorAfter && <Cursor />}
                      {/* unrevealed text keeps its space so the card never changes height */}
                      <span className="opacity-0">{hidden}</span>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
