import { useCallback, useEffect, useMemo, useState } from 'react';
import Card from '../Card/Card';
import { generateCards } from '../../utils/cardGenerator';
import './Game.scss';

interface CardType {
  id: number;
  monster: string;
}

const Game = () => {
  const defaultPairCount = useMemo(() => (window.innerWidth < 400 ? 6 : 10), []);

  const [cards, setCards] = useState<CardType[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [matched, setMatched] = useState<number[]>([]);
  const [pairCount, setPairCount] = useState(defaultPairCount);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const hasWon = matched.length === cards.length && gameStarted;

  const resetGame = useCallback((count: number = defaultPairCount) => {
    setCards(generateCards(count));
    setDisabled(false);
    setMatched([]);
    setScore(0);
    setSelected([]);
    setTime(0);
    setTimerRunning(false);
  }, [defaultPairCount]);

  useEffect(() => {
    resetGame(pairCount);
  }, [pairCount, resetGame]);

  useEffect(() => {
    if (selected.length === 2) {
      setDisabled(true);
      const [first, second] = selected;
      if (cards[first].id === cards[second].id) {
        setMatched((prev) => [...prev, first, second]);
        setScore((prev) => prev + 10);
      }
      const timeout = window.setTimeout(() => {
        setSelected([]);
        setDisabled(false);
      }, 1000);

      return () => window.clearTimeout(timeout);
    }
  }, [cards, selected]);

  useEffect(() => {
    const interval = timerRunning && gameStarted && !hasWon
      ? window.setInterval(() => setTime((prev) => prev + 1), 1000)
      : undefined;

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, gameStarted, hasWon]);

  useEffect(() => {
    if (hasWon) setTimerRunning(false);
  }, [hasWon]);

  const handleClick = (index: number) => {
    if (!disabled && !selected.includes(index) && !matched.includes(index)) {
      setSelected([...selected, index]);
    }
  };

  const gridClass = selectedLevel === 'easy' ? 'easy' : selectedLevel === 'medium' ? 'medium' : 'hard';

  return (
    <section className="game">
      {!gameStarted ? (
        <div className="start-screen">
          <h2>¿Listo para jugar?</h2>
          <div className="start-screen__levels">
            <button
              className={selectedLevel === 'easy' ? 'active' : ''}
              onClick={() => {
                setSelectedLevel('easy');
                setPairCount(6);
              }}
            >
              Fácil
            </button>
            <button
              className={selectedLevel === 'medium' ? 'active' : ''}
              onClick={() => {
                setSelectedLevel('medium');
                setPairCount(10);
              }}
            >
              Medio
            </button>
            <button
              className={selectedLevel === 'hard' ? 'active' : ''}
              onClick={() => {
                setSelectedLevel('hard');
                setPairCount(15);
              }}
            >
              Difícil
            </button>
          </div>
          <button
            className="start-screen__play"
            onClick={() => {
              resetGame(pairCount);
              setGameStarted(true);
              setTimerRunning(true);
            }}
          >
            JUGAR
          </button>
        </div>
      ) : (
        <>
          <div className="game__info">
            <div className="game__score">Puntaje: {score}</div>
            <div className="game__timer">Tiempo: {time}s</div>
          </div>

          <div className={`game__grid ${gridClass}`}>
            {cards.map((card, index) => (
              <Card
                key={index}
                index={index}
                card={card}
                isFlipped={selected.includes(index) || matched.includes(index)}
                onClick={handleClick}
              />
            ))}
          </div>

          <div className="game__info">
            <button
              className="game__back"
              onClick={() => {
                setGameStarted(false);
                resetGame(pairCount);
              }}
            >
              Inicio
            </button>
          </div>
        </>
      )}

      {hasWon && (
        <div className="modal">
          <div className="modal__content">
            <h2>🎉 ¡Ganaste!</h2>
            <p>Tiempo: {time} segundos</p>
            <button
              className="modal__button"
              onClick={() => {
                setGameStarted(false);
                resetGame(pairCount);
              }}
            >
              Volver a jugar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Game;
