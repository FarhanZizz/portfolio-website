import React from "react";
import img from "../Assets/DP.png";

const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "3+", label: "Projects shipped" },
  { value: "5+", label: "Technologies" },
];

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-white/5">
      <p className="text-xs text-[#4ade80]/50 uppercase tracking-widest mb-3">
        Who I am
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="relative  lg:w-[380px] w-[280px] lg:h-[420px] h-[320px] ">
              <img
                src={img}
                alt="Farhan Aziz Mukto"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-white/60 text-base leading-relaxed mb-6">
            I'm a MERN stack developer based in Chittagong, Bangladesh, with a
            genuine passion for building web products that are both fast and
            accessible. I started teaching myself web development over 2 years
            ago and have since shipped full-stack applications covering
            e-commerce, education, and service booking.
          </p>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            I'm currently studying at Probortok College Chittagong and actively
            looking for opportunities where I can contribute to real products,
            grow as an engineer, and work with people who care about quality.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 text-center"
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

          <div className="flex gap-3">
            <a
              href="/#contact"
              className="text-sm font-semibold bg-[#4ade80] text-[#0d0d0d] px-5 py-2.5 rounded-md hover:bg-[#22c55e] transition-colors"
            >
              Get in touch
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1Vqm-NUKD3Rl9eu0JJ5jceaJdJ9i6xwiP"
              className="text-sm text-white/60 px-5 py-2.5 rounded-md border border-white/10 hover:border-white/25 hover:text-white transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
