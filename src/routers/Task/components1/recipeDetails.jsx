import { useParams, Link } from "react-router-dom";
import { recipes } from "../data1/recipes";

export let RecipeDetails = () => {
  const { id } = useParams();                       // 👈 reads ":id" from the URL
  const recipe = recipes.find((r) => r.id === Number(id));

  // If someone visits a bad id like /recipes/999
  if (!recipe) {
    return (
      <div className="recipe-details">
        <h2>Recipe not found 😕</h2>
        <Link to="/recipes">⬅ Back to recipes</Link>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <Link to="/recipes">⬅ Back to recipes</Link>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="details-img" />
      <p>{recipe.description}</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};