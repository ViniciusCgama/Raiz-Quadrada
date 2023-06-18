"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById('calcular');
    let button_limpar = document.getElementById('limpar');

    button.addEventListener('click', calculo);
    button_limpar.addEventListener('click', limpar);

    function calculo(e) {
        e.preventDefault();

        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let num3 = parseFloat(document.getElementById('num3').value);

        if (num1 === 0) {
            alert('Equação de primeiro grau');
            let r1 = (-num2 + Math.sqrt(delta)) / (2 * num1);
            let r2 = (-num2 - Math.sqrt(delta)) / (2 * num1);
            let delta = Math.pow(num2, 2) - 4 * num1 * num3;
            document.getElementById("resultado").innerHTML = "Resultado √";
            document.getElementById("delta").textContent = "Delta Δ ";
        } else if (num2 === 0) {
            alert('Equação incompleta');
        } else if (num3 === 0) {
            alert('Equação incompleta');
        }

        let delta = Math.pow(num2, 2) - 4 * num1 * num3;
        document.getElementById("delta").textContent = "Delta = " + delta.toFixed(2);

        if (delta > 0) {
            let r1 = (-num2 + Math.sqrt(delta)) / (2 * num1);
            let r2 = (-num2 - Math.sqrt(delta)) / (2 * num1);
            document.getElementById("resultado").innerHTML = "Raiz 1 = " + r1.toFixed(2) + "<br>" + "Raiz 2 = " + r2.toFixed(2);

        } else if (delta === 0) {
            let rU = (-num2 + Math.sqrt(delta)) / (2 * num1);
            document.getElementById("resultado").innerHTML = "Raiz única = " + rU.toFixed(2);
        } else if (delta < 0) {
            document.getElementById("resultado").textContent = "Ɇ Raiz real";
        }
    }

    function limpar(e) {
        e.preventDefault();
        document.getElementById('num1').value = "";
        document.getElementById('num2').value = "";
        document.getElementById('num3').value = "";
        document.getElementById('delta').textContent = "Delta Δ ";
        document.getElementById('resultado').textContent = "Resultado √";
    }
});
