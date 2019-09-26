const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const meetupDay = (year, month, day, which) => {
    let meetupDate;
    let direction = (which === "last") ? -1 : 1;

    if(!isNaN(parseInt(which))) {
        meetupDate = new Date(year, month);
    
    } else {
        if(which === "last") {
            meetupDate = new Date(year, month + 1, 0);
        
        } else {
            meetupDate = new Date(year, month, 13);
        }

        which = "1st";
    }

    let counter = 0;
    while (meetupDate.getMonth() === month) {
        if (meetupDate.getDay() === days.indexOf(day)) {
            counter += 1;

            if (counter === parseInt(which))
                return meetupDate;
        }

        meetupDate.setDate(meetupDate.getDate() + direction);
    }

    throw new Error(`There is no ${which} ${day} on ${month} ${year}`);
};