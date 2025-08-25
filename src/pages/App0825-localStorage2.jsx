import React from 'react'

const App = () => {
    const citys = [
        {
            cityId:1,
            cityName:"台北市",
        },
        {
            cityId:2,
            cityName:"新北市",
        }
    ]
  
    return (
    <div>
        <h1>Local Storage - 陣列物件資料存取</h1>
        <button onClick={()=>{
            // 將陣列物件轉成字串
            let strCity = JSON.stringify(citys);
            window.localStorage.setItem('citys', strCity);
        }}>寫入</button>

        <button onClick={()=>{
            // 取出localStorage資料
            let getData = window.localStorage.getItem("citys");

            // 將字串轉成陣列物件
            let objCitys = JSON.parse(getData);
            console.log(objCitys);
        }}>讀取</button>

    </div>
  )
}

export default App