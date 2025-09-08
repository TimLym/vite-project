import React, { useRef } from 'react'

const App = () => {
  const inputRefs = useRef([])  
  const inputFocus = (index) => {
    inputRefs.current.forEach((input)=> {
      input.style.backgroundColor = ""
    })
    if (inputRefs.current[index]) {
      inputRefs.current[index].style.backgroundColor = 'yellow'
    }
  }

  const InputText = () => {
    return Array.from({ length: 3 }).map((_, i) => (
      <div key={i}>
        文字方塊{i + 1}
        <input
          type="text"
          ref={(e) => (inputRefs.current[i] = e)}
          onFocus={() => inputFocus(i)}
        />
      </div>
    ))
  }

  return (
    <div className='wrap'>
      <InputText />
    </div>
  )
}

export default App