import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>Service Details :{serviceId}</h2>
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
