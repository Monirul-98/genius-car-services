import React from "react";

const Footer = () => {
  return (
    <footer>
      <p className="text-center">
        <small>
          &copy;All rights reserved by Monirul.{new Date().getFullYear()}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
