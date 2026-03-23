import React from "react";
import { Link } from "react-router-dom";
import fullPage from "../Assets/fullpage.png";
import myProducts from "../Assets/myproducts.png";
import addProduct from "../Assets/addProduct.png";

const tags = [
  "React", "React Router", "Firebase", "Vercel",
  "JWT", "React Query", "Axios", "MongoDB",
  "Tailwind CSS", "Daisy UI", "Stripe",
];

const Project1 = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-white/30 mb-8">
        <Link to="/" className="hover:text-white/60 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-white/50">Mobile Resell Wizards</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left — info */}
        <div>
          <p className="text-xs text-[#4ade80]/50 uppercase tracking-widest mb-3">
            Project 01 of 03
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Mobile Resell Wizards
          </h1>
          <p className="text-white/60 text-base leading-relaxed mb-6">
            A full-stack marketplace for reselling used mobile phones in
            Bangladesh. Features dashboard functionality for three account
            types — Admin, Buyer, and Seller — with Stripe-powered payments and
            JWT-secured routes.
          </p>

          {/* Tech tags */}
          <div className="mb-8">
            <p className="text-xs text-white/25 uppercase tracking-wider mb-3">
              Technologies used
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#4ade80]/70 bg-[#4ade80]/[0.08] border border-[#4ade80]/15 rounded px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-t border-b border-white/[0.06]">
            <div>
              <p className="text-xs text-white/25 mb-1">Type</p>
              <p className="text-sm text-white/70">Full-stack app</p>
            </div>
            <div>
              <p className="text-xs text-white/25 mb-1">Role</p>
              <p className="text-sm text-white/70">Solo developer</p>
            </div>
            <div>
              <p className="text-xs text-white/25 mb-1">Year</p>
              <p className="text-sm text-white/70">2022</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mobile-resell-wizards.web.app/"
              className="text-sm font-semibold bg-[#4ade80] text-[#0d0d0d] px-5 py-2.5 rounded-md hover:bg-[#22c55e] transition-colors"
            >
              Live site ↗
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/FarhanZizz/mobile-resell-wizards-client"
              className="text-sm text-white/60 px-5 py-2.5 rounded-md border border-white/10 hover:border-white/25 hover:text-white transition-colors"
            >
              Source code
            </a>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-8 text-sm text-white/30 hover:text-white/60 transition-colors"
          >
            ← Back to all projects
          </Link>
        </div>

        {/* Right — image grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 rounded-xl overflow-hidden border border-white/[0.08]">
            <img
              src={fullPage}
              alt="Mobile Resell Wizards full page"
              className="w-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-white/[0.08]">
            <img
              src={addProduct}
              alt="Add product screen"
              className="w-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-white/[0.08]">
            <img
              src={myProducts}
              alt="My products screen"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
