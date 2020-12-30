//Variables for the two display <p> elements,
//other one displays user input and
// the other one displays results after user clicks "="
const upperDisplay = document.querySelector('#display-text');
const lowerDisplay = document.querySelector('#display-results');


//Function that adds an event listener to each number button
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
//if user inputs two operators in a row, it deletes the first one.
let numberOfOperators = 0; 

function displayOperator(){
    const activateOperators = document.querySelectorAll(".operator-button");
    for(i = 0; i < activateOperators.length; i++){
        const eachBtn = activateOperators[i];
        eachBtn.addEventListener("click", () => {
            numberOfOperators += 1;
            if(numberOfOperators <= 1){
                numberOfOperators = numberOfOperators + 1;
                upperDisplay.innerText = `${upperDisplay.innerText} ${eachBtn.value} `
            }else if(numberOfOperators > 1){
                let str = upperDisplay.innerText.slice(0, -2);
                upperDisplay.innerText =(`${str}${eachBtn.value} `);
            }
        })

    }
}

//Adds an event listener to the equals button that turns the input into an array
//and then does all the calculations from left to right and prints out the result.
//This is a mess, Sorry to anyone reading this code. 
    
    const equalsButton = document.querySelector("#eqbtn");
    equalsButton.addEventListener("click", () => {
        const equationArr = upperDisplay.innerText.split(' ')
        let result = 0;
        let isFirst = true;

        for(i = 0; i < equationArr.length + 10; i++){
        if(isNaN(parseFloat(equationArr[0])) == false && isFirst == true){
            let firstNumber = parseFloat(equationArr.shift());
            let secondNumber = parseFloat(equationArr[1]);
            isFirst = false;
            
            if(equationArr[0] === "+"){
                result = secondNumber + firstNumber;
            }else if(equationArr[0] == "-"){
                result = firstNumber - secondNumber;
            }else if(equationArr[0] == "*"){
                result = firstNumber * secondNumber;
            }else if(equationArr[0] == "/"){
                result = firstNumber/secondNumber;
            }else if (equationArr[0] == undefined) {
                result = upperDisplay.textContent;
            }else {
                result = "Funny business";
            }
            
        }else if(isNaN(parseFloat(equationArr[0])) == false && isFirst == false){
            let nextNumber = parseFloat(equationArr[2]);
            equationArr.splice(0, 1);
            ;
            if(equationArr[0] == "+"){
                    result = result + nextNumber;
                } else if(equationArr[0] == "-"){
                    result = result - nextNumber;
                } else if(equationArr[0] == "*"){
                    result = result * nextNumber;
                } else if(equationArr[0] == "/"){
                    result = result / nextNumber;
                }  
                
                equationArr.splice(0, 1);
                
                         
        }else if(equationArr[0] == "+" || equationArr[0] == "-" || equationArr[0] == "*" || equationArr[0] == "/"){
            
            equationArr.splice(0, 1);
            
        }

            
        lowerDisplay.innerText = `${+result.toFixed(2)}` 
        if(result === Infinity){
            lowerDisplay.innerText = "U wot mate"
        }  
    }
     upperDisplay.innerText = ""   
    
})

//Adds event listener to the clear button, clears the display.
const clearButton = document.querySelector("#clearBtn")
clearButton.addEventListener("click", () =>{
    numberOfOperators = 0; 
    upperDisplay.innerText = ""
    lowerDisplay.innerText = "";
});

//Adds backspace feature to the backspace button,
//by running a function that removes the last letter in the display
const backSpace = document.querySelector("#backspace");
backSpace.addEventListener("click", () => {
    numberOfOperators = 0;
    let str = upperDisplay.innerText.slice(0, -1);
    upperDisplay.innerText =(`${str}`) 
});

//Adds the +/- sign to change input number into negative/positive
const negativeButton = document.querySelector('#negBtn')
negativeButton.addEventListener("click", ()=>{
    let equationArr = upperDisplay.innerText.split(' ')
    let lastIndex = equationArr[equationArr.length - 1];
    
    if(lastIndex > 0){

            let str = equationArr.pop();
            str = "-" + str;
            equationArr.push(str);
            let newInput = equationArr.join(" ");
            upperDisplay.textContent = newInput;
            console.log(lastIndex)
    } else if (lastIndex < 0){
            
            console.log("Fuck")
            let str = equationArr.pop();
            str = str.substring(1);
            console.log(str);
            equationArr.push(str)
            console.log(equationArr)
            let newInput = equationArr.join(" ");
            upperDisplay.textContent = newInput;
            isNegative = 1;
    }
});

populateDisplay();
displayOperator();
