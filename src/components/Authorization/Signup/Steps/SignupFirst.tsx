import React from "react";
import { AuthMainField } from "../../components/Fields/AuthMainField";

type userData = {
  Name: string;
  Email: string;
};
type TypeFirstFormProps = userData & {
  updateForm: (fields: Partial<userData>) => void;
};

const SignupFirst: React.FC<TypeFirstFormProps> = ({
  Name,
  Email,
  // updateForm,
}) => {
  return (
    <>
      <div className="signup__mainfields">
        <div className="signup__fields-row">
          <AuthMainField label="Name"  value={Name} updateFields={()=>{}} />
          <AuthMainField label="Email"  value={Email} updateFields={()=>{}} />
        </div>
        <div className="signup__agree-row">
          <div className="signup__agree-checkbox">
            <input className="sminp" type="checkbox" />
            <div className="smdiv"></div>
          </div>
          I’ve read and agree with terms of service and our <br /> privacy
          policy
        </div>
      </div>
    </>
  );
};
export default SignupFirst;
