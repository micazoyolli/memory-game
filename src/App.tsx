import Game from './components/Game/Game';
import './styles/_global.scss';

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Memory Game</h1>
      <Game />
    </div>
  );
};

export default App;