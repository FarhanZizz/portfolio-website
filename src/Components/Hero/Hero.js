import React from "react";
import img from "../../Assets/DP.png";
import "./Hero.css";
import Typewriter from "typewriter-effect";

const techStack = [
  "React", "Node.js", "TypeScript", "MongoDB",
  "Next.js", "Tailwind CSS", "Firebase", "Express",
];

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">

        {/* Left — text */}
        <div className="hero-text fade-up">
          {/* Available badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Available for work</span>
          </div>

          <h1 className="hero-heading">
            Hi, I'm{" "}
            <span className="hero-name">Farhan Aziz Mukto</span>
            <br />
            <span className="hero-typewriter">
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer.",
                    "React Developer.",
                    "Full Stack Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <p className="hero-bio">
            Based in Chittagong, Bangladesh. I build fast, accessible web apps
            — from landing pages to full-stack products. 2+ years of
            hands-on experience.
          </p>

          {/* CTA buttons */}
          <div className="hero-actions">
            <a href="#projects" className="hero-btn-primary">
              View my work
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1Vqm-NUKD3Rl9eu0JJ5jceaJdJ9i6xwiP"
              className="hero-btn-ghost"
            >
              Download CV
            </a>
          </div>

          {/* Tech stack */}
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

        {/* Right — photo */}
        <div className="hero-photo-wrap fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="hero-photo-accent" />
          <div className="hero-photo-frame">
            <img src={img} alt="Farhan Aziz Mukto" className="hero-photo-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
