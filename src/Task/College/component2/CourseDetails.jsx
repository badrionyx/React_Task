import { Link } from "react-router-dom";
import { getCourseById } from "../pages2/courses";
import "../pages2/collegeStyle.css";

export let CourseDetail = ({ id }) => {
  const course = getCourseById(id);

  if (!course) {
    return (
      <main className="detail">
        <p>Course not found.</p>
        <Link to="/">← Back to home</Link>
      </main>
    );
  }

  const backTo = course.shift === "morning" ? "/morning" : "/evening";
  const shiftLabel =
    course.shift === "morning" ? "☀️ Morning Shift" : "🌙 Evening Shift";

  return (
    <main className="detail">
      <Link to={backTo} className="back-link">
        ← Back to {course.shift} courses
      </Link>

      <span className="pill">{shiftLabel}</span>
      <h2 className="detail-title">{course.name}</h2>
      <p className="detail-short">{course.short}</p>

      <div className="detail-stats">
        <div>
          <span className="stat-label">Department</span>
          <strong>{course.dept}</strong>
        </div>
        <div>
          <span className="stat-label">Duration</span>
          <strong>{course.duration}</strong>
        </div>
        <div>
          <span className="stat-label">Seats</span>
          <strong>{course.seats}</strong>
        </div>
      </div>

      <h3 className="block-title">What you'll learn</h3>
      <ul className="detail-list">
        {course.highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="block-title">Eligibility</h3>
      <p>{course.eligibility}</p>
    </main>
  );
};
