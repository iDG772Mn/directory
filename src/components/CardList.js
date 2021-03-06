import React from 'react';
import Card from './Card';

const CardList = ({directory}) => {
    const cardArray = directory.map((user, i) => {
        return <Card key={i} id={directory[i].id} name={directory[i].name} email={directory[i].email} picture={directory[i].picture} cell={directory[i].cell} />;
    })
    return (
        <div className='flex flex-wrap justify-center'>
            {cardArray}
        </div>
    );
}

export default CardList;