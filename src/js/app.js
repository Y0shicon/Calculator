"use strict";
let activeTextBox = document.getElementById("activeText");
let historyTextBox = document.getElementById("historyText");
document.querySelectorAll(".numBut").forEach((button) => {
    button.addEventListener("click", (e) => {
        // @ts-ignore
        activeTextBox.innerHTML += button.getAttribute("num");
    });
});
// Addinf the AC and CE button functionality
// @ts-ignore
document.querySelector("#acBut").addEventListener("click", (e) => {
    // @ts-ignore
    activeTextBox.textContent = "";
    // @ts-ignore
    historyTextBox.textContent = "";
});
// @ts-ignore
document.getElementById("ceBut").addEventListener("click", (e) => {
    // @ts-ignore
    activeTextBox.textContent = "";
});
// Adding the operator button functionality
document.querySelectorAll(".operatorBut").forEach((button) => {
    button.addEventListener("click", (e) => {
        // console.log("Operator button clicked");
        let opText = button.getAttribute("op");
        // If the operator is "=", then the result is displayed in the activeTextBox and the historyTextBox is cleared
        if (opText == "=") {
            // The .replace() method is used to replace the "X" and "÷" symbols with "*" and "/" respectively so that the eval() function can evaluate the expression
            // @ts-ignore
            activeTextBox.innerHTML = eval((historyTextBox.innerHTML + activeTextBox.innerHTML).replace("X", "*").replace("÷", "/"));
            // @ts-ignore
            historyTextBox.innerHTML = "";
        }
        // If the historyTextBox is empty, then the activeTextBox is moved to the historyTextBox and the operator is added
        // @ts-ignore
        else if (historyTextBox.innerHTML == "") {
            // @ts-ignore
            historyTextBox.innerHTML = activeTextBox.innerHTML + ' ' + opText;
            // @ts-ignore
            activeTextBox.innerHTML = "";
            // If the historyTextBox is not empty, then the activeTextBox is evaluated and the result is moved to the historyTextBox
        }
        else {
            // The .replace() method is used to replace the "X" and "÷" symbols with "*" and "/" respectively so that the eval() function can evaluate the expression
            // @ts-ignore
            historyTextBox.innerHTML = eval((historyTextBox.innerHTML + activeTextBox.innerHTML).replace("X", "*").replace("÷", "/")) + ' ' + opText;
            // @ts-ignore
            activeTextBox.innerHTML = "";
        }
    });
});
// Adding the decimal button functionality
// @ts-ignore
document.querySelector("#decBut").addEventListener("click", (e) => {
    // console.log("Decimal button clicked");
    // If the decimal button is clicked, then a decimal is added to the activeTextBox without spaces
    // @ts-ignore
    activeTextBox.innerHTML += ".";
});
// Implementing the keyboard functionality
document.addEventListener("keydown", (e) => {
    // console.log(e.key);
    // If the key pressed is a number, then the number is added to the activeTextBox
    if (e.key >= "0" && e.key <= "9") {
        // @ts-ignore
        activeTextBox.innerHTML += e.key;
    }
    // If the key pressed is an operator, then the operator is added to the historyTextBox 
    else if (e.key == "+" || e.key == "-" || e.key == "X" || e.key == "x" || e.key == "/" || e.key == "÷" || e.key == "%") {
        // @ts-ignore
        historyTextBox.innerHTML = eval((historyTextBox.innerHTML + activeTextBox.innerHTML).replace("X", "*").replace("÷", "/")) + ' ' + e.key;
        // @ts-ignore
        activeTextBox.innerHTML = "";
    }
    // If the key pressed is "=", then the result is displayed in the activeTextBox and the historyTextBox is cleared
    else if (e.key == "=" || e.key == "Enter") {
        // The .replace() method is used to replace the "X" and "÷" symbols with "*" and "/" respectively so that the eval() function can evaluate the expression
        // @ts-ignore
        activeTextBox.innerHTML = eval((historyTextBox.innerHTML + activeTextBox.innerHTML).replace("X", "*").replace("÷", "/"));
        // @ts-ignore
        historyTextBox.innerHTML = "";
    }
    else if (e.key == "Backspace") {
        // @ts-ignore
        activeTextBox.innerHTML = activeTextBox.innerHTML.slice(0, -1);
    }
    else if (e.key == "Escape") {
        // @ts-ignore
        activeTextBox.textContent = "";
        // @ts-ignore
        historyTextBox.textContent = "";
    }
    else if (e.key == "Delete") {
        // @ts-ignore
        activeTextBox.textContent = "";
    }
    else if (e.key == ".") {
        // @ts-ignore
        activeTextBox.innerHTML += ".";
    }
    else if (e.key == "c") {
        // @ts-ignore
        activeTextBox.innerHTML = "";
    }
    else if (e.key == "C") {
        // @ts-ignore
        activeTextBox.innerHTML = "";
    }
});
// Implementing the backspace functionality
// @ts-ignore
document.querySelector("#backspaceBut").addEventListener("click", (e) => { activeTextBox.innerHTML = activeTextBox.innerHTML.slice(0, -1); });
//# sourceMappingURL=app.js.map