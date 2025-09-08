import React, { useRef } from 'react'

const App = () => {
  const inputRef = useRef(null);
  
  const closePassword = ()=> {
    inputRef.current.type = "password"
  };

  const openPassword = () => {
    inputRef.current.type = "text"
  }

  return (
    <div className='wrap'>
      <h1>useRef-開關密碼</h1><hr />
      <input type="text" ref={inputRef}/>
      <button onClick={closePassword}>關閉密碼</button>
      <button onClick={openPassword}>查看密碼</button>
    </div>
  )
}

export default App