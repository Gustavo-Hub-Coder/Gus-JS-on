/*
console.log(window);
console.log(document);

let texto = "oi eu Gustavo";
const hablar = (texto) => speechSynthesis.
speak(new SpeechSynthesisUtterance(texto));

hablar(texto);
*/
/*console.log("*********** Elementos del Documento **************");
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
*/
/*
    métodos que permiten seleccionar elementos de un documento HTML

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
*/
    //Atributos y DATA-attributes
/*
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
*/
/*
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
*/
    //variables CSS en JavaScript con el DOM
/*
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
/*
let varBlueColor = getComputedStyle($html).getPropertyValue("--blue-color");
//verificacion para ver si declaración funcionó
$body.style.backgroundColor = varBlueColor;
$html.style.setProperty("--blue-color" , "red");
varBlueColor = getComputedStyle($html).getPropertyValue("--blue-color");
$body.style.setProperty("background-color", varBlueColor);
*/
    //CLASES CSS
/*    
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
*/
    //DOM: texto y HTML
/*    
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
*/
    //DOM traversing: Recorriendo el DOM
/*    
const $cards = document.querySelector(".card");

console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild);
console.log($cards.closest());
*/
/* Creando elementos
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
*/
//MANEJADORES DE EVENTOS 
//función manejadora de eventos
function holaMundo() {
    alert("hola mundo");
    console.log(event)
}
//para declarar un manejador de eventos semantico se declara en el JS
const $eventosemantico = document.getElementById("eventosemantico"),
    $eventoMultiple = document.getElementById("eventoMultiple")

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
    alert("hola mundo manejador de evenetos multiple")
    console.log(e);
    //tipo de evento
    console.log(e.type);
    //evento que lo origina
    console.log(e.target);
    console.log(event);
});