import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-24">
      <AnimatedSection>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-2xl shadow-slate-200/40 ring-1 ring-slate-100">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-600">About</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950">
              Building secure systems with real-world impact.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              I am a Computer Science Engineering student exploring cybersecurity, system protection, and sustainable technology. I build products that are designed with reliability, security, and clear user value at the core.
            </p>

            <div className="mt-10 space-y-5">
              {[
                {
                  title: "Cybersecurity focus",
                  description: "Threat detection, secure transaction flows, and resilient architecture design.",
                },
                {
                  title: "Community impact",
                  description: "Volunteer work on Net Zero Tracker and digital inclusion with Vodafone Idea Foundation.",
                },
                {
                  title: "Growth mindset",
                  description: "Hackathons, certifications, and applied learning in AI and cloud systems.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950/95 p-10 text-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10">
              <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-sky-300">Profile</h3>
              <p className="mt-6 text-3xl font-semibold leading-tight text-white">
                B Sai Susmitha
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Computer Science Engineering student, cybersecurity enthusiast, and builder of systems that balance technology and sustainability.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Location", value: "Chennai" },
                  { label: "Education", value: "R.M.D. Engineering College" },
                  { label: "Pronouns", value: "She/Her" },
                  { label: "Current", value: "Intern at Vodafone Idea Foundation" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-slate-900/60 px-5 py-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-lg shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-950">Key Interests</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  "Cybersecurity & System Protection",
                  "Network Security & Threat Detection",
                  "Software Architecture & Design Patterns",
                  "Environmental Sustainability",
                  "Open-Source Development",
                  "Competitive Programming",
                ].map((interest) => (
                  <div key={interest} className="rounded-3xl border border-slate-200 px-4 py-4 text-slate-700 shadow-sm shadow-slate-200/30">
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </AnimatedSection>
    </section>
  );
}