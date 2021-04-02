import React from 'react'

export default class TodoItem extends React.Component {
	render(){
		const {label, done=false, important=true} = this.props;
		let classNames = "todoitem";
		if (done){ classNames+= " done";}
		if (important) {classNames+= " important"}
		return(
			<li className="todo-item">
			<span className={classNames}>{label}</span>
			</li>
			)
	}
}