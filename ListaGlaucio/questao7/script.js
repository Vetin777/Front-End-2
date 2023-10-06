/* Desenvolva uma função que receba como parâmetro a lista acima fornecida e imprima 
os dados Nome, Média Aritmética e Curso APENAS dos alunos que tiveram média maior ou igual 
a 7. */

var alunos = [
    { nome: "Luiz Gustavo", notas: [8, 7.5, 9], curso: "Sistemas para Internet" },
    { nome: "João Durval", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "José Lourenço", notas: [4, 10, 7], curso: "Administração" },
    { nome: "Pedro Henrique", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" },
    { nome: "Janaina Paulino", notas: [6, 7.5, 9.5], curso: "Sistemas de Informação" },
    { nome: "Luanna Carla", notas: [1, 9, 10], curso: "Arquitetura" },
    { nome: "Joana Darc", notas: [8, 9, 9], curso: "Contabilidade" },
    { nome: "Rafael Dias", notas: [4, 4, 9], curso: "Sistemas para Internet" },
    { nome: "Murilo Medeiros", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
];

function calculaMedia(array) {
    for (let aluno of alunos) {
        let media = 0;
        let notas = 0;
        for (let nota of aluno.notas) {
            notas = notas + nota;
        }
        media = notas / (aluno.notas).length
        if (media >= 7) {
            console.log("Nome: " + aluno.nome, "Média: " + media)
        }
    }
}

calculaMedia(alunos);