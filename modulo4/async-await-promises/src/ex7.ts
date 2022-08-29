//O desafio é: você deve criar uma arrow function assíncrona que imprima a mensagem "Oi" no terminal depois de 5 segundo a partir do momento em que o script foi rodado.

const HelloMessage = () => {
  console.log("Hello world!");
};

const messageDelay = async (): Promise<void> => {
  console.log("Set time of 5 seconds");
  return new Promise<void>((/* resolve, reject */) => {
    setTimeout(HelloMessage, 5000);
  });
};
messageDelay();
