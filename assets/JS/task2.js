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

//if / else Version
//calc1

const calc1 = function (num1, param, num2) {
    // '+'
    if (param === '+') {
        return num1 + num2;
    // '-'    
    } else if (param === '-') {
        return num1 - num2;
        // '*'  
    } else if (param === '*') { 
        return num1 * num2;
        // '/'  
    } else if (param === '/')
    if (num2 === 0) {
        return 'Error';
    }else {
        return num1 / num2;
    }else {
        return 'ti tupoi';
    }
}
// (number1, 'x', number2);


//switch / case Version
//calc2

const calc2 = function (num1, param, num2) {
    switch(param){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
            case '/':
                if(num2 === 0) {
                    return 'error'
                }
            return num1 / num2;
        default:
            return 'error';                
    }
}

// (number1, 'x', number2);