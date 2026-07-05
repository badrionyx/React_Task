import { Link } from "react-router-dom";
import { recipes } from "../data1/recipes";

export let MyHome = () => {
  const featured = recipes.slice(0, 3);

  return (
    <>
      <section className="hero">
        <h1>Welcome to Our Kitchen 🍛</h1>
        <p>Authentic Indian flavors, made simple at home.</p>
        <Link to="/recipes" className="hero-btn">
          Explore All Recipes
        </Link>
      </section>

      <section className="showcase">
        <h2 className="showcase-title">Featured Dishes</h2>
        <div className="showcase-grid">
          {featured.map((recipe) => (
            <Link
              to={`/recipes/${recipe.id}`}
              key={recipe.id}
              className="showcase-card"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="showcase-img"
              />
              <div className="showcase-info">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <span className="showcase-link">View Recipe →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
