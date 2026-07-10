class Pelicula {
    constructor(titulo, duracion) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.precioBase = 15000;
    }

    precioBoleta() {
        return this.precioBase;
    }

    ficha() {
        return this.titulo + " - " +
               this.duracion + " min - $" +
               this.precioBoleta();
    }
}

class PeliculaVIP extends Pelicula {

    constructor(titulo, duracion, incluyeComida) {
        super(titulo, duracion);
        this.incluyeComida = incluyeComida;
    }

    precioBoleta() {
        let precio = this.precioBase + 25000;

        if (this.incluyeComida) {
            precio += 18000;
        }

        return precio;
    }
}

let p1 = new Pelicula("Avatar", 180);
let p2 = new PeliculaVIP("Superman", 150, true);

console.log(p1.ficha());
console.log(p2.ficha());
