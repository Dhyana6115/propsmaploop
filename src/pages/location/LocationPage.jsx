import cities from "./Location";
import CityCardUi from "./LocationCardUi";

const LocationPage = () => {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">We are in</h2>
        <div className="row">
          {cities.map((cities, index) => (
            <CityCardUi
              key={index}
              name={cities.name}
              locations={cities.locations}
              image={cities.image}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default LocationPage;