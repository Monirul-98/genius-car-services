import React from "react";
import UseServices from "../../Hooks/UseServices";

const ManageService = () => {
  const [services, setServices] = UseServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center my-4">Manage Service</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h5 className="mb-2">
            {service.name}{" "}
            <button
              onClick={() => handleDelete(service._id)}
              className="btn btn-danger"
            >
              X
            </button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
