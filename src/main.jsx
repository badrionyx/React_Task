import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import { RouteApp } from "./routers/routerApp.jsx";
import Restaurant from "./routers/Task/components1/RestaurantApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    {/* <RouteApp></RouteApp> */}

    <Restaurant />
  </StrictMode>,
);
