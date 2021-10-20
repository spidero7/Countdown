const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2021, 11, 20, 18, 30, 0);
//console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
//console.log(date);

const weekday = weekdays[futureDate.getDay()];
//console.log(weekday);

giveaway.textContent = `giveaway end on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

// Future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const timeRemaining = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24h

  // values in ms
  const oneDay = 24*60*60*1000; // how many miliseconds are in one day
  const oneHour = 60*60*1000; // how many miliseconds are in one hour
  const oneMinute = 60*1000; // how many miliseconds are in one minute

  // calcualte all values
  let days = Math.floor(timeRemaining / oneDay);

  let hours = Math.floor((timeRemaining % oneDay) / oneHour);
  
  let minutes = Math.floor((timeRemaining % oneHour) / oneMinute);

  let seconds = Math.floor((timeRemaining % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  });
  // clear countdown when we meet the deadline
  if (timeRemaining < 0) {
    clearInterval(countdown);
    deadline
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();