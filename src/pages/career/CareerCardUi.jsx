const CareerCardUi = ({ title, icon }) => {
  return (
    <div
      className="card shadow border-0 text-center p-3 "
      style={{ height: "150px" }}
    >
      <div className="mb-3" style={{ fontSize: "2rem" }}>
        {icon}
      </div>
      <h5 className="card-title">{title}</h5>
    </div>
  );
};

export default CareerCardUi;
