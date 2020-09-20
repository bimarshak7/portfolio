import React,{useState,useEffect} from 'react';
import Board from './board';
import {WinCheck,pcMove} from './calc';
import Modal from './modal';
import './game.css';
function Game(){
	const init=Array(9).fill(null);
	const f_turn=["X","O"][Math.round(Math.random())]
	const [board,setBoard]=useState({...init});
	const [turn,setTurn]=useState(f_turn);
	const [modal,setModal]=useState(false);
	const [info,setInfo]=useState("Next Turn",turn);
	const [mv,setMv]=useState(0);

	const onClick=(i)=>{
		let copy={...board};
		let turn_c=turn;
		if (copy[i]===null){
			copy[i]=turn;
			setTurn((turn==="X")?"O":"X");
			setBoard({...copy});
			setMv(mv+1);
		
		if(WinCheck(copy,turn_c)){
			setInfo(`${turn_c} is the winner!!!`);
			setModal(true);
			}

		}

	};

	useEffect(() => {
		let copy=board;
		let turn_c=turn;
		if (turn==="O"){
			let move=pcMove(board)
			copy[move]="O";
			setBoard({...copy});
			setTurn("X");
			setMv(mv+1);
		}
		
		if(mv>=9){
  			setModal(true);
			setInfo("It's Draw");
  		}
		
		if(WinCheck(copy,turn_c)){
			setInfo(`${turn_c} is the winner!!!`);
			setModal(true);
			}
	},[turn,board,mv]);

	const reset=()=>{
		setModal(false);
		setTurn(f_turn);
		setBoard(init);
		setMv(0);
	};

	return(
		<div className='game'>
		<h2>Tic Tac Toe</h2>
		<div className='info'>
		Computer: O<br/>
		Player: X<br/>
		</div>
		<Board onClick={onClick} squares={board}/>
		<Modal show={modal} handleClose={reset}>
          	      <h2 className='info'>{info}</h2>
        	</Modal>
		</div>
		)


}

export default Game;