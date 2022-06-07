import React from 'react';
import './SmallCard.css'

function SmallCard(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.tituloInfo }:</h4>
                <p>{ props.info }</p>
            </div>
        </div>
    )
}

export default SmallCard;