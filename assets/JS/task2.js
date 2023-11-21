let number1 = 10;
let number2 = 5;

const func1 = function (number1, number2) {
    if (number1 < number2) {
        return number1;
    }else {
        return number2;
    }
}
    
let result = func1(number1, number2);
console.log (result);



const func2 = function() {
    let age = prompt("Введите возраст");

    if (age === null) {
        alert("Отменено");
    } else {
        age = parseFloat(age);
        if (!isNaN(age) && age >= 18) {
        alert("Да");
    } else if (!isNaN(age) && age < 18) {
        alert("Нет");
    } else {
        alert("Ошибка");
    }
    }
}


func2 ();

