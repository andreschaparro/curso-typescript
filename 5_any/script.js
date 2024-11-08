"use strict";
// En los siguientes casos, TS infiere el tipo de dato de las variables en función de los valores que se les asignan
// Conclusión: nunca hacer lo que se muestra a continuación
let variable;
variable = 'Cadena de texto 1';
console.log(variable);
variable = 1000;
console.log(variable);
variable = true;
console.log(variable);
let variableAny;
variableAny = 'Cadena de texto 2';
console.log(variableAny);
variableAny = 2000;
console.log(variableAny);
variableAny = false;
console.log(variableAny);
