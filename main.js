// functions for basic math operators. 
function add(x,y){
    return x + y;
}

function substract(x, y){
    return x - y;
}

function divide(x,y){
    return x / y;
}

function multiply(x, y){
    return x * y;
}


function operate (operator){
    operator(x, y);
    return operator(x, y);
}

//Variables for the two display <p> elements,
//other one displays user input and
// the other one displays results after user clicks "="
const upperDisplay = document.querySelector('#display-text');
const lowerDispaly = document.querySelector('#display-results');




//Function that adds a event listener to each number button,
//that prints out the value of each button on to the display. 
function populateDisplay(){
    const activateButtons = document.querySelectorAll(".number-btn")
    for(i = 0; i < activateButtons.length; i++){
        const eachBtn = activateButtons[i];
            eachBtn.addEventListener("click", () => { 
            numberOfOperators = 0;     
            console.log(eachBtn.value)
            upperDisplay.innerText = `${upperDisplay.innerText}${eachBtn.value}` 
        });
    }
}

//Function that adds the operator to the display
//Only allows the uses to add a single operator hopefully.
//if user inputs two operators in a row, it deletes the other one.
let numberOfOperators = 0; 

function displayOperator(){
    const activateOperators = document.querySelectorAll(".operator-button");
    for(i = 0; i < activateOperators.length; i++){
        const eachBtn = activateOperators[i];
        eachBtn.addEventListener("click", () => {
            numberOfOperators += 1;
            if(numberOfOperators <= 1){
                numberOfOperators = numberOfOperators + 1;
                upperDisplay.innerText = `${upperDisplay.innerText}${eachBtn.value}`
            }else if(numberOfOperators > 1){
                let str = upperDisplay.innerText.slice(0, -1);
                upperDisplay.innerText =(`${str}${eachBtn.value}`);
            }
        })

    }
}

//Adds an event listener to the equals button that reads the display input
//and chooses correct operator
//function equals(){
    const equalsButton = document.querySelector("#eqbtn");
    equalsButton.addEventListener("click", () => {
        upperDisplay.innexText.split(' ')
    });



//Adds event listener to the clear button, clears the display.
const clearButton = document.querySelector("#clearBtn")
clearButton.addEventListener("click", () =>{
    numberOfOperators = 0; 
    upperDisplay.innerText = ""
    //lowerDisplay.innterText = "";
});

//Adds backspace feature to the backspace button,
//by running a function that removes the last letter in the display
const backSpace = document.querySelector("#backspace");
backSpace.addEventListener("click", () => {
    numberOfOperators = 0;
    let str = upperDisplay.innerText.slice(0, -1);
    upperDisplay.innerText =(`${str} `) 
});





populateDisplay();
displayOperator();
//equals();