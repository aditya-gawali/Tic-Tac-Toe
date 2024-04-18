import React, { useState } from 'react'
import heroVideo from '../assets/hero.mp4'
import Easy from './Easy';
import Medium from './Medium';
import Hard from './Hard';


import { useSelector, useDispatch } from 'react-redux';
import { updateRole } from '../actions/roleActions';
import { Link } from 'react-router-dom';


const hero = () => {

    const [mode, setMode] = useState("");
    const [level, setLevel] = useState("");
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");
    const [start, setStart] = useState(false)
    const dispatch = useDispatch();
    const winner = useSelector(state => state.role);



    const computerFormHandler = (e) => {
        e.preventDefault();
        setStart(true)
    }

    const WinnerHandler = () => {
        setMode("")
        setLevel("")
        setStart(false)
        setP1("")
        setP2("")
        dispatch(updateRole("")); // Dispatch the updateMessage action
    }


    return (
        <>
            {
                winner && winner == "X" ? <div className='absolute w-full h-full flex flex-col md:flex-row bg-gray-300 bg-opacity-70 items-center justify-center text-white'>

                    <div className='w-2/4 h-2/4 bg-indigo-600 rounded-md flex items-center justify-center flex-col gap-8'>
                        <div className='flex flex-row gap-8 text-2xl bg-indigo-500 px-6 py-4 rounded-md'>
                            <h1 className='text-center'>{!p1 ? "Computer" : p1} <br /> 1</h1>
                            <h1>VS</h1>
                            <h1 className='text-center'>{p2} <br /> 0</h1>
                        </div>
                        <h1 className='text-4xl '>{!p1 ? "Computer" : p1} Won the Match!</h1>

                        <button onClick={WinnerHandler} className='bg-indigo-700 p-4 rounded-md font-semibold text-2xl'>Play Again</button>

                    </div>

                </div> : winner && winner == "O" ? <div className='absolute w-full h-full flex flex-col md:flex-row bg-gray-300 bg-opacity-70 items-center justify-center text-white'>

                    <div className='w-2/4 h-2/4 bg-indigo-600 rounded-md flex items-center justify-center flex-col gap-8'>
                        <div className='flex flex-row gap-8 text-2xl bg-indigo-500 px-6 py-4 rounded-md'>
                            <h1 className='text-center'>{!p1 ? "Computer" : p1} <br /> 0</h1>
                            <h1>VS</h1>
                            <h1 className='text-center'>{p2} <br /> 1</h1>
                        </div>
                        <h1 className='text-4xl '>{p2} Won the Match!</h1>
                        <button onClick={WinnerHandler} className='bg-indigo-700 p-4 rounded-md font-semibold text-2xl'>Play Again</button>
                    </div>

                </div> : <></>
            }

            <div className='w-full h-full flex flex-col md:flex-row bg-gray-100 '>



                {start ?
                    level == "easy" ? <Easy /> : level == "medium" ? <Medium /> : <Hard /> :
                    <>
                        <div className='w-full md:w-2/4 h-4/4 flex items-center justify-center'>
                            <video src={heroVideo} autoPlay loop muted className=''></video>
                        </div>
                    </>}

                <div className='w-full md:w-2/4 h-full md:h-4/4 flex items-center justify-center'>
                    <div className='bg-gray-300 w-3/4 h-4/4  rounded-md flex flex-col px-8 py-8 gap-8 items-center justify-center'>
                        {
                            mode && level && start ? <>

                                {/* <div className='w-2/4 h-2/4 bg-indigo-600 rounded-md flex items-center justify-center flex-col gap-8'> */}
                                <div className='flex flex-row gap-8 text-2xl bg-gray-200 px-6 py-4 rounded-md'>
                                    <h1 className='text-center'>{!p1 ? "Computer" : p1} <br /> 0</h1>
                                    <h1>VS</h1>
                                    <h1 className='text-center'>{p2} <br /> 0</h1>
                                </div>
                                {/* <h1 className='text-4xl '>{player} Move</h1> */}

                                <button onClick={WinnerHandler} className='bg-indigo-600 px-6 py-4 rounded-md font-semibold text-2xl text-white'>Reset</button>

                                {/* </div> */}

                            </> :

                                mode == "" && level == "" ? <>
                                    <h1 className='text-center text-3xl'>SELECT MODE</h1>
                                    <div className='flex flex-col md:flex-row gap-4 w-full text-xl'>
                                        <button className='w-full bg-indigo-600 text-white p-4 rounded-lg' onClick={() => {
                                            setMode("computer")
                                        }}>VS Computer</button>
                                        <button className='w-full bg-indigo-600 text-white p-4 rounded-lg' onClick={() => {
                                            setMode("2player")
                                        }}>2 Players</button>
                                    </div>
                                </> :
                                    mode && level == "" ?
                                        <>
                                            <h1 className='text-center text-3xl'>SELECT LEVEL</h1>
                                            <div className='flex flex-col md:flex-row gap-4 w-full text-xl'>
                                                <button className='w-full bg-indigo-600 text-white p-4 rounded-lg' onClick={() => {
                                                    setLevel("easy")
                                                }}>Easy</button>
                                                <button className='w-full bg-indigo-600 text-white p-4 rounded-lg' onClick={() => {
                                                    setLevel("medium")
                                                }}>Medium</button>
                                                <button className='w-full bg-indigo-600 text-white p-4 rounded-lg' onClick={() => {
                                                    setLevel("hard")
                                                }}>Hard</button>
                                            </div>
                                        </> :
                                        level && mode == "computer" ? <>
                                            <h1 className='text-center text-3xl'>PLAYER NAME</h1>
                                            <form className='flex flex-col md:flex-col gap-6 w-full text-xl' onSubmit={computerFormHandler}>
                                                <input type="text" className='p-4 rounded-lg text-xl border-2' placeholder='Player Name' value="Computer" disabled />
                                                <h1 className='text-center'>VS</h1>
                                                <input type="text" className='p-4 rounded-lg text-xl' placeholder='Player Name' required value={p2} onChange={(e) => setP2(e.target.value)} />
                                                <button className='w-full bg-indigo-600 text-white p-4 rounded-lg' type='submit'>Start Game</button>
                                            </form>


                                        </>
                                            : <>
                                                <h1 className='text-center text-3xl'>PLAYER NAME</h1>
                                                <form className='flex flex-col md:flex-col gap-6 w-full text-xl' onSubmit={computerFormHandler}>
                                                    <input type="text" className='p-4 rounded-lg text-xl' placeholder='Player Name' required value={p1} onChange={(e) => setP1(e.target.value)} />
                                                    <h1 className='text-center'>VS</h1>
                                                    <input type="text" className='p-4 rounded-lg text-xl' placeholder='Player Name' required value={p2} onChange={(e) => setP2(e.target.value)} />
                                                    <button className='w-full bg-indigo-600 text-white p-4 rounded-lg' type='submit'>Start Game</button>
                                                </form>
                                            </>
                        }

                    </div>
                </div >
            </div >
        </>

    )
}

export default hero
