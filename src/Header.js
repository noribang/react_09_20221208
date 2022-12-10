import React from 'react';
import ReactDOM from 'react-dom/client';
import EmojiButton from './EmojiButton';

export default function Header() {
    return (
      <header>
        <h1>PetLand</h1>
        <nav>
          <EmojiButton emoji="👤" label="Login" />
        </nav>
      </header>
    )
  }

// export default Header;