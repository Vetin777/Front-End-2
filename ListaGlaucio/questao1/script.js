function calcularAnos(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    let anos = 0;
    while (populacaoA <= populacaoB) {
        populacaoA += populacaoA * (taxaCrescimentoA / 100);
        populacaoB += populacaoB * (taxaCrescimentoB / 100);
        anos++;
    }
    return anos;
}

const populacaoA = 80000;
const taxaCrescimentoA = 3;
const populacaoB = 200000;
const taxaCrescimentoB = 1.5;

const anosNecessarios = calcularAnos(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB);

console.log(`Número de anos necessários para que a população do país A iguale ou ultrapasse a população do país B: ${anosNecessarios} anos.`);