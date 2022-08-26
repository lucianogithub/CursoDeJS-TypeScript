const nome = 'luiz otávio';
const sobrenome = 'miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; // peso / (altura * altura)
imc = peso/(alturaEmM*alturaEmM);

console.log(nome, sobrenome, 'tem', idade, ' anos, pesa ', peso, ' kg, tem', alturaEmM, ' de altura e seu imc é', imc);
