import React from 'react'
import logo1 from '../../assets/Logo 01.png'
import logo2 from '../../assets/Logo 02.png'
import logo3 from '../../assets/Logo 03.png'
import logo4 from '../../assets/Logo 04.png'
import logo5 from '../../assets/Logo 05.png'
import logo6 from '../../assets/Logo 06.png'
import '../../styles/TrustedCompanies.scss'
const Data = [
  {img:logo1}, {img:logo2}, {img:logo3}, {img:logo4}, {img:logo5}, {img:logo6},
]
const TrustedCompanies = () => {
  return (
    <>
    <div className="TrustedCompanies">
     {/* <img src={bg} alt="" /> */}
     <p>Trusted by the World's Best Company</p>
      <div className="content">
       {Data.map((key,value)=>(
      <img src={key.img} key={value} alt="" />
     ))} 
     <p>many more</p>
      </div>

    </div>
  
    </>
  )
}

export default TrustedCompanies