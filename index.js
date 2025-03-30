setInterval(digitalClock,1000);

function digitalClock() {
    const clock = document.getElementById('clock');

    const time = new Date();
    clock.textContent = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}

function currentDate() {
    const dateDiv = document.getElementById('date');

    const date = new Date();
    let day;
    switch (date.getDay()) {
        case 0: day = "Monday";break;
        case 1: day = "Tuesday";break;
        case 2: day = "Wednesday";break;
        case 3: day = "Thursday";break;
        case 4: day = "Friday";break;
        case 5: day = "Saturday";break;
        case 6: day = "Sunday";break;
    }

    let dayOfMonth;
    switch (date.getMonth()) {
        case 0: dayOfMonth = "January";break;
        case 1: dayOfMonth = "February";break;
        case 2: dayOfMonth = "March";break;
        case 3: dayOfMonth = "April";break;
        case 4: dayOfMonth = "May";break;
        case 5: dayOfMonth = "June";break;
        case 6: dayOfMonth = "July";break;
        case 7: dayOfMonth = "August";break;
        case 8: dayOfMonth = "September";break;
        case 9: dayOfMonth = "October";break;
        case 10: dayOfMonth = "November";
        case 11: dayOfMonth = "December";break;
    }
    dateDiv.textContent = `${day}, ${dayOfMonth}, ${date.getDate()}, ${date.getFullYear()}`;
}