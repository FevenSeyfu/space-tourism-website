import React from 'react'
import Nav from './Nav'
import Logo from '../../assets/shared/logo.svg'
const Header = () => {
  return (
    <header className='absolute h-[96px] w-full lg:top-[40px] lg:w-[96%] md:w-[729px] right-0 flex flex-row items-center justify-between p-6 md:p-0'>
        <img src={Logo} alt="logo" />
        <div id="horizontal-line" className='absolute left-[10%] h-[1px] w-[32.85%] bg-white  opacity-[0.25] mix-blend-normal z-50 hidden lg:inline'></div>
        <Nav />
    </header>
  )
}


export default Header