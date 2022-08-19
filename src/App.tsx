import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Checkboxes } from "./Components/CheckBoxes";
import { boxes } from "./data/data";

function App() {
  const [checkbox, setCheckboxes] = useState();

  return (
    <form action="" className="form">
      <Checkboxes  />
    </form>
  );
}

export default App;
