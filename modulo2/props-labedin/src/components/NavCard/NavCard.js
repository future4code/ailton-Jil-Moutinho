import React from 'react';
import './NavCard.css'

function NavCard(props) {
    return (
        <div className="navcard-container">
            <img src={ props.imagem } />
            <div>
                <p>{ props.section }</p>
            </div>
        </div>
    )
}

export default NavCard;