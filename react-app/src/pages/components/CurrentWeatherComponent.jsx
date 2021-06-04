import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { useStore } from '../../hooks';
import { iconBuilder } from '../../helpers';
import { defaults } from '../../Constants';
 


export const CurrentWeatherComponent = () => {

  const { state } = useStore();

  return (
    <>
      <div className="forecast">
        <div className="forecast-icon">
          <ReactAnimatedWeather
                icon={iconBuilder(state.current.weather[0].icon).icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
          />
        </div>
        <div className="weather-status">
          <h3>{state.current.weather[0].main}</h3> 
        </div>
        <div className="day-container">
        <h2>{state.current.weather[0].description}</h2>
          <ul>
            <li className="cityName">
                <p>
                  {state.name || state.timezone}
                </p>
                  <img src={`http://openweathermap.org/img/wn/${state.current.weather[0].icon}.png`} alt=""/>
            </li>
            <li>
                Feels like
                <span>
                    {Math.round(state.current['feels_like'])}°c  
                </span>
            </li>
            <li>
                Humidity
                <span>
                    {Math.round(state.current.humidity)}%
                </span>
            </li>
            <li >
                Visibility
                <span >
                    {Math.round(state.current.visibility)} mi
                </span>
                </li>
            <li>
                Wind Speed
                <span >
                    {Math.round(state.current['wind_speed'])} Km/h
                </span>
            </li>
            <li>
                UV index 
                <span >
                    {Math.round(state.current.uvi)}
                </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}