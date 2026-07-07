import { Link } from "react-router-dom";
import { courses, getCoursesByShift } from "../pages2/courses";
import "../pages2/collegeStyle.css";
import { useState } from "react";

export let ShiftPage = ({ shift }) => {
  let [query, setQuery] = useState("");
  let [dept, setDept] = useState("All");
  // const courses = getCoursesByShift(shift);
  const title =
    shift === "morning" ?
      "☀️ Morning Shift Courses"
    : "🌙 Evening Shift Courses";

  let clean = (text) => text.toLowerCase().replace(/[.\s]/g, "");
  let allCourses = getCoursesByShift(shift);

  let term = clean(query);

  let department = ["All", ...new Set(allCourses.map((course) => course.dept))];

  const courses = allCourses.filter((course) => {
    let matched =
      term === "" ||
      clean(course.name).include(term) ||
      clean(course.dept).include(term);

    let matchDept = dept === "All" || course.dept === dept;

    return matched && matchDept;
  });

  return (
    <main className="shift-page">
      <h2 className="page-title">{title}</h2>

      <input
        type="text"
        className="search-box"
        placeholder="Search by course name or department…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>

      <div className="filter-chips">
        {department.map((name) => (
          <button
            key={name}
            className={"chip" + (dept === name ? " active" : "")}
            onClick={() => setDept(name)}
          >
            {name}
          </button>
        ))}
      </div>

      {courses.length === 0 ?
        <p className="no-results">No courses match “{query}”.</p>
      : <div className="course-grid">
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
      }
    </main>
  );
};
