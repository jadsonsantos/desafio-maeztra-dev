/*
 ***5 - Um grupo de amigos será colocado lado a lado para tirar uma foto. De quantos modos distintos os amigos podem se organizar para tirar a foto? Desenvolva uma função que receba um número de pessoas (valor inteiro) e retorne quantas possibilidades de organização existem para que o fotografo saiba o número de modos distintos que esse grupo e outros grupos possam se organizar.***
 */

/*
Para esse desafio, dado que as possibilidades para 1 pessoa é 1, 2 pessoas é 2, e 3 pessoas é 6, 
eu enxerguei a possibilidade de utilizar a recursão como forma de resolução dessa questão.
*/

function teste(total) {
  if (total === 1) return total;
  return teste(total - 1) * total;
}

console.log(teste(1));
console.log(teste(2));
console.log(teste(3));
