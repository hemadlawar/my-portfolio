import React from "react";
import { MainPage } from "./components/mainPage";

import { BrowserRouter, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        {" "}
        <MainPage />
      </BrowserRouter>
    </div>
  );
}
