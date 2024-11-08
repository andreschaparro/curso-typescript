// Se pasa un type genérico a una clase
class Sorteo<T> {
    // Un atributo privado solo puede ser leído por un getter o modificado por un setter, lo que provee encapsulamiento
    private ticket?: T

    constructor(
        // Crea automaticamente un atributo privado llamado nombre del tipo string y le asigna el valor cuando se crea la instancia
        private nombre: string
    ) { }

    // Setter
    setTicket(ticket: T) {
        this.ticket = ticket;
    }

    // Getter
    getTicket() {
        return this.ticket;
    }

    // Un método público se puede invocar desde afuera
    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}

// En el new indicamos que tipo de dato es el type genérico, y puede ser distinto para cada instancia
let sorteo1 = new Sorteo<number>('Juan');
let sorteo2 = new Sorteo<string>('María');

sorteo1.setTicket(20);
sorteo2.setTicket('A31');

console.log(sorteo1.sortear());
console.log(sorteo1.getTicket());

console.log(sorteo2.sortear());
console.log(sorteo2.getTicket());