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
		};
		this.triggerPropsLabel = (arr,id,propName) => {
			const idx = arr.findIndex(el => el.id == id);
			const oldItem=arr[idx];
			const newItem= { ...oldItem, [propName]: !oldItem[propName]};
			return [...arr.slice(0,idx), newItem, ...arr.slice(idx+1)];
		};

		this.onLabelClick = id => {
			this.setState(({tododb})=>{
				return {tododb:this.triggerPropsLabel(tododb,id,"done")};
			})
		}
	}

	render(){
		const {tododb, term, todoFilter} = this.state
		const todolength=tododb.length;
		const doneLength=tododb.filter(el=>el.done).length;
		return(
			<div className='app'>
			<Header length={todolength} />
			<Todo db={tododb} onLabelClick={this.onLabelClick} />
			<Footer 
				length={todolength}
				doned={doneLength}
			/>
			</div>
			)
	}
}

ReactDOM.render(<App />,
	document.getElementById('app')
);