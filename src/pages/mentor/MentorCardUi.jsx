const MentorCardUi = ({ name, work_as, mentor,image}) => {
    return (
      <div className="card shadow border-0 text-center p-3">
        <div className="card-body" style={{height :"600px"}}>
          <div className="image-overlay" >
          <img src={image} alt={name} className="img-fluid"  style={{height :"400px",backgroundImage: `url(${image})`,}}/>
          <div className="d-flex justify-content-center "> 
        <div className="overlay-text" style={{height :"600px"}}>
          <h2 className="card-title ">{name}</h2>
          <p className="text-muted">{work_as}</p>
          <p className="fw-bold">Mentor: {mentor}</p>
          
          </div>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MentorCardUi;
  