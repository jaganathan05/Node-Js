const productoftwonums =(a,b)=>{ return a*b; } 
//console.log(productoftwonums(2,3)); 
const student = { 
    name:'Jaganathan',
    age:21, } 
//console.log(student) 
const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']; 
console.log(array.map(arr=>arr=(arr===' ' ? 'empty string': arr)));