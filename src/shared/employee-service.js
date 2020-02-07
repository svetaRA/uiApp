class employeeService{
	
	constructor(){
		
		this.employees=[
		{id:1,firstname:"shweta", lastname:"rautela"},
		{id:2,firstname:"aditi" , lastname:"rao"},
		{id:3,firstname:"neha" , lastname:"sharma"},
		];
	}
	async getEmployess(){
		//alert("test");
		return Promise.resolve(this.employees);
		
	}
	
	async getEmployee(empId){
		
		for(var i=0;i< this.employees.length;i++){
			if(this.employees[i].id === empId){
			return Promise.resolve(this.employees[i]);
			}
		}
		return null;
		
	}
	
	async addEmployee(employee){
		
		var len=this.employees.length-1;
		alert("ss"+len);
		this.employees.push(employee);
	return Promise.resolve(this.employees); 
	}
	 
	
}
export default employeeService;