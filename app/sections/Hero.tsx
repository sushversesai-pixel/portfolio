"use client";

import { useEffect, useState } from "react";

const sections = [
  "about",
  "skills",
  "projects",
  "certifications",
  "courses",
  "experience",
  "contact",
];

export default function Hero() {
  const [active, setActive] = useState("about");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight / 3) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24">
      <div className="absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-200/25 blur-3xl" />
      <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-slate-900/10 blur-3xl" />

      <nav className="fixed top-5 left-1/2 z-50 flex -translate-x-1/2 gap-4 rounded-full border border-slate-200 bg-white/90 px-5 py-3 text-sm shadow-lg shadow-slate-200/60 backdrop-blur-md">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => scrollTo(sec)}
            className={`capitalize transition ${
              active === sec
                ? "text-slate-950 font-semibold"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {sec}
          </button>
        ))}
      </nav>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 text-center lg:flex-row lg:items-center lg:gap-20 lg:text-left">
        <div className="w-full lg:w-7/12">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-700">Cybersecurity • Systems • Sustainability</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            B Sai Susmitha
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-700 sm:mx-0 sm:text-2xl">
            Computer Science Engineering student building secure systems, data-driven products, and sustainability-focused technology.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Hackathons", value: "6+" },
              { label: "Certifications", value: "15+" },
              { label: "Location", value: "Chennai" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-slate-200 bg-white/95 px-5 py-4 text-center shadow-sm shadow-slate-200/40 backdrop-blur">
                <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:saisusmitha.b.1005@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 hover:bg-slate-800"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/sushversesai-pixel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="w-full lg:w-5/12">
          <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-2xl shadow-slate-200/40 backdrop-blur-md ring-1 ring-slate-100">
            <div className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Student • Intern • Builder
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950">Founder-level engineering portfolio</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Focused on cybersecurity, threat analysis, and resilient system architectures. I invest in impact-driven learning, community initiatives, and real product delivery.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Secure architecture & risk-aware design",
                "AI-enabled intrusion detection systems",
                "Sustainability-driven product thinking",
              ].map((point) => (
                <div key={point} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}