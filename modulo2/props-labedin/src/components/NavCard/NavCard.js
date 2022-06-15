import React from 'react';
import {NavCardContainer, NavCardImage} from "./NavCard.style"


function NavCard(props) {
    return (
        <NavCardContainer>
            <NavCardImage src={ props.imagem } />
            <div>
                <p>{ props.section }</p>
            </div>
        </NavCardContainer>
    )
}

export default NavCard;