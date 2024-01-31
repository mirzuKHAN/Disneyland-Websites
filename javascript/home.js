let arr = ["DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798",
        "DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379", 
        "DISNEY PREMIER ACCESS - 1-ATTRACTION, STARTING FROM HK $79"];
var randmsg;
window.onload = function() {
    randmsg = Math.floor(Math.random() * 3);
    document.querySelector("h2").innerHTML = arr[randmsg];
    document.querySelector("video").play();
}
setInterval("msg()", 3000);
function msg() {
    if (randmsg == 2) randmsg = -1;
    document.querySelector("h2").innerHTML = arr[++randmsg];
}
document.querySelector("video").addEventListener("ended", fvid);
var vidplayed = 0;
function fvid() {
    if (vidplayed % 2 == 0) {
        document.querySelector("#dvideo").innerHTML =
        `<video autoplay muted id="Video1">
            <source src="https://personal.cs.cityu.edu.hk/~cs2204/video/Musical_Journey.mp4" type="video/mp4">
        </video>`;
        document.querySelector("video").addEventListener("ended", fvid);
    }
    else {
        document.querySelector("#dvideo").innerHTML =
        `<video autoplay muted id="Video1">
            <source src="https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4" type="video/mp4">
        </video>`;
        document.querySelector("video").addEventListener("ended", fvid);
    }
    vidplayed++;
}
document.getElementById("myform").onsubmit = sbmt;
function sbmt() {
    let a = document.forms["Form"]["Date"].value;
    let b = document.forms["Form"]["Time"].value;
    let c = document.forms["Form"]["Guests"].value;
    if (a == "" || a == null || b == "" || b == null || c == "" || c == null || !a.replace(/\s/g, '').length || !b.replace(/\s/g, '').length || !c.replace(/\s/g, '').length) {
        document.getElementById("reenter").style.display = "block";
    } else {
        if (reserve(a, b, c)) {
            window.alert("Reservation done. Thank you.");
        } else {
            window.alert("Disneyland has reached the maximum number of visitors for the day.")
        }
        document.getElementById("reenter").style.display = "none";
    }
    return false;
}