import { Link } from "react-router";

export let Myheader = () => {
  return (
    <>
      <Link to="/">HOME</Link>
      <Link to="/recipes">RECIPES</Link>
      <Link to="/about">ABOUT</Link>
    </>
  );
};
