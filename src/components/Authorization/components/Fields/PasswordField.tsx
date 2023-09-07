import React from "react";

type psswordFieldProps = {
  updateField:(password:string)=>void
}

export const PasswordField: React.FC<psswordFieldProps> = ({updateField}) => {
  return (
    <div className="signup__password" style={{ marginTop: "32px" }}>
      <div className="signup__mainfields-item">
        <div className="signup__label">Password</div>
        <div className="signup__input-wrapper">
          <input
            type="password"
            onChange={(e)=>updateField(e.target.value)}
            className="signup__field-password"
            placeholder="sdsdsd@3231qws"
          />
          <div className="signup__password-toggle">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
