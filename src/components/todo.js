import './css/todo.css'
import React from 'react'
import TodoItem from './todoitem'

export default class Todo extends React.Component {
	render(){
		const {db} = this.props;
		const elements = db.map(todo => {
			return (
				<TodoItem 
				key={todo.id} 
				label={todo.title}
				{...todo}
				/>
			)
		})
		return(
			<ul id='todo'>{elements}</ul>
			)
	}
}
