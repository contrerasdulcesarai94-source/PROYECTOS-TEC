const pantalla = document.getElementById('pantalla');

function agregar(valor) {
    if (pantalla.value === '0' || pantalla.value === 'Error') {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    }
}

function limpiar() {
    pantalla.value = '0';
}

function borrar() {
    if (pantalla.value.length > 1) {
        pantalla.value = pantalla.value.slice(0, -1);
    } else {
        pantalla.value = '0';
    }
}

function calcular() {
    try {
        let resultado = eval(pantalla.value);
        pantalla.value = resultado;
    } catch (error) {
        pantalla.value = 'Error';
    }
}
function raiz() {
    try {
        // Calcula la raíz cuadrada usando Math.sqrt y evalúa lo que haya en la pantalla
        let resultado = Math.sqrt(eval(pantalla.value));
        pantalla.value = resultado;
    } catch (error) {
        pantalla.value = 'Error';
    }
}