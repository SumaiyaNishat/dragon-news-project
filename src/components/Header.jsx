import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      {/* <p>
        <span className="text-[#444444]">Sunday,</span> November 27, 2025
      </p> */}
      <p className="text-semibold text-accent">{format(new Date(), 'EEE , MMMM MM , yyyy')}</p>
    </div>
  );
};

export default Header;
