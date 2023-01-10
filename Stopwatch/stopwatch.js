window.onload = function () {

    var seconds = 00;
    var milli = 00;
    var changingmilli = document.getElementById('milli');
    var changingseconds = document.getElementById('seconds');

    var btnstart = document.getElementById('btnstart');
    var btnstop = document.getElementById('btnstop');
    var btnreset = document.getElementById('btnreset');
    var interval;


    function startTimer() {
        milli++;

        if (milli <= 9) {
            changingmilli.innerHTML = "0" + milli;
        }

        if (milli > 9) {
            changingmilli.innerHTML = milli;
        }

        if (milli > 99) {
            console.log("seconds");
            seconds++;
            changingseconds.innerHTML = "0" + seconds;
            milli = 0;
            changingmilli.innerHTML = "0" + milli;
        }

        if (seconds > 9) {
            changingseconds.innerHTML = seconds;
        }
    }

    btnstart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    btnstop.onclick = function () {
        clearInterval(interval);
    }

    btnreset.onclick = function () {
        clearInterval(interval);
        milli = '00';
        seconds = '00';
        changingmilli.innerHTML = milli;
        changingseconds.innerHTML = seconds;
    }

}