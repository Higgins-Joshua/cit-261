var canvas, ctx, flag = false,
prevX = 0,
curX = 0,
prevY = 0,
curY = 0,
dot_flag = false;

var x = "black",
y = 2;

function init() {
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findXandYpos('move', e)
    }, false);

    canvas.addEventListener("mousedown", function (e) {
        findXandYpos('down', e)
    }, false);

    canvas.addEventListener("mouseup", function (e) {
        findXandYpos('up', e)
    }, false);

    canvas.addEventListener("mouseout", function (e) {
        findXandYpos('out', e)
    }, false);
}

function color(obj) {
    switch (obj.id) {
        case "green":
            x = "green";
            break;
        case "blue":
            x = "blue";
            break;
        case "red":
            x = "red";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "orange":
            x = "orange";
            break;
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }

    if (x == "white"){
        y = 14;
    }
    else {
        y = 2;
    }
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(curX, curY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase() {
    ctx.clearRect(0, 0, w, h);
}

function findXandYpos(res, e) {
    if (res == 'down') {
        prevX = curX;
        prevY = curY;
        curX = e.clientX - canvas.offsetLeft;
        curY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(curX, curY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = curX;
            prevY = curY;
            curX = e.clientX - canvas.offsetLeft;
            curY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}

window.onload = init;