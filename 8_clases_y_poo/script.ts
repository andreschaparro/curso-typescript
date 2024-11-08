// Una clase representa algo del mundo real
class Pelicula {
    // Una clase tiene atributos, que serían las características de ese algo
    nombre: string;
    protagonistras: string[];
    actores: string[];

    // El constructor carga los valores iniciales de los atributos
    constructor(nombre: string, protagonistras: string[], actores: string[]) {
        // this nos permite acceder a los atributos de la clase
        this.nombre = nombre;
        this.protagonistras = protagonistras;
        this.actores = actores;
    }
    // Una clase tiene tiene métodos, que serían las acciones que puede realizar ese algo
    proyectarEnCine(): void {
        console.log(`${this.nombre} está siendo proyectada`);
    }
}

// new se utiliza para crear una instancia de una clase, también llamada objeto
const pelicula1 = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling']);
const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr.']);

console.log(pelicula1);
console.log(pelicula2);

// Se ejecuta el método proyectarEnCine para cada objeto
pelicula1.proyectarEnCine();
pelicula2.proyectarEnCine();