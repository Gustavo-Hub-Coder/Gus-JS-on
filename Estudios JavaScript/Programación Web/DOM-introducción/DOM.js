/*
console.log(window);
console.log(document);

let texto = "oi eu Gustavo";
const hablar = (texto) => speechSynthesis.
speak(new SpeechSynthesisUtterance(texto));

hablar(texto);

console.log("*********** Elementos del Documento **************");
//console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola mundo desde el DOM<h2>")





    //métodos que permiten seleccionar elementos de un documento HTML

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[1]);




    //Atributos y DATA-attributes

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-WebAPIs").href);
console.log(document.querySelector(".link-WebAPIs").getAttribute("href"));
//Modificacion de atributos de el documento com DOM desde JS
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");

const $linkDOM = document.querySelector(".link-WebAPIs");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopen");
$linkDOM.setAttribute("href", "https://www.instagram.com/gusta_a067/");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));




    //DATA_ATTRIBUTES

console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de objeto del documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Sigueme em mi instagram"
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"))


const $linkDOM = document.querySelector(".link-WebAPIs");
console.log($linkDOM.style);
//con el comando getAttribute también se puede ejecutar el atributo style 
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.whidth = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";






    //variables CSS en JavaScript con el DOM

const $html = document.documentElement,
$body = document.body;
//El método getComputedStyle() obtiene las propiedades y los valores CSS
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
//Modificación de variables css en javascript
$html.style.setProperty("--dark-color", "pink");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
//el método setProperty() "resetea" la propiedad seleccionada
$body.style.setProperty("background-color", varDarkColor);


    //practica

let varBlueColor = getComputedStyle($html).getPropertyValue("--blue-color");
//verificacion para ver si declaración funcionó
$body.style.backgroundColor = varBlueColor;
$html.style.setProperty("--blue-color" , "red");
varBlueColor = getComputedStyle($html).getPropertyValue("--blue-color");
$body.style.setProperty("background-color", varBlueColor);






    //CLASES CSS
   
const $card = document.querySelector(".card");

console.log("EJECUTAR EL VALOR DE LA CLASE EN LA CONSOLA")
console.log($card);
//Obtener el valor de el atributo class usando className
console.log($card.className);
//el método classList tiene la misma función que className, solo que ejecuta el valor(es) en una lista
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
//adicionar una clase con add()

console.log("ADICIONANDO CLASE")

$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.classList);
console.log($card.className);
//remover una clase remove()

console.log("REMOVIENDO CLASE")

$card.classList.remove("rotate-45");

console.log($card.classList.contains("rotate-45"));
console.log($card.classList);
console.log($card.className);

//El método toggle permite alternar entre dos estados, como remover o adicionar un elemento, o ocultar y mostrar una clase de un elemento
//Antes estaba sin la clase rotate ahora esta en la lista de clases por el comando toggle
$card.classList.toggle("rotate-45");

console.log($card.classList.contains("rotate-45"));

//Ahora lo removió porque antes estaba en la lista, osea "bajamos la palanca (toggle)"
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia", "rotate-135");

    //DOM: texto y HTML
   
const $whatlsDOM = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;
//mala practica
//$whatlsDOM.innerText = text;
$whatlsDOM.textContent = text;
$whatlsDOM.innerHTML = text;
$whatlsDOM.outerHTML = text;





    //DOM traversing: Recorriendo el DOM
    
const $cards = document.querySelector(".card");

console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild);
console.log($cards.closest());





// Creando elementos
const $figure = document.createElement("figure"),
 $img = document.createElement("img"),
 $figcaption = document.createElement("figcaption"),
 $figcaptionText = document.createTextNode("animals"),
 $cards = document.querySelector(".cards");
 $figure2 = document.createElement("figure");
//el método setAttribute Permite añadir, modificar o actualizar atributos y sus valores en un elemento HTML
$img.setAttribute("src", "https://picsum.photos/id/16/200");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);

$figure2.innerHTML = `
<img src="https://picsum.photos/id/590/200" alt="People">
<figcaption>People</figcaption>
`
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
 $ul = document.createElement("ul");

 document.write("<h3>Estaciones del Año<h3>");
 document.body.appendChild($ul)

 estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li)
 });

 const continentes = ["América", "Asia", "Africa", "Europa", "Oceanía"],
 $ul2 = document.createElement("ul");

 document.write("<h3>Continentes del mundo<h3>");
 document.body.appendChild($ul2)
 ul2 = innerHTML = "";
 continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`))




//MANEJADORES DE EVENTOS Y EVENTOS CON PARAMETROS Y REMOVER EVENTOS
//función manejadora de eventos

function holaMundo() {
    alert("hola mundo");
    console.log(event)
}
//toda función que pueda ser manejadora de evento no puede tener parametros que no sea event
function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
    console.log(event);
}
//para declarar un manejador de eventos semantico se declara en el JS
const $eventosemantico = document.getElementById("eventosemantico"),
    $eventoMultiple = document.getElementById("eventoMultiple"),
    $eventoRemover = document.getElementById("evento-remover")

$eventosemantico.onclick = holaMundo;
$eventosemantico.onclick = function (e) {
    alert("Hola Mundo Manejador de eventos Semantico")
    console.log(e);
    console.log(event);
}
//para declarar un manejador de eventos multiples se usa la palavra resservada addEventListener()
$eventoMultiple.addEventListener("click", holaMundo);
//manera de arrow function
$eventoMultiple.addEventListener("click", (e) => {
    alert("hola mundo manejador de eventos multiple")
    console.log(e);
    //tipo de evento
    console.log(e.type);
    //evento que lo origina
    console.log(e.target);
    console.log(event);
});
//La función que no es manejadora de eventos dentro de una funcion anonima tiene que tener ()
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Gustavo")
});

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick)
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick",removerDobleClick)





    //Flujo de Eventos (Burbuja y captura)

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
    console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);
}

//Delegación de eventos  
document.addEventListener("click", (e) => {
    console.log("Click en ", e.target)

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")) {
        alert("hola, soy Gustavo");
        e.preventDefault();
    }
})



    //BOM propiedades de la ventana y eventos
window.addEventListener("resize", (e) => {
    console.clear()
    console.log("*****Evento Resize*****")
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
});

window.addEventListener("scroll", (e) =>{
    console.clear();
    console.log("*****Evento Scroll*****");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load", (e) =>{
    console.log("*****Evento Load*****");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

document.addEventListener("DOMContentLoaded", e =>{
    console.log("*****Evento DOMContentLoaded*****");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

//window.alert("Alerta");
//window.confirm("Confirmación");
//window.prompt("Aviso");
             //BOM MÉTODOS
const $btnAbrir = document.querySelector("#abrir-ventana"),
    $btnCerrar = document.querySelector("#cerrar-ventana"),
    $btnImprimir = document.querySelector("#imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = window.open("https://www.instagram.com/gusta_a067/");
}); 

$btnCerrar.addEventListener("click", e => {
    //window.close()
    ventana.close();
});

$btnImprimir.addEventListener("click", e => {
    window.print();
});   

//          BOM OBJETOS: URL, HISTORIAL Y NAVEGADOR

console.log("******OBJETO URL (location)*******");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.pathname);



console.log("***********OBJETO HISTORIAL (history)");
console.log(history);
console.log(history.length);

console.log("********Objeto Navegador (navigator)**********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
*/
