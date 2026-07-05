import { Link } from "react-router-dom";

export let Myheader = () => {
  return (
    <nav className="navbar">
      <Link to="/">HOME</Link>
      {/* <Link to="/recipeDetails">RECIPE DETAILS</Link> */}
      <Link to="/recipes">RECIPES</Link>
      <Link to="/about">ABOUT</Link>
    </nav>
  );
};
