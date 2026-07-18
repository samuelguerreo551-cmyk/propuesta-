// ===============================
// ELEMENTOS DE LA PÁGINA
// ===============================

const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const mensaje = document.getElementById("mensaje");
const contenedor = document.querySelector(".contenedor");

// Frases que aparecerán al pulsar "No"
const frases = [
    "¿Segura? 🥺",
    "Piénsalo bien ❤️",
    "No acepto esa respuesta 😭",
    "Vamos... dame una oportunidad 😋",
    "Estoy esperando el Sí 😩",
    "¿De verdad vas a decir que no? 🥹",
    "El botón correcto es el rosado 😏",
    "¡Casi lo logras! Ahora pulsa Sí 🤭",
    "!segura que no quieres estar conmigo",
    "AAAYYY NO ME AMA 😭",
];

let intentos = 0;

// ====================================
// CUANDO PULSA EL BOTÓN NO
// ====================================

btnNo.addEventListener("click", () => {

    // Cambiar mensaje
    if (intentos < frases.length) {
        mensaje.textContent = frases[intentos];
    } else {
        mensaje.textContent = "Ya no puedes escapar 😂❤️";
    }

    intentos++;

    // Hacer crecer el botón SI
    const escala = 1 + (intentos * 0.15);

    btnSi.style.transform = `scale(${escala})`;

    // Mover el botón NO

    const ancho = window.innerWidth - 180;
    const alto = window.innerHeight - 100;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    btnNo.style.position = "fixed";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";

});


// ====================================
// CUANDO PULSA EL BOTÓN SI
// ====================================

btnSi.addEventListener("click", () => {

    document.body.innerHTML = `

    <div class="contenedor">

        <h1 style="color:#ff3f81;">
            ❤️ Sabía que dirías que sí ❤️
        </h1>

        <br>

        <p style="font-size:22px;">

            Me haces la persona más feliz del mundo.

            <br><br>

            Prometo hacer todo lo posible para sacarte una sonrisa cada día y que apesar de todo sepas lo mucho que te amo.

            <br><br>

            ❤️‍🔥 TE AMO MUCHISIMO ❤️‍🔥

        </p>

        <br>

<img
    src="https://raw.githubusercontent.com/samuelguerreo551-cmyk/imagenes-importantes/main/WhatsApp%20Image%202026-07-09%20at%204.41.00%20PM.jpeg"
    alt="Nuestra foto"
    style="
    width:260px;
    margin-top:-20px;
    border-radius:20px;
    box-shadow:0 10px 25px rgba(0,0,0,.25);
"
    

        >

    </div>

    `;

});
