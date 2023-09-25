//Selecionando o botao pelo ID
const botao = document.querySelector("#botao");
const contadorElemento = document.querySelector("#contador");

//inicializando contador
let contador = 0;

//função que sera chamada quando o botao for clicado
function aumentarContador(){
    contador++;
    contadorElemento.textContent = contador;
}

//adicionando ouvinte do evento para clique do botao 
botao.addEventListener("click", aumentarContador);