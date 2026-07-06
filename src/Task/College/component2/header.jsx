import { Link, NavLink } from "react-router-dom";
import "../pages2/collegeStyle.css";

export let Myheader = () => {
  return (
    <header>
      <Link to="/" id="college">
        MAZHARUL ULOOM COLLEGE
      </Link>

      <nav className="shiftbar">
        <NavLink to="/morning" className="shift-link">
          ☀️ Morning Shift
        </NavLink>
        <NavLink to="/evening" className="shift-link">
          🌙 Evening Shift
        </NavLink>
      </nav>
    </header>
  );
};
