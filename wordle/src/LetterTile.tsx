import './GameBoard.scss'


export interface IWordLineProps {
  letter: string;
}

export default function WordLine(props: IWordLineProps): JSX.Element {
  return ( 
    <div className='letter-block'>
      {props.letter}
    </div>
  );
}
