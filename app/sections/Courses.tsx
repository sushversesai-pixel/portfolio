import AnimatedSection from "./AnimatedSection";

const courses = [
  {
    title: "Generative AI",
    platform: "Microsoft & LinkedIn Learning",
    credential: "Career Essentials in Generative AI",
    link: "https://www.linkedin.com/learning/career-essentials-in-generative-ai",
    icon: "🤖",
  },
  {
    title: "Programming In Java (Elite Silver)",
    platform: "NPTEL",
    credential: "Elite Silver Certification",
    link: "https://nptel.ac.in/",
    icon: "☕",
  },
  {
    title: "ReactJS",
    platform: "Infosys Springboard",
    credential: "Infosys Certified Developer",
    link: "https://www.infosys.com/",
    icon: "⚛️",
  },
  {
    title: "Cybersecurity Simulation",
    platform: "Deloitte (Forage)",
    credential: "Virtual Internship Experience",
    link: "https://www.forage.com/",
    icon: "🔐",
  },
  {
    title: "Oracle AI Foundations",
    platform: "Oracle",
    credential: "Oracle Cloud Certified Associate",
    link: "https://www.oracle.com/",
    icon: "☁️",
  },
  {
    title: "Python Programming",
    platform: "Udemy",
    credential: "Professional Development",
    link: "https://www.udemy.com/",
    icon: "🐍",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="min-h-screen px-6 py-24 bg-white">
      <AnimatedSection>

        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950/95 p-10 text-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/10 lg:w-[38%]">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Credentials</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white">
              Trusted learning paths across AI, cloud, and cybersecurity.
            </h2>
            <p className="mt-6 text-slate-300 leading-8">
              A curated collection of growth-focused certifications and courses that support my journey from concept to secure product delivery.
            </p>

            <div className="mt-10 space-y-4 text-sm text-slate-300">
              <p className="rounded-3xl bg-slate-900/60 px-4 py-4">Generative AI foundations, enterprise-grade design, and responsible product thinking.</p>
              <p className="rounded-3xl bg-slate-900/60 px-4 py-4">Java mastery for building scalable systems with clean coding practices.</p>
            </div>
          </div>

          <div className="space-y-5 lg:flex-1">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-200/40">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Course highlights</p>
                <h3 className="mt-4 text-3xl font-semibold text-slate-950">Core credentials</h3>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {courses.map((course) => (
                  <a
                    key={course.title}
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-100 text-xl">
                        {course.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-950">{course.title}</p>
                        <p className="mt-1 text-sm text-slate-500">{course.platform}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-600">{course.credential}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                      View Credential
                      <span className="transition group-hover:translate-x-1">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-950">Additional achievements</h3>
              <div className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
                {[
                  "TATA Crucible Campus Quiz 2025",
                  "InnovEra – Quiz the Future",
                  "Innovation Hunt – KIET",
                  "Consulting Quiz – Tough Tongue AI",
                  "Finance Quiz – Tough Tongue AI",
                  "ISTE Mathematics Achievement",
                ].map((item) => (
                  <div key={item} className="rounded-3xl bg-slate-50 px-4 py-4 text-sm">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </AnimatedSection>
    </section>
  );
}