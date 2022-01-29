let botaoContagem = document.getElementById('botao-contagem');
botaoContagem.addEventListener('click', contar);

let inicio = document.getElementById('inicio');
let fim = document.getElementById('fim');
let passo = document.getElementById('passo');
let texto = document.getElementById('contagem');



function contar() {
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        texto.innerHTML = 'Erro. Algum valor está faltando';
    } else {
        texto.innerHTML = 'Contando: <br>';
        let inicial = Number(inicio.value);
        let final = Number(fim.value);
        let pulos = Number(passo.value);
        if (inicial < final) {
            // Contagem crescente
            for (let contador = inicial; contador <= final; contador += pulos) {
                texto.innerHTML += ` ${contador} \u{1F449}`;
            }
        } else {
            // Contagem regressiva
            for (let contador = inicial; contador >= final; contador -= pulos) {
                texto.innerHTML += `${contador} \u{1F449}`;
            }
        }

        texto.innerHTML += `Fim!`;
    }
}