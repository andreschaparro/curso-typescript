type Programador = {
    nombre: string,
    tecnologias: string[],
    homeOffice?: boolean | null
}

let programador1: Programador = {
    nombre: 'José Pérez',
    tecnologias: ['C', 'C++', 'Arduino'],
    homeOffice: false
}

let programador2: Programador = {
    nombre: 'Josefina Paredes',
    tecnologias: ['HTML', 'CSS', 'JS', 'REACT'],
}

console.log(programador1);
console.log(programador2);