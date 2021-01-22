import React from 'react';

const TodoItem = ( {todo, removeTodo,toggleComplete} ) => {
	const handleRemove = (e)=>{
		console.log(`delete click`);
		removeTodo(todo.id)
	}

	const handleToggleComplete = (e)=>{
		toggleComplete(todo.id);
	}


	return (
		<li>
			<span className="todoID">{todo.id}.</span>
			<span className={"title "+ (todo.completed ? "completed" : "")} onClick={handleToggleComplete}>{todo.title}</span>
			<div className="removeTodo" onClick={handleRemove}><i className="far fa-trash-alt"></i></div>
			<div className="togleComplete" onClick={handleToggleComplete}><i className={"far "+(todo.completed ? "fa-check-square":"fa-square")}></i></div>
		</li>
	 );
}

export default TodoItem;
