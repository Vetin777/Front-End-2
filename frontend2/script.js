var nota1 = parseFloat(prompt("Informe a primeira nota do aluno: "));
var nota2 = parseFloat(prompt("Informe a segunda nota do aluno: "));
var nota3 = parseFloat(prompt("Informe a terceira nota do aluno: "));

var peso1 = 2;
var peso2 = 3;
var peso3 = 5;

var media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

console.log(("A média do aluno é ") + media );