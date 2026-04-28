import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "🏆 Prize & Merit",
    items: ["National Science Day Project Competition (2nd Prize)"],
  },
  {
    title: "🎤 Hackathons & Technical Events",
    items: [
      "GTA MegaJam - NIT Rourkela",
      "CodeChronos Hackathon",
      "CodeX - Crack the Code",
      "CodeSummit",
      "Hackinow",
      "Coding Challenge – Tough Tongue AI",
    ],
  },
  {
    title: "💼 Business & Case Competitions",
    items: [
      "Prod-A-Vista - IIM Raipur",
      "National Consulting Olympiad - Kirori Mal College",
      "Wordonomics - GLIM Gurgaon",
    ],
  },
  {
    title: "🧠 Quizzes & Innovation",
    items: [
      "TATA Crucible Campus Quiz 2025",
      "InnovEra - Quiz the Future",
      "Innovation Hunt - KIET",
      "Consulting Quiz - Tough Tongue AI",
      "Finance Quiz - Tough Tongue AI",
    ],
  },
  {
    title: "🎨 Creativity & Writing",
    items: [
      "AdShastra - Advertisement Making Competition",
      "X-ITE 2025 - National Article Writing (XIMB)",
    ],
  },
  {
    title: "📊 Assessments & Certifications",
    items: [
      "Free Skill-Up Placement Quiz - Engiversee",
      "Assessment for Opportunity - Enginow",
      "ISTE Mathematics Achievement",
    ],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen px-6 py-24">
      <AnimatedSection>

        <div className="max-w-5xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-5xl font-semibold tracking-tight text-slate-950">
              Certifications & Achievements
            </h2>

            <p className="mt-4 text-slate-600">
              Hackathons, competitions, quizzes, and academic milestones that reflect growth and impact.
            </p>
          </div>

          <div className="space-y-10">
            {categories.map((cat, idx) => (
              <div key={idx}>
                <div className="mb-5 flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm shadow-slate-200/40">
                  <h3 className="text-xl font-semibold text-slate-900">{cat.title}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{cat.items.length} items</span>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-[1.75rem] border border-slate-200 bg-white px-5 py-5 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://drive.google.com/drive/folders/1I5AWbl5SQzcWn6rtPRyZFOo_CqyPmGF6?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-slate-950 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-slate-950/10 hover:bg-slate-800"
            >
              View All Certificates
            </a>
          </div>

        </div>

      </AnimatedSection>
    </section>
  );
}