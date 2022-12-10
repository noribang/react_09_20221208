import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Card(props) {
    return (
        <div className="card">
        <h2>{props.title}</h2>
        {props.children}
        </div>
    )
}

// export default Card;
  