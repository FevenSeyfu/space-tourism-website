import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-style text-white absolute left-[610px] z-40">
      <ul className="flex flex-row absolute  top-[39px] left-[123px] gap-[48px] font-barlow uppercase tracking-[2.7px] leading-[1] ">
        <li>
          <NavLink
            exact
            to="/"
            className="hover:underline hover:opacity-[0.5] underline-offset-[39px] decoration-[3px]  h-[57px]"
          >
            <span className="font-extrabold">00</span> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination"
         className="hover:underline hover:opacity-[0.5] underline-offset-[39px] h-[57px] decoration-[3px]"
         activeClassName="text-blue-700 font-bold">
            <span className="font-extrabold">01</span> Destination
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew"
          className="hover:underline hover:opacity-[0.5] underline-offset-[39px] h-[57px] decoration-[3px]"
          activeClassName="text-blue-700 font-bold"
          >02 Crew</NavLink>
        </li>
        <li>
          <NavLink to="/technology"
          className="hover:underline hover:opacity-[0.5] underline-offset-[39px] h-[57px] decoration-[3px]"
          activeClassName="text-blue-700 font-bold"
          >03 Technology</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
