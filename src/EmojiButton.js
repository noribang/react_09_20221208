import React from 'react';
import ReactDOM from 'react-dom/client';

function EmojiButton(props) {
    return (
        <button>
        <span role="img">{props.emoji}</span>
        {props.label}
        </button>
    )
}
  
export default EmojiButton;