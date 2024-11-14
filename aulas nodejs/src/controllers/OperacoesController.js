const soma = (num1, num2, num3) => {
  let total = num1 + num2 + num3;
  console.log(total, "total");
  return total;
};
console.log(soma(1, 2, 3));

const subtracao =  (num1, num2, num3) => {
  let total = num1 - num2 - num3;

  return total;
};
console.log(subtracao(40, 10, 5));

const multíplicacao =  (num1, num2, num3) => {
  let total = num1 * num2 * num3;
  return total;
};

console.log(multíplicacao(10, 10, 10));

const divisao =  (num1, num2) => {
  let total = num1 / num2;
  return total;
};
console.log(divisao(100, 10));

module.exports = {
  soma,
  subtracao,
  multíplicacao,
  divisao
};
