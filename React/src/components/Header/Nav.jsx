import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IconClose from "/assets/shared/icon-close.svg";
import IconHamburger from "/assets/shared/icon-hamburger.svg";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className="hidden md:flex flex-row items-center justify-center w-[830px]  text-white absolute h-[96px] right-0 z-40 lg:w-[57.638%] md:w-[450px] md:px-12"
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(40.7742px)",
        }}
      >
        <ul className="flex flex-row lg:gap-[48px] md:gap-9 font-barlow uppercase  leading-[1] lg:text-base lg:tracking-[2.7px] md:text-[14px] md:tracking-wider">
          <li>
            <NavLink
              to="/"
              className="hover:underline hover:opacity-[0.5] lg:underline-offset-[39px] md:underline-offset-[36px] decoration-[3px]  h-[57px]"
            >
              <span className="font-extrabold hidden lg:inline">00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className="hover:underline hover:opacity-[0.5] lg:underline-offset-[39px] md:underline-offset-[36px] h-[57px] decoration-[3px]"
            >
              <span className="font-extrabold hidden lg:inline">01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className="hover:underline hover:opacity-[0.5] lg:underline-offset-[39px] md:underline-offset-[36px] h-[57px] decoration-[3px]"
            >
              <span className="font-extrabold hidden lg:inline">02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className="hover:underline hover:opacity-[0.5] lg:underline-offset-[39px] md:underline-offset-[36px] h-[57px] decoration-[3px]"
            >
              <span className="font-extrabold hidden lg:inline">03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>

      <button onClick={() => setIsOpen(!isOpen)} className="z-20 md:hidden">
        <img
          src={isOpen ? IconClose : IconHamburger}
          alt="menu icon"
          className="z-20 "
        />
      </button>
      {/* mobile menu */}
      <nav
        className={`${!isOpen ? "hidden" : "absolute" } md:hidden  right-0 top-0 w-[254px] h-screen z-10`}
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(40.7742px)",
        }}
      >
        <ul className=" flex flex-col items-start pl-8 pt-28 gap-8 text-white font-barlow uppercase  leading-[1] text-[16px] tracking-[2.7px] opacity-100 ">
          <li>
            <NavLink
              to="/"
              className="flex gap-3"
            >
              <span className="font-extrabold ">00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className="flex gap-3"
            >
              <span className="font-extrabold ">01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className="flex gap-3"
            >
              <span className="font-extrabold ">02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className="flex gap-3"
            >
              <span className="font-extrabold ">03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
