import React from "react";
import TodoItem from "./TodoItem";
function TodoList(props) {
  return (
    <div class="todoListItems">
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
}

export default TodoList;
