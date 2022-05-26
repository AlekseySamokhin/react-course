import PropTypes from "prop-types";
import React, { useState } from "react";

function Counter({ min = 1, max }) {
	let [count, setCount] = useState(min);

	function applyCurrent(num) {
		let validNum = Math.max(min, Math.min(max, num));
		setCount(validNum);
	}

	function onCurrentChange(e) {
		let num = parseInt(e.target.value);
		applyCurrent(isNaN(num) ? min : num);
	}

	let inc = () => applyCurrent(count + 1);
	let dec = () => applyCurrent(count - 1);

	return (
		<div>
			<button type="button" onClick={dec}>
				-
			</button>
			<input type="text" value={count} onChange={onCurrentChange} />
			<button type="button" onClick={inc}>
				+
			</button>
		</div>
	);
}

Counter.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired,
};

export default Counter;
