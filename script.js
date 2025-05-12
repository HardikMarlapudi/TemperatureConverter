let tempDisplay = document.querySelector('.tempDisplay');
const submitBtn = document.getElementById("submitBtn");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");

submitBtn.onclick = function() {
    const inputValue = document.getElementById('tempNum');

    if(isNaN(inputValue)) {
        tempDisplay.textContent = "Please enter a valid number";
        return;
    }

    if(fahrenheit.checked){
        const result = (inputValue * 9/5) + 32;
        tempDisplay.textContent = `${result.toFixed(2)} °F`;
        return;
    }

    else if(celsius.checked) {
        const result = (inputValue - 32) * 5/9;
        tempDisplay.textContent = `${result.toFixed(2)} °C`;
    }

    else {
        window.alert("Please enter a valid number");
    }
}
