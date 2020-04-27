
import React from "react";
import Row from "./Row";

export default function Grid(props) {
    const grid = props.colors.map((colors, index) => {
      return (
        <Row key={index} colors={colors} index={index} update={props.update} />
      );
    });
    return <div className="grid">{grid}</div>;
  }