import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const inputRef = useRef();
  const handleFocus = ()=>{
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "blue";
  }

  return (
    <div className='wrap'>
      <h1>useRef - 取得游標</h1><hr />
      <label>帳號
        <input type="text" ref={inputRef}/>
      </label>
      <button onClick={handleFocus}>取得游標</button>
    </div>
  )
}

export default App