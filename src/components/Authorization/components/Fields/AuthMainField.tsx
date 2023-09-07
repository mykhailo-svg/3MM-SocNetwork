import React from "react";
type updateFields = {
  updateFields: (email: string) => void;
  placeholder?: string;
  label: string;
  value?:string
};
export const AuthMainField: React.FC<updateFields> = ({
  updateFields,
  label,
  placeholder,
  value
}) => {
  return (
    <div className="signup__mainfields-item">
      <div className="signup__label">{label}</div>

      <input
        type="text"
        value={value}
        className="signup__field"
        onChange={(e) => updateFields(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
