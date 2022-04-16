import React from "react";
import sleeping from "../../images/achievementbg.jpg";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-danger text-center ">404 Page Not Found</h2>
      <img className="w-50 d-block mx-auto" src={sleeping} alt="" />
    </div>
  );
};

export default NotFound;
