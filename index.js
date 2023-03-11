// 1  <!-- ways to print a print msg in javascript -->
// console.log("hello world");
// alert("me");
// document.write("This is document write");

// 2  Javascript Console API
console.log("hello world", 4 + 6, "Another log");
console.warn("This is a warning")
console.error("This is a error")
console.assert("This is a essert")

// 3. Javascript Variables
//what are varaibles? - container to store data values
 var number1 =34;
 var number2=67;
 console.log(number1+number2);

 // 4. datatype in javascript
 //Numbers
var num1=4556;
var num2=56.98;
console.log(num1,num2);

//String
var str1="This is a string";
var str2 ='This is also a string';
console.log(str1,str2);

//Objects
var marks={
    shubh:34,
    ratn:66,
    dhan:78,
}
console.log(marks);

//Booleans
var a=true;
var b =false;
console.log(a,b);

//Undefined

var und;
// var und=undefined;
console.log(und);

var n =null;
console.log(n);

// At a very high level, there are two types of datatypes in javascript
// 1.Primitive datatypes: undefined,null,number,string,boolean,Symbol
// 2.Reference datatypes: Array and Objects

//Arrays
var arr =[1,2,"Ratn",3,4,5];
console.log(arr);

//Operators In Javascript

var a=678;
var b=784;
console.log("The value of a + b is",a+b);
console.log("The value of a - b is",a-b);
console.log("The value of a * b is",a*b);
console.log("The value of a / b is",a/b);

//Assignment Operators

var c = b
c += 2;  //C=C+2
c -= 2; //C=C-2
c *= 2; //C=C*2
c /= 2; //C=C/2
console.log(c)


//Comparison Operator
var x=34;
var y=45;
console.log(x>y)
console.log(x==y)
console.log(x<y)

//Logical Operator
// Logical AND
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

//Logical OR
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)


function avg(a,b){
    return (a+b)/2;
}
c1=avg(4,6);
c2=avg(45,98);
console.log(c1,c2);

//Conditionals in Javascript

var age =23;
if(age>10)
{
    console.log("You are eligible")
}
    else{
        console.log("You are not eligible")

    }

    var arr=[1,2,3,4,5,6,7];
    console.log(arr);
    for(var i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }


    let myarr=["Jan","Feb","March",8,null]
    console.log(myarr.length);
 myarr.sort();
 d=[1,4,5,6,7,43,54,33,3,45,1,0,45,]
 d.sort();

//  String Methods In javascript

let mylovelyString="ratn  Patil"
console.log(mylovelyString.length)
console.log(mylovelyString.lastIndexOf("patil"))
console.log(mylovelyString.slice(1,5));
d= mylovelyString.replace("ratn","Shubh")
console.log(d,mylovelyString)

//DATES
myDate=new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

// DOM Manipulation

let elem=document.getElementById('click');
console.log(elem);

let elemclass=document.getElementsByClassName('container');
console.log(elemclass);
// elemclass[0].style.background="cyan"
elemclass[0].classList.add("bg-primary")
elemclass[0].classList.add("text-success")
elemclass[0].classList.remove("text-success")
console.log(elemclass[0].innerHTML)
console.log(elemclass[0].innerText)
tn=document.getElementsByTagName('div')
console.log(tn)
createdElement=document.createElement('p')
createdElement.innerText="This is a created element"
tn[0].appendChild(createdElement);


//Selecting using Query
sel=document.querySelector('.container')
console.log(sel)
sel1=document.querySelectorAll('.container')
console.log(sel)



//EVENTS in Javascript
//1
function clicked(){
    console.log("The button was clicked")
}

//2
window.onload=function(){
    console.log('The document was loaded')
}

//3
firstcontainer.addEventListener('click',function(){
    console.log('click hua');

})

//4
firstcontainer.addEventListener('mouseover',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked</b>"
    console.log('Mouse on container');

})

//5
firstcontainer.addEventListener('mouseout',function(){
    console.log('Mouse Out of container');

})

//6
firstcontainer.addEventListener('mouseup',function(){
    console.log('clicked on container');

})

//7
firstcontainer.addEventListener('mousedown',function(){
    console.log('Mouse down when clicked on container');

})


let prevHTML= document.querySelectorAll('.container')[1].innerHTML
firstcontainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=prevHTML
    console.log('Mouse up when clekced on container');

})

//Arrow Functions

function Summ(a,b){
return a+b;
}
sum=(a,b)=>{
    return a+b;
}
//SetTimeOut and SetInterval
logkaro = ()=>{
    console.log('I am your logS')
}
setTimeout(logkaro,2000);


//Javascript LocalStorage
localStorage.setItem('name','Ratn')
localStorage.getItem('Ratn')
localStorage.removeItem('name')
//JSON

obj={name:9876,length:1 ,a:{this:"that"}}
jso=JSON.stringify(obj);
console.log(jso)
parsed=JSON.parse(`{"name":"Ratn","length":1 ,"a":{"this":"that"}}`)
console.log(parsed);