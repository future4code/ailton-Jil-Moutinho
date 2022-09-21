import { IdGenerator } from "./services/IdGenerator"
import { v4 } from 'uuid'


interface GeradorDeId {
    generatedId():string
}


export class IdGenerator2 implements GeradorDeId {
    public generatedId = (): string => {
        return v4()
    }
}



class geraIdNoMomento implements GeradorDeId{

    generatedId():string{
        return Date.now().toString()
    }
}

class Usuario {
    constructor(
        private nome:string,
        private geraId:GeradorDeId
    ){}

    criarUsuario(){
        // dependencia
        // const geraid = new GeraId()
        const id = this.geraId.generatedId()

        const pessoa = {
            id,
            nome:this.nome
        }
    }
}

// fora da classe
const usuario = new Usuario("fulano",new geraIdNoMomento())

usuario.criarUsuario()