const CourseCardUi = ({ title, description, image, buttonText }) => {
    return (
        <>
      <div className="card col-lg-6 text-center p-3 border-0">
        <div className="card-body w-75 text-center p-5  shadow " style={{ height: "600px" }}>
          <img src={image} alt={title} className="card-img-top p-4" style={{ height: "270px" }} />
          <div className="card-body" >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary ">{buttonText}</button>
          </div>
        </div>
      </div>
      </>
    );
  };
  export default CourseCardUi;