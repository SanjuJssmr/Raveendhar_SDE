import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi"


const Navbar = () => {
  return (
    <div className="flex w-full fixed top-0 z-20 p-5 h-16 shadow-md drop-shadow-md rounded-b-full justify-center text-white  text-2xl bg-[#1877f2]  ">
      <section className="flex items-center justify-center gap-20 w-full ">
        <a href="https://github.com/SanjuJssmr" className=" hover:text-3xl transition-all ease-in-out">{<FaGithub />}</a>
        <a href="https://www.linkedin.com/in/raveendhar-santhanam-8aba58201/" className=" hover:text-3xl transition-all ease-in-out">{<FaLinkedin />}</a>
        <a href="mailto:sanjuravi134@gmail.com" className=" hover:text-3xl transition-all ease-in-out">{<BiLogoGmail />}</a>
      </section>
    </div>
  );
};

export default Navbar;
