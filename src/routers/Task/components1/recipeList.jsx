import { recipes } from "../data1/recipes";
import { RecipeCard } from "./recipeCard";
import "../pages1/styleRecipe.css";

export let RecipeList = () => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};