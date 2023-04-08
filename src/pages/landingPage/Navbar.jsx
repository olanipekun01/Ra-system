import React from 'react'
import '../../styles/Navbar.scss'
import logo from '../../assets/Vector-i.svg'
const Navbar = () => {
  return (
    <>  
      <div className="landingNavbar">
        <div className="logo left">
     <img src={logo} alt="" />
 <h2>RA_SYS</h2>
        </div>
<div className="right">
  <a href="#">Pricing</a>
  <a href="#">About</a>
  <a href="#">Join Us</a>
</div>
      </div>
    </>
  )
}

export default Navbar