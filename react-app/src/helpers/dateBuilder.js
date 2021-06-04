export const dateBuilder = (currentDay) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[currentDay.getDay()];
    let date = currentDay.getDate();
    let month = months[currentDay.getMonth()];
    let year = currentDay.getFullYear();
  
    return `${day}, ${date} ${month} ${year}`;
  };