import './App.css'
import Hero from './Components/hero'
import Navbar from './Components/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>

      <div className='relative w-full h-screen'>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hero />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>

  )
}

export default App
