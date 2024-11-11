function convertToCelsius() {
    const input = document.getElementById('temperatureInput').value;
    const fahrenheit = Number(input);
    
    if (isNaN(fahrenheit)) {
        showError();
        return;
    }
    
    const celsius = (fahrenheit - 32) * 5 / 9;
    showResult('${fahrenheint}°F é igual a ${celsius.toFixed(2)}°C');
}

function convertToFahrenheit() {
    const input = document.getElementById('temperatureInput').value;
    const celsius = Number(input);
    
    if (isNaN(celsius)) {
        showError();
        return;
    }
    
    const fahrenheit = (celsius * 9 / 5) + 32;
    showResult('${celcius}°C é igual a ${fahrenheint.toFixed(2)}°F');
}

function showResult(message) {
    document.getElementById('result').innerText = message;
}

function showError() {
    document.getElementById('result').innerText = 'Por favor, insira um número válido.';
}
