import React from "react";
import Career from "./Career";
import CareerCardUi from "./CareerCardUi";

const CareerPage = () => {
  return (
    <div className="container py-5 ">
      <h1 className="text-center mb-5">
        Pick The Right Course To Build Your <br />
        Career
      </h1>
      <div className="row  g-4 justify-content-center">
        {Career.map((item, index) => (
          <div key={index} className="col-md-3 col-lg-2">
            <CareerCardUi title={item.title} icon={item.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
