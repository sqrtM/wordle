import LetterTile from "./LetterTile";
import './GameBoard.scss'

export interface IWordLineProps {
  word: string;
}

export default function WordLine(props: IWordLineProps): JSX.Element {
  let wordArr = [...props.word];

  return ( 
    <div className="word-line">
      <span><LetterTile letter={wordArr[0]}/></span>
      <span><LetterTile letter={wordArr[1]}/></span>
      <span><LetterTile letter={wordArr[2]}/></span>
      <span><LetterTile letter={wordArr[3]}/></span>
      <span><LetterTile letter={wordArr[4]}/></span>
    </div>
  );
}
