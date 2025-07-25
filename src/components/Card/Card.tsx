import './Card.scss';

interface Props {
  index: number;
  card: { id: number; monster: string };
  isFlipped: boolean;
  onClick: (index: number) => void;
}

const Card = ({ index, card, isFlipped, onClick }: Props) => {
  return (
    <div
      className={`card ${isFlipped ? 'card--flipped' : ''}`}
      onClick={() => onClick(index)}
    >
      <div className="card__inner">
        <div className="card__front">?</div>
        <div className="card__back">
          <img src={card.monster} alt="monster" className="card__img" />
        </div>
      </div>
    </div>
  );
};

export default Card;