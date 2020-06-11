function desktopLoad(){
    document.getElementById('backgroundD').style['animation'] = "5s ease fadeIn both";
    document.getElementById('icon1').style['animation'] = "5s ease fadeIn both";
    document.getElementById('icon2').style['animation'] = "5s ease fadeIn both";
    document.getElementById('icon3').style['animation'] = "5s ease fadeIn both";
    document.getElementById('icon4').style['animation'] = "5s ease fadeIn both";
    document.getElementById('toolbar').style['animation'] = "0.5s ease-in toolbarUp both";
    document.getElementById('toolbar').style['animation-delay'] = "1s";
}
time();
function time(){
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    var hour = d.getHours();
    var minute = d.getMinutes();
    if(minute<10){
        minute = "0"+minute;
    }
    if(hour<10){
        hour = "0"+hour;
    }
    if(day<10){
        day = "0"+day;
    }
    if(month<10){
        month = "0"+month;
    }
    document.getElementById('footerHour').innerHTML = hour+":"+minute;
    document.getElementById("footerDate").innerHTML = day+"/"+month+"/"+year;
    setTimeout('time()', 100);
}



var contextmenuOpen = false;

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById('rightMenu').style['top'] = y+"px";
    document.getElementById('rightMenu').style['left'] = x+"px";
    document.getElementById('rightMenu').style['animation'] = "0.2s ease openFile both";
    contextmenuOpen = true;
});

var isWindowsmenuOpen = false;
function windowsMenuOpen(){
    if(isWindowsmenuOpen){
        document.getElementById('windowsMenu').style['animation'] = "";
        isWindowsmenuOpen = false;
    } else {
        document.getElementById('windowsMenu').style['animation'] = "0.5s ease windowsMenuUp both";
        isWindowsmenuOpen = true;
    }
}

function leftClick(event){
    if(contextmenuOpen && event.button == 0){
        document.getElementById('rightMenu').style['animation'] = "";
    } else return;
}

function leftClick2(event){
    if(isWindowsmenuOpen && event.button == 0){
        document.getElementById('windowsMenu').style['animation'] = "";
        isWindowsmenuOpen = false;
    }
}

var tbIsActive = true;

function activeToolbar(){
    if(tbIsActive){
        document.getElementById('toolbar').style['animation'] = "0.5s ease-in toolbarDown both";
        document.getElementById('toolbar').style['animation-delay'] = "";
        tbIsActive = false;
    } else{
        tbIsActive = true;
    }
}

function toolbarUp(){
    if(!tbIsActive){
        document.getElementById('toolbar').style['animation'] = "0.5s ease-in toolbarUp both";
        document.getElementById('toolbar').style['animation-delay'] = "";
    }
}

function toolbarDown(){
    if(!tbIsActive){
        document.getElementById('toolbar').style['animation'] = "0.5s ease-in toolbarDown both";
        document.getElementById('toolbar').style['animation-delay'] = "";
    }
}

function launchSnake(){
    document.getElementById('snakePage').style['animation'] = "0.2s ease openFile both";
    document.getElementById('snakeIFrame').src = "snake.html";
    document.getElementById('windowsMenu').style['animation'] = "";
    document.getElementById('windowsMenu').style['visibility'] = "hidden";
}

function closeSnake(){
    document.getElementById('snakePage').style['animation'] = "";
    document.getElementById('snakeIFrame').src = "";
}