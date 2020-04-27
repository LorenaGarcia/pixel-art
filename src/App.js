import React, { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";
import { CirclePicker } from "react-color";

const makeArray = size => {
  return Array(size).fill(Array(size).fill("#61DAF9"));
};

function App() {
  const [selected, setSelected] = useState("");
  const [colors, setColors] = useState(makeArray(5));

  const update = (x, y) => {
    console.log('colorx', x, 'colory', y)
    const newArray = [...colors].map((row, index) => {
      if (index === y) {
        row.splice(x, 1, selected);
      }
      return row;
    });
    setColors(newArray);
  };

  return (
    <div className="App">
      <Grid colors={colors} update={update} />
      <CirclePicker
        color={selected}
        onChangeComplete={color => setSelected(color.hex)}
      />
    </div>
  );
}

export default App;
