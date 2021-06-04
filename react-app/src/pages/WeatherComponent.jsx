import React, { useEffect, useState } from 'react';
import Clock from "react-live-clock";
import { BehaviorSubject } from 'rxjs'
import { NavMenu, SearchInput, LoadingSpinner } from '../universe';
import { CurrentWeatherComponent, ForecastWeatherComponent } from './components';
import { dateBuilder, iconBuilder } from '../helpers';
import { useObservable, useStore } from '../hooks';
var moment = require('moment-timezone');

// Subject to hold the emmited value in text input
const searchSubject$ = new BehaviorSubject('');

export const WeatherComponent = () => {
    const {state, setState} = useStore();

    const [validationMsg, setValidationMsg] = useState()
    const [loading, setLoading] = useState(false);

    // Custom hook that subscribe to the emmited value from the subject, run some operators, send ajax request and set the retreived data in the state
    useObservable(searchSubject$, setState, setLoading);

    const handleChange = (event) => {
   
      let value = event.target.value;

      // Regexp matcher to allow only letters and spaces
      const matchLetters =  /(^$)|(^[a-zA-Z ]+$)/.exec(value);

      if (matchLetters != null) {
        setValidationMsg("");
      
        value ? searchSubject$.next(value) : null;
      }
      else{
        setValidationMsg('* Only letters are allowed!');
      }
    };

    return (
    <>
        <div className={`${loading ? 'spinner-overlay' : ''}`}>

            <NavMenu/>

            <div className="container">
                <div className="location">
                    <div className="title">
                        <h2>{state.name || state.timezone}</h2>
                    </div>

                    <div className="clock">
                        <div className="date">
                            <div id="txt"></div>
                            <div className="current-time">
                            <Clock format="HH:mm:ss" interval={1000} ticking={true} timezone={state.timezone}/>
                            </div>
                            <div className="current-date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="temperature">
                            <p>
                                {Math.round(state.current.temp)}°<span>C</span>
                            </p>
                        </div>
                    </div>
                </div>

                <SearchInput onChange={handleChange} validationMsg={validationMsg} />
            
                {state.menu === 'current' && <CurrentWeatherComponent />}

                {state.menu === 'forecast' && <ForecastWeatherComponent/>}
                
            </div>
        </div>
        { loading && <LoadingSpinner/>}
    </>
    );
}