export const defaults = {
  icon: 'CLEAR_DAY',
  color: 'white',
  size: 112,
  animate: true
};

export const initialState = {
  menu: 'current', // current || forecast
  GeolocationError: false,
  loading: true,
  error: false,
  message: '',
  current: {
    dt: 0,
    feels_like: 0,
    humidity: 0,
    temp: 0,
    uvi: 0,
    visibility: 0,
    weather: [{
      description: "",
      icon: "",
      id: 0,
      main: "",
    }],
    wind_speed: 0,
  },
  daily: [
    {
      dt:0,
      temp: {
        max: 0,
        min: 0,
      },
      weather: [{
        description: "",
        icon: "",
        id: 0,
        main: "",
      }],
    }
  ],
  timezone:'',
  timezone_offset: 0,
  name:''
 
}