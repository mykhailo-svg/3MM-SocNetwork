import React from "react";
import { NavLink } from "react-router-dom";
import backIcon from "../../../img/signup-back.svg";
import { AuthMainField } from "../components/Fields/AuthMainField";

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
        <AuthMainField label="Email" updateFields={()=>{}} />
      </div>
    </div>
  );
};
export default Recovery;
