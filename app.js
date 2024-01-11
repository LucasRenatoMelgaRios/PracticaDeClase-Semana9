//OPERADORES ARITMETICOS 

let a = 5;
let b = 2;

let suma = a + b;      // 7
let resta = a - b;     // 3
let multiplicacion = a * b;  // 10
let division = a / b;  // 2.5
let modulo = a % b;    // 1

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);


// OPERADOR DE ASIGNACION

let x = 10;


// OPERADORES DE COMPARACIÓN

let a2 = 5;
let b3 = 10;

let menorQue = (a2 < b3);   // true
let igualQue = (a2 == b3);  // false

console.log(menorQue);
console.log(igualQue);


// OPERADORES LOGICOS

let edad = 25;
let tieneLicencia = true;

// AND (&&)
let puedeConducir = edad >= 18 && tieneLicencia;

console.log("¿Puede conducir?", puedeConducir);  // Devolverá true, ya que la edad es mayor o igual a 18 y tiene licencia.

//OR (||)
let descuento = (edad < 18) || (edad >= 65);

console.log("¿Tiene descuento?", descuento);  // Devolverá false, ya que la edad no es menor que 18.

//NOT (!)
let noTieneDescuento = !descuento;

console.log("¿No tiene descuento?", noTieneDescuento);  // Devolverá true, ya que la variable descuento es false.
