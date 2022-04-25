import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogIn from "../SocialLogin/SocialLogIn";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (user) {
    navigate("/home");
  }
  const handleRegister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="registration-form">
      <PageTitle title="Register"></PageTitle>
      <h2 className="text-center text-primary">Please Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Username" id="" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" id="" required />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          id=""
          required
        />
        <input
          className="btn btn-dark text-white w-25 mx-auto"
          type="submit"
          value="Register"
        />
      </form>
      <p className="my-4">
        Already have an account?{" "}
        <Link className="text-info text-decoration-none" to="/login">
          Log in here.
        </Link>
      </p>
      <SocialLogIn></SocialLogIn>
    </div>
  );
};

export default Register;
