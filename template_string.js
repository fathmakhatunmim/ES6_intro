//akadik string jodi lekhte cai



// const poem = 'amm pata jora jora '+
// 'marbu chabuk chorbe ghora'+
// 'ore khaka.........'
   
//jodi aker odik link a lekhte cai tahole  tab ar upore (``) ay sigh ta use korte hobe
const poem =`amm pata jora jora 
marbu chabuk chorbe ghora 
ore khaka.........`

console.log(poem)

//normaly amra jevabe lekhi
function sum(num1,num2)
{
    const result = num1+num2;
    const output = 'sum of' +num1 +'and'+num2+'is equal to '+ result;
    console.log(output)
}
sum(10,20)
//(``)ar moddhe jekhabe lekhbo

function sum(num1,num2)
{
    const result = num1+num2;
    const output = `sum of ${num1} and ${num2} is equal to ${result}`
    console.log(output)
}
sum(10,20)