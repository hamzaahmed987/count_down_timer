"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var res = await inquirer_1.default.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter the number of seconds ".concat(chalk_1.default.bold.yellowBright("(must be less than 60)")),
    validate: function (input) {
        if (isNaN(input)) {
            return "Please enter valid number";
        }
        else if (input > 60) {
            return "seconds must be in 60";
        }
        return true;
    }
});
var input = res.userInput;
function startTime(val) {
    var intTime = new Date().setSeconds(new Date().getSeconds() + val);
    var intervalTime = new Date(intTime);
    setInterval(function () {
        var currentTime = new Date();
        var timeDiff = (0, date_fns_1.differenceInSeconds)(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        var min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        var sec = Math.floor(timeDiff % 60);
        console.log("".concat(min.toString().padStart(1, "0"), ":").concat(sec.toString().padStart(1, "0")));
    }, 1000);
}
startTime(input);
