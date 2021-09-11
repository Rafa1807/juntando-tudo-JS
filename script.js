var nomes = ["Igor", "José", "Maria"]
var notasA = [6, 7, 8]
var notasB = [9, 9, 6]

function media(n1, n2){

        return (n1 + n2) /2
}

function passou(media){

    if(media >= 7){
        return "Aprovado"
    }else {
        return "Reprovado"
    }
}

for(var index in nomes){

    var nota1 = notasA[index]
    var nota2 = notasB[index]

    var m = media(nota1, nota2);

    console.log(nomes[index]+
        " - " + 
        nota1 +
        " - " +
        nota2 +
        " - " +
        m + 
        " - " + 

        passou(m));

}