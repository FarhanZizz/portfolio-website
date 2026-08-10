import React from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Redux", "GSAP", "Framer Motion", "React Router", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Drizzle ORM", "Prisma", "Supabase", "MongoDB", "Mongoose", "Firebase"],
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Vercel", "Netlify", "Figma", "Canva"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t border-white/5">
      <p className="text-xs text-[#4ade80]/50 uppercase tracking-widest mb-3">
        What I work with
      </p>
      <h2 className="display-heading font-bold mb-12">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 transition-colors duration-200 hover:border-white/[0.15]"
          >
            <p className="text-xs text-[#4ade80]/70 font-semibold mb-4 uppercase tracking-wider">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-white/50 bg-white/5 border border-white/[0.08] rounded px-2.5 py-1 transition-colors duration-200 hover:border-white/20 hover:text-white/70"
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
