// const numbers = [1,2,54,1,4,9]
// for(const num of numbers){
//     // console.log(num);
// }


const employee = {
    name:'raja rani',
    designation:'qa',
    salary:'20000',
    experience : 1

}
// for(const key in employee){
//     const value = employee[key];
//     console.log(key);
// }

const keys = Object.keys(employee)
console.log(keys)
for(const key of keys){
    const value = employee[key]
}