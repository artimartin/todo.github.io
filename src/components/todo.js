import './css/todo.css'
import React from 'react'
import TodoItem from './todoitem'

export default class Todo extends React.Component {
	render(){
		const {db, onLabelClick} = this.props;
		const elements = db.map(todo => {
			return (
				<TodoItem 
				key={todo.id} 
				label={todo.title}
				{...todo}
				onLabelClick = {() => onLabelClick(todo.id)}
				/>
			)
		})
		return(
			<ul id='todo'>{elements}</ul>
			)
	}
}
