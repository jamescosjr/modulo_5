function converterFahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

function converterCelsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

module.exports = { converterFahrenheitParaCelsius, converterCelsiusParaFahrenheit };