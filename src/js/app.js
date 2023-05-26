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
//# sourceMappingURL=app.js.map