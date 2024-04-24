import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-style text-white absolute  w-[57.638%] h-[196px] right-0 z-40">
      <ul className="flex flex-row absolute  top-[39px] left-[15%] gap-[48px] font-barlow uppercase tracking-[2.7px] leading-[1] ">
        <li>
          <NavLink
            to="/"
            className="hover:underline hover:opacity-[0.5] underline-offset-[39px] decoration-[3px]  h-[57px]"
          >
            <span className="font-extrabold">00</span> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination"
            className="hover:underline hover:opacity-[0.5] underline-offset-[39px] h-[57px] decoration-[3px]"
          >
            <span className="font-extrabold">01</span> Destination
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew"
            className="hover:underline hover:opacity-[0.5] underline-offset-[39px] h-[57px] decoration-[3px]"
          >
           <span className="font-extrabold">02</span> Crew
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology"
            className="hover:underline hover:opacity-[0.5] underline-offset-[39px] h-[57px] decoration-[3px]"
          >
           <span className="font-extrabold">03</span>  Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
