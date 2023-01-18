import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import GameBoard from './GameBoard'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GameBoard />
  </React.StrictMode>,
)
