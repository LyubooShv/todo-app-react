import React from 'react';
import './App.css';
import Header  from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodosCount from "./components/TodosCount";

class App extends React.Component {
  constructor(props){
    super(props)

    this.appName = 'Simple Todo App ';

    this.state = {
      error: null,
      isLoaded: false,
      todos: [],
    };
  }
  componentDidMount(){

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
           todos: result
    
          });
        },
      
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  addTodo = (todoTitle)=>{
    const id= this.state.todos.length +1;
    this.setState((prevState)=>{return{length:++prevState.length}});
    const newTodo = {
      "userId": 1,
      "id": id,
      "title": todoTitle,
      "completed": false
    }

    this.setState({"todos":[...this.state.todos,newTodo]});
  }

  removeTodo = (todoId)=>{
    const todos = this.state.todos.filter(todo=>todo.id !== todoId);
    this.setState({todos});
  }

  toggleComplete = (todoId)=>{
    const todos = this.state.todos.map(
      todo=>todo.id===todoId ? {...todo,completed:!todo.completed} : {...todo}
    );
    this.setState({todos:todos});
  }

  render(){
    const { error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
      
        <div>
         <Header appName={this.appName}/>
        <main className="todoApp">
          <AddTodo addTodo={this.addTodo}/>
          <TodoList
            todos={this.state.todos}
            removeTodo={this.removeTodo}
            toggleComplete={this.toggleComplete}/>
          <TodosCount count={this.state.todos.length}/>
        </main> 
      </div>
    )
  }
}
}

export default App;
