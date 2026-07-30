function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.style.display = "block";

    // Desplaza suavemente hasta el mensaje
    mensaje.scrollIntoView({
        behavior: "smooth"
    });
}
