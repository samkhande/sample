import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { NavLink, Route, Routes } from "react-router-dom";
import { Search } from "./pages/Search";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home </NavLink>||
        <NavLink to="/search"> Search</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
