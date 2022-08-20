import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Checkboxes } from "./Components/CheckBoxes";
import { boxes } from "./data/data";

function App() {
  return (
    <section className="main">
      <Checkboxes />
    </section>
  );
}

export default App;
