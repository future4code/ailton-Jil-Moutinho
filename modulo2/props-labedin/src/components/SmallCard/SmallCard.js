import React from 'react';
import {SmallCardStyle, SmallCardImage, InternSmallCardStyle, TituloInfo, Infos} from './SmallCard.style'

function SmallCard(props) {
    return (
        <SmallCardStyle>
            <SmallCardImage src={ props.imagem } />
            <InternSmallCardStyle>
                <TituloInfo>{ props.tituloInfo }:</TituloInfo>
                <Infos>{ props.info }</Infos>
            </InternSmallCardStyle>
        </SmallCardStyle>
    )
}

export default SmallCard;