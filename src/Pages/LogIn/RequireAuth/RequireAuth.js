import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  let location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  console.log(user);
  if (!user.emailVerified) {
    return (
      <div className="my-5 text-center">
        <h3 className="text-danger">Your email is not verified!</h3>
        <h3 className="text-info">Please Verify your email!</h3>

        <button
          className="btn btn-dark"
          onClick={async () => {
            await sendEmailVerification();
            alert("Verification email sent!");
          }}
        >
          Send email again
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
