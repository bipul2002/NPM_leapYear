export class Leap {

    //to check if it is a leap year or not

    static isLeapYear(year: number): boolean {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    //display leap year
    static displayLeapYear(year: number): void {
        const isLeap = Leap.isLeapYear(year);
        if (isLeap) {
            const msg:string = 'It is a leap year'
            console.log(`%c ${msg}: ${year}`, 'color:green');
            alert(`${msg}: ${year}`);
            
        } else {
            const msg:string = 'It is not a leap year'
            console.log(`%c ${msg}: ${year}`, 'color:red');
            alert(`${msg}: ${year}`);
        }
    }
    //diaplay all leap year in range

    static displayLeapYearsInRange(startYear: number, endYear: number): void {
        for (let year = startYear; year <= endYear; year++) {
            if (Leap.isLeapYear(year)) {
                console.log(`Leap year: ${year}`);
                alert(`${year}`);
            }
        }
    }

    //next leap year
    static nextLeapYear(year: number): void{
        for (let i = year + 1; ; i++) {
            if (Leap.isLeapYear(i)) {
                alert(i);
            }
        }
    }

}