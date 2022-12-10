import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Card from './Card';
import EmojiButton from './EmojiButton';

export default function App() {
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

// export default App;
