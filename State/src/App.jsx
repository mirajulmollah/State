import { useEffect, useState } from 'react'

import Button from './Components/Button'

import './App.css'

function App() {

  const colors = ['red', 'green', 'blue', 'gray', 'pink', 'yellow']



  return (
    <div className='flex flex-col justify-center w-full min-h-screen items-center'>
      <h1>🎨Colour Switcher</h1>
      <div className='flex justify-center items-center gap-3'>
      {colors.map((items) => (
        

            
            <Button key={items} color={items}>{items}</Button>
          

        


      ))}
      </div>

    </div>


  )
}

export default App
