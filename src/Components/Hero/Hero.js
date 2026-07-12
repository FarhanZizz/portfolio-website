import React, { useEffect, useState } from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Express.js",
  "Tailwind CSS",
  "Supabase",
];

const codeLines = [
  { text: "const developer = {", indent: 0, color: "white" },
  { text: "name: ", indent: 1, color: "purple", value: "'Farhan Aziz Mukto'," },
  {
    text: "role: ",
    indent: 1,
    color: "purple",
    value: "'Full Stack Developer',",
  },
  { text: "experience: ", indent: 1, color: "purple", value: "'2+ years'," },
  { text: "stack: [", indent: 1, color: "purple" },
  { text: "'React'", indent: 2, color: "green", suffix: "," },
  { text: "'Next.js'", indent: 2, color: "green", suffix: "," },
  { text: "'TypeScript'", indent: 2, color: "green", suffix: "," },
  { text: "],", indent: 1, color: "white" },
  { text: "shipping: ", indent: 1, color: "purple", value: "true," },
  { text: "};", indent: 0, color: "white" },
];

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* Left — text */}
        <div className="hero-text fade-up">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Available for work</span>
          </div>

          <h1 className="hero-heading">
            Hi, I'm <span className="hero-name">Farhan Aziz Mukto</span>
            <br />
            <span className="hero-typewriter">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer.",
                    "React Developer.",
                    "Node.js Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <p className="hero-bio">
            Two years of production experience building, deploying, and
            maintaining real-world web applications for active businesses. I own
            projects end to end — database design, backend APIs, and frontend
            builds.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn-primary">
              View my work
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1tT-GzG_npvzJxkbRohCsrMwwN6W67XHn"
              className="hero-btn-ghost"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-stack">
            <p className="hero-stack-label">Tech stack</p>
            <div className="hero-stack-pills">
              {techStack.map((tech) => (
                <span key={tech} className="hero-stack-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — terminal */}
        <div
          className="hero-terminal-wrap fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="terminal-window">
            <div className="terminal-bar">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="terminal-title">developer.js</span>
            </div>
            <div className="terminal-body">
              {codeLines.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  className="terminal-line"
                  style={{ paddingLeft: `${line.indent * 20}px` }}
                >
                  <span className="terminal-line-number">{i + 1}</span>
                  <span className={`terminal-text terminal-${line.color}`}>
                    {line.text}
                  </span>
                  {line.value && (
                    <span className="terminal-orange">{line.value}</span>
                  )}
                  {line.suffix && (
                    <span className="terminal-white">{line.suffix}</span>
                  )}
                </div>
              ))}
              {visibleLines >= codeLines.length && (
                <div className="terminal-cursor-line">
                  <span className="terminal-cursor">▍</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
