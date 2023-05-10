import style from "./tictactoe.module.css";

interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

export const Square: React.FC<SquareProps> = (props) => {
  const { value, onSquareClick } = props;

  return (
    <button className={style["square"]} onClick={onSquareClick}>
      {value}
    </button>
  );
};
