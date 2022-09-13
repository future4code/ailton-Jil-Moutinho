import axios from "axios";
import { BASE_URL } from "./baseURL";
import { user } from "./types";

//Agora, vamos melhorar um pouco a nossa função, criando uma tipagem que represente os assinantes da nossa aplicação. No nosso caso, eles possuem um id, name e email, como indicado abaixo:
/* type user = {
  id: string;
  name: string;
  email: string;
}; */
//*a.* Se apenas trocarmos o retorno da função para: `Promise<user[]>` , teremos algum erro de tipagem?
// Não pois na verdade estará ainda melhor destrito o tipo da saída. Caso a tipagem esteja em outro arquivo é necessário importar.

//b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne um `Promise<any>`. Explique com as suas palavras o porquê de fazermos isso.
//Pq no tipo any pode ser que retorne mais informações do que apenas o que buscamos no tipo indicado.

//c. Reimplemente a função, corretamente.
const selectAllUsers = async (): Promise<user[]> => {
  const usersAll = await axios.get(`${BASE_URL}/subscribers`);
  return usersAll.data.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      email: item.email,
    };
  });
};

const main = async () => {
  return await selectAllUsers();
};

main().then((res) => {
  console.log(res);
});

/* console.log(main()); */
//Pq não consola? Não consolava pq não tinha return na main (linha 30)
