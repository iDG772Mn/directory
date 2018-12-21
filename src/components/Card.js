import React from 'react';
import './Cards.css';

const Card = ({id, name, email, picture, cell}) => {
    return (
        <div className='bg-light-blue br4 pa2 dib ma2 grow bw1 shadow-3 tc'>
            <img className="cards" src={`${picture}`} alt=' ' />
            <div>
                <p className='ttc f6'>{name}</p>
                <p className='f7'>{cell}</p>
                <p className='f7'>{email}</p>
            </div>
        </div>
    );
}

export default Card;