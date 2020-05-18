import React from 'react';
//import logo from './logo.svg';
//import { Button, DatePicker, version } from "antd";
//import "antd/dist/antd.css";
import './App.css';

class Board extends React.Component {
  handelClick(i){
    const squares = this.props.squares.slice();
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.props.xIsNext ? 'x' : 'o';
    this.setState({
      squares: squares,
      xIsNext: !this.props.xIsNext
    })
  }
  renderSquare(i){
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>;
  }
  render(){
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = 'Winner:' + winner
    }else{
      status = 'next player: ' + (this.state.xIsNext ? 'x' : 'o');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

function Square(props){
  return (
    <button 
      className="square" 
      onClick={props.onClick}>

      {props.value}

    </button>
  )
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state={
      history: [
        {
          squares: Array(9).fill(null),
        }
      ],
      xIsNext: true
    }
  }
  render(){
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares)
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handelClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/*todo*/}</ol>
        </div>
      </div>
    )
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return (
    <Game />
  );
}

export default App;
