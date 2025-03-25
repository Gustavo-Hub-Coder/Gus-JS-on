
let regExp = /^[a-zA-Z-áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙ]+$/;

function VerificarTrueoFalse() {
    let SalidaInput = document.getElementById("EntradaContraseña").value;

    if (regExp.test(SalidaInput)) {
        document.querySelector('.escudo1').style.borderColor = 'Green';
    } else if (regExp.test(SalidaInput) == false){
        document.querySelector('.escudo1').style.borderColor = 'red';
    }
}

document.getElementById("EntradaContraseña").addEventListener("input", VerificarTrueoFalse);

