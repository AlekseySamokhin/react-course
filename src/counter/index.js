import React, { useState } from "react";
import PropTypes from "prop-types";

function Counter({ min = 1, max }) {
  let [current, setCurrent] = useState(min);

  function applyCurrent(num) {
    let validNum = Math.max(min, Math.min(max, num));
    setCurrent(validNum);
  }

  function onCurrentChange(e) {
    let num = parseInt(e.target.value);
    applyCurrent(isNaN(num) ? min : num);
  }

  let inc = () => applyCurrent(current + 1);
  let dec = () => applyCurrent(current - 1);

  return (
    <div>
      <button type="button" onClick={dec}>-</button>
      <input type="text" value={current} onChange={onCurrentChange} />
      <button type="button" onClick={inc}>+</button>
    </div>
  );
}

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
};

export default Counter;
