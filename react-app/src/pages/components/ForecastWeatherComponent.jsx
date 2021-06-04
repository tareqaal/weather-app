import React from 'react';
import { useStore } from '../../hooks';
import { dayBuilder } from '../../helpers';
 
export const ForecastWeatherComponent = () => {

const { state } = useStore()

  return (
     <div className="week-container">
       <h6>The weather forecast for the next 7 days:</h6>
        <ul className="week-list">
            {state.daily.filter((item, i) => i !== 7).map((item, index) => {
                let day = new Date(item.dt * 1000).getDay();

                return(
                    <li key={index}>
                        <span className="day-name">{dayBuilder(day)}</span>
                        <img className="list-icon" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt=""/>
                        <span className="day-temp">
                            {Math.round(item.temp.max)}°c / {Math.round(item.temp.min)}°c
                        </span>
                    </li>
                    );
                })
            }
 
        </ul>
    </div>
  );
}