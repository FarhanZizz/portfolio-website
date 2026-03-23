import React from "react";
import img1 from "../Assets/Untitled.png";
import img2 from "../Assets/thumbnail_2.png";
import img3 from "../Assets/thumbnail_3.png";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "Mobile Resell Wizards",
    description:
      "Full-stack marketplace for reselling used mobile phones in Bangladesh. Three-role dashboard for admins, buyers, and sellers with Stripe payments.",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Stripe", "Tailwind CSS"],
    image: img1,
    live: "https://mobile-resell-wizards.web.app/",
    code: "https://github.com/FarhanZizz/mobile-resell-wizards-client",
    detailPath: "/projects/1",
  },
  {
    id: 2,
    title: "Photography Related Services",
    description:
      "Booking platform for photography sessions with portfolio galleries, service listings, and Google-based authentication.",
    tags: ["React", "Firebase", "MongoDB", "JWT", "Tailwind CSS"],
    image: img3,
    live: "https://lens-knight.web.app/",
    code: "https://github.com/FarhanZizz/lens-knight-client",
    detailPath: "/projects/3",
  },
  {
    id: 3,
    title: "Technology Education Website",
    description:
      "Learning platform with course listings, instructor profiles, and Google/GitHub authentication for tech students.",
    tags: ["React", "Firebase", "MongoDB", "JWT", "Daisy UI"],
    image: img2,
    live: "https://tech-ed-6d513.web.app/",
    code: "https://github.com/FarhanZizz/tech-ed",
    detailPath: "/projects/2",
  },
];

const ProjectCard = ({ project, index }) => (
  <div className="group bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/[0.15] transition-all duration-300">
    {/* Thumbnail */}
    <div className="relative overflow-hidden h-48 bg-white/5">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 group-hover:opacity-20"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
        <a
          target="_blank"
          rel="noreferrer"
          href={project.live}
          className="text-xs font-semibold text-[#0d0d0d] bg-[#4ade80] px-4 py-2 rounded-md hover:bg-[#22c55e] transition-colors"
        >
          Live ↗
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={project.code}
          className="text-xs text-white border border-white/30 px-4 py-2 rounded-md hover:border-white/60 transition-colors"
        >
          Code
        </a>
      </div>

      {/* Index badge */}
      <span className="absolute top-3 right-3 text-xs text-white/20 font-mono">
        0{index + 1}
      </span>
    </div>

    {/* Info */}
    <div className="p-5">
      <Link
        to={project.detailPath}
        className="text-base font-semibold text-white hover:text-[#4ade80] transition-colors block mb-2"
      >
        {project.title}
      </Link>
      <p className="text-sm text-white/45 leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-[#4ade80]/70 bg-[#4ade80]/[0.08] border border-[#4ade80]/15 rounded px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom links */}
      <div className="flex gap-4 pt-4 border-t border-white/[0.06]">
        <a
          target="_blank"
          rel="noreferrer"
          href={project.live}
          className="text-xs text-[#4ade80] hover:text-[#22c55e] transition-colors"
        >
          Live site ↗
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={project.code}
          className="text-xs text-white/40 hover:text-white/70 transition-colors"
        >
          Source code
        </a>
        <Link
          to={project.detailPath}
          className="text-xs text-white/40 hover:text-white/70 transition-colors ml-auto"
        >
          Details →
        </Link>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <p className="text-xs text-[#4ade80]/50 uppercase tracking-widest mb-3">
        What I've built
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
