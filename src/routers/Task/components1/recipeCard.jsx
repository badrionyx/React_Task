import { Link } from "react-router-dom";

export let RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.id}`} className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-img" />
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
    </Link>
  );
};