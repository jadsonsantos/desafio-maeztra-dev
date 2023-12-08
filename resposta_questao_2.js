/*
***2 - Crie uma função que receba um array de inteiros como parâmetro e verifique se neste array existem números duplicados, caso exista, retorne um novo array com os valores que se repetem.***

> Exemplo:<br/>
> Input `[4,5,44,98,4,5,6,7]` &rarr; Output `[4,5]`
*/

const array = [4, 5, 44, 98, 4, 5, 6, 7];

function getDuplicatedArray(array) {
  let newArray = [];
  let duplicatedArray = [];

  for (i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    } else {
      duplicatedArray.push(array[i]);
    }
  }

  return duplicatedArray;
}

const result = getDuplicatedArray(array);

console.log(result);
