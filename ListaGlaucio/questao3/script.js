/*Faça um programa que, dado um conjunto de N números, determine o menor valor, 
o maior valor e a soma dos valores.*/
let maior = 0;
let menor = 0;

for (let i = 0; i < 11; i++) {
    if (i < menor) {
        menor = i;
    } else if (i > maior) {
        maior = i;
    }
}

console.log(maior);
console.log(menor);