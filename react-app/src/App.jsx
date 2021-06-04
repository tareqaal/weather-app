import React, { useEffect, useState, createContext } from 'react';
import Routes from './Routes';
import { LocationSpinner, ErrorMessage } from './universe';
import { initialState } from './Constants';

export const Store = createContext(null);

const App = () => {

  const [state, setState] = useState(initialState);

  const [coords, setCoords] = useState({lat: '', long: ''});



  useEffect(() => {
    const fetchData = async () => {

      navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({ lat: position.coords.latitude, long: position.coords.longitude })
      },
      (error) => {
        console.error(error);
        setState(currentState => Object.assign({}, currentState, { geolocationError: true, loading: false } ));
    
      });

      if (coords.lat && coords.long) {

        await fetch(`/weatherApi/getByLatLong/?lat=${coords.lat}&long=${coords.long}`)
        .then(res => res.json())
        .then(response => {
          setState(currentState => Object.assign({}, currentState, response, { loading: false } ));
        })
        .catch(error => {
          setState(currentState => Object.assign({}, currentState, { error: true, message: error.message, loading: false } ));
        })
      }
    }
    fetchData()

  },[coords.lat, coords.long]);

  useEffect(() => {
    if (state.error) {
      setTimeout(() => {
        setState(currentState => Object.assign({}, currentState, { error: false, message: null} ));
      }, 4000)
    }

  }, [state.error]);

  return (
    <Store.Provider value={{state: state, setState: setState}}>
        
        <ErrorMessage code={state.code} message={state.message} show={state.error} />

        {state.loading ? <LocationSpinner /> : <Routes/>}

    </Store.Provider>
  );
 
}
export default App;