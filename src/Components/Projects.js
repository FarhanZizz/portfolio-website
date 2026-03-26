import React from "react";
import img1 from "../Assets/thumbnail_1.png";
import img2 from "../Assets/thumbnail_2.png";

const projects = [
  {
    index: "01 / 02",
    title: "GreenPot — Golf Charity Platform",
    description:
      "GreenPot is a full-stack subscription web app. Users subscribe, log their Stableford golf scores, enter monthly prize draws, and automatically contribute to a charity of their choice. An admin panel provides full control over draws, charities, users, and winner payouts.",
    tags: ["React", "Tailwind CSS", "Supabase", "PostgreSQL", "React Router"],
    image: img1,
    live: "https://greenpotcharity.vercel.app/",
    code: "https://github.com/FarhanZizz/golf-charity-platform",
    meta: { type: "Full-stack app", role: "Solo developer", year: "2026" },
  },
  {
    index: "02 / 02",
    title: "Jostack — IT Services Website",
    description:
      "Jostack is an IT services firm providing a range of business solutions, including website building, management, video editing, and ad promotion. The website features a clean, modern design with a focus on user experience, showcasing the company's services and expertise.",
    tags: ["React", "GSAP", "Framer Motion", "Locomotive Scroll", "EmailJS"],
    image: img2,
    live: "https://jostack-website.vercel.app/",
    code: "https://github.com/FarhanZizz/jostack-website",
    meta: { type: "Front-end app", role: "Solo developer", year: "2025" },
  },
];

const ProjectCard = ({ project, flip }) => {
  const info = (
    <div className="flex flex-col justify-center">
      <p className="text-xs text-white/25 font-mono mb-3">{project.index}</p>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
        {project.title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-white/60 bg-white/[0.06] border border-white/[0.1] rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold bg-[#4ade80] text-[#0d0d0d] px-4 py-2 rounded-md hover:bg-[#22c55e] transition-colors"
        >
          Live site ↗
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 border border-white/[0.12] px-4 py-2 rounded-md hover:border-white/30 hover:text-white transition-colors"
        >
          Source code
        </a>
      </div>

      {/* Meta row */}
      <div className="flex gap-6 pt-5 border-t border-white/[0.06]">
        <div>
          <p className="text-xs text-white/25 mb-0.5">Type</p>
          <p className="text-xs text-white/60">{project.meta.type}</p>
        </div>
        <div>
          <p className="text-xs text-white/25 mb-0.5">Role</p>
          <p className="text-xs text-white/60">{project.meta.role}</p>
        </div>
        <div>
          <p className="text-xs text-white/25 mb-0.5">Year</p>
          <p className="text-xs text-white/60">{project.meta.year}</p>
        </div>
      </div>
    </div>
  );

  const preview = (
    <div className="relative">
      {/* Browser chrome */}
      <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/[0.08]">
        {/* Browser top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <div className="flex-1 mx-3 bg-white/[0.06] rounded text-xs text-white/25 px-3 py-1 text-center truncate">
            {project.live.replace("https://", "")}
          </div>
        </div>
        {/* Screenshot */}
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 border-t border-white/[0.06]">
      {flip ? (
        <>
          <div className="order-2 lg:order-1">{preview}</div>
          <div className="order-1 lg:order-2">{info}</div>
        </>
      ) : (
        <>
          <div>{info}</div>
          <div>{preview}</div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <p className="text-xs text-[#4ade80]/50 uppercase tracking-widest mb-3">
        What I've built
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>

      <div>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            flip={i % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
