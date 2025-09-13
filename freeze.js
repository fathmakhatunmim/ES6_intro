const employee = {
    name:'raja rani',
    designation:'qa',
    salary:'20000',
    experience : 1,
    age:22

}
// delete employee.salary
// delete employee.experience

Object.freeze(employee)//kono kisu change korte parbo na

employee.salary = employee.salary + 5000;
employee.location = 'dhaka'
console.log(employee)

