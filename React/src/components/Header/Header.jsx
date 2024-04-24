import React from 'react'
import Nav from './Nav'
import Logo from '../../assets/shared/logo.svg'
const Header = () => {
  return (
    <header className='absolute h-[96px] top-[40px] w-[96%] right-0 flex flex-row items-center'>
        <img src={Logo} alt="logo" />
        <div id="horizontal-line" className='absolute left-[10%] h-[1px] w-[32.85%] bg-white  opacity-[0.25] mix-blend-normal z-50'></div>
        <Nav />
    </header>
  )
}


export default Header