const student= {
    name: 'Rafid',
    1: 50,
    marks:90
}
const studentName = student.name;

const studentOne = student['1']

console.log(studentOne)

for(const key in student){
    const value = student[key]
}
const propNane = 'marks'
console.log(student[propName])