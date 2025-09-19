// ===============================
// Ejercicio 1: Tienda Online
// ===============================

let producto = {
  detalles: {
    nombre: "Laptop",
    precio: 1200,
    categoria: "Computadoras"
  },
  inventario: {
    stock: 100,
    proveedor: "TechSupplier",
    ubicacion: "Almacén A"
  },
  historial: {
    fechaIngreso: "2025-01-15",
    ultimaVenta: "2025-09-10",
    ventasTotales: 500
  }
};

console.log("Detalles:", producto.detalles);
producto.inventario.stock += 50;
producto.detalles.categoria = "Electrónica";

let { nombre, precio } = producto.detalles;
console.log("Nombre:", nombre);
console.log("Precio:", precio);

console.log("Producto actualizado:", producto);


// ===============================
// Ejercicio 2: Biblioteca
// ===============================

let libro = {
  informacion: {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    genero: "Novela"
  },
  disponibilidad: {
    copias: 30,
    prestados: 12,
    ubicacion: "Estante 5B"
  },
  registro: {
    fechaPublicacion: "1967-05-30",
    fechaIngreso: "2020-01-10",
    ultimaRevision: "2024-12-01"
  }
};

console.log("Autor:", libro.informacion.autor);

let disponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados;
console.log("Ejemplares disponibles:", disponibles);

libro.registro.ultimaRevision = new Date().toISOString().split("T")[0];
libro.informacion.genero = "Realismo mágico";

let { titulo } = libro.informacion;
let { ubicacion } = libro.disponibilidad;
console.log("Título:", titulo);
console.log("Ubicación:", ubicacion);

console.log("Libro actualizado:", libro);
