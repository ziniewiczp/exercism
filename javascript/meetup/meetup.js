const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const getLast = (year, month, day) => {
    let meetupDate = new Date(year, month + 1);

    do {
        meetupDate.setDate(meetupDate.getDate() - 1);
    
    } while(meetupDate.getDay() !== days.indexOf(day));

    return meetupDate;
}

const getTeenth = (year, month, day) => {
    let meetupDate = new Date(year, month, 13);

    while(meetupDate.getDay() !== days.indexOf(day)) {
        meetupDate.setDate(meetupDate.getDate() + 1);
    }

    return meetupDate;
}

const getSpecified = (year, month, day, which) => {
    let meetupDate = new Date(year, month);

    const whichList = ["1st", "2nd", "3rd", "4th", "5th"];
    let counter = 0;

    while(meetupDate.getMonth() === month) {
        if(meetupDate.getDay() === days.indexOf(day)) {
            counter += 1;
            if (counter === whichList.indexOf(which) + 1)
                return meetupDate;
        }
        
        meetupDate.setDate(meetupDate.getDate() + 1);
    }

    throw new Error(`There is no ${which} ${day} on ${month} ${year}`);
}

export const meetupDay = (year, month, day, which) => {
    if(which === "last")
        return getLast(year, month, day);

    else if(which === "teenth")
        return getTeenth(year, month, day);

    else
        return getSpecified(year, month, day, which);
}