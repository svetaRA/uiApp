import React from 'react';
import ReactDOM from 'react-dom';

class NewEmployee extends React.Component{
	
	constructor(props){
		super(props);
		this.onSubmit=this.onSubmit.bind(this);
		this.changeHandler=this.changeHandler.bind(this);
		this.state={
			id:'',
			firstname:'',
			lastname:'',
			
		};
		
	}
	changeHandler =(event)=>{
		let name=event.target.name;
		let value=event.target.value;
		this.setState({[name]:value});
		//alert("You have enetered data successfully");
		
		//event.preventDefault();
	}
	onSubmit(){
		this.props.onSubmit(this.state);
	}
	render(){
		const newEmp= this.props.newEmp;
		
		return(
		<div>
	<label>Employee First Name:</label>
	<input type="hidden" name= "id"  value={this.state.id} onChange={this.changeHandler} />
	<input type="text" name= "firstname"  value={this.state.firstname} onChange={this.changeHandler} />
	<br/><br/>
	<label>Employee Last Name:</label>  
	<input type="text" name="lastname" value={this.state.lastname} onChange={this.changeHandler} />
	<br/><br/>
	<input type="button" value="Add" onClick={this.onSubmit}/> 
	</div>
		
		
		);
		
	}
	
}
export default NewEmployee;