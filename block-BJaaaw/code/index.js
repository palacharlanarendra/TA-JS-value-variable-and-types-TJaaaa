// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = Number(prompt("Enter a number"));
switch(true){
  case number%2==0:
    console.log("number is even");
    break;
  case number%2!=0:
    console.log("number is odd");
    break;
}
let number = Number(prompt("Enter a number"));
if(number%2==0){
  console.log("number is even");
}else{
  console.log("number is odd");
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1=Number(prompt("Enter a number"));
let num2=Number(prompt("Enter a number"));
if(num1>num2){
  alert("Num1 is the max vale")
}else if(num2>num1){
  alert("Num2 is the max value")
}else{
  alert("Both are equal")
}
// 3. Convert the above code using`?` terniary operator
let num1=Number(prompt("Enter a number"));
let num2=Number(prompt("Enter a number"));
num1>num2? "num1 is the max value":"num2 is max value";
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName=prompt("Enter the house name ?");
if(houseName==="stark"){
  console.log("Winter is coming");
}else if(houseName==="lannister"){
  console.log("A lannister always pays his debt");
}else{
  console.log("All men must die")
}

// 5. Convert the above code using`?` terniary operator

houseName==="stark"?"Winter is coming":houseName==="lannister"?"A lannister always pays his debt":"All men must die";
// Switch
switch(true){
  case houseName==="stark":
    console.log("Winter is coming");
    break;
  case houseName==="lannister":
    console.log("A lannistaler always pays his debt");
    break;
  default:
    console.log("All men must die");
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = Number(prompt("Enter the month"));
switch(month){
  case 1:
    alert(31);
    break;
  case 2:
    alert(28);
    break;
  case 3:
    alert(31);
    break;
  case 4:
    alert(30);
    break;
  case 5:
    alert(31);
    break;
  case 6:
    alert(30);
    break;
  case 7:
    alert(31);
    break;
  case 8:
    alert(31);
    break;
  case 9:
    alert(30);
    break;
  case 10:
    alert(31);
    break;
  case 11:
    alert(30);
    break;
  case 12:
    alert(31);
    break;
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

//  if..else vs switch
let salary = Number(prompt("Enter the salary"));
if(salary<=20000){
  var tax = (salary*(10/100));
  var inhandSalary=salary-tax;
  console.log(inhandSalary);
}else if(salary<=40000){
  var tax = (salary*(20/100));
  var inhandSalary=salary-tax;
  console.log(inhandSalary);
}else if(salary>50000){
  var tax = (salary*(30/100));
  var inhandSalary=salary-tax;
  console.log(inhandSalary);
}

let salary = Number(prompt("Enter the salary"));
switch(true){
  case salary<=20000:
    var tax = (salary*(10/100));
    var inhandSalary=salary-tax;
    console.log(inhandSalary);
    break;
  case salary<=40000:
    var tax = (salary*(20/100));
    var inhandSalary=salary-tax;
    console.log(inhandSalary);
    break;
  case salary>50000:
    var tax = (salary*(30/100));
    var inhandSalary=salary-tax;
    console.log(inhandSalary);
    break;
}

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("Enter the marks"));
if(marks > 100){
  alert("Marks can't be greater than 100");
}else if(marks > 80 && marks < 100){
  alert("Grade A");
}else if(marks > 50 && marks < 80){
  alert("Grade B");
}else if(marks > 30 && marks < 50){
  alert("Grade C");
}else if(marks > 0){
  alert("Grade D");
}

let marks = Number(prompt("Enter the marks"));
switch(true){
  case marks > 100:
    alert("Marks can't be greater than 100");
    break;
  case marks > 80 && marks < 100:
    alert("Grade A");
    break;
  case marks > 50 && marks < 80:
    alert("Grade B");
    break;
  case marks > 30 && marks < 50:
    alert("Grade C");
    break;
  case marks > 0:
    alert("Grade D");
    break;
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside?");

weather=="sunny"?"Wear a T-shirt":weather=="rainy"?"Don't forget to take your raincoat":
weather=="hot"?"Get a hanky":weather=="freezing"?"Get your sweeter on":"Not a valid input";


let weather = prompt("What is the weather like outside?");
switch(true){
  case weather=="sunny":
    alert("Wear a T-shirt");
    break;
  case weather=="rainy":
    alert("Don't forget to take your raincoat");
    break;
  case weather=="hot":
    alert("Get a hanky");
    break;
  case weather=="freezing":
    alert("Get your sweeter on");
    break;
  default:
    alert("Not a valid input");
    break;
}
