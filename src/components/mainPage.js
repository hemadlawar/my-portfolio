import React from "react";
import NavList from "./navList";
import MainSection from "./mainSection";
import Skills from "./skills";
import { Route, Routes } from "react-router-dom";
import Eductations from "./eductations";
import Contact from "./contact";
export function MainPage() {
  //education
  return (
    <div>
      <NavList />
      <Routes>
        <Route exact path="/" element={<MainSection />}></Route>
        <Route exact path="/education" element={<Eductations />}></Route>
        <Route exact path="/skills" element={<Skills />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}
