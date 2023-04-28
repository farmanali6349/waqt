
const time = document.getElementsByTagName('h1')[0]; // inner html > '12:34 <span>54</span><sup>PM</sup>'
const day = document.getElementsByTagName('h2')[1];
const fullDate = document.getElementsByTagName('h3')[0]; // innerHTML > '12 February, 2023'

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function waqt() {
    let date;
    let hours;
    let minutes;
    let seconds;
    let timePeriod;

    let timeString;
    let todayDate;
    let month;
    let year;
    let dateString;

    // creating date object
    date = new Date();

    // getting hours
    hours = (date.getHours() <= 12) ? date.getHours() : date.getHours() - 12;

    // getting timePeriod
    timePeriod = (date.getHours() < 12) ? 'AM' : 'PM';

    // getting minutes
    minutes = date.getMinutes();


    // getting seconds
    seconds = date.getSeconds();


    // creating timeString
    timeString = `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)} <span>${seconds.toString().padStart(2, 0)}</span><sup>${timePeriod}</sup>`;
    time.innerHTML = timeString;

    day.textContent = weekdays[date.getDay()];

    todayDate = date.getDate();
    month = months[date.getMonth()];
    year = date.getFullYear();

    dateString = `${todayDate.toString().padStart(2, 0)} ${month}, ${year}`;

    fullDate.innerHTML = dateString;

}

setInterval(waqt, 1000);