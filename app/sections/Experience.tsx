import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Intern",
    company: "Vodafone Idea Foundation",
    duration: "Ongoing",
    description:
      "Working on digital inclusion initiatives, communication systems, and community-driven development programs. Focused on bridging the digital divide and empowering communities through technology access and digital literacy.",
    highlights: [
      "Digital inclusion strategy",
      "Community development",
      "Communication systems",
    ],
  },
  {
    role: "Volunteer",
    company: "Net Zero Tracker",
    duration: "Ongoing",
    description:
      "Contributing to sustainability tracking and environmental data management focused on global climate action. Working on data collection, analysis, and visualization for climate impact metrics.",
    highlights: [
      "Environmental analytics",
      "Data management",
      "Climate action",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 py-24 bg-slate-100">
      <AnimatedSection>

        <div className="max-w-5xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-5xl font-semibold tracking-tight text-slate-950">
              Experience
            </h2>
            <p className="mt-4 text-slate-600">
              Hands-on roles in tech, sustainability, and community-driven impact.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40 transition hover:-translate-y-1"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {exp.role}
                    </h3>
                    <p className="mt-2 text-lg text-slate-600">{exp.company}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                    {exp.duration}
                  </span>
                </div>

                <p className="mt-6 text-slate-700 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-slate-50 px-4 py-2 text-sm text-slate-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </AnimatedSection>
    </section>
  );
}