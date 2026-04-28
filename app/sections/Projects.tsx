import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    name: "Arduino-based Microplastic Detection System",
    emoji: "🏆",
    period: "Dec 2024 – Apr 2025",
    prize: "2nd Prize, RMKCET National Science Day Competition",
    description:
      "IR sensor-based water quality system that detects microplastics in real time and drives sustainable filtration workflows.",
    tags: ["Arduino", "IoT", "Sustainability", "Hardware"],
    highlight: true,
    github: "https://github.com/sushversesai-pixel",
  },
  {
    name: "AI-Based Network Intrusion Detection System",
    emoji: "🔐",
    description:
      "A Python cybersecurity ML system for detection and classification of network intrusions, designed for accuracy and fast threat response.",
    tags: ["Python", "Machine Learning", "Cybersecurity", "IDS"],
    github: "https://github.com/sushversesai-pixel",
  },
  {
    name: "Inventory Management System",
    emoji: "📦",
    description:
      "A JavaScript-based SME inventory platform with streamlined workflow logic, real-time tracking, and efficiency-focused UX.",
    tags: ["JavaScript", "Productivity", "Web App"],
    github: "https://github.com/sushversesai-pixel",
  },
  {
    name: "Securepay",
    emoji: "💳",
    description:
      "A secure payment prototype with backend validation and fraud-aware transaction flow design.",
    tags: ["Security", "Payments", "Validation"],
    github: "https://github.com/sushversesai-pixel",
  },
  {
    name: "Auto Documenter",
    emoji: "📚",
    description:
      "A Python automation tool that generates clean developer documentation from code artifacts.",
    tags: ["Python", "Automation", "Developer Tools"],
    github: "https://github.com/sushversesai-pixel",
  },
  {
    name: "UFDR",
    emoji: "🏗️",
    description:
      "A TypeScript system project built for scalable architecture and modular engineering.",
    tags: ["TypeScript", "System Design", "Architecture"],
    github: "https://github.com/sushversesai-pixel",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24 bg-slate-100">
      <AnimatedSection>

        <div className="mx-auto max-w-6xl">

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Projects</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950">
              Select work that bridges security and sustainability.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Real systems built with cybersecurity principles, product rigor, and measurable outcomes.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
            <a
              href={projects[0].github}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/40 transition hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-100 text-3xl">
                  {projects[0].emoji}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Featured Project</p>
                  <h3 className="mt-4 text-3xl font-semibold text-slate-950">
                    {projects[0].name}
                  </h3>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{projects[0].period}</span>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-800">{projects[0].prize}</span>
              </div>

              <p className="mt-6 text-slate-700 leading-8">{projects[0].description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {projects[0].tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{tag}</span>
                ))}
              </div>

              <div className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-sky-700">
                View Full Repository
                <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </a>

            <div className="grid gap-6">
              {projects.slice(1).map((project, idx) => (
                <a
                  key={project.name}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 transition hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.emoji}</span>
                    <h3 className="text-xl font-semibold text-slate-950 group-hover:text-sky-700 transition">
                      {project.name}
                    </h3>
                  </div>

                  <p className="mt-4 text-slate-600 leading-relaxed">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {projects.slice(1).map((project) => (
              <a
                key={`${project.name}-card`}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-slate-950 group-hover:text-sky-700 transition">
                      {project.name}
                    </h4>
                    <p className="text-sm text-slate-500">{project.tags.join(" • ")}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

      </AnimatedSection>
    </section>
  );
}