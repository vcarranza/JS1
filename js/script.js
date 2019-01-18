//keyword var means variable
//name is the name of the variable
//= means assigning value to name variable
//"victor"is the value assigned to'name' variable
//type string
var name ="Victor";
//type number
var age = 5;
//type array
var arr = [5,2,42,"abc","grt"];
//type object
var obj = {
  firstname:"Victor",
  lastname: "Carranza",
  age:27
};

//console.log("hi, i am ",name);
//console.log("hi, i am " + name);
//var greeting = "hi, i'm" + name;
//console.log(greeting);
//var greet ="hi, i'm"
//var anothergreeting = greet.concat(name);
//console.log(anothergreeting);
//console.log("hi, i'm", name,"and my age is",age)
console.log("hi, i'm",obj.firstname);
console.log("hi, I'm", obj['firstname']);
console.log("hi, I'm, obj.firstname.lastname.age");
console.log("hi, I'm", obj['firstname','lastname','age']);
console.log("hi, I'm",name,age);
console.log("hi, I'm" + name + age);
