import React from "react";
import "../../styles/Management.scss";
const Management = ({ Data: { head, detail, btn, image, color } }) => {
  return (
    <>
      <div className="management">
        <div className="imgBx">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h4 style={{ color: color }}>{head}</h4>
          <h3>{detail}</h3>
          <button className="btn">{btn}</button>
        </div>
      </div>
    </>
  );
};

export default Management;
