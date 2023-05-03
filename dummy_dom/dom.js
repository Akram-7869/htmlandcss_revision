// h1.addEventListener("click", function(){
//     h1.style.background("red");
// })

//add event listener
// let aq=document.querySelector('h1');
// aq.addEventListener('click',function(){
//     aq.style.background="red";
// });

//remove event listener
//use the same target and use the same type and use the same function

// //phases of an event
// let content =document.querySelector("#ak");
// content.addEventListener('click',function(event){
//     console.log(event);
// })

// let links=document.querySelectorAll('a');
// let third=links[2];
// third.addEventListener('click',function(event){
//    event.preventDefault();
//     console.log("i am the best");
// });

// let mydiv=document.createElement('div');
// function hl(event){
//     console.log("i have clicked on para"+event.target.textContent);
// }
// mydiv.addEventListener('click',hl);
   

// for(let i=1;i<=10;i++){
//     let newele=document.createElement('p');
//     newele.textContent='this is a para'+ i;

    
//     mydiv.appendChild(newele);
// }

// document.body.appendChild(mydiv);

// //adding 10para
// let t1=performance.now();
// for(let i=1;i<10;i++)
// {
// let ele=document.createElement("h2");
// ele.textContent="hello iam "+ i;
// document.body.appendChild(ele);
// }
// let t2=performance.now();
// console.log("this took "+ (t2-t1));
//optimizing a bit
//same code but instead of adding ele in document we are addoing into the div and atlast we are adding in document


//using the fragement element
// let t3=performance.now();
// let fragement=document.createDocumentFragment();
// for(let i=1;i<10;i++)
// {
// let ele=document.createElement("h2");
// ele.textContent="hello iam "+ i;
// fragement.appendChild(ele);
// }
// document.body.appendChild(fragement);
// let t4=performance.now();
// console.log(t4-t3 +" this the final optimized");
// console.log("akram sulthan")
// //time event 
// setTimeout(function(){
//     console.log("tu maan meri jaan");
// },0);
// function syn(){
//     console.log("first");
// }
// syn();
// console.log("third");

//promise
let a=new Promise(function (b,c){
    setTimeout(function(){
        console.log("i am the wrestler");
    },4000);
    // b("mohammed");
    c(new Error("error aya ha ji"));
});
console.log("hi akram");

//using then and catch method
// a.then((value)=>(console.log(value)));
a.catch((error)=>{console.log("kya hova ")});
