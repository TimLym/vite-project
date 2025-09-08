import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
    // https://api.unsplash.com/photos/?client_id=Sii-EsuQY6VU2GaGU0s8ozYRuSCJX3Xwg-FdEZK7XQY
    const api ="https://api.unsplash.com/search/photos/"
    const accessKey = "Sii-EsuQY6VU2GaGU0s8ozYRuSCJX3Xwg-FdEZK7XQY"
    const [filterString, setFilterString] = useState("sun")

    // 建立非同步方法，取得遠端資料
    const getPhotos = async() => {
        // console. log(`${api}?client_id=${accessKey}&query${filterString}`)
        // 發出請求給遠端api，傳回結果
        const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
        console.log(result);
    }
    getPhotos();
  return (
    <div>App</div>
  )
}

export default App