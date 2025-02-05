import { useState } from "react";
import NavBar from "./NavBar";
import HTMLCarousel from "./HTMLCarousel";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />;
      {
        // useContext so that HTMLCarousel appears and
        // disappears on each click
      }
      <HTMLCarousel />;
    </>
  );
}

export default App;
