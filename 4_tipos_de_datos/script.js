"use strict";
// Tipo de dato primitivo: string
const str1 = "Hola soy un string hecho con comillas dobles";
const str2 = 'Hola soy un string hecho con comillas simples';
const nombre = 'Juan';
const apellido = 'González';
const str3 = `Hola, mi nombre es ${nombre} ${apellido} y este string esta hecho con backticks`;
console.log(str1);
console.log(str2);
console.log(str3);
// Tipo de dato primitivo: number
const num1 = 10;
const num2 = 5.5;
const num3 = 2.5e3;
const num4 = 1.5e-3;
const num5 = 0xA;
const num6 = 0o12;
const num7 = 0b1010;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
// Tipo de dato primitivo: boolean
const bool1 = true;
const bool2 = false;
console.log(bool1);
console.log(bool2);
// Tipo de dato primitivo: undefined
// Es combinable con otros
let variableUndefined;
variableUndefined = undefined;
console.log(variableUndefined);
// Tipo de dato primitivo: null
// Es combinable con otros
let variableNull;
variableNull = null;
console.log(variableNull);
// Tipos de dato compuesto/estructurado: objeto literal
// Se utiliza una interfaz o types para tiparlo
const candidato = {
    nombre: "Pedro Sánchez",
    edad: 35,
    contratado: true,
    puesto: null,
    salario: undefined
};
console.log(candidato);
// Tipos de dato compuesto/estructurado: array
const numeros = [1, 2, 3, 4, 5];
const nombres = ['Juan', 'María', 'Pedro'];
const luces = [true, false, true];
console.log(numeros);
console.log(nombres);
console.log(luces);
// Tipos de dato compuesto/estructurado: enum
var diasDeSemana;
(function (diasDeSemana) {
    diasDeSemana[diasDeSemana["Lunes"] = 0] = "Lunes";
    diasDeSemana[diasDeSemana["Martes"] = 1] = "Martes";
    diasDeSemana[diasDeSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    diasDeSemana[diasDeSemana["Jueves"] = 3] = "Jueves";
    diasDeSemana[diasDeSemana["Viernes"] = 4] = "Viernes";
    diasDeSemana[diasDeSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    diasDeSemana[diasDeSemana["Domingo"] = 6] = "Domingo";
})(diasDeSemana || (diasDeSemana = {}));
var colores;
(function (colores) {
    colores["Rojo"] = "rojo";
    colores["Verde"] = "verde";
    colores["Azul"] = "azul";
})(colores || (colores = {}));
console.log(diasDeSemana);
console.log(colores);
// Tipos de dato compuesto/estructurado: función
function sumar(a, b) {
    return a + b;
}
// El tipo de dato devuelto es implícito e inferido por TS
const dividir = (a, b) => a / b;
function saludar1(nombre, edad) {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    }
    else {
        return `Hola, mi nombre es ${nombre}.`;
    }
}
function saludar2(nombre, edad = 30) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}
console.log(sumar(10, 5));
console.log(dividir(9, 3));
console.log(saludar1('Juan', 32));
console.log(saludar1('Juan'));
console.log(saludar2('María', 25));
console.log(saludar2('María'));
// Tipos de dato definido por el usuario: clase
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}
let juan = new Persona('Juan');
juan.saludar();
console.log(juan);
