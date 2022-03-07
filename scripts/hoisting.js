// var a = 2;
// console.log(a);
// function qualquer() {
//     console.log(a);
//     var a = 3;
//     console.log(a);
// }

// qualquer();

/*
var a = 2;
console.log(a);
function qualquer() {
    var a = undefined;
    console.log(a);
    a = 3;
    console.log(a);
}

qualquer();
*/

function pegarValor(){
  function retornarValor(){ // Primeira Declaração
      return 1;
  }
  
  function retornarValor(){ // Segunda Declaração
      return 2;
  }
  
  return retornarValor();

}

const resultado = pegarValor();
console.log(resultado);

// function pegarValor(){
//     var retornarValor = function() {
//         return 1;
//     }

//     return retornarValor();

//     var retornarValor = function() {
//         return 2;
//     }
// }

// const resultado = pegarValor();
// console.log(resultado);

/*
function pegarValor(){
  var retornarValor = undefined;
  var retornarValor = undefined;
  retornarValor = function() {
      return 1;
  }

  return retornarValor();

  retornarValor = function() {
      return 2;
  }
}

const resultado = pegarValor();
console.log(resultado);
*/