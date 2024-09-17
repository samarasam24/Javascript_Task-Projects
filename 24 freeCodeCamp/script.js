//Q1 - What is function declaration?
// function funcDeclare(){
//     return 'Function Declaration';
// };
// console.log('--', funcDeclare()  );

//Q2 - what is function expression
// const funcExpression = function() {
//     return  'Function Expression';
// };
// console.log( '--',funcExpression());

// Q3 - What is IIFE
// (function(n){console.log(n)})(5)

//Q4 - What are first class functions
// function add(n) {
//     return n + n;
// };
// function sum(fn){
//     console.log(`This value is get from pure function [${fn(5)}]`);
// };
// sum(add);

// Q5 - IIFE O/P based question
// (function(x){
//     return (function(y){
//         console.log(x);
//     })(1)
// })(2)

// Q6 - Function scope
// var num1 = 30,
//     num2 = 25,
//     name = 'Jhon Doe';

// function sum(){
//     return num1 * num2;
// };
// console.log(sum());

// function getAll(){
//     var num1 = 5,
//         num2 = 7;

//     function sum(){
//         return num1 + num2;
//     };

//     return sum()
// };

// console.log(getAll());

// Q7 - Function scope O/P based question
// for( var i = 0; i < 5; i++){ 
//     setTimeout( function(){
//         console.log(i);
//     }, i*1000);
// };

// Q8 - Function hoisting
// hoistedFunc();
// console.log(x);
// function hoistedFunc() {
//     console.log('hoisted');
// };
// var x = 2;

// Q9 - Function hoisting - O/P based question
// var x = 10;
// function opHoisted(){
//     console.log(x);
//     var x = 20;
// };
// opHoisted();

//Q10 - Params vs Arguments
function func(n){ //params
    console.log('Hello'+n);
};
func('Revi'); //argument