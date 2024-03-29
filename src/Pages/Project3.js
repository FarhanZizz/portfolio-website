import React from "react";
import fullPage from "../Assets/lens_knight_full.png";
import reviews from "../Assets/reviews.png";
import login from "../Assets/logins.png";
const Project3 = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse justify-center items-center">
      <div className="overflow-hidden mx-auto max-w-2xl">
        <div className="my-5 lg:pt-24 lg:px-24">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={login}
                />
              </div>

              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={reviews}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={fullPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold my-5">Lens Knight</h1>
        <p className="text-2xl">
          A platform for booking different photography services. Features
          MongoDB CRUD Operations & Google Based Authentication System.
        </p>
        <p className="text-lg my-5">
          {" "}
          <span className="text-[#4ce19e]">Technologies Used :</span> React,
          React Router, Firebase, ExpressJS, Vercel, JWT, MongoDB CRUD, Google
          Authentication, Tailwind, Daisy UI.
        </p>
        <div className="flex justify-items-start">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://lens-knight.web.app/"
            className="custom-btn mr-5"
          >
            View Live Website
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/FarhanZizz/lens-knight-client"
            className="custom-btn"
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project3;
