// coercion
var a="42";
var b=Number(a);
var c=a*10;
console.log(a);
console.log(b);
console.log(c);
// strictly/loosely equal
if("10"==10){
    console.log(true)
}

const TAX_RATE = 0.03;
var amount = 102.98;
 amount = amount + (amount * TAX_RATE);
console.log(amount)
// blocks
var amount=55;
if(amount>50){
    let amount=90
    amount=amount*2;
    console.log(amount);
}
// conditionals
var airtime_balance=40;
var call_airtime=55;
if(call_airtime>airtime_balance){
    console.log("You have insufficient airtime,please top up and try again later.");
}
else{
    console.log("The mobile subscriber will pick your call in a few,please hold on.");
}
// loops
for(let i=1;i<=6;i++){
    console.log("Good morning Kendi,how was your night?");
}
function Fruit(){
    var fruits=["bananas","apples","mangoes","avocadoes"];
    console.log(fruits)
    console.log(fruits[2])
    console.log(fruits.length);
    console.log(typeof fruits);
}
Fruit()
var student={
    name:"Grace Kendi",
    admin:7104,
    stream:"AnitaB",
    nationality:"Rwandan",
    age:23,
    room:026,
}
console.log(student.stream);
console.log(student["nationality"]);
console.log(student.admin);
// accessing properties inside another variable.
var user={
     a:"Helllo Grace",
     b:40,
}
var b="a";
console.log(user["b"]);
console.log(user[b])
var c="Hello Grace Kendi,welcome to Jubilee Christian Centre.Feel at home.";
var offering=3000.557;
console.log(c.length);
console.log(offering.toFixed(2));
// comparing values ,
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
// comparing an array with an array,it checks the reference,where they are stored
console.log(a==b);
// comparing an array with a string,,checks the values
console.log(a==c);
console.log(b==c);
// this keyword
var fruit={
    name:"apples",
    quantity:2,
    total:function(price,quantity){
        cost=price*quantity;
        return this.total=cost
    }
}
fruit.total(30,2)
console.log(fruit.quantity+" "+ fruit.name +" "+ "for ksh" + cost.toFixed(2))
// IIFe
var a=10;
(function IIFE (){
    var a=20;
    console.log(a);
})
()
console.log(a);
// getters and setters
const kiosk={
    Fruit:"Apples",
    get getFruit(){
        return this.Fruit;
    },
    set setFruit(newFruit){
        return this.Fruit=newFruit
    }
}
console.log(kiosk.Fruit);
kiosk.newFruit="mangoes";
console.log(kiosk.newFruit);

