import './components/css/app.css'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'
import Todo from './components/todo'
import Footer from './components/footer'

class App extends React.Component {
	render(){
		return(
			<div className='app'>
			<Header />
			<Todo />
			<Footer />
			</div>
			)
	}
}

ReactDOM.render(<App />,
	document.getElementById('app')
);