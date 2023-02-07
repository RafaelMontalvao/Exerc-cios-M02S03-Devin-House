let input = document.getElementById("texto");
let tagP = document.getElementById("insereTexto");

function adicionar() {
    tagP.innerHTML = input.value;
}

function salvarMensagem() {
    if(input.value.length){
        localStorage.setItem("valorTexto", input.value);
    }else{
        tagP.innerHTML = "Você deve digitar no campo acima para salvar mensagem";
    }
}

function mostrarMensagem() {
    let temValorTexto = localStorage.getItem("valorTexto");

    if(temValorTexto){
        tagP.innerHTML = temValorTexto;
    }else{
        tagP.innerHTML = "Não há nada salvo no local storage"
    }
}