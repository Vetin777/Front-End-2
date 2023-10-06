// Declarando as notas e calculando a média.
var notas = [7.0,5.0,4.0];
var media = (notas[0] + notas[1] + notas[2]) / 3;

// Fazendo os cálculos, caso o aluno fique em recuperação.
if (media > 4 && media < 7){
    console.log("Você está na recuperação.");
    let notaRec = 9;
    let mediaFinal = (notaRec + media) / 2;
    if (mediaFinal >= 5){
        console.log("Você está aprovado.")
    } else{
        console.log("Você foi reprovado.")
    }
} else if(media >= 7){
    console.log("Você foi aprovado por média.")
    typeof media
}