import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-24 bg-slate-950 text-white">
      <AnimatedSection>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-[2rem] bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/30 ring-1 ring-slate-950/20">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">Contact</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight text-white">
              Let's build something secure together.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Reach out for collaboration, cybersecurity research, product development, or mentorship opportunities.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Location", value: "Chennai, Tamil Nadu" },
                { label: "Email", value: "saisusmitha.b.1005@gmail.com" },
                { label: "Phone", value: "+91 7200254625" },
                { label: "LinkedIn", value: "bsaisusmitha" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-slate-800/80 px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{item.label}</p>
                  <p className="mt-3 text-base font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-10 text-slate-950 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Get in touch</p>
            <h3 className="mt-4 text-3xl font-semibold">Quick actions</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Send a message, visit my GitHub, or connect on LinkedIn to discuss projects, internships, or research ideas.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:saisusmitha.b.1005@gmail.com"
                className="block rounded-full bg-slate-950 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/bsaisusmitha"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-slate-200 bg-white px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                View LinkedIn
              </a>
              <a
                href="https://github.com/sushversesai-pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-slate-200 bg-white px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}