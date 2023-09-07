import React from "react";
import { NavLink } from "react-router-dom";
import backIcon from "../../../img/signup-back.svg";
import { EmailField } from "../components/Fields/EmailField";

const Recovery = () => {
  return (
    <div className="signup__container">
      <div className="signup__content">
        <h1 className="signup__title">
          <NavLink to="/auth/Log">
            <img src={backIcon} alt="" />
          </NavLink>
          Password Recovery
        </h1>
        <EmailField updateFields={()=>{}} />
      </div>
    </div>
  );
};
export default Recovery;
