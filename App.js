// Chapter 1


// alert ("Error!Please Enter The Valid Password");

// alert("Welcome to js Land... \nhappy coding!");

// alert("Welcome to js Land...")
// alert ("Happy coding! \n preven this page from creating additional dialogs.");

// alert("hello... I can run js through my web browser's console");
// console.log("hello... I can run js through my web browser's console");


// Chapter 2
// 1.
// var userName;
// 2.
// var myName = "Zohaib Raza"

//    3.
// var message = "Hello world"
// alert(message)

// 4.

// var bioData = ["jhohn doe" , "15 years old" , "certify mobile app devolopment course"];
// for(var i = 0; i < bioData.length; i++){
//     alert(bioData[i])
// }

//  5.


// var food = "pizza"
// for(var i = food.length; i >0; i--){
  
//     console.log(food.slice(0,i))
// }

// 6.

// var value = "my email address is"
// var mail = " e.g. example@example.com"
// var email = (value+""+mail)
// alert(email)

//  7.

// var a = "I am trying to learn from the book"
// var b = " A smarter way to learn JavaScript"
// var c = a+b
// alert(c)

//  8.


// var type = "Yah! I can write HTML content through javascript"
// document.write(type)

//  9.

// alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");


//   1.

// var age = 15 ;
// alert(age);

//  2.


// declar varibale visitor assign localStoarge.getItem("visitor") to this variable 
// now check value == null using if condition 
// if value === null then set item in local storage using key= "visitor" and value="0"
// localStorage.setItem("visitor",0)
// else set   local storage value visitor++


// var visitor = localStorage.getItem("visitor");
// if (visitor == null){
//     console.log("yes")
//     localStorage.setItem("visitor" , 0)
// }else{
//     visitor++;
//     localStorage.setItem("visitor" , visitor++);
//   alert("you have visited this site " + visitor +" times")
// }


//  3.


// var DOB = "my birth year is"
// var year = 1992
// document.write(DOB+year);


//  4.

// var visitorName = "jhone Doe"
// var productTitle = "T-shirt(s)"
// var quantity = 5
// var Order = "ordered"
// var email = "on XYZ Clothing Store"
// document.write('<span id="para">'+visitorName +'</span>'+" "+Order+" "+'<span id="para">'+quantity +'</span>'+" "+'<span id="para">'+productTitle +'</span>'+" "+email);


//  1.

// var a =["ab" , "cd" , "ef"];

//  2. 

// var abc
// var ab12
// var K2c
// var a_ab
// var $abc


// var var
// var 2ab
// var a+b
// var a.1
// var K-12


//  3. 


// var a = "Rules for naming JS variables"
// document.write('<span id="para">'+a+'</span>')

// document.write("<br>")
// document.write("<br>")

// var b = "Variable names can only contain,number,$and_.For example:$my_1stVariable"

// var c = "Variables must begin with a letter,$ or_.For example:$name, _name or name"

// var d = "Variable names are case sensitive"

// var e = "Variable names should not be JS keywords"

// document.write(b,"<br>",c,"<br>",d,"<br>",e);

//  1.

// var a = 3;
// var b = 5;
// var c = a+b;
// document.write("sum of 3 and 5 is"+" "+c);

//  2.

// var a = 3;
// var b = 5;
// var c = a*b;
// document.write("multiplication of 3 and 5 is"+" "+c);

// var a = 50;
// var b = 5;
// var c = a/b;
// document.write("division of 50 and 5 is"+" "+c);

// var a = 5;
// var b = 3;
// var c = a%b;
// document.write("modulus of 3 and 5 is"+" "+c);


//  3.

// var a ;
// var value = 5;
// var add = value++;
// var addnum = 7;
// var now = value+addnum;
// var decr = now--;
// var div = 0;
// document.write("Value after variable declaration is: ",a);
// document.write("<br>")
// document.write("Initial value is: ",add);
// document.write("<br>")
// document.write("Value after increment: ",value);
// document.write("<br>")
// document.write("after addition is: ",decr)
// document.write("<br>")
// document.write("after decrement is: ",now)
// document.write("<br>")
// document.write("The remainder is: ",div/3)

//  4.

// var ticket = 600
// var buying = 5
// var totalCost = ticket*buying
// document.write("total cost to buy 5 tickets to a movie is: ",totalCost,"PKR");

//  5.

// var table = 4
// for(i = 1; i <= 10; i++){
//     multi = i*table;
//     document.write("<br>")
//     document.write(table,"x",[i],"=",multi)
// }

//  6.

// c = (77-32)*5/9
// d = (171-32)*5/9
// document.write(c)
// document.write("<br>")
// document.write(d)

//  7.

// var item1 = 650
// var item2 = 100
// var charges = 100

// document.write("Price of item 1 is: ",item1)
// document.write("<br>")
// document.write("quantity of item 1 is 3 ")
// document.write("<br>")
// document.write("Price of item 2 is: ",item2)
// document.write("<br>")
// document.write("quantity of item 2 is 7 ")
// document.write("<br>")
// document.write("Shipping charges ",charges)
// document.write("<br>")
// document.write("Total cost of your order is ",item1*3+item2*7+charges)

//  8.

// var totalMarks = 980
// var marksObtianed = 804
// var percentage = 804/980*100
// document.write("percentag is: ",percentage)

//  9.

// var usDollar = 104.80
// var saudiRiyal = 28
// var pakistanRupees = usDollar*10+saudiRiyal*25
// document.write("Total currency in PKR ",pakistanRupees)

//  10.

// var a = +prompt("type in sum number")
// var b = +prompt("type in any number")
// var c = a+b
// document.write(c)


// var calculate = 5*10/2
// document.write(a)

//  .11

// var currentYear = 2016
// var birthYear = 1992
// var yourAge = currentYear-birthYear
// document.write("your age is: ",yourAge)

//  12.