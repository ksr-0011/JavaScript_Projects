function dispTime(){
    var time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let ampm = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h-12;
        ampm = "PM"
    }

    // h = (h < 10) ? "0" + h : h;
    // m = (m < 10) ? "0" + m : m;
    // s = (s < 10) ? "0" + s : s;

    if(h<10){
        h = "0" + h;
    }
    if(m<10){
        m = "0" + m;
    }
    if(s<10){
        s = "0" +s;
    }

    let tobedisp = h + ":" + m + ":" + s + " - " + ampm;

    document.getElementById("clockDisp").innerHTML = tobedisp;
    
    setTimeout(dispTime, 1000);
}

dispTime();