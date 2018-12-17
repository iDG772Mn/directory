import React from 'react';
import './Cards.css';

const Card = ({id, name, email, picture, cell}) => {
    return (
        <div className='bg-washed-yellow br4 pa2 dib ma2 grow bw1 shadow-3 tc'>
            <img className="cards" src={`${picture}`} alt=' ' />
            <div>
                <p className='ttc'>{name}</p>
                <p>{cell}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;