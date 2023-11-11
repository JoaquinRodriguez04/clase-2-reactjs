/*
? Ejercicio 1 =>
Tengo desarrollada la siguiente función en javascript;
function suma (a,b,callback){
let c = a +b;
callback();
}
¿Que es el tercer parámetro recibido?
¿En que casos es obligatorio desarrollar este tipo de funciones?
Realizar un llamado a la función de ejemplo.

--------------------------------------------

El tercer parámetro que recibe la función suma es callback. En JavaScript, una función de retorno de llamada (callback) es una función que se pasa como argumento a otra función y que se espera que se ejecute después de que se complete algún tipo de operación. En este caso, la función suma toma dos números a y b, realiza la suma y luego ejecuta la función de retorno de llamada (callback). pero, simplemente ejecutara la función de retorno de llamada sin pasarle ningún valor. para que la función de retorno de llamada reciba el resultado de la suma, se tendria que modificar la funcion de esta manera; 

function suma(a, b, callback){
    let c = a + b;
    return callback(c);
}

suma(2, 5, function(res){
    console.log(res);
}); 

El uso de funciones de retorno de llamada es común en JavaScript y es especialmente útil en situaciones donde se realizan operaciones asíncronas o tareas que toman tiempo en completarse.

Operaciones Asíncronas: Cuando se trabaja con operaciones asíncronas, como solicitudes HTTP, lecturas/escrituras de archivos, o consultas a bases de datos, a menudo se necesita proporcionar una función de retorno de llamada que se ejecute una vez que la operación asíncrona se haya completado, por eso estara en espera.
*/

// llamada a la funcion de ejemplo
const users = ['mauro', 'joaquin', 'mateo', 'bautista'];

function requestUsers(users, callback){
    callback(users);
};

requestUsers(users, function(usersResult){
    console.log(usersResult);
});


/*
? Ejercicio 2 => 
Desarrollador una calculadora que tenga:
● 2 campos inputs para los operandos.
● 4 botones de operadores básicos (suma, resta, multiplicación, división)
todo:: Al realizar la cuenta se deberá actualizar el campo resultado.

--------------------------------------------
*/

const form = document.querySelector('#formCalculate');

// operators
const operator1 = document.querySelector('#numberOperator');
const operator2 = document.querySelector('#numberOperator2');

// butons 
const addition = document.querySelector("#addition");
const substraction = document.querySelector("#substraction");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const clear = document.querySelector("#clearResults");

// result Field
const results = document.querySelector("#results");

// events
addition.addEventListener('click', function(e){
    e.preventDefault();
    calculate('add');
});

substraction.addEventListener('click', function(e){
    e.preventDefault();
    calculate('subtract');
});

division.addEventListener('click', function(e){
    e.preventDefault();
    calculate('divide');
});

multiplication.addEventListener('click', function(e){
    e.preventDefault();
    calculate('multiply');
});

clear.addEventListener('click', () => {
    return (
        operator1.value = '',
        operator2.value = '',
        results.textContent = ''
    );
})

// result in memory
let result;

// function => calculate
function calculate(operation){

    // operators values
    const op1 = parseFloat(operator1.value);
    const op2 = parseFloat(operator2.value);

    if (isNaN(op1)|| isNaN(op2)){
        return results.textContent = 'por favor, números válidos.';
    }

    if (operation === 'add') {
        result = op1 + op2;
    } else if (operation === 'subtract') {
        result = op1 - op2;
    } else if (operation === 'divide') {
        result = op1 / op2;
    } else if (operation === 'multiply') {
        result = op1 * op2;
    }

    return results.textContent = `resultado: ${result}`;
};
