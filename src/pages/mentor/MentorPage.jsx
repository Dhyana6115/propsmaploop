import React from "react";
import Mentor from "./Mentor"; 
import MentorCardUi from "./MentorCardUi";

const MentorPage = () => {
  return (
    <>
    <div className="container py-5">
      <h2 className="text-center p-3">Our Syllabus Mentor</h2>
      <div className="row g-4">
        {
        Mentor.map((mentor, index) => (
          <div  className="col-md-6 col-lg-3">
            <MentorCardUi
            key={index}
            image={mentor.image}
              name={mentor.name}
              work_as={mentor.work_as}
              mentor={mentor.mentor}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MentorPage;
