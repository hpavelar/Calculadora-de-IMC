function calcular() {
    if ((document.getElementById("altura").value=="")||(document.getElementById("peso").value=="")) {
        alert("VOCÊ PRECISA PREENCHER OS CAMPOS DE ALTURA E PESO!");
    }
    

    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    imc = peso/(altura*altura);
    document.getElementById("principal").innerHTML += "<br />Seu IMC é "+imc;


    if (imc<18.5) {
        document.getElementById("principal").innerHTML += "<br />Você está abaixo do peso ideal.";
    }

    else if ((imc>=18.5)&&(imc<24.9)) {
        document.getElementById("principal").innerHTML += "<br />Seu peso está dentro do intervalo ideal para a sua altura.";
    }

    else if ((imc>=25)&&(imc<29.9)) {
        document.getElementById("principal").innerHTML += "<br />Você está em sobrepeso.";
    }

    else if ((imc>=30)&&(imc<34.9)) {
        document.getElementById("principal").innerHTML += "<br />Seu peso está dentro do intervalo caracterizado como Obseidade grau 1.";
    }

    else if ((imc>=35)&&(imc<39.9)) {
        document.getElementById("principal").innerHTML += "<br />Seu peso está dentro do intervalo caracterizado como Obseidade grau 2.";
    }

    else if (imc>=40) {
        document.getElementById("principal").innerHTML += "<br />Seu peso está dentro do intervalo caracterizado como Obseidade grau 3.";
    }
}