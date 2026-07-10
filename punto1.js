class Restaurante {
  constructor(nombre, categoria, calificacion) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.calificacion = calificacion;
  }
     describir(){
        return  this.nombre + " - "  + this.categoria + (this.calificacion + " ⭐ ")
     }

     estaBienCalificado(){
          return  this.calificacion >=4.5;
    
            
     }

}

let r1=new Restaurante("tierra querida","Hamburguesas",4.6);
let r2 = new Restaurante("Pizza House", "Pizzería", 4.2);

console.log(r1.describir());
console.log(r1.estaBienCalificado());

console.log(r2.describir());
console.log(r2.estaBienCalificado());




