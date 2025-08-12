import { useEffect, useState } from 'react'
import WeatherCard from '../components/WeatherCard'
import axios from 'axios'



const Weather = () => {
    // 建立一react變數，使用usestate Hook
    // const [變數名稱, 改變變數名稱的方法]= useState([]);
    const [citys, setCitys] = useState([]);
    // useEffect() 網站渲染後，只呼叫一次json
    // 取得渲染後的DOM元素，要寫在useEffect()裡面(Hook)
    // 非同步取資料方法async()，需搭配使用await方法
    useEffect(() => {
        (async () => {
            // 取得public中的json檔案
            // const data =await axios.get("./F-C0032-001.json");
            // 取得src中的json檔案
            const data = await axios.get("./src/json/F-C0032-001.json");
            // 利用 import 方法 =>無法，axios 只能對應路徑

            // 取得各縣市氣象資訊
            const { location } = data.data.cwaopendata.dataset

            //setCitys 將各縣市資訊透過setCitys方法，更新citys
            setCitys(location);
        })();
    }, []);


    return (
        <>
            {/* {taipeiWeaether.map((e) => {
                return <WeatherCard key={e.id}
                    date={e.date}
                    timeStart={e.timeStart}
                    comma={e.comma}
                    timeEnd={e.timeEnd}
                    weatherImgUrl={e.weatherImgUrl}
                    status={e.status}
                    rainRate={e.rainRate}>
                </WeatherCard>
            })} */}

            <div className="wrap" >
                {citys.map((city) => {
                    return <div className='box' key={city.locationName}>
                        <div className='container'>
                            <h2>
                                {city.locationName}
                                {console.log(city.locationName)}
                            </h2>
                            <div className="cardContent">
                                {
                                    city.weatherElement[0].time.map((e, index) => {
                                        return <WeatherCard key={index}
                                            date={
                                                new Date(e.startTime).toLocaleString(undefined, {
                                                    day: 'numeric',
                                                })
                                            }
                                            timeStart={
                                                new Date(e.startTime).toLocaleString(undefined, {
                                                    hour: 'numeric',
                                                    minute: 'numeric'
                                                })
                                            }
                                            comma="~"
                                            timeEnd={
                                                new Date(e.endTime).toLocaleString(undefined, {
                                                    hour: 'numeric',
                                                    minute: 'numeric'
                                                })
                                            }
                                            weatherImgUrl={`./weatherIcon/${e.parameter.parameterName}.svg`}
                                            status={e.parameter.parameterName}
                                            rainRate={city.weatherElement[4].time[index].parameter.parameterName}>
                                        </WeatherCard>
                                    })
                                }
                            </div>

                        </div>
                    </div>
                })}

            </div>
        </>
    )
}

export default Weather