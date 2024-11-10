//console.log("bhautik");
//console.log( `ronak`);

//alert(`hello bhautik`);
//document.getElementById("bhautik").textContent=`hellow`;
//document.getElementById("h2").textContent="bhatik";
//document.getElementById("h2").textContent="ronak";
//let a = 45; 
//let b =50;
//
//let age = 23;
//console.log(" my age is give me ${age} iam that");
/*  [ this is the  html and js both ]
  let name ="bhautik gondaliya ";
  let age = 19;
  let stu=false;

  document.getElementById("p1").textContent=`this  is my name ${name}`;
 document.getElementById("p2").textContent=`this  is my age ${age}`;
  document.getElementById("p3").textContent=`I am in the scool ${stu}`;
*/
/*      *****************************************
         [this is the operatrs]

let s= 30;
 //  ** arithmetic operaters **
//s=s-1
 //s=s*2
//s=s+1
//s=s/2
//s=s%3

 //** assignment operaters  */

// s++;
//s--;
//++s
 
//s+=2;
//s-=3;
//s*=3;
//s**=4;
//s/=2;

                
//console.log(s); ***/
 //  *********************************    \\   

/*
 let username;

  username = window.prompt("hellow what is your name  ");
  console.log (username);
*/  

/*    *** get the user mane and save ***
 let username;

 document.getElementById("su").onclick = function(){
   username= document.getElementById("in").value ;


    document.getElementById("bhautik").textContent=`hellow ${username}`
    console.log(username)
 } */
//////************************************************** */

// type conversion **************

/*
 let age=window.prompt("enter your age ");
age=Number(age);
 age += 2 ;


console.log("thankyou",age,"for age ");

let a =3.12;
let b=3.12;
let c= 3.12;

b=String(3.12);
c=Boolean("bhUTIK");


console.log(a,typeof a)
console.log(b,typeof b)
console.log(c,typeof c)    */
//  *************************************
      // const veriable examples 
/*
const PI=3.14;
let R ;
let aria;
 
R=window.prompt("enter the redias of circrl");
R=Number(R);

aria=2 *PI *R ;

console.log( " aria of  circla",aria,); */
//************************************************** */

/*  {  Math . methods}/////
let a= 3.14;
let b= 4;
let c= 7;
let  max;
let min;

max= Math.max(a,b,c);
min = Math.min(a,b,c);

console.log(min);
console.log(max);
*/
//**************************************************************************** */
/* [  trikon mitiya sum soluse a2 +b2 = c2]

  let a;
  let b;
  let c;

  document.getElementById("sum").onclick=function(){

    a=document.getElementById("in1").value ;
    a=Number(a);

    b=document.getElementById("in2").value ;
    b=Number(b);

    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

    document.getElementById("l1").innerHTML= "side c" +c;
  }  */
 //*********************************************************************** */
/*   { ****count program ***\\  }
    let count = 0;

        document.getElementById("b1").onclick=function(){
        count +=1;
        document.getElementById("l1").innerHTML= count ;
           }
        document.getElementById("b2").onclick=function(){
        count =0;
        document.getElementById("l1").innerHTML= count ;
          }
      document.getElementById("b3").onclick=function(){
      count -=1;
      document.getElementById("l1").innerHTML= count ;
     }   */
    // *****conditional statement  ***********************************************8
     /*
    let a;
    a=window.prompt("enter your age ");

    if (a<18){
      console.log ("you are no give  vot");
    }
    else{
      console.log("you are give vot");
    }   

  // &&&&&&&& [second program 2]  &&&&&&&&&&&&&&&&&&&&&&&&
  const  in1 = document.getElementById("in1");
  const  sum = document.getElementById("sum");
  const   p1 = document.getElementById("p1");
  let age;

sum.onclick = function(){

  age=in1.value ;
  age=Number(age);

  if(age==0){
    p1.textContent = "enter vaild age";
  }
  else if(age<18){
   p1.textContent = ` this is not vaild for  leeansice`;
  }
  else if (age<=100){
     p1.textContent = `this is vaild for leeasdrre `;
  }
  
  else{ p1.textContent = `it is too old  `};
  }    */

  
  /* 
  const ch1 = document.getElementById("ch1");
  const ch2 = document.getElementById("ch1");
  const p1= document.getElementById("p1");
  const p2= document.getElementById("p2");
  const p3 = document.getElementById("p3");
  const sum = document.getElementById("sum");


  sum.onclick =function(){
  if(ch1.checked){
    p1.textContent =`you are god boy`;
  }
  else if(ch2.checkd){
   p1.textContent =`you bed boy `;
  }

 else( p1.textContent = `checked any one button`);
  } */



 /*  ***********Terniry poerater **********
 //let age=67;
 //let con= age>=18 ? "you are adalt":"you not adalt";
 //console.log(con)
let yes;
 let a=window.prompt("you ate student");
 let b=1==0 ? "you vaild entry " : "you not vaild entry";
 console.log(b) */  

/*    *******************************************************************
////////////### Switch statement  ###  ///////////////////
 let a=window.prompt("enter a your marks ");
 let g; 

 switch(true) {
  
    case   a>90 && a<100: 
       g ="A";
       break;

     case  a>80 && a<=90:
           g ="B";
           break;

     case  a>70 && a<=80:
           gread ="c";
           break;
     
     case  a>=60  && a<=70:
           g="d";
           break;
     case  a<60:
          g ="f";
          break;
    default :
   
    
 }
 console.log(`your grad  is ${g}`)


&&&&&&&&&&&&&&&&& second programs &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 let grade =window.prompt(" enter your gared ");

switch(grade) {
  case 'A':
    console.log('Excellent!');
    break;
  case 'B':
    console.log('good');
  case 'C':
    console.log('Well done');
    break;
  case 'D':
    console.log('You passed');
    break;
  case 'F':
    console.log('Better try again');
    break;
  default:
    console.log('Invalid grade');
} */
//********************************************************************* */


// let a=80 ;

// if(80>a && 100<a){
//   consloe.log("this is good marks");
// }
// else if(60>a && 80<a ){
//   console.log("this is bed marks");
// }
// else (60>a && 80<a ){
//   console.log("this is bed marks");
// }

//~~~FOR-OF-LOOP~~~~l

// let name="bhautikgondaliya";
// let size=0;
// for(let i of name){
 
// console.log("i=",i);
// size++;
// }
// console.log("str size is =",size);

//~~~FOR-IN-LOOP~~~~~

// let student={
//   name:"bhautikgondaliya",
//   age:20,
//   cgpi:8.4,
//   branch:"computer enng"

// };

// for(let key in student){

//   console.log("key=",key ,"value=",student[key]);
// }
//~~~~~~~~~~~~~~*******88~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~PSRED OPERATORS ... ~~~
//~~ex -1...
// let a =[1,2,3,4,5,6];

// let max = Math.max(...a);
// console.log(max);

// //~~EX-2...

// let f = ["apple","banana","gavava"];
// let v = ["carrot","potato","cocuber"];

// let food = [...f,...v,"mango","milk"];
// console.log(food);

//~~~EX-3...
// let name ="bhautik";
// let b = [...name].join("-");
// let c = [...name];

// console.log(b,c); 

//~~*****************~~~~``````~~~~~~~~~~~~~~
//~~~~~~~NESTED objects~~~~~~~~~

// let food={
//        name:"vegtables" ,
//        colour :"green",
//        caloriy :30.54,
//        type :["careet", "cocumber","palak"],
//        fruets1 :{
//          name : "appler",
//          colour : "red",
//          calory : 12.50
//               },
//       fruets2 : {
//         name : "baanan",
//         colour : "yeallow",
//         caloriy : 13.60
//       }
// 
//~~~~~~~~**** ARRYS of object 8****~~~~~~~~~~~~~~~~~~

let fav =[{ name : "bhautik", hobby: ["coding","reding","digzing"]},
          { name: "prince", marks :99.00, food : "banana" },
          { name : "jay", marks : 97.99, food : "chariy"},
          { name : "dersun",marks : 98.50, food : "apple"}
         ]

// console.log(fav[0].name);
// console.log(fav[0].hobby[1]);
// console.log(fav[1].marks);
// console.log(fav[2].food);
// console.log(fav[3].food);

//~~~~~FOR-EACh-LOOP~~~~~~~~~~~~~

 //fav.forEach(fav => console.log(fav.name));
 //fav.forEach(fav => console.log(fav.food));
 // fav.forEach(fav => console.log(fav.hobby));

//------------~~~map()~~---------------------\
// const favname = fav.map(fav => fav.name);
// console.log(favname);
// const foodname = fav.map(fav => fav.food);
// console.log(foodname);

//~~~~~~filter()~~~~~~~~~~~
//  const favname = fav.filter(fav => fav.name === "bhautik");
// console.log(favname);
//  const calname = fav.filter(fav => fav.marks >98.00);
// console.log(calname);



