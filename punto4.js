class Vehiculo {
  constructor(placa, pasajeros) {
    this.placa = placa;
    this.pasajeros = pasajeros;
    this.tarifaBase = 2950;
  }

  tarifa() {
    return this.tarifaBase;
  }

  reporte() {
    return (
      this.placa + " - " + this.pasajeros +  " - " + "pasajeros -$ " + this.tarifa()
    );
  }
}

class Alimentador extends Vehiculo {
  tarifa() {
    return 0;
  }
}

class BusDual extends Vehiculo {
  constructor(placa, pasajeros, esElectrico) {
    super(placa, pasajeros);
    this.esElectrico = esElectrico;
  }

  tarifa() {
    if (this.esElectrico) {
      return 2500;
    }
    return 3200;
  }
}

let flota = [
  new Vehiculo("ABCDX", 30),
  new Alimentador("DEF456", 40),
  new BusDual("GHK723", 35, true),
];

for (const v of flota) {
  console.log(v.reporte());
}
