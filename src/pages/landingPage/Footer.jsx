import React from 'react'
import logo from '../../assets/Vector-i.svg'
import '../../styles/Footer.scss'
const Footer = () => {
  return (
    <>
    <div className="landingFooter">
        <div className="footerContainer">
          <div className="footerContent">
<h2 style={{display:'flex'}}><img src={logo} alt="" />RA_SYS</h2>
<a href="#">Terms</a>
<a href="#">Privacy</a>
        </div>
        <div className="footerContent" style={{gap:'1rem'}}>
            <a href="#">Support</a>
            <a href="#">Career</a>
            <a href="#">Business Oppurtunities</a>
            <a href="#">Advertisement</a>
            <a href="#">Sponsorship</a>
            </div>
            <div className="footerContent" style={{gap:'1rem'}}>
            <p>Help | Contact Us</p>
<a href='mailto:'>Email:OluwaMatheww@RA_System.com</a>
<a href="tel:+">+2348 5420 9366</a>
<a href="tel:+">+2348 5500 0000</a>
            </div>     
        </div>
     <p style={{textAlign:'center'}}>Version 1.0 @2023 C</p>
    </div>
    </>
  )
}

export default Footer