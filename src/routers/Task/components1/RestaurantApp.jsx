import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Myheader } from "./header";
import { MyRecipes } from "../pages1/recipes";
import { MyAbout } from "../pages1/about";

function Restaurant() {
  return;
  <>
    <BrowserRouter>
      <Myheader>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MyRecipes /> <MyAbout />
              </>
            }
          />
          <Route path="recipes" element=<MyRecipes /> />
          <Route path="about" element=<MyAbout /> />
        </Routes>
      </Myheader>
    </BrowserRouter>
  </>;
}

export default Restaurant;
