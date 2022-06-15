import React from 'react';
import {GrandeContainer, BigImage, BigTitle, InternBigContainer} from "./CardGrande.style"

function CardGrande(props) {
    return (
        <GrandeContainer>
            <BigImage src={ props.imagem } />
            <InternBigContainer>
                <BigTitle>{ props.nome }</BigTitle>
                <p>{ props.descricao }</p>
            </InternBigContainer>
        </GrandeContainer>
    )
}

export default CardGrande;