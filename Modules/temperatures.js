//convert fahrenheit to celsius
export function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
//convert celsius to fahrenheit
export function toFahrenheit(celsius) {
    return (celsius * 9 / 5)  + 32;
}