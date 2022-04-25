import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="text-center my-5">
      <h2>Service Details :{service.name}</h2>
      <Link to="/checkout">
        <button className="btn btn-success">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
