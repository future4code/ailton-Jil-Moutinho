```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let contador = 0;
for (item of arrayDeNumeros){
  if (item === numeroEscolhido){
    contador = contador + 1;
  }
}
let mensagem = 'Número não encontrado';
if (contador != 0){
mensagem = `O número ${numeroEscolhido} aparece ${contador}x`;
}
return mensagem;
}
```