import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";

const SocialLogIn = () => {
  return (
    <div>
      <div className="d-flex align-items-center ">
        <div style={{ height: "1px" }} className="w-50 bg-dark "></div>
        <p className="mt-3 p-3">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-dark "></div>
      </div>
      <button className="btn btn-dark w-50 mx-auto d-block my-3">
        <img style={{ height: "30px" }} src={google} alt="" />
        <span className="px-2 ">Google Sign In</span>
      </button>
      <button className="btn btn-dark w-50 mx-auto d-block my-3">
        <img style={{ height: "30px" }} src={facebook} alt="" />
        <span className="px-2 ">Facebook Sign In</span>
      </button>
      <button className="btn btn-dark w-50 mx-auto d-block my-3">
        <img style={{ height: "30px" }} src={github} alt="" />
        <span className="px-2 ">Github Sign In</span>
      </button>
    </div>
  );
};

export default SocialLogIn;
