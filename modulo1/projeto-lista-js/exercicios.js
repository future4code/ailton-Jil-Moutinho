"use scrict"
console.log("Hello world!");
// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Qual a altura do triangulo?"));
  const largura = Number(prompt("Qual a largura do triangulo?"));
  const areaRetangulo = altura * largura;
  console.log(areaRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual o ano atual?"));
  const nascimento = Number(prompt("Qual seu ano de nascimento"));
  const idade = anoAtual - nascimento;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  peso = Number(prompt("Qual seu peso atual - em kg -?"));
  altura = Number(prompt("Qual sua altura em metros -use ponto e não virgula-?"));
  let imc = peso / (altura * altura);
  console.log(imc);
  return imc;
}

/* Deveria ser só assim:
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
} */

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt("Qual seu nome?");
  idade = prompt("Qual sua idade?");
  email = prompt("Qual seu email?");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  cor1 = prompt("Escreva uma cor");
  cor2 = prompt("Mais uma");
  cor3 = prompt("Só mais uma");
  let arrayEx05 = [];
  arrayEx05.push(cor1, cor2, cor3);
  console.log(arrayEx05);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const qtddMinIngressos = custo / valorIngresso;
  console.log(qtddMinIngressos);
  return qtddMinIngressos;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  tamanhoString1 = Number(string1.length);
  tamanhoString2 = Number(string2.length);
  let mesmoTamanho = tamanhoString1 === tamanhoString2;
  console.log(mesmoTamanho);
  return mesmoTamanho;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  console.log(array[0]);
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  console.log(array[(array.length)-1]);
  return array[(array.length)-1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const exPrimeiraPosicao = array[0];
  array [0] = array [(array.length)-1];
  array [(array.length)-1] = exPrimeiraPosicao;
  console.log(array);
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  maiusculaString1 = string1.toUpperCase();
  maiusculaString2 = string2.toUpperCase();
  let saoIguais = maiusculaString1 === maiusculaString2;
  console.log(saoIguais);
  return saoIguais;
}

//DESAFIOS
// EXERCÍCIO 13
function checaRenovacaoRG() {
  anoAtual = Number(prompt("Qual ano atual?"));
  nascimento = Number(prompt("Qual ano de seu nascimento?"));
  emissao = Number(prompt("Qual ano que sua carteira de identidade foi emitida?"));
  const idade = anoAtual - nascimento;
  const tempoDesdeEmissao = anoAtual - emissao;
  console.log(tempoDesdeEmissao);
  console.log(idade);
  const renovar = (idade > 50 && tempoDesdeEmissao >= 15) || (idade <= 20 && tempoDesdeEmissao >= 5) || ((20 < idade && idade <= 50) && tempoDesdeEmissao >= 10)
  console.log(renovar);
  return renovar;
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 const bissexto = (ano % 400 === 0) || (ano % 4 === 0  && !(ano % 100 === 0) && !(ano % 400 === 0));
 console.log(bissexto);
 return bissexto;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = (prompt("É maior?"));
  const medio = (prompt("Possui ensino médio completo?"));
  const disponibilidade = (prompt("Você possui disponibilidade exclusiva durante os horários do curso?"));
  const pode = idade === "sim" && medio ==="sim" && disponibilidade === "sim";
  console.log(pode);
  return pode;
}