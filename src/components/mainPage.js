import React from "react";
import NavList from "./navList";
import MainSection from "./mainSection";
import { Route, Routes } from "react-router-dom";
import Eductations from "./eductations";
export function MainPage() {
  //education
  return (
    <div>
      <NavList />
      <Routes>
        <Route exact path="/" element={<MainSection />}></Route>
        <Route exact path="/education" element={<Eductations />}></Route>
      </Routes>
    </div>
  );
}
