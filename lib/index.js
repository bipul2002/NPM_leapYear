"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leap = void 0;
var Leap = /** @class */ (function () {
    function Leap() {
    }
    //to check if it is a leap year or not
    Leap.isLeapYear = function (year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };
    //display leap year
    Leap.displayLeapYear = function (year) {
        var isLeap = Leap.isLeapYear(year);
        if (isLeap) {
            var msg = 'It is a leap year';
            console.log("%c ".concat(msg, ": ").concat(year), 'color:green');
        }
        else {
            var msg = 'It is not a leap year';
            console.log("%c ".concat(msg, ": ").concat(year), 'color:red');
        }
    };
    //diaplay all leap year in range
    Leap.displayLeapYearsInRange = function (startYear, endYear) {
        for (var year = startYear; year <= endYear; year++) {
            if (Leap.isLeapYear(year)) {
                console.log("Leap year: ".concat(year));
            }
        }
    };
    //next leap year
    Leap.nextLeapYear = function (year) {
        for (var i = year + 1;; i++) {
            if (Leap.isLeapYear(i)) {
                return i;
            }
        }
    };
    return Leap;
}());
exports.Leap = Leap;
