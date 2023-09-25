//Selecionando o botao pelo ID
const botao = document.querySelector("#botao");
const botao1 = document.querySelector("#botao1");
const botao2 = document.querySelector("#botao2");
const contadorElemento = document.querySelector("#contador");

//inicializando contador
let contador = 0;

//função que sera chamada quando o botao for clicado
function aumentarContador(){
    contador++;
    contadorElemento.textContent = contador;
}

function diminuirContador(){

    if(contador == 0){
        document.querySelector("#mostrar").innerHTML =  `
            <div class="alert alert-danger fade show"">
            <div class="d-flex justify-content-between">
            <span>Apenas numeros maiores que 0 </span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button
            </div>
            </div>`
        return
    }
    contador--;
    contadorElemento.textContent = contador;
    
}

function zerarContador(){
    contador = 0;
    contadorElemento.textContent = contador;
}


//adicionando ouvinte do evento para clique do botao 
botao.addEventListener("click", aumentarContador);
botao1.addEventListener("click", diminuirContador);
botao2.addEventListener("click", zerarContador);