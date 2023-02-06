function Somar() {
    var valorElemento1 = document.getElementById("valor1");
    var valor1 = valorElemento1.value;
    valInt1 = parseInt(valor1);

    var valorElemento2 = document.getElementById("valor2");
    var valor2 = valorElemento2.value;
    valInt2 = parseInt(valor2);
    
  
    var valorSoma = valInt1 + valInt2;
    var elementoValorSomado = document.getElementById("valorSomado");
    var valorSomaTotal = "valor somado: " + valorSoma;
    elementoValorSomado.innerHTML = valorSomaTotal;

}

function Subtrair() {
    var valorElemento3 = document.getElementById("valor1");
    var valor3 = valorElemento3.value;
    valInt3 = parseInt(valor3);

    var valorElemento4 = document.getElementById("valor2");
    var valor4 = valorElemento4.value;
    valInt4 = parseInt(valor4);
    
  
    var valorSub = valInt3 - valInt4;
    var elementoValorSubtraido = document.getElementById("valorSubtraido");
    var valorSubTotal = "valor subtraido: " + valorSub;
    elementoValorSubtraido.innerHTML = valorSubTotal;

}



   