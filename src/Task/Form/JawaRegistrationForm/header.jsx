import { Link, NavLink } from "react-router-dom";

export let Myheader = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="content">
          <h1>JAWA COMPUTER CENTER</h1>
        </div>
      </Link>
    </>
  );
};
