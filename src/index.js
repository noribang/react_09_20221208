import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import EmojiButton from './EmojiButton';
import Header from './Header';
import Card from './Card';

// function EmojiButton(props) {
//   return (
//     <button>
//       <span role="img">{props.emoji}</span>
//       {props.label}
//     </button>
//   )
// }

// function Header() {
//   return (
//     <header>
//       <h1>PetLand</h1>
//       <nav>
//         <EmojiButton emoji="👤" label="Login" />
//       </nav>
//     </header>
//   )
// }

// function Card(props) {
//   return (
//     <div className="card">
//       <h2>{props.title}</h2>
//       {props.children}
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Header />
      <main>
        <Card title="Welcome to PetLand!">
          <em>Find your dream pet</em>
        </Card>
        <Card title="What pets would you like to see?">
          <div>
            <EmojiButton emoji="😸" label="Cats" />
            <EmojiButton emoji="🐕" label="Dogs" />
          </div>
        </Card>
      </main>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
