const tempDisplay = document.querySelector('.tempDisplay');
const inputNum = document.getElementById('inputNum');
const submitBtn = document.getElementById("submitBtn");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");

submitBtn.onclick = function() {
    const inputValue = parseFloat(inputNum.value); // Converts input to number

    if(!(inputValue)) {
        tempDisplay.textContent = "Please enter a number.";
    }

    // Fahrenheit calculation
    if(fahrenheit.checked){
        const result = (inputValue * 9/5) + 32;
        tempDisplay.textContent = `${result.toFixed(2)}°F`;
    }

    // Celsius calculation
    else if(celsius.checked){
        const result = (inputValue - 32) * 5/9;
        tempDisplay.textContent = `${result.toFixed(2)}°C`;
    }

    // An alert warning the user to enter a value and select either Fahrenheit or Celsius
    else {
        window.alert("Please enter a number and select a unit");
    }

    // If the user were to enter a letter instead of a valid number, an alert will show up warning the user to enter a number not a letter.
    try {
        if (isNaN(inputValue)) {
            throw new Error("Please enter a valid number!!!");
        }
    } catch (error) {
        window.alert("Please enter a valid number!!!");
    }
}
