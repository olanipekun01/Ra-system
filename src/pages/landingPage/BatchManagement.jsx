import React from 'react'
import '../../styles/Management.scss'
const BatchManagement = ({Data:{head,detail,btn,image,color}}) => {
  return (
    <>
    <div className="management">
           <div className="content">
             <h4 style={{color:color}}>{head}</h4>
    <h3>{detail}</h3>
   <button className='btn'>{btn}</button>
        </div>
         <div className="imgBx">
            <img src={image} alt="" />
        </div>
    </div>
   
    </>
  )
}

export default BatchManagement