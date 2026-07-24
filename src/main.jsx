import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CheckWeb from "./Task/Form/JawaRegistrationForm/checkTaskApp";
// import "./index.css";
// import App from "./App.jsx";
// import { RouteApp } from "./routers/routerApp.jsx";
// import Restaurant from "./Task/Restaurant/components1/RestaurantApp.jsx";
// import College from "./Task/College/component2/CollegeApp.jsx";
// import ProductApp from "./Task/ProductCart/component3/ProductApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    {/* <RouteApp></RouteApp> */}

    {/* <Restaurant/>  */}

    {/* <College/> */}

    {/* <ProductApp /> */}

    <CheckWeb/>
  </StrictMode>,
);
