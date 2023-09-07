import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import nextStepIcon from "../../../img/next-sgup.svg";

import { useForm } from "react-hook-form";
import { LoginForm } from "../../../@types/Auth/LoginForm";
import { Password } from "../components/Fields/Password";
import { EmailField } from "../components/Fields/EmailField";
import { AuthAlready } from "../components/Fields/AuthAlready";

const Login = () => {
  type TypeLoginForm = {
    email: string;
    password: string;
  };

  const [logdata, setLogData] = useState({ email: "", password: "" });

  const updateFields = (fields: Partial<TypeLoginForm>) => {
    setLogData((prev) => {
      return { ...prev, ...fields };
    });
    alert(logdata.email);
  };

  const updatePassword = (password: string) => {
    updateFields({ password });
  };
  const updateEmail = (email: string) => {
    updateFields({ email });
  };

  const {
    formState: { errors },
  } = useForm<LoginForm>();

  return (
    <div className="signup__container">
      <div className="">{logdata.email}</div>
      <form onSubmit={() => {}} className="signup__content">
        <h1 className="signup__title">Log in</h1>

        <EmailField updateFields={updateEmail} />
        <Password updateField={updatePassword} />

        <NavLink to="/auth/Recovery" className="signup__forgot">
          <svg
            width="26"
            height="26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m25.5 1-12 11.4a.7.7 0 0 1-1 0 .7.7 0 0 1 0-1L24.6 0h-2.7c-.2 0-.3 0-.4.2L10 10.5A7.6 7.6 0 0 0 1.1 14a8 8 0 0 0 1.1 9.6A7.7 7.7 0 0 0 15 21.1a8 8 0 0 0 .3-5.2l2.2-2.6.1-.2h1.7c.2 0 .4 0 .5-.2l.2-.4v-1.8l.6-.6h1.7l.5-.2.2-.5V7.6l2.8-2.8a.7.7 0 0 0 .2-.6L25.5 1ZM8.3 21.6a2.8 2.8 0 0 1-3.1.6c-.5-.2-1-.5-1.3-1A2.9 2.9 0 0 1 5.2 17a2.8 2.8 0 0 1 3 .6 2.8 2.8 0 0 1 .7 3.1l-.6 1Z"
              fill="#A303A0"
            />
          </svg>
          Forgot password
        </NavLink>

        <button className="signup__next-button" onClick={() => {}}>
          <img src={nextStepIcon} alt="" />
        </button>
        {errors.email?.message}

        <AuthAlready
          buttonText="Sign up"
          title="Don't have an account ?"
          link="/auth/Signup"
        />
      </form>
    </div>
  );
};
export default Login;
