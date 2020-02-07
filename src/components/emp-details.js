import React from 'react';
import ReactDOM from 'react-dom';

class EmpDetails extends React.Component{
	
constructor(props){
	super(props); 
	this.state={
		
		
	};
	 
	
}


render(){
	const employee= this.props.employee;
	//var newEmp= this.props.newEmp;
	//alert("newEmp"+newEmp);
	
	if(!employee) return null;
	return(
	
		<div>  
	<h1>Employee Details:</h1>

	
	 <div><span>First Name:</span>{employee.firstname}</div>
	 <br/>
      <div><span>Last Name:</span>{employee.lastname}</div>
  
	</div>
		
	 
	); 
	
}

}
export default EmpDetails;