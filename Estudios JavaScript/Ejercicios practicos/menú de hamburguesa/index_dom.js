import hamburguerMenu from "./menuDeHamburguesa";
import { digitalClock, alarm } from "./reloj";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
});