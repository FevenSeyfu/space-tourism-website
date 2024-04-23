import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-style text-white absolute left-[610px] z-40">
      <ul className="flex flex-row absolute  top-[39px] left-[123px] gap-[48px] font-barlow uppercase tracking-[2.7px] leading-[1] ">
        <li>
          <NavLink
            to="/"
            exact
            className={`hover:underline hover:opacity-[0.5] underline-offset-[37px] h-[57px] decoration-[3px] ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}
            activeClassName="underline opacity-1"
          >
            <span className="font-extrabold">00</span> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination">
            <span className="font-extrabold pr-[13px]">01</span> Destination
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew">02 Crew</NavLink>
        </li>
        <li>
          <NavLink to="/technology">03 Technology</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
