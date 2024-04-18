import React, { useState } from 'react'


import { useSelector, useDispatch } from 'react-redux';
import { updateRole } from '../actions/roleActions';

const Easy = () => {

    // const p2 = useSelector(state => state.role);
    const [board, setBoard] = useState(Array(9).fill('')); // Empty board state
    const [currentPlayer, setCurrentPlayer] = useState('X'); // Current player starts as X
    const [winner, setWinner] = useState(null); // No winner initially
    const dispatch = useDispatch();

    const handleCellClick = (index) => {
        if (board[index] === '' && !winner) {
            const newBoard = [...board]; // Create a copy of the board
            newBoard[index] = currentPlayer;
            setBoard(newBoard);

            // Check for winner after each move
            const winningConditions = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];

            for (let i = 0; i < winningConditions.length; i++) {
                const [a, b, c] = winningConditions[i];
                if (newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c] && newBoard[a] !== '') {
                    setWinner(newBoard[a]); // Set the winner
                    dispatch(updateRole(newBoard[a])); // Dispatch the updateMessage action

                    return; // Early exit if winner found
                }
            }

            // Switch current player after each valid move
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };


    return (
        <div className='w-full md:w-2/4 h-4/4 flex items-center justify-center'>
            <div className='bg-white w-3/4 h-full mt-8 md:mt-0 md:h-3/4 rounded-md grid grid-rows-3 grid-flow-col px-8 py-10 transition-all delay-100'>

                <div className='hover: cursor-pointer border-2 text-4xl font-semibold border-indigo-600 border-l-0 border-t-0 text-center p-6 items-center justify-center flex' onClick={() => handleCellClick(0)} >{board[0]}</div>
                <div className='hover: cursor-pointer border-2 text-4xl font-semibold border-indigo-600 border-l-0 text-center p-6 items-center justify-center flex' onClick={() => handleCellClick(1)}>{board[1]}</div>
                <div className='hover: cursor-pointer border-2 text-4xl font-semibold border-indigo-600 border-l-0 border-b-0 text-center p-6 items-center justify-center flex' onClick={() => handleCellClick(2)}>{board[2]}</div>

                <div className='hover: cursor-pointer border-2 text-4xl font-semibold border-indigo-600 border-t-0 text-center p-6 items-center justify-center flex' onClick={() => handleCellClick(3)} >{board[3]}</div>
                <div className='hover: cursor-pointer border-2 text-4xl font-semibold border-indigo-600 text-center p-6 items-center justify-center flex' onClick={() => handleCellClick(4)}>{board[4]}</div>
                <div className='hover: cursor-pointer border-2 text-4xl font-semibold border-indigo-600 border-b-0  text-center p-6 items-center justify-center flex' onClick={() => handleCellClick(5)}>{board[5]}</div>

                <div className='hover: cursor-pointer border-2 text-4xl font-semibold border-indigo-600 border-r-0 border-t-0 text-center p-6 items-center justify-center flex' onClick={() => handleCellClick(6)}>{board[6]}</div>
                <div className='hover: cursor-pointer border-2 text-4xl font-semibold border-indigo-600 border-r-0 text-center p-6 items-center justify-center flex' onClick={() => handleCellClick(7)}>{board[7]}</div>
                <div className='hover: cursor-pointer border-2 text-4xl font-semibold border-indigo-600 border-r-0 border-b-0 text-center p-6 items-center justify-center flex' onClick={() => handleCellClick(8)}>{board[8]}</div>

            </div>
        </div>
    )
}

export default Easy
