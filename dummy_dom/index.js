// let a=10;
// console.log("hello world");
// console.log("hello world1");
// console.log("hello world3");

// let rect={
//     draw(){
//         length:1;
//         bredth:2;
    
//     }
// }

// function create()
// {
//     return rect={
//         length:1,
//         breadth:2,

//         draw(){
//             console.log("hwllo world");
//         }
//     };
// }
// let ab=create();
// console.log("hwllo world");
// let a2={value:10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.valueOf);

// let rect={
//     len:2,
//     bre:10,
// };
// //for in loop
// for(let key in rect){
//     console.log(key,rect[key]);
// }

// //for of is using oly iterable
// if('color'in rect){
//     console.log("present");
// }else{
//     console.log("absent");
// }

//clone three types

// //object clone
// let src={
//    a:10,
//    b:20
// };

// let dest={}
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(src);

// //clone 2
// let src={
//     a:10,b:20
// };
// let dest=Object.assign({},src);
// console.log(dest);
// src.b++;
// console.log(src);
// console.log(dest);

// //clone 3
// let src={
//     a:10,b:20
// };

// let b={...src}
// console.log(b);

//dynamic objects
// let ab=10;
// ab="akram";
// console.log(ab);

// let src={
//     a:10,
//     b:20
// };
// src.a=90;
// console.log(src.a);

//constructor
// function inc(len,bre){
//     this.length=len,
//    this. brez=bre;

// }
// let a=new inc(3,45);
// console.log(a);



// //factory function of object
// function ins()
// {
//     return a={
//         area:10,
//         radius:20,
//        ans:function(){
//             console.log(area*radius);
//         }
//     };
   
// }
// let an= ins();
// an.area=90;
// console.log(an);
// an.color="red";
// console.log(an);
// delete an.area;
// console.log(an);

// //math
// Math.random();
// Math.PI;

// //string object
// let name=new String('akram');

// console.log(name);

// let name1="sulthan";
// // console.log(name1);
// let a=`thi sis 
// a praa`;
// console.log(a);

// //arrays objects
// let  num=[1,2,34,5,];
// console.log(num);
// //insertion elements
// //in end
// num.push(9);
// console.log(num);
// num.unshift(10);
// console.log(num);
// num.splice(2,0,"akram");
// console.log(num);

// //searching
// let  num=[1,2,34,5,];
// // console.log(num);
// console.log(num.indexOf(1));

// //check the num using include
// console.log(num.includes(4));
// console.log(num.indexOf(4,1));

// //objects 
// let ak=[
//     {no:1,name:"akram"}
// ];
// // console.log(ak);
// let an=ak.find(hlo=>hlo.no===1);

// console.log(an);

//spread operator
// let a=[1,2,3];
// let b=[4,5,56];
// let c=[...a,'a',...b,"akram"];
// console.log(c);

//iterating an array
//for of
// let arr=[100,20,30,40];
// for(let a of arr){
//     console.log(a);
// }
// arr.forEach(function(num){
//     console.log(num);
// })
// arr.forEach(num=> console.log(num));

// //join the arrys
// let num=arr.join(":");
// console.log(num);

// //split 
// let msg="this is msg";
// let parts=msg.split(" ");
// console.log(parts);

//slice in primitive array
// let a=arr.slice(0,3);
// console.log(a);

//sorting the arrays

// console.log(arr.sort());
// arr.reverse();
// console.log(arr);
// let nums=[-1,100,20,201];

// //arrow function
// let filtered=nums.filter(value=> value>=100);
// console.log(filtered);
// //normal predict function
// let ans=nums.filter(function(z){
//     return z<100;
// })
// console.log(ans);

// //mapping arrays
// let items=arr.map(xy=> "student no :"+ xy);
// console.log(items);

// //mapping with objects
// let an=items.map(function(n){
//     return {xy:n};
// })
// console.log(an);



//functions in javascript

//fucntions declarations
// function add(b,a){
//      return a+b;
// }

// //function calling
// let ans=add(34,3);
// console.log(ans);

// // named function assignment
// let a =function walk(){
//     console.log("i am rko")
// }
// a();

// //anonymous function
// let a1 =function(){
//     console.log("i am rko")
// }
// a1();

//hoisting means it is a process of movinf function declaratoin to the top of file 

//arguments functions
// function sub(){
//     let total=0;
//     for(let i of arguments){
//         total+=i;
//     }
//     return total;
// }
// console.log(sub(78,2,56,67));

//rest operator
// function sum(...args){
//     console.log(args);
//     let total=0;
//     for(let i of args){
//         total+=i;
//     }
//     console.log(total);
// }
// sum(1,2,2,3,3,4);

//defualt parameters
// function interest(p,r=9,t=7){
//     return p*r*t/100;
// }
// console.log(interest(100));

// //getters and setters
// let person={
//     fname:"akram",
//     lname:"sulthan",
//     get fulln(){
//         return `${person.fname}  ${person.lname}`;
//     },
//     set fulln(value){
//         let pa=value.split(" ");
//         this.fname=pa[0];
//         this.lname=pa[1];
//     }
    
// };
// person.fulln="under taker";
// console.log(person.fulln);

//error handling 
//try and catch


//reducing the array
let arr=[1,-2,34,4];
let sum=arr.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
console.log(sum);