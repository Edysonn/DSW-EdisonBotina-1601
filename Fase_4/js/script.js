function procesarRespuestas() {
    let total = 5
    let puntos= 0;
    

    let myForm = document.forms["formulario"];
    let RespuestasCorrectas = ["a","c","b","a","b"];

    for (let i = 1; i <= total; i++) {
        if (myForm["r"+i].value == null || 
            myForm["r"+i].value == '') {
            alert('Tal vez olvidaste responder una o varias preguntas');
            return false;
        } else {
            if (myForm["r" + i].value === RespuestasCorrectas[i - 1])
            puntos ++;
        }
    }
    let resultado1 = document.getElementById('resultado1')
    resultado1.innerHTML='Obtuviste '+ puntos +' puntos de '+ total +' posibles';
    return false;

}
function procesarRespuestas2() {
    let total = 5
    let puntos= 0;
    

    let myForm = document.forms["formulario"];
    let RespuestasCorrectas = ["b","a","b","b","a"];

    for (let i = 1; i <= total; i++) {
        if (myForm["r"+i].value == null || 
            myForm["r"+i].value == '') {
            alert('Debe responder todas la preguntas antes de poder enviar sus respuestas');
            return false;
        } else {
            if (myForm["r" + i].value === RespuestasCorrectas[i - 1])
            puntos ++;
        }
    }
    let resultado1 = document.getElementById('resultado1')
    resultado1.innerHTML='Obtuviste '+ puntos +' puntos de '+ total +' posibles';
    return false;

}
function procesarRespuestas3() {
    let total = 5
    let puntos= 0;
    

    let myForm = document.forms["formulario"];
    let RespuestasCorrectas = ["a","c","b","c","a"];

    for (let i = 1; i <= total; i++) {
        if (myForm["r"+i].value == null || 
            myForm["r"+i].value == '') {
            alert('Favor responder todas las preguntas');
            return false;
        } else {
            if (myForm["r" + i].value === RespuestasCorrectas[i - 1])
            puntos ++;
        }
    }
    let resultado1 = document.getElementById('resultado1')
    resultado1.innerHTML='Obtuviste '+ puntos +' puntos de '+ total +' posibles';
    return false;

}

const limpiarSeleccion = (name) => {//cada vez que se invoque se limpiará el radio button unicamente con el mismo nombre.
    const radioBtns = document.querySelectorAll("input[type='radio'][name='"+ name + "']");
    radioBtns.forEach((radioBtn) =>{
        if(radioBtn.checked === true) radioBtn.checked = false;//si hay selección, este se reiniciará
        resultado1.innerHTML='aquí se verá su resultado después de dar clic al botón "enviar"';// pantalla de mensaje
        return false;
    })
}