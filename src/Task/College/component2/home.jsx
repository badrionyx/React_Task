import { Link } from "react-router-dom";
import "../pages2/collegeStyle.css";

export let Home = () => {
  return (
    <main className="home">
      <section className="hero2">
        <p className="eyebrow">Mazharul Uloom College</p>
        <h2 className="hero2-title">Find your course by shift</h2>
        <p className="hero2-sub">
          We run classes in two shifts. Pick the one that fits your day and
          explore the courses offered in it.
        </p>
      </section>

      <div className="shift-cards">
        <Link to="/morning" className="shift-card morning">
          <span className="shift-emoji">☀️</span>
          <h3>Morning Shift</h3>
          <p>Regular daytime classes. Great for full-time students.</p>
          <span className="shift-go">View morning courses →</span>
        </Link>

        <Link to="/evening" className="shift-card evening">
          <span className="shift-emoji">🌙</span>
          <h3>Evening Shift</h3>
          <p>Later classes. Ideal if you work or study during the day.</p>
          <span className="shift-go">View evening courses →</span>
        </Link>
      </div>
    </main>
  );
};
