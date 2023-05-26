let activeTextBox = document.getElementById("activeText");
let historyTextBox = document.getElementById("historyText");

document.querySelectorAll(".numBut").forEach((button) => {
    button.addEventListener("click", (e) => {
        let numText = button.getAttribute("num");

        // @ts-ignore
        activeTextBox.innerHTML += numText;
    });
}
)

// Addinf the AC and CE button functionality
// @ts-ignore

document.querySelector("#acBut").addEventListener("click", (e) => {
    console.log("AC button clicked");
    // @ts-ignore
    activeTextBox.textContent = "";
    // @ts-ignore
    historyTextBox.textContent = "";
    
}
)
// @ts-ignore
document.getElementById("ceBut").addEventListener("click", (e) => {
    // @ts-ignore
    activeTextBox.textContent = "";
}
)

// Adding the operator button functionality
document.querySelectorAll(".operatorBut").forEach((button) => {
    button.addEventListener("click", (e) => {
        // console.log("Operator button clicked");
        
        let opText = button.getAttribute("op");
        
        // If the operator is "=", then the result is displayed in the activeTextBox and the historyTextBox is cleared
        if (opText == "=") {
            // @ts-ignore
            activeTextBox.innerHTML = eval(historyTextBox.innerHTML + activeTextBox.innerHTML);
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
        } else {
            // @ts-ignore
            historyTextBox.innerHTML = eval(historyTextBox.innerHTML + activeTextBox.innerHTML) + ' ' + opText;
            // @ts-ignore
            activeTextBox.innerHTML = "";
        }

        
    });
})

// Adding the decimal button functionality

// @ts-ignore
document.querySelector("#decBut").addEventListener("click", (e) => {
    // console.log("Decimal button clicked");
    // If the decimal button is clicked, then a decimal is added to the activeTextBox without spaces
    // @ts-ignore
    activeTextBox.innerHTML += ".";
})

