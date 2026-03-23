import React from "react";
import Typewriter from "typewriter-effect";
const Blogs = () => {
  return (
    <h1 className="text-4xl md:text-5xl text-center font-bold pt-40">
      <Typewriter
        options={{
          strings: ["Coming Soon"],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
};

export default Blogs;
