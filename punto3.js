class UsuarioNequi {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  enviar(monto) {
    if (monto > this.saldo) {
      return "Saldo insuficiente";
    }

    this.saldo -= monto;

    return this.nombre + " - Saldo: $" + this.saldo;
  }
}

class ComercioNequi extends UsuarioNequi {
  constructor(nombre, saldo, comision) {
    super(nombre, saldo);
    this.comision = comision;
  }

  enviar(monto) {
    let total = monto + (monto * this.comision) / 100;
    return super.enviar(total);
  }
}

let persona = new UsuarioNequi("Cesar", 100000);
let comercio = new ComercioNequi("Tienda Gladis", 100000, 3);

console.log(persona.enviar(20000));
console.log(comercio.enviar(20000));
