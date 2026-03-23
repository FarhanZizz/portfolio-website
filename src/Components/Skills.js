import React from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Gsap",
      "Framer Motion",
      "React Router",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "GraphQL",
    ],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Firebase"],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Stripe",
      "EmailJS",
      "Figma",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t border-white/5">
      <p className="text-xs text-[#4ade80]/50 uppercase tracking-widest mb-3">
        What I work with
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 hover:border-white/[0.15] transition-colors"
          >
            <p className="text-xs text-[#4ade80]/70 font-semibold mb-4 uppercase tracking-wider">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-white/50 bg-white/5 border border-white/[0.08] rounded px-2.5 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
