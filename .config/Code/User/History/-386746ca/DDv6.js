// ================================
// EJERCICIOS DE CADENAS EN JS
// ================================

// 1. Nombre sin espacios y contar caracteres
function ejercicio1() {
    let nombre = prompt("Ingrese su nombre completo:");
    let nombreLimpio = nombre.trim();
    let caracteresSinEspacios = nombreLimpio.replace(/\s+/g, "").length;

    console.log("=== EJERCICIO 1 ===");
    console.log("Nombre limpio: " + nombreLimpio);
    console.log("Número de caracteres sin espacios: " + caracteresSinEspacios);
}

// 2. Validación de correo electrónico
function ejercicio2() {
    let correo = prompt("Ingrese su correo electrónico:");
    let correoNormalizado = correo.toLowerCase();
    let esValido = correoNormalizado.endsWith("@gmail.com");

    console.log("=== EJERCICIO 2 ===");
    console.log("Correo normalizado: " + correoNormalizado);
    console.log("¿Es dominio válido?: " + (esValido ? "Sí" : "No"));
}

// 3. Mostrar últimos 4 caracteres de un código
function ejercicio3() {
    let codigo = prompt("Ingrese un código:");
    let ultimos4 = codigo.slice(-4);

    console.log("=== EJERCICIO 3 ===");
    console.log("Últimos 4 caracteres: " + ultimos4);
}

// 4. Buscar la palabra "error" en un mensaje
function ejercicio4() {
    let mensaje = prompt("Ingrese un mensaje:");
    let posicion = mensaje.indexOf("error");

    console.log("=== EJERCICIO 4 ===");
    if (posicion !== -1) {
        console.log(`La palabra "error" aparece en la posición: ${posicion}`);
    } else {
        console.log("La palabra 'error' no aparece en el mensaje.");
    }
}

// ================================
// LLAMADAS A LOS EJERCICIOS
// (Puedes comentar o descomentar los que quieras probar)
// ================================

ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4();