var d = new Date();
var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var day = days[d.getDay()];
var dayN = d.getDate();
var month = d.getMonth();
var monthArr = ["janvier", "février","mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre","décembre"];
month = monthArr[month];
var hour = d.getHours();
var minute = d.getMinutes();
if(minute<10){
    minute = "0"+minute;
}
if(hour<10){
    hour = "0"+hour;
}
document.getElementById('hour').innerHTML = hour+":"+minute;
document.getElementById("date").innerHTML = day+" "+dayN+" "+month;

function showVeille2(){
    document.getElementById('hour').style['animation'] = "2s ease showVeille2 both";
    document.getElementById('date').style['animation'] = "2s ease showVeille2 both";
    document.getElementById('scroll').style['animation'] = "2s ease showVeille2 both";
    document.getElementById('userLogo').style['animation'] = "1s ease veille2Entry both";
    document.getElementById('userLogo').style['animation-delay'] = "1s";
    document.getElementById('userName').style['animation'] = "1s ease veille2Entry both";
    document.getElementById('userName').style['animation-delay'] = "1s";
    document.getElementById('textarea').style['animation'] = "1s ease veille2Entry both";
    document.getElementById('textarea').style['animation-delay'] = "1s";
    document.getElementById('background').style['animation'] = "2s ease bgOpacity both";
    document.getElementById('background').style['animation-delay'] = "1s";
}

function login(){
    document.getElementById('errorPass').style['visibility'] = "hidden";
    document.getElementById('loading').style['animation'] = "5s ease loadingAnim";
    var pass = document.getElementById("password").value;
    setTimeout(function () {
        if(pass=="admin"){
            window.location.href = "desktop.html";
            document.getElementById('loading').style['animation'] = "";
        } else {
            document.getElementById('errorPass').style['visibility'] = "visible";
            document.getElementById('loading').style['animation'] = "";
        }
    }, 5000);
}