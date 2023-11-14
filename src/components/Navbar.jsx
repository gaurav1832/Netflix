import React from "react";
import logo from "../logo2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          <img width={170} src={logo} alt="" />
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="text-white pr-5">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 text-white  px-6 py-3 rounded cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
