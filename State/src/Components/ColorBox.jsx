import React from 'react'

function colorBox({ColorChanges}) {
  return (
    <div style={{
      backgroundColor:ColorChanges,
    }} className='w-75 h-75 rounded-2xl text-center content-center mt-5 '>colorBox</div>
  )
}

export default colorBox