/*tslint:disable*/
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { LoginForm } from "../../../../@types/Auth/LoginForm";
type updateFields = {
  updateFields: (email: string) => void;
  placeholder?: string;
  label: string;
  value?: string;
  register: UseFormRegister<LoginForm>;
};
export const AuthMainField: React.FC<updateFields> = ({
  updateFields,
  label,
  placeholder,
  value,
  register,
}) => {
  return (
    <div className="signup__mainfields-item">
      <div className="signup__label">{label}</div>

      <input
        {...register("email", {
          required: "Email is required!!!",
          pattern: {
            message: "Enter valid email!",
            value:
              /^(([^<>()[\],;:\s@"]+(\.[^<>()[\],;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/i,
          },
        })}
        type="text"
        value={value}
        className="signup__field"
        onChange={(e) => updateFields(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
