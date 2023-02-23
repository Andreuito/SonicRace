function startRace() {
    // Obtenemos las imágenes de los corredores
    var runner1 = document.getElementById("sonic");
    var runner2 = document.getElementById("knucles");

    // Definimos la distancia de la carrera
    var windowWidth = window.innerWidth; // Obtenemos el ancho de la ventana
    var track = document.getElementById("seguimiento"); // Obtenemos el elemento que contiene la pista
    track.style.width = windowWidth + "px"; // Le damos el ancho de la ventana
    var distance = windowWidth - 100; // La distancia es el ancho de la ventana menos el ancho de la imagen de los corredores

    // Definimos la velocidad de cada corredor
    var speed1 = Math.random() * 10; // Math.random() devuelve un número aleatorio entre 0 y 1
    var speed2 = Math.random() * 10; // Multiplicamos por 10 para que la velocidad sea mayor

    // Definimos las posiciones iniciales de los corredores
    var position1 = 0;
    var position2 = 0; 

    // Movemos las imágenes de los corredores hacia la meta
    var raceInterval = setInterval(function () { // setInterval() ejecuta una función cada cierto tiempo
        position1 += speed1; // Aumentamos la posición del corredor 1
        position2 += speed2;

        runner1.style.left = position1 + "px"; // Movemos la imagen del corredor 1
        runner2.style.left = position2 + "px";

        if (position1 >= distance || position2 >= distance) { // Si alguno de los corredores llega a la meta
            clearInterval(raceInterval);

            // Mostramos el ganador
            if (position1 >= distance) {
                document.getElementById("resultado").innerHTML = "¡Sonic es el ganador!";
            } else if (position2 >= distance) {
                document.getElementById("resultado").innerHTML = "¡Knucles es el ganador!";
            }
        }
    }, 50);
}
