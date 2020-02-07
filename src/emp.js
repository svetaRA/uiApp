import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
class Employee extends React.Component{
	
	constructor(props){
	super(props);
	this.updateSubmit=this.updatesSubmit.bind(this);
	this.input=React.createRef();
	}
	updateSubmit(){
		alert("You have enetered data successfully");
		event.preventDefault();
	}

render(){
	return(
	<form onSubmit={this.updateSubmit}>
	<h1>Employee Data</h1>
	<label>Employee First Name:</label>
	<input type="text" ref= {this.input} value=""/>
	<label>Employee Last Name:</label>
	<input type="text" ref={this.input} value=""/>
	<input type="submit" value="Submit"/>
	</form>
	
	);
	 
} 
} 

ReactDOM.render(<Employee />,document.getElementById('root')); 
 