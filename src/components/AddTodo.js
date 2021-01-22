import React from 'react';

class AddTodo extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			"todoTitle":""
		}
	}

	handleChange = (e)=>{
		this.setState({
			"todoTitle": e.target.value
		})
	}

	handleClick = (e)=>{
		this.props.addTodo(this.state.todoTitle);
	}

	render(){
		return (
			<div className="addTodo">
				<input
					name="todoTitle"
					type="text"
					autoFocus
					placeholder="add new todo ..."
					value={this.state.todoTitle}
					onChange={this.handleChange}/>
				<button className="btnAdd" onClick={this.handleClick}>Add</button>
			</div>
		 )
	}
}

export default AddTodo;