// Tipo de dato primitivo: string
const str1: string = "Hola soy un string hecho con comillas dobles";
const str2: string = 'Hola soy un string hecho con comillas simples';
const nombre: string = 'Juan';
const apellido: string = 'González';
const str3: string = `Hola, mi nombre es ${nombre} ${apellido} y este string esta hecho con backticks`;

console.log(str1);
console.log(str2);
console.log(str3);

// Tipo de dato primitivo: number
const num1: number = 10;
const num2: number = 5.5;
const num3: number = 2.5e3;
const num4: number = 1.5e-3;
const num5: number = 0xA;
const num6: number = 0o12;
const num7: number = 0b1010

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);

// Tipo de dato primitivo: boolean
const bool1: boolean = true;
const bool2: boolean = false;

console.log(bool1);
console.log(bool2);

// Tipo de dato primitivo: undefined
// Es combinable con otros
let variableUndefined: undefined;
variableUndefined = undefined;

console.log(variableUndefined);

// Tipo de dato primitivo: null
// Es combinable con otros
let variableNull: null;
variableNull = null;

console.log(variableNull);

// Tipos de dato compuesto/estructurado: objeto literal
// No es tipado por defecto, se necesita una interface para tiparlo
const candidato = {
    nombre: "Pedro Sánchez",
    edad: 35,
    contratado: true,
    puesto: null,
    salario: undefined
};

console.log(candidato);

// Tipos de dato compuesto/estructurado: array
const numeros: number[] = [1, 2, 3, 4, 5];
const nombres: string[] = ['Juan', 'María', 'Pedro'];
const luces: boolean[] = [true, false, true];

console.log(numeros);
console.log(nombres);
console.log(luces);

// Tipos de dato compuesto/estructurado: enum
enum diasDeSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}

enum colores {
    Rojo = "rojo",
    Verde = "verde",
    Azul = "azul"
}

console.log(diasDeSemana);
console.log(colores);

// Tipos de dato compuesto/estructurado: función
function sumar(a: number, b: number): number {
    return a + b;
}

// El tipo de dato devuelto es implícito e inferido por TS
const dividir = (a: number, b: number) => a / b;

function saludar1(nombre: string, edad?: number): string {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    } else {
        return `Hola, mi nombre es ${nombre}.`;
    }
}

function saludar2(nombre: string, edad: number = 30): string {
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
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}

let juan = new Persona('Juan');
juan.saludar();

console.log(juan);

// Tipos de dato definido por el usuario: interfaces
interface Celular {
    modelo: string;
    pin: number;
}

interface Producto {
    nombre: string;
    precio: number;
    descripcion?: string;
}

// Interface para funciones
interface Comparador {
    (a: number, b: number): boolean;
}

// Interface para clases
interface Persona {
    nombre: string;
    // void se usa cuando una función o método no devuelve nada
    saludar(): void;
}

// Tipos de dato definido por el usuario: types
// Lo siguiente es útil cuando se consumen datos de un backend
type Datos = string | null | undefined;