//QUESTÃO 1a
//process.argv[X] sendo x índice a posição do argumento

//QUESTÃO 1b
console.log("Olá, ", process.argv[2],"! Você tem ", process.argv[3]," anos.");

//QUESTÃO 1c
const futureAge = Number(process.argv[3]) + 7
console.log("Olá, ", "\033[31m", process.argv[2], "\033[0m", "! Você tem ", process.argv[3]," anos. Em", "\033[34m sete",  "\033[0m", "anos você terá ", futureAge,".");