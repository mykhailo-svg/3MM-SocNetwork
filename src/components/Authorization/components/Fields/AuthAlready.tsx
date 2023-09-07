import React from "react";
import { NavLink } from "react-router-dom";
type authAlreadyProps = {
  link: string;
  title: string;
  buttonText: string;
};

export const AuthAlready: React.FC<authAlreadyProps> = ({ link, title,buttonText }) => {
  return (
    <div className="signup__already">
      {title}
      <NavLink to={link}>
        <span>{buttonText}</span>
      </NavLink>
    </div>
  );
};
