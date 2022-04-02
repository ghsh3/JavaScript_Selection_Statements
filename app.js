console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");


// Exercise 1
// let rand = my number (13) or favoriteNum = 16
//or - let rand - Math.floor(Math.random() * 100) + 1;
/* let userInput = window.prompt("text.");
or let userInput = Number(prompt('.')); */
/* (to round userInput) 
let userInput = Math.round(
    Number(prompt("Enter a whole number between 1 and 100:"))); 
    userInput!== Math.round(userInput)*/


    let randNum = Math.floor(Math.random() * 100) + 1;
    let userInput = Number(prompt('Please enter a whole number from 1 and 100.'));
    
    if (isNaN(userInput) || 
        userInput <= 0 || 
        userInput > 100 || 
        userInput !== parseInt(userInput)
    ){
        alert(`You did not enter a whole number between 1 and 100`);
    } else 
     if (userInput === randNum) {
        alert(`Congradulation! You are a Winner! ${userInput} = ${randNum}`); 
    }
     else if (userInput > randNum) {
        alert(`${userInput} , sorry,your number is too high!`); 
    }
      else {
        alert(`${userInput} , sorry,your number is too low!`); 
    } 
    



// Exercise 2
let tree = window.prompt("What is your favorit tree?");

switch(tree.toLocaleLowerCase()) {/* The method will convert their input to lowercase*/ 
    case "hickey":
        console.log("They are known for their longevity as they could reach 300 year of age.");
    break;
    case "birch":
         alert("Interesting fact, They were one of the first types of trees to emerge right after the glacierrs of the ice age receded.");
    break;
    case "cedar":
         alert("They are very popular as Christmas trees.");
    break;
    case "maple":
        alert("Yum! Good choice if you enjoy maple syrup!");
    break;
    case "weeping willow":
        alert("Fun fact - they can grow 10ft in height per year.");
    break;
    default:
        alert("Tree is not listed.");
    break;
}

