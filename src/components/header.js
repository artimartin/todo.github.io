import './css/header.css'
import React,{Component} from 'react'

export default class Header extends React.Component {
	render(){
	const {length} = this.props;
		return(
			<h1 id='header'>Сейчас у нас {length} дел:</h1>
			);
	
	}
}
