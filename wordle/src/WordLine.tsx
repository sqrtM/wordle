import LetterTile from "./LetterTile";
import './GameBoard.scss'
import { useEffect } from "react";

export interface IWordLineProps {
  word: string;
  goalWord: string;
}

enum status {
  EXACT = "exact-match-style",
  CONTAINS = "nonexact-match-style",
  WRONG = "no-match-style",
  DEFAULT = "default-style"
};

export default function WordLine(props: IWordLineProps): JSX.Element {
  let wordArr = [...props.word];
  let goalArr = [...props.goalWord];
  let statusArr: status[] = [];

  // fix this. this doesn't quite work yet.
  wordArr.forEach((i, index) => {
    if (i.toUpperCase() === goalArr[index]) {
      statusArr[index] = status.EXACT;
    } else if (goalArr.includes(i.toUpperCase())) {
      statusArr[index] = status.CONTAINS;
    }
  });

  return ( 
    <div className="word-line">
      {props.word &&
      <>
      <span className={statusArr[0]}><LetterTile letter={wordArr[0]} /></span>
      <span className={statusArr[1]}><LetterTile letter={wordArr[1]} /></span>
      <span className={statusArr[2]}><LetterTile letter={wordArr[2]} /></span>
      <span className={statusArr[3]}><LetterTile letter={wordArr[3]} /></span>
      <span className={statusArr[4]}><LetterTile letter={wordArr[4]} /></span>
      </>
      }
    </div>
  );

}
