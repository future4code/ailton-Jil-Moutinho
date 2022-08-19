/* O CPF consiste de 11 dígitos cuja configuração respeita o formato XXX.XXX.XXX-XX. Para a construção de um número de CPF as seguintes regras são aplicadas.

- Os oito primeiros dígitos são os número-base
- O nono dígito é a região fiscal
- O penúltimo dígito é o dígito verificador (DV) módulo 11 dos nove dígitos anteriores
- O último dígito é o DV módulo 11 dos dez dígitos anteriores

Para o cálculo dos DV existem pesos associados a cada dígito, abaixo segue exemplo do cálculo dos DV do CPF com número-base 145382206. */

//Começamos utilizando os 9 primeiros dígitos multiplicando-os pela sequência decrescente de 10 à 2 e somamos esse resultado.

/* ```
1  4  5  3  8  2  2  0  6
x  x  x  x  x  x  x  x  x
10 9  8  7  6  5  4  3  2
=  =  =  =  =  =  =  =  =
10 36 40 21 48 10 8  0  12

10 + 36 + 40 + 21 + 48 + 10 + 8 + 0 + 12 = 185
```

Com esse resultado agora basta realizar a operação de módulo 11. Ou seja:

```
185 % 11 = 9
```

O resto da divisão é `9`. Agora para calcular o dígito verificador vamos subtrair este resto do número 11:

```
11 - 9 = 2
```

ATENÇÃO: Como o resultado da subtração foi 2, o primeiro dígito verificador é igual a 2. Caso o resultado dessa subtração for `10` ou maior, o penúltimo dígito verificador será o `0`. */

/* - Exemplo de cálculo do segundo Dígito Verificador
    
    A validação do segundo dígito é semelhante a primeira, porém vamos considerar o primeiro dígito verificador calculado anteriormente. Por isso a multiplicação é feita de 11 à 2.
    
    ```
    1  4  5  3  8  2  2  0  6  2
    x  x  x  x  x  x  x  x  x  x
    11 10 9  8  7  6  5  4  3  2
    =  =  =  =  =  =  =  =  =  =
    11 40 45 24 56 12 10 0  18 4
    
    11 + 40 + 45 + 24 + 56 + 12 + 10 + 0 + 18 + 4 = 220
    ```
    
    Novamente vamos efetuar a divisão por 11 usando o módulo:
    
    ```
    220 % 11 = 0
    ```
    
    E vamos fazer a subtração:
    
    ```
    11 - 0 = 11
    ```
    
    Como o valor é igual ou maior que `10`, o último dígito é `0`.
    
    Assim, confirmamos os dois dígitos verificadores do nosso CPF 145.382.206-**20** e sabemos que esse CPF é válido. 
    

Outra regra muito importante é que CPFs com números iguais como: `111.111.111-11`, `222.222.222-22`, entre outros, são CPFs válidos pelo algoritmo mas não existem no registro oficial. Assim esse tipo de CPF não pode ser usado. */

//Você deve criar uma função que receba o CPF no formato “xxx.xxx.xxx-xx” e faça uma validação do valor recebido. Caso o CPF recebido seja válido retorne um True e caso seja inválido retorne False

const validCPF = (cpfTest: string): boolean => {
  let cpfnumber = cpfTest.replace(".", "").replace(".", "").replace("-", "");
  //replaceAll?

  let dv1Sum: number = 0;
  for (let i = 0; i < cpfnumber.length - 2; i++) {
    dv1Sum = Number(cpfnumber[i]) * (cpfnumber.length - 1 - i) + dv1Sum;
  }

  let moddv1: number = dv1Sum % 11;

  let dv1: number = 0;
  dv1 = 11 - moddv1;
  if (dv1 >= 10) {
    dv1 = 0;
  }

  let dv2Sum: number = 0;
  for (let i = 0; i < cpfnumber.length - 1; i++) {
    dv2Sum = Number(cpfnumber[i]) * (cpfnumber.length - 1 - i) + dv2Sum;
  }

  let moddv2: number = dv2Sum % 11;

  let dv2: number = 0;
  dv2 = 11 - moddv2;
  if (dv2 >= 10) {
    dv2 = 0;
  }

  let newResult: boolean = true;
  for (let i = 1; i < cpfnumber.length - 1; i++) {
    newResult = newResult && Number(cpfnumber[0]) === Number(cpfnumber[i]);
  }

  let result: boolean = false;
  if (
    !newResult &&
    dv1 === Number(cpfnumber[9]) &&
    dv2 === Number(cpfnumber[10])
  ) {
    result = true;
  }

  return result;
};

console.log(validCPF("145.382.206-20"));
console.log(validCPF("222.222.222-22"));