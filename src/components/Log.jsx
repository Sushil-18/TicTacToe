const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turns) => (
        <li key={`${turns.square.row}${turns.square.col}`}>
          {turns.player} clicked on {turns.square.row},{turns.square.col}
        </li>
      ))}
    </ol>
  );
};
export default Log;
