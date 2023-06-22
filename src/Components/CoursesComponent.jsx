import React from "react";
import courses from "../MOCK_DATA .json";

function CoursesComponent() {
  return (
      <div className="container-md mt-5 text-center">
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2  ">
          {courses.slice(0, 12).map((course, index) => {
            return (
              <div className="col" key={course.course_id}>
                <div
                  className="card m-2 cursor-pointer"
                  style={{ height: "max-content" }}
                >
                  <img
                    src={course.image}
                    alt={course.course_name}
                    className="card-img-top"
                    style={{ height: "9rem" }}
                  />
                  <div className="card-body d-flex flex-column align-items-start">
                    <span
                      className={`badge my-2 text-light`}
                      style={{
                        background: `${
                          course.course_level === "Beginner"
                            ? "#1abd1d"
                            : course.course_level === "Intermediate"
                            ? "#2b80f0"
                            : "#fc3030"
                        }`,
                      }}
                    >
                      {course.course_level}
                    </span>
                    <h6 className=" text-start" style={{overflow:"hidden",WebkitBoxOrient:"vertical",display:"-webkit-box",WebkitLineClamp:2}}>
                      {course.course_name}
                    </h6>
                    <h5 style={{ padding: "0", fontSize: "14px",color:"gray" }}>
                      <small>By : {course.course_instructor}</small>
                    </h5>
                    <span>
                      <span className="text-warning">&#9733; </span>
                      {course.course_Rating} ( {course.course_Reviews} )
                    </span>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between">
                    <span>Rs.{Math.round(course.course_price)}</span>
                    <button className="border border-0 bg-transparent text-primary p-1">
                        Get Enrolled
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

  );
}

export default CoursesComponent;
