import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='absolute w-[830px] h-[96px] left-[610px] top-[40px] background-[rgba(255, 255, 255, 0.04)] backdrop-filter-[blur(40.7742px)]'> 
        <ul>   
          <li>
            <Link to="/">00 Home</Link>
          </li>
          <li>
            <Link to="/destination">01 Destination</Link>
          </li>
          <li>
            <Link to="/crew">02 Crew</Link>
          </li>
          <li>
            <Link to="/technology">03 Technology</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Nav