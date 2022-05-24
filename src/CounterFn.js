import React, { useState } from "react";

export default function () {
  let [current, setCurrent] = useState(1);
  return (
    <div>
      <span> {current} </span>
      <button type="button" onClick={() => setCurrent(current + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCurrent(current - 1)}>
        +
      </button>
    </div>
  );
}
