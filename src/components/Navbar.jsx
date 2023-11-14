import React from "react";
import logo from "../logo2.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        <img width={170} src={logo} alt="" />
      </h1>
      <div>
        <button className="text-white pr-5">Sign In</button>
        <button className="bg-red-600 text-white  px-6 py-3 rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
