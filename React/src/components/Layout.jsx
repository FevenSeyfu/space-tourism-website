import React from 'react'
import Header from './Header/Header';

const Layout = ({ children, backgroundImage })=> {
  return (
    <div className="w-screen h-screen text-white" 
    style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div 
        className="absolute inset-0 bg-[#0B0D17] opacity-60"
      />
        <Header />
        {children}
    </div>
  )
}

export default Layout