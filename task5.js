// 1) Even or Odd
// const check=(num)=>{
//     if(num%2===0){
//         return "Pass"
//     }else{
//         return "Fail"
//     }
// }

// 2) Result Evaluator — Pass or Fail
// const evaluateResult=(marks)=>{
//     if(marks<0||marks>100){
//         return "Invalid Marks"
//     }
//     if(marks>=50){
//         return "Pass"
//     }else if(marks<50){
//         return "Fail"
//     }
// }
// console.log(evaluateResult(75))
// console.log(evaluateResult(40))
// console.log(evaluateResult(120))


// 3) Maximum Finder — Largest of Three Numbers
// const findMax=(num1,num2,num3)=>{
//     if(num1>=num2 && num1>=num3){
//         return num1
//     }else if(num2>=num1 && num2>=num3){
//         return num2
//     }
//     else{
//         return num3
//     }
// }
// console.log(findMax(10, 25, 15))
// console.log(findMax(5, 3, 8))
// console.log(findMax(9, 9, 2))

// 4) Accumulator — Sum from 1 to N
// const sumToN=(num)=>{
//     let x=1;
//     let val=0;
//     while(x<=num){
//     val+=x;
//     x++;
//     }
//     return val;
// }
//     console.log(sumToN(5));
//     console.log(sumToN(10));

// 5) Multiplication Table Generator
// const printTable=(num)=>{
//     let val;
//     for(let i=1;i<=10;i++){
//         val=num*i;
//        console.log(num,"x" ,i, "=", val)
//     }
    
// };
// printTable(3)

// 6) Digit Counter — Number Length Finder
// const countDigits=(num)=>{
//     let count=0;
//     while(num>0){
//         num=Math.floor(num/10);
//         count++;
//     }return count;
// }
// console.log(countDigits(1234))
// console.log(countDigits(9))
// console.log(countDigits(10000))


//7) Number Reverser
// const reverseNumber=(num)=>{
//     let rev=0;
//     while(num>0){

//         let value=num%10;
//         rev=rev*10+value;
//         num=Math.floor(num/10);
//     }
//     return rev
// }
// console.log(reverseNumber(1234))
// console.log(reverseNumber(500))
// console.log(reverseNumber(91))

//8) Factorial Engine
// const factorial=(num)=>{
//     let val=1;
//     for(let i=1;i<=num;i++){
//         val=val*i;
        
// }
// return val
// }
// console.log(factorial(5))
// console.log(factorial(3))
// console.log(factorial(1))

//9) Prime Validator
// const isPrime=(num)=>{
//     if(num<2){
//         return "false"
//     }
//     else{
//         for(let i=2;i<num;i++){
//             if(num%i===0){
//                 return "false"
//             }
//         }return "true"
//     }
// }
// console.log(isPrime(7))
// console.log(isPrime(1))
// console.log(isPrime(2))

//10) Pattern Builder — Star Triangle
// const printPattern=(num)=>{
//     for(let i=1;i<=num;i++){
//         let row="";
//         for(let j=1;j<=i;j++){
//             row=row + "*";

//         } console.log(row);
//     }
// }
// (printPattern(5))