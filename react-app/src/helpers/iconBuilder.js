
export const iconBuilder = (statusCode) => {

switch (statusCode) {
    case "11d":
    case "09d":
    case "10d":
    case "13d":
        return { icon: "RAIN" }

    case "13d":
        return { icon: "SNOW" };

    case "50d":
        return { icon: "FOG" };

    
    case "01d":
        return { icon: "CLEAR_DAY" };

    case "01n":
        return { icon: "CLEAR_NIGHT" }

    case "02d":
        return { icon: "PARTLY_CLOUDY_DAY" }

    case "02n":
        return { icon: "PARTLY_CLOUDY_NIGHT" }

    case "03d":
    case "03n":
    case "04d":
    case "04n":
        return { icon: "CLOUDY" };
            
    default:
        return { icon: "CLEAR_DAY" };
    }
}