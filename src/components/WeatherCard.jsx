import "../css/app0811-weather.css"
import { CiUmbrella } from "react-icons/ci";

const WeatherCard = ({date, timeStart, comma, timeEnd, weatherImgUrl, status, rainRate}) => {
  return (
    <div className="weather-card">
      <div className="card-body">
          <h3 className="card-date">{date}</h3>
          <p className="card-time">{timeStart}</p>
          <p className="card-time">{comma}</p>
          <p className="card-time">{timeEnd}</p>
          <img src={weatherImgUrl} className="card-img" alt="..." />
          <p className="card-status">{status}</p>
          <div className="rain-rate-sec">
              <CiUmbrella />
              <p className="rain-rate">{rainRate}%</p>
          </div>
      </div>
    </div>
  )
}

export default WeatherCard