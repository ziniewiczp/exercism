class Clock {
    constructor(hours = 0, minutes = 0) {
        this.hours = hours;
        this.minutes = minutes;

        this.recalculate();
    }

    recalculate() {
        if (this.minutes > 59) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
        
        } else if (this.minutes < 0) {
            this.minutes = Math.abs(this.minutes);
            let hoursDifference = Math.floor(this.minutes / 60);

            this.hours -= hoursDifference + 1;
            this.minutes = 60 - (this.minutes - 60*hoursDifference);
        }

        if (this.hours < 0) {
            this.hours = 24 - Math.abs(this.hours) % 24;
        }

        if (this.hours > 23) {
            this.hours = this.hours % 24;
        }
    }

    plus(minutes) {
        this.minutes += minutes;
        this.recalculate();

        return this;
    }

    minus(minutes) {
        this.minutes -= minutes;
        this.recalculate();

        return this;
    }

    equals(clock) {
        const areHoursEqual = this.hours === clock.hours;
        const areMinutesEqual = this.minutes === clock.minutes;

        return areHoursEqual && areMinutesEqual;
    }

    toString() {
        let formattedHour = (this.hours < 10) ? '0' + this.hours : this.hours;
        let formattedMinutes = (this.minutes < 10) ? '0' + this.minutes : this.minutes;

        return formattedHour + ':' + formattedMinutes;
    }
}

export const at = (hours, minutes) => {
    return new Clock(hours, minutes);
}