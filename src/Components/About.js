import React from "react";

const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "3", label: "Production projects" },
  { value: "20+", label: "Technologies" },
];

const timeline = [
  {
    year: "2026 – Present",
    title: "Freelance Full Stack Developer",
    org: "Delco Water",
    detail: "Building and maintaining a business management platform in active daily use.",
  },
  {
    year: "2026 – Present",
    title: "Freelance Full Stack Developer",
    org: "CrackCU",
    detail: "Hired for bug fixes and SEO, retained for ongoing feature development.",
  },
  {
    year: "2026 – 2030",
    title: "B.Sc in Computer Science and Engineering",
    org: "Premier University, Chittagong",
    detail: "Studying CSE while running freelance client work in parallel.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-white/5">
      <p className="text-xs text-[#4ade80]/50 uppercase tracking-widest mb-3">
        Who I am
      </p>
      <h2 className="display-heading font-bold mb-12">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="text-white/60 text-base leading-relaxed mb-6">
            I'm a full stack developer based in Chittagong, Bangladesh, with
            two years of production experience building, deploying, and
            maintaining real-world web applications for active businesses.
            I own projects end to end — database design, backend APIs, and
            frontend builds.
          </p>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            I'm currently pursuing a B.Sc in Computer Science and Engineering
            while running freelance client work in parallel. My focus is on
            shipping software that stays in production and keeps working long
            after launch.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 text-center transition-colors duration-200 hover:border-white/[0.15]"
              >
                <p className="text-2xl font-bold text-[#4ade80] mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-white/40 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-8">
            <a
              href="#contact"
              className="press-feedback text-sm font-semibold bg-[#4ade80] text-[#0d0d0d] px-5 py-2.5 rounded-md hover:bg-[#22c55e] transition-colors"
            >
              Get in touch
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1Vqm-NUKD3Rl9eu0JJ5jceaJdJ9i6xwiP"
              className="press-feedback text-sm text-white/60 px-5 py-2.5 rounded-md border border-white/10 hover:border-white/25 hover:text-white transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {timeline.map((item, i) => (
            <div key={i} className="relative pl-6 border-l border-white/[0.1]">
              <span className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-[#4ade80]" />
              <p className="text-xs text-[#4ade80]/60 mb-1">{item.year}</p>
              <p className="text-base font-semibold text-white mb-0.5">
                {item.title}
              </p>
              <p className="text-sm text-white/40 mb-2">{item.org}</p>
              <p className="text-sm text-white/50 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
