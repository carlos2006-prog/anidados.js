// promedioNotas.js
const readline = require("readline");

const lr = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let notas = [];
let contador = 0;

function pedirNota() {
  (readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })).question(`Ingrese la nota ${contador + 1}: `, (respuesta) => {
    let nota = parseFloat(respuesta);
    if (isNaN(nota)) {
      console.log("Por favor, ingrese un número válido.");
      pedirNota();
    } else {
      notas.push(nota);
      contador++;
      if (contador < 3) {
        pedirNota();
      } else {
        let promedio = (notas[0] + notas[1] + notas[2]) / 3;
        console.log(`El promedio de las tres notas es: ${promedio.toFixed(2)}`);
        (readline.createInterface({
          input: process.stdin,
          output: process.stdout
        })).close();
      }
    }
  });
}

pedirNota();



// kmToMillas.js
const readline = require("readline");


(readline.createInterface({
  input: process.stdin,
  output: process.stdout
})).question("Ingrese la cantidad en kilómetros: ", (respuesta) => {
  let km = parseFloat(respuesta);
  if (isNaN(km)) {
    console.log("Debe ingresar un número válido.");
  } else {
    let millas = km * 0.621371;
    console.log(`${km} km equivalen a ${millas.toFixed(2)} millas.`);
  }
  (readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })).close();
});



// costoCompra.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(readline.createInterface({
  input: process.stdin,
  output: process.stdout
})).question("Ingrese el precio unitario del producto: ", (precio) => {
  (readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })).question("Ingrese la cantidad de productos: ", (cantidad) => {
    let p = parseFloat(precio);
    let c = parseInt(cantidad);

    if (isNaN(p) || isNaN(c)) {
      console.log("Debe ingresar valores válidos.");
    } else {
      let total = p * c;
      console.log(`El costo total de la compra es: $${total.toFixed(2)}`);
    }
    (readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })).close();
  });
});