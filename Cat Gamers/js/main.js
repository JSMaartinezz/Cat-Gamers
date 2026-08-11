// Variables generales //
let seccionesMenuNavegacion = document.querySelector(".secciones-menu");
let botonMenuHamburguesa = document.querySelector(".menu-hamburguesa");
let botonMenuHamburguesaActivo = false;
// Boton menu hamburguesa //
botonMenuHamburguesa.addEventListener("click", function() {
    if (botonMenuHamburguesaActivo === false) {
        botonMenuHamburguesaActivo = true;
        seccionesMenuNavegacion.classList.add("secciones-menu-activado");
    } else {
        botonMenuHamburguesaActivo = false;
        seccionesMenuNavegacion.classList.remove("secciones-menu-activado")
    }
    })
