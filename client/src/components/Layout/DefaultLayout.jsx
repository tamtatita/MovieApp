import React from "react";
import Footer from "../global/Footer";
import Header from "../global/Header";
import Sidebar from "../global/Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full bg-[#1b1b1b] text-white">
      <div className="flex ">
        <div className="sm:hidden flex">
          <Sidebar  />
        </div>
        <div className="basis-[80%] flex-1">
          <Header />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
