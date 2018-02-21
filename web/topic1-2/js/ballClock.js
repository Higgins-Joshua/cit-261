class BallClock {
    constructor(ballsCount) {
        this.ballsCount = ballsCount;
        this.halfDay = 0;
        this.main = this.initBallArray();
        this.initQueue = this.initBallArray();
        this.mins = [];
        this.fiveMinutes = [];
        this.hoursAmount = [];
    }

    startClock() {
        while (true) {
            this.addOneMin(this.main.shift());
            if (this.checkReachedStart() === true) {
                break;
            }
        }

        var message = this.ballsCount + " balls cycle after " + (this.halfDay / 2) + " days.";
        // console.log(message);

        return message;
    }

    checkReachedStart() {
        if (this.main.length !== this.ballsCount) {
            return false;
        }

        for (var i = 0; i < this.ballsCount; i++) {
            if (this.main[i] !== this.initQueue[i]) {
                return false;
            }
        }
        return true;
    }

    initBallArray() {
        var ballArray = [];
        for (var i = 1; i <= this.ballsCount; i++) {
            ballArray.push(i);
        }
        return ballArray;
    }

    addOneMin(ball) {
        if (this.mins.length < 4) {
            this.mins.push(ball)
        } else {
            this.clearMins();
            this.addFiveMin(ball);
        }
    }

    addFiveMin(ball) {
        if (this.fiveMinutes.length < 11) {
            this.fiveMinutes.push(ball);
        } else {
            this.clearFiveMins();
            this.addOneHour(ball);
        }
    }

    addOneHour(ball) {
        if (this.hoursAmount.length < 11) {
            this.hoursAmount.push(ball);
        } else {
            this.clearHours();
            this.main.push(ball);
            this.halfDay = this.halfDay + 1;
        }
    }

    clearMins() {
        while (this.mins.length > 0) {
            this.main.push(this.mins.pop());
        }
    }

    clearFiveMins() {
        while (this.fiveMinutes.length > 0) {
            this.main.push(this.fiveMinutes.pop());
        }
    }

    clearHours() {
        while (this.hoursAmount.length > 0) {
            this.main.push(this.hoursAmount.pop());
        }
    }
}

class BallClockMins extends BallClock {
    constructor(ballsCount, minCount) {
        super(ballsCount);
        this.minCount = minCount;
    }

    startClock() {
        for (var i = 0; i < this.minCount; i++) {
            this.addOneMin(this.main.shift());
        }

        var json = {"Min": this.mins, "FiveMin": this.fiveMinutes, "Hour": this.hoursAmount, "Main": this.main};
        // console.log(json);
        return json;
    }
}

document.getElementsByClassName('firstMode')[0].onclick = function() {
    document.getElementById("firstModeResponse").removeAttribute("style");
    var ballsInput = parseInt(document.getElementsByClassName('ballsInputFirst')[0].value);

    if (!isNaN(ballsInput) && ballsInput >= 27 && ballsInput <= 127) {
        var run = new BallClock(ballsInput).startClock();
        document.getElementById("firstModeResponse").style.color = "green";
        document.getElementById("firstModeResponse").innerHTML = run;
        document.getElementsByClassName('ballsInputFirst')[0].value = "";
    }
    else {
        document.getElementById("firstModeResponse").style.color = "red";
        document.getElementById("firstModeResponse").innerHTML = "Your input is incorrect! Correct balls range is 27 - 127";
        document.getElementsByClassName('ballsInputFirst')[0].value = "";
    }
}

document.getElementsByClassName('secondMode')[0].onclick = function() {
    document.getElementById("secondModeResponse").removeAttribute("style");
    var ballsInput = parseInt(document.getElementsByClassName('ballsInputSecond')[0].value);
    var minutes = parseInt(document.getElementsByClassName('minsInputSecond')[0].value);

    if (!isNaN(ballsInput) && !isNaN(minutes) && ballsInput >= 27 && ballsInput <= 127) {
        var run = new BallClockMins(ballsInput, minutes).startClock();
        document.getElementById("secondModeResponse").style.color = "green";
        document.getElementById("secondModeResponse").style.float = "right";
        document.getElementById("secondModeResponse").innerHTML = JSON.stringify(run);
        document.getElementsByClassName('ballsInputSecond')[0].value = "";
        document.getElementsByClassName('minsInputSecond')[0].value = "";
    }
    else {
        document.getElementById("secondModeResponse").style.color = "red";
        document.getElementById("secondModeResponse").innerHTML = "Your input is incorrect! Correct balls range is 27 - 127";
        document.getElementsByClassName('ballsInputSecond')[0].value = "";
        document.getElementsByClassName('minsInputSecond')[0].value = "";
    }
}