import { Link } from "react-router";

export let MyHome = () => {
  return (
    <div className="hero">
      <h1>Welcome to Our Kitchen 🍛</h1>
      <p>Discover delicious homemade Indian recipes, made simple.</p>
      <Link to="/recipes" className="hero-btn">
        View Recipes
      </Link>
    </div>
  );
};
