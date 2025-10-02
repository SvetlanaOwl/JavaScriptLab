//слушатель (обработчик событий)
document.getElementById("btnHi").addEventListener("click", function() {
    alert("Button 1 clicked!");
});
document.getElementById("btnBye").addEventListener("click", function() {
    alert("Button 2 clicked!");
});
//apply
demo.innerHTML = Math.max.apply(null, [1, 2, 3]); 
//стрелочная функция
let hello = () => {
            return "Hello World!";
        }
        demo.innerHTML = hello();
//bind
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}
let fullName = person.fullName.bind(member);
demo.innerHTML = fullName();
//method
const myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
    demo.innerHTML = myObject.fullName();