let notas = [100,70,30,45,65,87,17,0,54,63,57,32,78,91,04,33,12];
let aprovados = 0;
let reprovados = 0;

for(let nota of notas){
  (nota >= 60) ? aprovados++ : reprovados++;
}

console.log(`Quantidade de alunos aprovados: ${aprovados}`);
console.log(`Quantidade de alunos reprovados: ${reprovados}`);