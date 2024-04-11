
let alunosNotas = [];


for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome do aluno " + (i+1) + ":");
    let nota = +prompt("Digite a nota do aluno " + nome + ":");
    alunosNotas.push({ nome: nome, nota: nota });
}

let notasAcimaCinco = alunosNotas.filter(function(aluno) {
    return aluno.nota > 5.0;
});

if (notasAcimaCinco.length > 0) {
    let somaNotas = notasAcimaCinco.reduce(function(total, aluno) {
        return total + aluno.nota;
    }, 0);
    let media = somaNotas / notasAcimaCinco.length;
    console.log("A média das notas acima de 5.0 é:", media.toFixed(2));
} else {
    console.log("Não há notas acima de 5.0 para calcular a média.");
}
