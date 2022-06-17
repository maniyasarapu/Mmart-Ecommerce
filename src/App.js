import "./App.css";
import React from "react";
import Header from "./componenets/Header/Header";
import Intro from "./componenets/Intro/Intro";
import Search from "./componenets/Searchbar/SearchBar";
import FrontPage from "./componenets/FrontPage/FrontPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Search />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Intro />} />{" "}
          <Route path="/front" element={<FrontPage />}/>

        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;

