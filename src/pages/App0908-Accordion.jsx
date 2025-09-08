import React, { useState } from 'react'
import { IoCaretUpCircle } from "react-icons/io5";
import { IoCaretDownCircle } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react"


const App = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);
    const questions = [
        {
            id:1,
            question:"題目1",
            answer:"答案1"
        },
        {
            id:2,
            question:"題目2",
            answer:"答案2"
        },
        {
            id:3,
            question:"題目3",
            answer:"答案3"
        },

    ]

    return (
        <div className='wrap' style={{width: "100vw", height:"100vh", background:"gray"}}>
            <div className='accordion' style={{width:"80%", margin:"auto", backgroundColor:"#ccc"}}>
                <h1 style={{textAlign:"center", margin:"10px"}}>FAQ標題</h1>
                {
                    questions.map((q)=>{
                        return(
                            <div key={q.id} style={{marginBotton:"5px"}}>
                                <button style={{ width:"100%", textAlign:"left", outline:"none", padding:"4px", backgroundColor:"#999", display:"flex", justifyContent:"space-between" }}
                                    onClick={()=>{setActiveQuestion(activeQuestion=== q.id ? null : q.id)}}>
                                    {q.question}
                                    {activeQuestion === q.id ? <IoCaretDownCircle/> : <IoCaretUpCircle/>}
                                </button>
                                <AnimatePresence>
                                    {
                                        activeQuestion === q.id && (
                                            <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:"auto"}} exit={{ opacity:0, height:0}}>
                                                {q.answer}
                                            </motion.div>
                                        )
                                    }        
                                </AnimatePresence>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default App