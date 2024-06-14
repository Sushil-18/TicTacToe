import { useState } from "react";
import "./Player.css";
const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [changeName, setChangeName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, changeName);
    }
  }

  let playerName = <span className="player-name">{changeName}</span>;

  if (isEditing) {
    playerName = (
      <input
        className="playername-input"
        type="text"
        required
        value={changeName}
        onChange={(e) => setChangeName(e.target.value)}
      />
    );
  }
  return (
    <li id="list-items" className={isActive ? "active" : undefined}>
      <span className="player-elements">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick} className="button">
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};
export default Player;
