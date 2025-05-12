const tempDisplay = document.querySelector('.tempDisplay');
const inputNum = document.getElementById('inputNum');
const submitBtn = document.getElementById("submitBtn");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");

submitBtn.onclick = function() {
    const inputValue = parseFloat(inputNum.value); // Converts input to number

    if(isNaN(inputValue)) {
        tempDisplay.textContent = "Please enter a number.";
    }

    if(fahrenheit.checked){
        const result = (inputValue * 9/5) + 32;
        tempDisplay.textContent = `${result.toFixed(2)}°F`;
    }

    else if(celsius.checked){
        const result = (inputValue - 32) * 5/9;
        tempDisplay.textContent = `${result.toFixed(2)}°C`;
    }

    else {
        window.alert("Please enter a number and select a unit");
    }
}
