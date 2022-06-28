import React from 'react';
import {ImageButtonContainer, ImageButtonStyle} from "./ImageButton.style"

function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <ImageButtonStyle src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButtonContainer>

    )
}

export default ImagemButton;