
import React, { useState } from 'react'


const App0818 = () => {
    const [optionTxt, setOptionTxt] = useState("");
    // 建立下拉清單項目
    const arrSubject = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'];
    // 建立下拉清單內容
    const arrSubjectValue = ['html', 'css', 'javascript', 'react'];
    return (
        <div>
            <h2>捕捉下拉式選單</h2>
            <select name="" id="" value={optionTxt} onChange={(e) => {
                setOptionTxt(e.target.value);
            }}>
                {/* disabled => 失效 */}
                <option value="" disabled>請選擇</option>

                {/* 使用陣列 map 來帶資料 */}
                {
                    arrSubject.map((subject, index) => {
                        return <option key={index} value={arrSubjectValue[index]}>{subject}</option>
                    })
                }

                {/* <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JS</option>
            <option value="react">REACT</option> */}
            </select>
            <p>{optionTxt}</p>

        </div>
    )
}

export default App0818