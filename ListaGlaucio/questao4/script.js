/*Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
 a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
 b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
 c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao 
 dobro do percentual do ano anterior. Faça um programa que determine o 
 salário atual desse funcionário. Após concluir isto, altere o programa 
 permitindo que o usuário digite o salário inicial do funcionário*/

function salarioAtual(salario){
    let ano = 1995;
    let valorSalario = salario;
    let taxa = 1.5;

    for(let i = ano; i <= 2023; i++){
       
        valorSalario = valorSalario + (valorSalario * taxa)/100;
        if(i >= 1997){
            taxa = taxa * 2;
        }
       
        console.log(taxa);
        console.log(valorSalario);
    }
    console.log(valorSalario);
}
salarioAtual(1000);