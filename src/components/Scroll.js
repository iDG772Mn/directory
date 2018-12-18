import React from 'react';

const Scroll = (props) => {
	return (
        <div style={{overflowY: 'scroll', height: '83vh'}}>
            {props.children}
        </div>
    );
}

export default Scroll;