import Player from "./Player";

import "./Players.css";
const Players = () => {
  return (
    <div className="players">
      <ol className="players-list">
        <Player name="Player 1" symbol="X"></Player>
        <Player name="Player 2" symbol="0"></Player>
      </ol>
    </div>
  );
};
export default Players;
