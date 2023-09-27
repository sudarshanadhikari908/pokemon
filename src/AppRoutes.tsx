import MyTeam from "@pages/my-team";
import Pokemons from "@pages/pokemons";
import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "@pages/home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/my-team" element={<MyTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
