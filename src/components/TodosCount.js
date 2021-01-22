import React from 'react';

const TodosCount = (props) => {
	return (
		<div className="total">total items: <span className="output">{props.count}</span></div>
	)
}

export default TodosCount;