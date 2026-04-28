import AnimatedSection from "./AnimatedSection";

const skills = {
  Languages: ["Java", "Python", "JavaScript", "C++", "TypeScript"],
  Frontend: ["ReactJS", "HTML", "CSS", "Tailwind CSS"],
  Cybersecurity: [
    "Threat Analysis",
    "Phishing Detection",
    "Network Security",
    "Web Security",
  ],
  "CS Fundamentals": ["DBMS", "OS", "OOP", "Data Structures", "Algorithms"],
  Tools: ["Git", "GitHub", "Figma", "VS Code"],
  "AI & Cloud": ["Generative AI", "OCI", "Prompt Engineering", "Machine Learning"],
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-24 bg-slate-100">
      <AnimatedSection>

        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-5xl font-semibold tracking-tight text-slate-950">Skills & Expertise</h2>
          <p className="mt-4 text-slate-600">
            Languages, frameworks, tools, and domains I work with.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-6 xl:grid-cols-3">
          {Object.entries(skills).map(([category, list]) => (
            <div
              key={category}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50 transition hover:-translate-y-1"
            >
              <h3 className="font-semibold text-xl mb-5 text-slate-900">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {list.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Core strengths</h3>
              <p className="mt-3 text-slate-600">
                I combine strong fundamentals, cybersecurity awareness, and practical engineering to build systems with reliability, security, and clear user value.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Secure architecture",
                "Full-stack delivery",
                "Performance-driven",
              ].map((item) => (
                <div key={item} className="rounded-3xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

      </AnimatedSection>
    </section>
  );
}