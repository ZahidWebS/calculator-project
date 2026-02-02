//  CALCULATOR PROGRAM


const display=document.getElementById("display");
function clearDisplay(){
    display.value="";
}

function appendDisplay(input){
    display.value += input;
}

function calculate() {
    try {
        const result = eval(display.value);

        // Check for division by zero
        if (result === Infinity || result === -Infinity) {
            display.value = "Error";
            return;
        }

        // Check for NaN (example: 0/0)
        if (isNaN(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;
    }
    catch (error) {
        display.value = "Error";
    }
}