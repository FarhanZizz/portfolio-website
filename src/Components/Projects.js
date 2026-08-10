import React from "react";

const projects = [
  {
    index: "01 / 03",
    title: "CrackCU",
    image: "/crackcu.png",
    subtitle: "Admission prep coaching business · Full-stack platform",
    description:
      "Full-stack admission prep platform for Chittagong University students. Hired on contract to fix bugs and improve SEO, then retained for ongoing feature development. Built student-facing features covering video classes organized by subject and class number, mock tests with instant scoring and full answer review, study resources, and university notices. Also built an admin panel for managing courses, classes, mock tests, notices, and full visibility into student submissions.",
    tags: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "React", "Vite"],
    url: "crackcu.com",
    live: "https://crackcu.com/",
    meta: {
      type: "Client project",
      role: "Freelance developer",
      year: "2026 – Present",
    },
  },
  {
    index: "02 / 03",
    title: "Delco Water",
    image: "/delco.png",
    subtitle: "Bottled water SME · Business management platform",
    description:
      "Business management platform built for a bottled water SME, in active daily use since launch. Includes an analytics dashboard with desktop and tablet layouts showing monthly earnings, per-dealer sales breakdown, and six-month trend charts. Also handles cap inventory tracking with automatic stock calculation and mismatch detection, plus a customer directory with full CRUD, one-tap call/WhatsApp actions, and price-sorted search.",
    tags: ["HTML", "CSS", "JavaScript", "Supabase"],
    url: "delco-water.netlify.app",
    live: "https://delco-water.netlify.app/",
    meta: {
      type: "Client project",
      role: "Freelance developer",
      year: "2026 – Present",
    },
  },
  {
    index: "03 / 03",
    title: "Typaro",
    image: "/typaro.png",
    subtitle: "AI-integrated blogging platform · Team project",
    description:
      "AI-integrated blogging platform built with a 3-person team. Owned frontend development end to end, engineered GSAP ScrollTrigger and Lenis animations, a custom theme toggle, a filterable blog listing with search, page transitions, protected routes, and loading skeletons.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "Gemini API"],
    url: "typaro.vercel.app",
    live: "https://typaro.vercel.app/",
    meta: { type: "Team project", role: "Frontend developer", year: "2026" },
  },
];

const ProjectCard = ({ project, flip }) => {
  const info = (
    <div className="flex flex-col justify-center">
      <p className="text-xs text-white/25 font-mono mb-3">{project.index}</p>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
        {project.title}
      </h3>
      <p className="text-sm text-[#4ade80]/70 mb-4">{project.subtitle}</p>
      <p className="text-sm text-white/50 leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-white/60 bg-white/[0.06] border border-white/[0.1] rounded-full px-3 py-1 transition-colors duration-200 hover:border-white/25 hover:text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mb-6">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="press-feedback inline-flex items-center gap-1.5 text-sm font-semibold bg-[#4ade80] text-[#0d0d0d] px-4 py-2 rounded-md hover:bg-[#22c55e] transition-colors"
        >
          Visit site ↗
        </a>
      </div>

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
          <p className="text-xs text-white/25 mb-0.5">Timeline</p>
          <p className="text-xs text-white/60">{project.meta.year}</p>
        </div>
      </div>
    </div>
  );

  // Border and image now animate on the same 300ms curve on group-hover,
  // instead of the image having no hover motion at all.
  const preview = (
    <div className="relative group">
      <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/[0.08] transition-colors duration-300 group-hover:border-white/[0.15]">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <div className="flex-1 mx-3 bg-white/[0.06] rounded text-xs text-white/25 px-3 py-1 text-center truncate">
            {project.url}
          </div>
        </div>
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
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
      <h2 className="display-heading font-bold mb-4">Projects</h2>

      <div>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            flip={i % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
