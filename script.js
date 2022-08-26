const calcular = document.getElementById('calcular');
const deletar = document.getElementById('limpar');


function imc () {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (altura !== '' && peso !== '') {

        const valorIMC = (peso/(altura**2)).toFixed(2);

        resultado.textContent = `Bom dia, segundo seus dados seu IMC é ${valorIMC}. Qualquer dúvida procure um especialista
        e sempre mantenha os exércios físicos!!! 
        💪💪💪`;

    }

}

function limpa() {
    document.getElementById('altura').value = "";
    document.getElementById('peso').value = "";
}
calcular.addEventListener('click', imc);