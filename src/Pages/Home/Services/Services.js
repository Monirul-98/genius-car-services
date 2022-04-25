import UseServices from "../../../Hooks/UseServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = UseServices();
  return (
    <div className="container" id="services">
      <div className="row">
        <h1 className="service-title my-5">Our services</h1>
        <div className="service-container ms-3">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
