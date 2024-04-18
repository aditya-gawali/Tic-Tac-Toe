import React from 'react'

const navbar = () => {
  return (
    <nav className='w-full py-4 px-8 flex flex-row justify-between items-center'>
      <h1 className='text-4xl w-full text-center'>Tic-Tac-Toe</h1>
      {/* <div className='flex flex-row gap-8 text-xl'>
        <h1 className='hover:cursor-pointer'>About</h1>
        <h1 className='hover:cursor-pointer'>Rules</h1>
        <h1 className='hover:cursor-pointer'>Setting</h1>
      </div> */}
    </nav>
  )
}

export default navbar
