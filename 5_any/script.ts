// En los siguientes casos, TS infiere el tipo de dato de las variables en función de los valores que se les asignan
// Conclusión: evitar usar any para saltear la comprobación de tipado de TS
let variable;

variable = 'Cadena de texto 1';
console.log(variable);

variable = 1000;
console.log(variable);

variable = true;
console.log(variable);

let variableAny: any;

variableAny = 'Cadena de texto 2';
console.log(variableAny);

variableAny = 2000;
console.log(variableAny);

variableAny = false;
console.log(variableAny);