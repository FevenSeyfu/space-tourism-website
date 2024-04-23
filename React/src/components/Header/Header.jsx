import React from 'react'
import Nav from './Nav'
import Logo from '../../assets/shared/logo.svg'
const Header = () => {
  return (
    <header className='absolute h-[96px] top-[40px] w-[1385px] flex flex-row items-center'>
        <img src={Logo} alt="logo" className='ml-[55px]'/>
        <div id="horizontal-line" className='absolute left-[167px] h-[1px] w-[473px] bg-white  opacity-[0.25] mix-blend-normal z-50'></div>
        <Nav />
    </header>
  )
}


export default Header