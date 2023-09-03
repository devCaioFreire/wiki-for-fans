import { Route, Routes } from "react-router-dom";

import { Detail } from "../screens/Detail";
import { Home } from "../screens/Home";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:characterId" element={<Detail />} />
    </Routes>
  )
}