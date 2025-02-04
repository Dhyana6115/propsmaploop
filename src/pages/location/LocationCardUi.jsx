const CityCardUi = ({ name, locations, image }) => {
    return (
      <div className="col-lg-3 my-5 p-5 shadow bg-white rounded">
        <div className="city-card">
          <img src={image} alt={name} className="img-fluid rounded" />
          <div className="city-name">{name.toUpperCase()}</div>
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{locations}</p>
          </div>
        </div>
      </div>
    );
  };
  export default CityCardUi;