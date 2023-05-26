"use strict";
let activeTextBox = document.getElementById("activeText");
let historyTextBox = document.getElementById("historyText");
document.querySelectorAll(".numBut").forEach((button) => {
    button.addEventListener("click", (e) => {
        let numText = button.getAttribute("num");
        // @ts-ignore
        activeTextBox.innerHTML += numText;
    });
});
// Addinf the AC and CE button functionality
// @ts-ignore
document.querySelector("#acBut").addEventListener("click", (e) => {
    console.log("AC button clicked");
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
        console.log("Operator button clicked");
        let opText = button.getAttribute("op");
        if (opText == "=") {
            // @ts-ignore
            activeTextBox.innerHTML = eval(historyTextBox.innerHTML + activeTextBox.innerHTML);
            // @ts-ignore
            historyTextBox.innerHTML = "";
        }
        // @ts-ignore
        else if (historyTextBox.innerHTML == "") {
            // @ts-ignore
            historyTextBox.innerHTML = activeTextBox.innerHTML + ' ' + opText;
            // @ts-ignore
            activeTextBox.innerHTML = "";
        }
        else {
            // @ts-ignore
            historyTextBox.innerHTML = eval(historyTextBox.innerHTML + activeTextBox.innerHTML) + ' ' + opText;
            // @ts-ignore
            activeTextBox.innerHTML = "";
        }
    });
});
//# sourceMappingURL=app.js.map