import course from "./Course";
import CourseCardUi from "./CourseCardUi";

const CoursePage = () => {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Career Courses</h2>
        <div className="row">
          {course.map((course) => (
            <CourseCardUi 
              // key={index}
              title={course.title}
              description={course.description}
              image={course.image}
              buttonText={course.buttonText}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default CoursePage;