// // 1. What will be the output of the following code?
// var a = 10;
// if (true) {
//     var a = 20;
// }
// console.log(a);


// // 2. What will be the output of the following code?
// let a = 10;
// if (true) {
//     let a = 20;
// }
// console.log(a);

// 4. What will be the output of the following code?
// const a = 5;
// {
//     const a = 10;
//     console.log(a);
// }
// console.log(a);

// 5. What will be the output of the following code?
// var x = 1;
// function test() {
//     var x = 2;
//     if (true) {
//         var x = 3;
//     }
//     console.log(x);
// }
// test();

console.clear();
// 12. What is the result of the following code?
// var x = 10;
// function test() {
//     var x = 20;
//     console.log(x);
// }
// test();
// console.log(x);


// let x = 5;
// function outer() {
//     const x = 10;
//     function inner() {
//         console.log(x);
//     }
//     inner();
// }
// outer();

// function test() {
//     var x = 1;
//     if (true) {
//         var x = 2;
//         console.log(x);
//     }
// }
// test();

// function foo() {
//     let x = 20;
//     return function() {
//         console.log(x);
//     };
// }
// const bar = foo();
// bar();

// {
//     let a = 10;
//     const b = 20;
//     console.log(a, b);
// }
// console.log(a);

// let a = 10;
// function test() {
//     let a = 20;
//     {
//         let a = 30;
//         console.log(a);
//     }
//     console.log(a);
// }
// test();
// console.log(a);


// {
//     var var1 = "Krishna";
//     const var2 = "Sai";
//     let x = 2;
//     x*=2;
//     // console.log(var2);
//     console.log(x);
// }
// console.log(var2);

// function g(){
//     var a = 10;
// }
// console.log(a);

function outerfun(){
    const outervar = "Hello";

    function innerfun(){
        const innervar = " World";
        console.log(`${outervar}${innervar}`)
    }
    innerfun();
}
outerfun();
