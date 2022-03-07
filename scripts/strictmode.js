"use strict"

const ola = () => {
  nome = "bananinha";
  console.log(`Ola ${nome}, como vai?`);
}

ola();

//window.nome : O objeto window ganha uma propriedade ao retirar o let do "let nome".
//delete window.document

// const soma = function (a,a,c) {
//   return a + a + c;
// }

// console.log(soma(1,3,2));

//Ao usar arrow function ao invés da sintaxe function declaration, o erro avisando sobre a duplicação aparece.