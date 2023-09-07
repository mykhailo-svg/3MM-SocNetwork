import React from "react";
type updateFields = {
  updateFields: (email: string) => void;
};
export const EmailField: React.FC<updateFields> = ({updateFields}) => {
  return (
    <div className="signup__mainfields-item">
      <div className="signup__label">Email</div>

      <input
        type="text"
        className="signup__field"
        onChange={(e)=>updateFields(e.target.value)}
        placeholder="wyzdryk@gmail.com"
      />
    </div>
  );
};
