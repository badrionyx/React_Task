import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyHome } from "./home";
import { Explore } from "./explore";
import { Registration } from "./form";
import { Acknoledge } from "./acknoledgement";
import { Myheader } from "./header";

import "./Check.css"

function CheckWeb() {
  return (
    <BrowserRouter>
  <Myheader/>
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/form" element={<Registration />} />
        <Route path="/acknowledgement" element={<Acknoledge />} />
        <Route path="*" element={<MyHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CheckWeb;