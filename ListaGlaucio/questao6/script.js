/* Escreva uma função que informe o retorno de um investimento (montante) com 
 base nos valores do capital inicial, tempo em meses e taxa de juros mensal, 
 fornecidos pelo usuário.
 Use a fórmula: M = C * (1+i)t
 Onde:
 ▪ C = Capital inicial investido
 ▪ i = Taxa de juros, em percentual
 ▪ t = Tempo do investimento, em meses
 Exiba o resultado com duas casas decimais.*/
function calcularMontante(capitalInicial, taxaJuros, tempoMeses) {
    var taxaDecimal = taxaJuros / 100;
    var montante = capitalInicial * Math.pow((1 + taxaDecimal), tempoMeses);
    montante = parseFloat(montante.toFixed(2));
    
    return montante;
}

var resultado = calcularMontante(1400, 1.5, 24);
console.log(resultado);