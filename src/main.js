import React from "react";
import ReactDom from "react-dom";

import Counter from "./counter/index.js";

ReactDom.render(
  <div className="some">
    <h2>Сounter</h2>
    <hr />
    <h3>values: min=1 max=5</h3>
    <hr />
    <Counter min={1} max={10} />
    <hr />
    <Counter min={0} max={100} />
    <hr />
  </div>,
  document.querySelector(".app")
);
