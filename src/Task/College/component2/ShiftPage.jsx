import { Link } from "react-router-dom";
import { getCoursesByShift } from "../pages2/courses";
import "../pages2/collegeStyle.css";

export let ShiftPage = ({ shift }) => {
  const courses = getCoursesByShift(shift); 
  const title =
    shift === "morning" ?
      "☀️ Morning Shift Courses"
    : "🌙 Evening Shift Courses";

  return (
    <main className="shift-page">
      <h2 className="page-title">{title}</h2>

      <div className="course-grid">
        {courses.map((course) => (
          <Link to={"/" + course.id} key={course.id} className="course-card">
            <span className="pill">{course.dept}</span>
            <h3>{course.name}</h3>
            <p className="course-short">{course.short}</p>
            <div className="course-meta">
              <span>🎓 {course.duration}</span>
              <span>🪑 {course.seats} seats</span>
            </div>
            <span className="course-go">View details →</span>
          </Link>
        ))}
      </div>
    </main>
  );
};
