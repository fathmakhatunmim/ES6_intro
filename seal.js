const employee = {
    name:'raja rani',
    designation:'qa',
    salary:'20000',
    experience : 1

}
// delete employee.salary
// delete employee.experience

Object.seal(employee)//modify korte parchi kintu delete korte parchi na

employee.salary = employee.salary + 5000;
employee.location = 'dhaka'
console.log(employee)
