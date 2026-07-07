import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Myheader } from "./header";
import { MorngShift } from "./MorngShift";
import { EvengShift } from "./EvengShift";
import { Bba } from "../pages2/bba";
import { Bca } from "../pages2/bca";
import { BscMaths } from "../pages2/bscMaths";
import { BaEcnomics } from "../pages2/baEcnomics";
import { BcomComputer } from "../pages2/bcomComputer";
import { BcomCorporate } from "../pages2/bcomCorporate";
import { BscDataScience } from "../pages2/bscDataScience";
import { BscMicro } from "../pages2/bscMicro";
import { Myfooter } from "./footer";

function College() {
  return (
    <BrowserRouter>
      <Myheader />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/morning" element={<MorngShift />} />
        <Route path="/evening" element={<EvengShift />} />

        <Route path="/bca" element={<Bca />} />
        <Route path="/bba" element={<Bba />} />
        <Route path="/bscMaths" element={<BscMaths />} />
        <Route path="/baEcnomics" element={<BaEcnomics />} />
        <Route path="/bcomComputer" element={<BcomComputer />} />
        <Route path="/bcomCorporate" element={<BcomCorporate />} />
        <Route path="/bscDataScience" element={<BscDataScience />} />
        <Route path="/bscMicro" element={<BscMicro />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Myfooter />
    </BrowserRouter>
  );
}

export default College;
