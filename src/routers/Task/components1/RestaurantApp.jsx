import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Myheader } from "./header";
import { MyRecipes } from "../pages1/recipes";
import { MyAbout } from "../pages1/about";
import { MyHome } from "../pages1/home";
import { RecipeDetails } from "./recipeDetails";
import { Footer } from "./footer";

function Restaurant() {
  return (
    <>
      <BrowserRouter>
        <Myheader />
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="recipes" element={<MyRecipes />} />
          <Route path="recipes/:id" element={<RecipeDetails />} />
          <Route path="about" element={<MyAbout />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default Restaurant;
