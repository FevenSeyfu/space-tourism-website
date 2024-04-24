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
        <Header />
        {children}
    </div>
  )
}

export default Layout