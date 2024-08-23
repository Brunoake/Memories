import { useState } from 'react'

import { Outlet } from 'react-router-dom'

import './App.css'

function App() {


  return (
    <div className='app'>
     
      <h1>memories</h1>

      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
