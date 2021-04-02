import './css/footer.css'
import React from 'react'

export default class Footer extends React.Component {
	render(){
		const {length, doned}=this.props;
		return (
			<div id='footer'>из {length} выполнено {doned}</div>
			)
	}
}