import "./GameOver.css";
const GameOver = ({ player, Rematch }) => {
  return (
    <div className="overlay">
      <h1 className="game-over__heading">Game Over!</h1>

      {player && <h3 className="winner__player">{player} Won !</h3>}
      {!player && <h3 className="winner__player">It's Draw !</h3>}
      <button className="rematch__button" onClick={Rematch}>
        Rematch
      </button>
    </div>
  );
};

export default GameOver;
