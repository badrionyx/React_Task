import { Link } from "react-router-dom";

export let Myheader = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        Bidda Restaurant 🍛
      </Link>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/recipes">RECIPES</Link>
        <Link to="/about">ABOUT</Link>
      </div>
    </nav>
  );
};
