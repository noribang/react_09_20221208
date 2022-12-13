import React from 'react';
import ReactDOM from 'react-dom/client';

export default function PetCard(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img src={props.image}/>
        </div>
    )
}



// export default PetCard;