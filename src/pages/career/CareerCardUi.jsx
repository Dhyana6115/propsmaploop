const CareerCardUi = ({ title, icon }) => {
  return (
    <div
      className="card shadow-lg border-0 text-center p-4"
      style={{
        height: "170px",
        borderRadius: "10px",
        
        
      }}
    >
      <div className="mx-3" style={{ fontSize: "2.5rem"}}>
        {icon}
      </div>
      <h5 className="card-title">{title}</h5>
    </div>
  );
};

export default CareerCardUi;
