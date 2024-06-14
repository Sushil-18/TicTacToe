import TicTacToeImg from "../assets/tictactoe_img.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="app-header">
      <h1 className="header-title">Tic Tac Toe</h1>
      <img className="header-img" src={TicTacToeImg} alt="Tic Tac Toe"></img>
    </div>
  );
};
export default Header;
