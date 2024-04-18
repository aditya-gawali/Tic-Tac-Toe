import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateRole } from '../actions/roleActions';

const Hard = () => {


    const [board, setBoard] = useState(Array(25).fill('')); // Empty board state
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
                [0, 1, 2, 3, 4],
                [5, 6, 7, 8, 9],
                [10, 11, 12, 13, 14],
                [15, 16, 17, 18, 19],
                [20, 21, 22, 23, 24],
                // Vertical Wins
                [0, 5, 10, 15, 20],
                [1, 6, 11, 16, 21],
                [2, 7, 12, 17, 22],
                [3, 8, 13, 18, 23],
                [4, 9, 14, 19, 24],
                // Diagonal Wins (Top-left to bottom-right)
                [0, 6, 12, 18, 24],
                [1, 7, 13, 19, 23],
                // Diagonal Wins (Top-right to bottom-left)
                [4, 8, 12, 16, 20],
                [3, 7, 11, 15, 19],
                // Diagonal Wins (Bottom-left to top-right)
                [20, 16, 12, 8, 4],
                [21, 17, 13, 9, 5],
                // Diagonal Wins (Bottom-right to top-left)
                [24, 18, 12, 6, 0],
                [23, 19, 15, 11, 7],
            ];

            for (let i = 0; i < winningConditions.length; i++) {
                const [a, b, c, d, e] = winningConditions[i];
                if (newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c] && newBoard[c] === newBoard[d] && newBoard[d] === newBoard[e] && newBoard[a] !== '') {
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
            <div className='bg-white w-3/4 h-full mt-8 md:mt-0 md:h-3/4 rounded-md grid grid-rows-5 grid-flow-col px-8 py-10'>

                <div onClick={() => handleCellClick(0)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-l-0 border-t-0 text-center p-6 items-center justify-center flex'>{board[0]}</div>
                <div onClick={() => handleCellClick(1)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-l-0 text-center p-6 items-center justify-center flex'>{board[1]}</div>
                <div onClick={() => handleCellClick(2)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-l-0 text-center p-6 items-center justify-center flex'>{board[2]}</div>
                <div onClick={() => handleCellClick(3)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-l-0 text-center p-6 items-center justify-center flex'>{board[3]}</div>
                <div onClick={() => handleCellClick(4)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-l-0 border-b-0 text-center p-6 items-center justify-center flex'>{board[4]}</div>

                <div onClick={() => handleCellClick(5)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-t-0 text-center p-6 items-center justify-center flex'>{board[5]}</div>
                <div onClick={() => handleCellClick(6)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 text-center p-6 items-center justify-center flex'>{board[6]}</div>
                <div onClick={() => handleCellClick(7)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 text-center p-6 items-center justify-center flex'>{board[7]}</div>
                <div onClick={() => handleCellClick(8)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 text-center p-6 items-center justify-center flex'>{board[8]}</div>
                <div onClick={() => handleCellClick(9)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-b-0 text-center p-6 items-center justify-center flex'>{board[9]}</div>

                <div onClick={() => handleCellClick(10)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-t-0 text-center p-6 items-center justify-center flex'>{board[10]}</div>
                <div onClick={() => handleCellClick(11)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 text-center p-6 items-center justify-center flex'>{board[11]}</div>
                <div onClick={() => handleCellClick(12)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 text-center p-6 items-center justify-center flex'>{board[12]}</div>
                <div onClick={() => handleCellClick(13)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 text-center p-6 items-center justify-center flex'>{board[13]}</div>
                <div onClick={() => handleCellClick(14)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-b-0 text-center p-6 items-center justify-center flex'>{board[14]}</div>

                <div onClick={() => handleCellClick(15)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-t-0 text-center p-6 items-center justify-center flex'>{board[15]}</div>
                <div onClick={() => handleCellClick(16)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 text-center p-6 items-center justify-center flex'>{board[16]}</div>
                <div onClick={() => handleCellClick(17)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 text-center p-6 items-center justify-center flex'>{board[17]}</div>
                <div onClick={() => handleCellClick(18)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 text-center p-6 items-center justify-center flex'>{board[18]}</div>
                <div onClick={() => handleCellClick(19)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-b-0 text-center p-6 items-center justify-center flex'>{board[19]}</div>

                <div onClick={() => handleCellClick(20)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-r-0 border-t-0 text-center p-6 items-center justify-center flex'>{board[20]}</div>
                <div onClick={() => handleCellClick(21)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-r-0 text-center p-6 items-center justify-center flex'>{board[21]}</div>
                <div onClick={() => handleCellClick(22)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-r-0 text-center p-6 items-center justify-center flex'>{board[22]}</div>
                <div onClick={() => handleCellClick(23)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-r-0 text-center p-6 items-center justify-center flex'>{board[23]}</div>
                <div onClick={() => handleCellClick(24)} className='hover: cursor-pointer  border-2 text-4xl font-semibold border-indigo-600 border-r-0 border-b-0 text-center p-6 items-center justify-center flex'>{board[24]}</div>

            </div>
        </div>
    )
}

export default Hard
