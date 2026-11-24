import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm({ theme }) {
  // theme === true -> light, false -> dark (same convention as SystemCard)
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const heading = theme ? "text-zinc-900" : "text-white";
  const muted = theme ? "text-zinc-500" : "text-zinc-400";

  const panel = `rounded-3xl border p-5 shadow-xl sm:rounded-2xl sm:p-6 ${
    theme ? "bg-white/50 border-white/10" : "bg-white/7 border-white/10"
  }`;

  const field = `w-full rounded-2xl border px-4 py-3 text-sm outline-none transition
    focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30
    ${
      theme
        ? "bg-white/70 border-zinc-200 text-zinc-900 placeholder:text-zinc-400"
        : "bg-black/20 border-white/10 text-white placeholder:text-zinc-500"
    }`;

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", "New message from portfolio");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className={`${panel} flex flex-col gap-4`}>
      <div>
        <h2 className={`font-inter text-lg font-semibold ${heading}`}>
          Send a message
        </h2>
        <p className={`mt-1 text-sm ${muted}`}>I usually reply within a day.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className={`font-roboto text-xs ${muted}`}>Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={field}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={`font-roboto text-xs ${muted}`}>Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={field}
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className={`font-roboto text-xs ${muted}`}>Message</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me about your idea, role, or project..."
          className={`${field} resize-y`}
        />
      </label>

      {/* Honeypot: bots fill this, Web3Forms discards the submission */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p
          role="status"
          aria-live="polite"
          className={`flex items-center gap-2 text-sm ${
            status === "success"
              ? "text-green-500"
              : status === "error"
                ? "text-red-500"
                : muted
          }`}
        >
          {status === "success" && (
            <>
              <CheckCircle2 size={16} /> Message sent. Thanks for reaching out!
            </>
          )}
          {status === "error" && (
            <>
              <AlertCircle size={16} /> {errorMsg}
            </>
          )}
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          className={`group inline-flex items-center gap-3 rounded-full border py-1.5 pl-5 pr-1.5 font-inter text-sm font-medium transition
            disabled:cursor-not-allowed disabled:opacity-60
            hover:border-orange-500 focus-visible:outline-2 focus-visible:outline-orange-500
            ${
              theme
                ? "bg-black/5 border-black/1 text-zinc-900"
                : "bg-black/10 border-white/20 text-white"
            }`}
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <span className="grid size-9 place-items-center rounded-full border-2 border-white/20 bg-orange-500 text-white transition group-hover:translate-x-1">
            {status === "sending" ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <ArrowRight size={16} />
            )}
          </span>
        </button>
      </div>
    </form>
  );
}
