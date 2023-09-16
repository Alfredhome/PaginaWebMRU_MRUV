
        // Funciones para calcular los resultados
function calcularVelocidad(prefix) {
    const distancia = parseFloat(document.getElementById(`distancia_${prefix}`).value);
    const tiempo = parseFloat(document.getElementById(`tiempo_${prefix}`).value);
    const velocidad = distancia / tiempo;
    document.getElementById(`resultado_${prefix}`).innerHTML = `La velocidad es ${velocidad.toFixed(2)} m/s.`;
}

function calcularDistancia(prefix) {
    const velocidad = parseFloat(document.getElementById(`velocidad_${prefix}`).value);
    const tiempo = parseFloat(document.getElementById(`tiempo_${prefix}`).value);
    const distancia = velocidad * tiempo;
    document.getElementById(`resultado_${prefix}`).innerHTML = `La distancia es ${distancia.toFixed(2)} metros.`;
}

function calcularTiempo(prefix) {
    const distancia = parseFloat(document.getElementById(`distancia_${prefix}`).value);
    const velocidad = parseFloat(document.getElementById(`velocidad_${prefix}`).value);
    const tiempo = distancia / velocidad;
    document.getElementById(`resultado_${prefix}`).innerHTML = `El tiempo es ${tiempo.toFixed(2)} segundos.`;
}

function calcularAceleracion(prefix) {
    // Obtener los valores de los campos de entrada
    const vi = parseFloat(document.getElementById('vi').value); 
    const vf = parseFloat(document.getElementById('vf').value); 
    const t = parseFloat(document.getElementById('t').value);  
    
    // Calcular el cambio de velocidad y la aceleración
    const cambioVelocidad = vf - vi;
    const aceleracion = cambioVelocidad / t;

    // Mostrar el resultado en el elemento <div>
    document.getElementById(`resultado_${prefix}`).innerHTML = `La aceleración es ${aceleracion.toFixed(2)} m/s².`;
}


function calcularVelocidadFinal(prefix) {
    const velocidadInicial = parseFloat(document.getElementById(`velocidad_inicial_${prefix}`).value);
    const aceleracion = parseFloat(document.getElementById(`aceleracion_${prefix}`).value);
    const tiempo = parseFloat(document.getElementById(`tiempo_${prefix}`).value);
    const velocidadFinal = velocidadInicial + aceleracion * tiempo;
    document.getElementById(`resultado_${prefix}`).innerHTML = `La velocidad final es ${velocidadFinal.toFixed(2)} m/s.`;
}


function calcularVelocidadInicial(prefix) {
    // Obtener los valores de los campos de entrada
    const vf = parseFloat(document.getElementById(`vf_${prefix}`).value);
    const a = parseFloat(document.getElementById(`a_${prefix}`).value);
    const t = parseFloat(document.getElementById(`t_${prefix}`).value);

    // Calcular la velocidad inicial
    const vi = vf - (a * t);

    // Mostrar el resultado en el elemento <div>
    document.getElementById(`resultado_${prefix}`).innerHTML = `La velocidad inicial es ${vi.toFixed(2)} m/s.`;
}



