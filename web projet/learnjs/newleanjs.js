
//~~~~~  get the input from the user  ~~~~~~~~;

// let age;
// age=window.prompt("entr your age:");
// console.log("your age is :",age,);


//~~~~ print the out put form the user ~~~~~~~//

//console.log("my name is bhutik");

//~~ FUNTIONS  ~~~~~~~~;

// function happyBarthday(user,age){
//     console.log(`heappy brithe day ${user}`);
//   console.log(`your age is ${age}`);
// }

// happyBarthday("bhautik",20);
// happyBarthday("ronak",15);
// happyBarthday("pardip",21);
  

// function checkemail(email){

//    if(email.includes("@")){
//     return true;
//    }
//    return false;
// }

// console.log(checkemail("bhautik@gmail.com"));
// console.log(checkemail("bhautik0gmail.com"));

 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~JS event in jsfile~~~
let btn1 = document.querySelector("#btn1");

  
//  btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//      console.log(evt.clientX,evt.clientY);
//  }

btn1.addEventListener("click",(evt) => {
    console.log("button was clicked by t=1");
    console.log("bhatuk ");
    console.log(evt.type);
});

  btn1.addEventListener("click",() => {
      console.log("btn was clicked by t=2");
 });
  btn1.addEventListener("click",() => {
      console.log("btn was clicked by t=3");
 });
  btn1.addEventListener("click",() => {
      console.log("btn was clicked by t=4");
 });
 //~~~stroed in veriabal so the remove eassyly ~~~~

 const hand5=()=>{
    console.log("buten1 was clicked by t=5");
 }

 btn1.addEventListener("click",hand5);

 btn1.removeEventListener("click",hand5);

//~~~~~~~~~end~~~~~~~~~~~~~~~~~~~~~~~~~

//~~togal the mode chage -- using the evenlisteners~~~~

let mode=document.querySelector("#mode");

 let currnmode="light";

mode.addEventListener("click",() =>{
     
    if(currnmode==="light"){
        currnmode="blcak";
     document.querySelector("body").style.backgroundColor="black";

    }
    else{
        currnmode="light";
        document.querySelector("body").style.backgroundColor="white";  
    
    }


  console.log(currnmode);  
});

//~~~**********~~classes and objects~~**********~~~

const studens ={
    fullname:"gondaliya bhautik",
    marks: 98.9,
    age: 20,
    printmarks: function() {
         console.log("makes=",this.marks);
    }

}

 //~~-----__proto__----emtheds~~~
  
 const emp={
    //it is a one type of dicred the function~~
    caltax(){
console.log("tax is a 10%");
    },
 };
 
 const bhautik= {
  sal :100000,
 }

 bhautik.__proto__=emp;

//~~~~~~~~~CLASSE--in--constructor--~~~~~~~~~~
// class car{
//     constructor(brend,milage){
//         console.log("cteate a new object");
//         this.brendname=brend;
//         this.milage=milage;
//     }
//      start(){
//         console.log("car is start");
//      }
//      stop(){
//         console.log("car is a top");
//      }
// }

// let odi=new car("odi",20);
// console.log(odi);
// let fortuner=new car("fortuner",40);
// console.log(fortuner);

//~~~~~CLASSE--in--INHERITANCE~~~~~~
//~~~EX-1
// class b1{
//    emp(){ 
//     console.log("hellw");
// }

// }

// class b2 extends b1{}
  
// let obj= new b2();


//~~EX-2~~using a super key word~~~~

class person{
    constructor(name){
        this.name=name;
        
    }
    eat(){
    console.log("eating");
    }

    sleep(){
        console.log("sleeping");
    }
    
}
 
//let bhautik2=new person();  //output==>>bhautik2.eat()-->>eating

class enggner extends person{
       constructor(branch){
        super();
        this.newbranch=branch;
       }
   
   work(){                   
  //  super.eat();
    super.sleep();
     console.log("work hard");
    }
}

let bhautik1=new enggner() ;//output==>bhautik1.sleep()-->>sleeping
let bhautik4=new enggner("computeEngg");
let bhautik3=new person("bhautik");//~`output==>>bhautik3.name-->>bhautik


//~~~~~EX-3--using a -extends and super key word ~~~~

class user{
   constructor(name,email){

       this.name=name;
       this.email=email;
   }

   vivedata(){
    console.log("data is viveing");
   }
}


class teacher extends user{
        constructor(name,email,sub,tname ){
            super(name,email);
            this.sub=sub;
            this.tname=tname;
        }
            
    }

let student1=new user("bhautik","abhau@123.gmail");
let student2=new user("ronak","aronak@123.gmail");
let teacher1=new teacher("bhautik","ac@1223","phy","raj" );

//~~~ERROR-handling~~~--

// let a=10;
// let b=15;
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// try{
//     console.log("a+b=",a+c);
// }catch(err){
//     console.log(err);

// }

// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);

//````new chapter callbacks,promisses,``---]
//~~~~**SETT--timeOut **~~~----
// console.log("one");
// console.log("two");
// setTimeout(()=> {
//     console.log("three");
// },2000);   // 2s=2000ms time
// console.log("for");
// console.log("five");


//~~~callback created~~~~~------
 function getdata(dataid,getnextdata) {
    setTimeout(()=>{
    console.log("DATA=",dataid);
    if(getnextdata){
        getnextdata();
    }

    },2000
    )
}

//------calbacks--connected_with_callback-hall-----

//~~type-1~~using promise--cain-~~~
// let p1=getdata(1,()=>{
//     p1.then((res)=>{
//         console.log("geting data2");

// let p2=getdata(2,()=>{
//     p2.then((res)=>{
//         console.log("compet");
//     });
// });
//     });
//  });
//-------------------------------------------


//~type-2~~*****~~~~calback-hall~~~~~******
// getdata(1,()=>{console.log("geting data2");
//     getdata(2,()=>{console.log("geting data3");
//         getdata("bhautik",()=>{console.log("geting data4");
//             getdata("ronak",()=>{console.log("geting data5");
//                 getdata(5)})})})});
 
 
//~~~~********--PROMISES--***~~~~~

// let promise = new Promise((resolve , reject) => {
//    console.log("I am promise");
   
//   //resolve("solver sussuful");
//   reject("some effor")
// });

//~~~ex-2~~~~~~~~****
function getdata(dataid,getnextdata) {

    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("DATA=",dataid);
     resolve("succes");
    if(getnextdata){
        getnextdata();
    }
 } , 5000)
});
} //outpit==>let value=getdata(123)-->value 

 
//~~~***EX-for the--.then  && - .catch  in promise
// let promise=new Promise((resolve,reject)=>{
     
//   console.log("succes");
  
//    // resolve("work succful;  //call--promise.then()

//    reject("networtk arroe");  //call--promise.catch()

// });

 
// promise.then((res)=>{
//     console.log("bhautik",res);
//     console.log("ronak",res);
// })

// promise.catch((err)=>{
//     console.log("not allowed",err);}
    
// )

//~~~~EX-3~~~~with promise--chains
// function async( ){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some data 1");
//             resolve("succesful facting data");
//         },4000);

//     });
// }
// function async2( ){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some data 2");
//             resolve("succesful facting data");
//         },4000);

//     });
// }


// ~~~~ this-called promise-cain~~~~~
//===>>>type--1
// console.log("data is faching form server.....");
// let p1=async();
//  p1.then((res)=>{
//     console.log(res)
//     console.log("data is faching form server.....");
// async2().then((res)=>{
//     console.log(res)
//     console.log("data is complet");
//  });
//  });

//==?type-2--this called the  real prmise chain~~~~
 
// async().then((res)=>{
//     console.log(res);
//     return async2();
// }).then((res)=>{
//     console.log(res);
//     console.log("data is complet");
// });
     
//~~~asyn--~~~~~

// async function asyn(){(resolve,reject)=>{
//     console.log("bhautik");
    
// }
// }

//~~~* ASYN-AWAIT---~~~~~
function  getdata(getdataid){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data=",getdataid);
        resolve("200C");
    },2000);
        
    
  })

}

// async function getweather() {
  
//       console.log("getting data1...");
//     await getdata(1);//1st
    
//     console.log("getting data2...");
//     await getdata(2);//2nd
    
//     console.log("getting data3...");
//     await getdata(3);//3rd
    
//     console.log("getting data5...");
//     await getdata(4);//5th
    
//     console.log("complet data...");
//     }

//~~~IIFE_--no nedd makeing a function~~~~~

// (async function() {
  
//           console.log("getting data1...");
//         await getdata(1);//1st
        
//         console.log("getting data2...");
//         await getdata(2);//2nd
        
//         console.log("getting data3...");
//         await getdata(3);//3rd
        
//         console.log("getting data5...");
//         await getdata(4);//5th
        
//         console.log("complet data...");
//         })();


//~~~~~****---API----***~~~~~

const URL="https://cat-fact.herokuapp.com/facts"
 
const facts=document.querySelector("#facts");
const get=document.querySelector("#get");
const img=document.querySelector("#img");
//~~~~~--using async-await---~~~~~
 
const getFacts = async () =>{
    console.log("getting  dat...");

    let respons = await fetch(URL);
    console.log(respons);
    let data = await respons.json();
    facts.innerText=data[0].text;
}

//~~~~--using a promise--chain--~~~

// function getFacts(){
//       fetch(URL).then((respons)=>{
//         return  respons.json();
//       })
//       .then((data)=>{
//         console.log(data);
//         facts.innerText=data[0].text;
//       })

// };

//get.addEventListener("click",getFacts);

//~~~~~~~Ex-2 fach api~~~using  a  async -await~~~
 const URI = " https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";
//const URI= " https://cat-fact.herokuapp.com/facts";

const  fach = async () => {
    let respons = await   fetch(URI);
      console.log( respons);
      let p = await respons.json();
      console.log(p);
      img.innerHTML= "<img src='p[1]' \>"

     
}
get.addEventListener("click",fach);
 

