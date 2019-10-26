
var special = ")*%#@></][!~&";
var numeric = "12345689";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var userChoice = "";
var password = "";

function run() {
    var userLength = parseInt(prompt("how many characters do you want?"));

    if (userLength < 8){
        alert("must be at least 8");
        //return;
    }
    if (userLength > 128){
        alert ("must be less than 128");
        //return;
    }


    var specialCharacters = confirm("click ok to include special characters");

    if (specialCharacters === true) {
        userChoice += userChoice + special;
    }


    var numericCharacters = confirm("click ok to include numbers");

    if (numericCharacters === true) {
        userChoice += userChoice + numeric;
    }

    var lowercaseCharacters = confirm("click ok to include lowercase");

    if (lowercaseCharacters === true) {
        userChoice += userChoice + lower;
    }

    var uppercaseCharacters = confirm("click ok to include uppercase");


    if (uppercaseCharacters === true)  {
        userChoice += userChoice + upper;
    }  

    if (
        specialCharacters === false &&
        numericCharacters === false &&
        lowercaseCharacters === false &&
        uppercaseCharacters === false
    )   {
        alert("must choose one character");
    }

    function passwordGenerator() {
        for (var i = 1; i <= userLength; i++) {
            password = password + userChoice.charAt(Math.floor(Math.random() * userChoice.length) + 1)
        }
        document.getElementById("password").value = password;
    }

    passwordGenerator()
}

















// this is where I will write out the steps that I need to for this 

//1. declare the variables,password, userchoice,
//password variable


//2. ask the questions,yes or no,one for each

//3. make sure one answer is yes
// 4. loop through user choices to display a random password


