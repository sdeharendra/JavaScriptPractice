// // // // function hello() {
// // // //     console.log("hello Harendra");
    
// // // // }

// // // // function printName() {
// // // //     console.log("Apna College");
// // // //     console.log("Harendra Kumar");
    
// // // // }

// // // // function print1to5Num() {
// // // //     for (let i =1; i <= 5; i++) {
// // // //         console.log("Value of i :", i);
// // // //     }    
// // // // }

// // // // function isAdult() {
// // // //     let age = 15;
// // // //     if (age >= 18) {
// // // //         console.log("adult");
// // // //     } else {
// // // //         console.log("Minor");
        
// // // //     }
// // // // }


// // // // // print a poem

// // // // function printPoem() {
// // // //     console.log("twinkle twinkle little star");
// // // //     console.log("how are wonder what you are");
    
    
// // // // }

// // // // // diceroll game

// // // // function diceRoll() {
// // // //     let num = Math.floor(Math.random() * 6) + 1; {
// // // //     console.log(num);
// // // //     }
// // // // }



// // // // diceRoll();
// // // // diceRoll();
// // // // diceRoll();
// // // // diceRoll();
// // // // // printPoem();
// // // // // isAdult();
// // // // // print1to5Num();
// // // // // printName();

// // // // // hello();


// // // // function with arguments

// // // // function printName(name, age) {
// // // //     console.log(`${name}'s and age is ${age}`);
// // // // }

// // // // printName("Harendra", 20);

// // // // print sum with argument

// // // // function printSum(a , b) {
// // // //     console.log(a+b);
// // // // }

// // // // printSum(5,7);
// // // // printSum(8,7);
// // // // printSum(5,4);
// // // // printSum(77,2);
// // // // printSum(51,17);

// // // // function averageofSum(a, b,c) {
// // // //     console.log((a+b+c) /3);
    
// // // // }

// // // // averageofSum(2, 4, 6)



// // // // function printTable(n) {
// // // //     for (let i = n; i <= n*10; i += n) {
// // // //         console.log(i);
        
// // // //     }
// // // // }

// // // // printTable(9);

// // // // function printnum(a, b) {
// // // //     return a + b;
// // // // }

// // // // console.log(printnum(printnum(5, 6), 3));


// // // // function isAdult(age) {
// // // //     if (age >= 18) {
// // // //         return  "is adult";
// // // //     } else {
// // // //         return "not adult";
// // // //     }
// // // //     console.log("bye bye");
    
// // // // }

// // // // function getSum(n) {
// // // //     let sum =0;
// // // //     for(let i = 1; i <= n; i++) {
// // // //         sum += i;
// // // //     }
// // // //     return sum;
// // // // }

// // // // let str = ["Hello", "World", "of", "coding"];
// // // // function concat(str) {
// // // //     let result = "";
// // // //     for(let i = 0; i < str.length; i++){
// // // //         result += str[i];
// // // //     }
// // // //     return result;
// // // // }


// // // // higher order function 
// // // function multipleGreet(func, count) {
// // //     for(let i = 1; i <= count; i++) {
// // //         func();
// // //     }
// // // }
// // // // let greet = function() {
// // // //     console.log("Hello");
    
// // // // }



// // // // function oddOrEvenFactory(request) {
// // // //     if (request == "odd") {
// // // //         let odd = function(n) {
// // // //             console.log(!(n%2 == 0));
            
// // // //         }

// // // //         return odd;
// // // //     } else if (request == "even") {
// // // //         let even = function(n) {
// // // //             console.log(n%2 == 0);
            
// // // //         }
// // // //         return even;
// // // //     } else {
// // // //         console.log("something went to wrong");
        
// // // //     }
// // // // }


// // // const calculate = {
// // //     add: function(a, b) {
// // //         return a + b;
// // //     },
// // //     sub: function(a, b){
// // //         return a - b;
// // //     },
// // //     mul: function(a, b){
// // //         return a * b
// // //     },
// // // };

// // function name(a,b) {
// //     console.log(a + b);
    
// // }

// // name(5, 4);

// // function printName(name) {
// //     return name
// // }

// // console.log("Harendra Kumar");

// // function printSum(a,b) {
// //     return a + b;
// // }
// // console.log(printSum(5,5));

// function printTable(n) {
//     for (let i =5; i <= 50; i =i + 5) {
//         console.log(i);
        
//     }
// }

// printTable(10);

// function scope

function calSum(a, b){
    let sum = a + b;
    console.log(sum);
    
}

calSum(5, 6);