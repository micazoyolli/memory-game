import Game from './components/Game/Game';
import './styles/_global.scss';

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Memory Game</h1>
      <Game />
      <footer>
        Una creación de <a href="https://nadia.dev" target="_blank" rel="noreferrer">&lt;micazoyolli /&gt; ✨</a>
      </footer>
    </div>
  );
};

export default App;