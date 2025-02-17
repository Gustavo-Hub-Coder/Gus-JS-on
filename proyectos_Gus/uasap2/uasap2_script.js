//desaparecer la pagina de entrada y aparecer la pagina de mensajes
function Listo() {
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let Listo = document.getElementById("Listo");
    let Salir = document.getElementById("Salir");

    div1.style.display = "none";

    div2.style.display = "block";

    Listo.style.display = "none";

    Salir.style.display = "block";

    let entrarInput = document.getElementById("entrarInput").value;
    document.getElementById("nombreCuenta").innerHTML = `Cuenta: ${entrarInput}`;

    if(entrarInput < 1) {
        alert("[ERROR] escriba el nombre de la cuenta en la caja de entrada");
        div1.style.display = "block";
        div2.style.display = "none";
        Listo.style.display = "block";
    }
}
// desaparecer la pagina de mensajes y aparecer la pagina de entrada
function Salir() {
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let Listo = document.getElementById("Listo");
    let Salir = document.getElementById("Salir");

    div1.style.display = "block";

    div2.style.display = "none";

    Listo.style.display = "block";
    
    Salir.style.display = "none";
}

function modoOscuro(){
    let mdo = document.getElementById("mdo");
    let mdc = document.getElementById("mdc");

    mdo.style.display = "none";
    mdc.style.display = "block"
    document.body.style.backgroundColor = "#1a1a1e";
    document.body.style.color = "#ffffff";
}

function modoClaro() {
    let mdo = document.getElementById("mdo");
    let mdc = document.getElementById("mdc");

    mdo.style.display = "block";
    mdc.style.display = "none";
    document.body.style.backgroundColor = "#f9f9f9";
    document.body.style.color = "#333333";
}
