import React from 'react';
import './Cards.css';

const Card = ({id, name, email, picture}) => {
    return (
        <div className='bg-washed-yellow br4 pa2 dib ma2 grow bw1 shadow-3 tc'>
            <img className="cards" src={`${picture}`} alt=' ' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;