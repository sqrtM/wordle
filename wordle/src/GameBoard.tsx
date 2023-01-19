import { SetStateAction, useReducer, useState } from 'react'
import './GameBoard.scss'
import WordLine from './WordLine';

type turnWord = {turn: number, word: string};

const initialState: turnWord[] = [
  {turn: 0, word: ''},
  {turn: 1, word: ''},
  {turn: 2, word: ''},
  {turn: 3, word: ''},
  {turn: 4, word: ''},
  {turn: 5, word: ''},
];

function reducer(state: turnWord[], action: turnWord) {
  state[action.turn].word = action.word;
  return state;
}

export default function GameBoard() {
  const GOAL_WORD = "NUTTY";
  const [inputState, setInputState] = useState<string>('');
  const [turn, setTurn] = useState<number>(0);
  const [state, dispatch] = useReducer<(reducer: turnWord[], action: turnWord) => turnWord[]>(reducer, initialState);
  const [gameState, setGameState] = useState<string>("PLAYING");


  function handleInput(event: { target: { value: SetStateAction<string>; }; }): void {
    if (inputState.length < 5) setInputState(event.target.value);
  }

  function handleSubmit(event: any): void {
    event.preventDefault();
    setInputState("");
    dispatch({turn: turn, word: inputState});
    turn < 6 ? setTurn(turn + 1) : setGameState("OVER");
  }

  //set the words from the guessedWords :)
  return (
    <div>
      <div className="game-board">
        <WordLine word={state[0].word} goalWord={GOAL_WORD} />
        <WordLine word={state[1].word} goalWord={GOAL_WORD} />
        <WordLine word={state[2].word} goalWord={GOAL_WORD} />
        <WordLine word={state[3].word} goalWord={GOAL_WORD} />
        <WordLine word={state[4].word} goalWord={GOAL_WORD} />
        <WordLine word={state[5].word} goalWord={GOAL_WORD} />
      </div>

      <div>
        turn : {turn}
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputState} onChange={handleInput} />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

