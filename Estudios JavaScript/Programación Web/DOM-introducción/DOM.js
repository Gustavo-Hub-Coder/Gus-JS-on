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


