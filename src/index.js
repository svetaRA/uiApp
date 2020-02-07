import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EmpDetails from './components/emp-details';
import NewEmployee from './components/new-employee';
import employeeService from './shared/employee-service';

class Employee extends React.Component{
	
	constructor(props){
	super(props);
	this.employeeService= new employeeService();
	this.onSelect= this.onSelect.bind(this);
	this.onNewEmployee=this.onNewEmployee.bind(this);
	this.addEmployee=this.addEmployee.bind(this);
	this.state={
	
		
	showEmpDetails:true,
      showDetails: false,
     // editItem: false,
      selectedEmp: null,
	  newEmp:false,
      //newItem: null
    
		
	};
	
	//this.input=React.createRef();
	}
	/*updateSubmit(){
		
		this.setState({
			showEmpDetails:false,
			showDetails:false,
			newEmp:true,
			
			});
	
		
		
	}*/
	addEmployee(emp){
		alert("test");
		this.clearState();
		this.employeeService.addEmployee(emp).then(employee=>{
			
			this.getEmployess();
		});
		
		
		
	}
	componentDidMount(){
		//alert("test111");
		this.getEmployess();
	}
	
	
getEmployess() {
    this.employeeService.getEmployess().then(employees => {
		//alert("dfdf"+employees);
          this.setState({employees: employees});
        }
    );
  }
  onSelect(id) {
    this.clearState();
	//alert("calling");
    this.employeeService.getEmployee(id).then(employee => {
      this.setState({
		  showEmpDetails:false,
          showDetails: true,
          selectedEmp: employee,
		  newEmp:false,
        });
      }
    );
  }
  onNewEmployee(){
	 // alert("test");
	  this.clearState();
	  this.setState({
		  showEmpDetails:false,
		  showDetails:false,
		  newEmp:true
		  });
	  
  }
  updateSubmit(){
//	alert("newEmp::"+newEmp);
	this.setState({newEmp:true,});
	//newEmp
	
}
  clearState() {
    this.setState({
		showEmpDetails:false,
      showDetails: false,
      selectedEmp: null,
	 // newEmp:false,
      //editItem: false,
      //newItem: null
    });
  }
render(){
	const employees = this.state.employees;
	const showDetails = this.state.showDetails;
	const showEmpDetails = this.state.showEmpDetails;
    const selectedEmp = this.state.selectedEmp;
	const newEmp=this.state.newEmp;
	//alert("newEmp"+newEmp);
	if(!employees) return null; 
	
	const listEmployees = employees.map((employee) =>
      <li key={employee.id} onClick={() => this.onSelect(employee.id)}>
         <span>{employee.firstname }| {employee.lastname}</span> 
      </li>
    );
	//if(showEmpDetails){
	return(  
	<form>
	<h1>Employee Data:</h1>
	<ul>
    {listEmployees}
    </ul>
	<div>
	<input type="button" value="Add New Employee" onClick={()=>this.onNewEmployee()}/> 
	<br/>
	{newEmp && <NewEmployee newEmp={newEmp} onSubmit={this.addEmployee} />}
	{showDetails && selectedEmp && <EmpDetails employee={selectedEmp} />}
	</div>
	
	
	   
	</form>
	);
	//}
	
}  

}  

ReactDOM.render(<Employee />,document.getElementById('root')); 
 