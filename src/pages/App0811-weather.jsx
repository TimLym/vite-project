import { useEffect } from 'react'
import WeatherCard from '../components/WeatherCard'
import sunnyRain from "../images/weatherIcon/多雲午後短暫雷陣雨.svg"
import rain from "../images/weatherIcon/多雲短暫雨.svg"
import axios from 'axios'


const taipeiWeaether = [
    {
        id: 1,
        date: "11日",
        timeStart: "上午6:00",
        comma: "～",
        timeEnd: "下午6:00",
        weatherImgUrl: sunnyRain,
        status: "晴午後短暫雷陣雨",
        rainRate: "80%"
    },
    {
        id: 2,
        date: "11日",
        timeStart: "上午6:00",
        comma: "～",
        timeEnd: "下午6:00",
        weatherImgUrl: rain,
        status: "多雲短暫陣雨",
        rainRate: "40%"
    },
    {
        id: 3,
        date: "12日",
        timeStart: "上午6:00",
        comma: "～",
        timeEnd: "下午6:00",
        weatherImgUrl: sunnyRain,
        status: "多雲午後短暫雷陣雨",
        rainRate: "40%"
    }
]

const Weather = () => {
    // useEffect() 網站渲染後，只呼叫一次json
    // 非同步取資料方法async()，需搭配使用await方法
    useEffect(()=>{
        (async()=>{
            // 取得public中的json檔案
            // const data =await axios.get("./F-C0032-001.json");
            // 取得src中的json檔案
            const data = await axios.get("./src/json/F-C0032-001.json");
            // 利用 import 方法 =>無法，axios 只能對應路徑
            console.log(data.data.cwaopendata.dataset.location);
        })();
    },[]);


    return (
        <div className='box'>
            <h1>台北市</h1>
            <div className='container'>
                {taipeiWeaether.map((e) => {
                    return <WeatherCard key={e.id}
                        date={e.date}
                        timeStart={e.timeStart}
                        comma={e.comma}
                        timeEnd={e.timeEnd}
                        weatherImgUrl={e.weatherImgUrl}
                        status={e.status}
                        rainRate={e.rainRate}>
                    </WeatherCard>
                })}
            </div>
        </div>
    )
}

export default Weather