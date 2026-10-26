// Registro del Service Worker para soporte offline e instalación
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log('Service Worker Registrado'));
}

// Función para mostrar el cálculo seleccionado
function mostrarCalculo() {
    const calculoSeleccionado = document.getElementById('calculo').value;
    document.getElementById('primer-calculo').style.display = 'none';
    document.getElementById('segundo-calculo').style.display = 'none';
    document.getElementById('tercer-calculo').style.display = 'none';
    document.getElementById('cuarto-calculo').style.display = 'none';

    if (calculoSeleccionado) {
        document.getElementById(calculoSeleccionado).style.display = 'block';
    }
}   

// Lógica de programación de tu calculadora
function calcular() {
    const fr = parseFloat(document.getElementById('param1').value);
    const vc = parseFloat(document.getElementById('param2').value);
    
    if (isNaN(fr) || isNaN(vc)) {
        alert('Por favor, ingresa valores válidos.');
        return;
    }

    // Fórmula de ejemplo (Volumen Minuto = FR * VC / 1000)
    const ve = (fr * vc) / 1000;

    const resDiv = document.getElementById('resultado');
    resDiv.innerHTML = `Volumen Minuto (VE): ${ve.toFixed(2)} L/min`;
    resDiv.style.display = 'block';
}