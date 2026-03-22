import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  const { pathname } = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <Navbar />
      <div className="max-w-screen-xl px-6 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
