import './components/css/app.css'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {todos} from './db/todos'
import Header from './components/header'
import Todo from './components/todo'
import Footer from './components/footer'

class App extends React.Component {
	constructor(){
		super();
		this.state={
			tododb:todos,
			term:'',
			todoFilter:"all"
		}
	}

	render(){
		const {tododb, term, todoFilter} = this.state
		const todolength= tododb.length;
		return(
			<div className='app'>
			<Header length={todolength} />
			<Todo db={tododb} />
			<Footer />
			</div>
			)
	}
}

ReactDOM.render(<App />,
	document.getElementById('app')
);