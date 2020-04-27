import React from "react";

export default function Row(props) {
    const row = props.colors.map((color, index) => {
      return (
        <div
          className="pixel"
          key={index}
          style={{ backgroundColor: color }}
          onClick={() => props.update(index, props.index)}
        />
      );
    });
    return <div className="row">{row}</div>;
  }