function stopSystem(){
    document.documentElement.style['cursor'] = "wait";
    document.getElementById('windowsMenu').style['animation'] = "";
    document.getElementById('windowsMenu').style['visibility'] = "hidden";
    setTimeout(function () {
        document.getElementById('toolbar').style['visibility'] = "hidden";
        document.getElementById('toolbar').style['animation'] = "";
        setTimeout(function () {
            document.getElementById('icon1').style['visibility'] = "hidden";
            document.getElementById('icon2').style['visibility'] = "hidden";
            document.getElementById('icon3').style['visibility'] = "hidden";
            document.getElementById('icon4').style['visibility'] = "hidden";
            document.getElementById('backgroundD').style['animation'] = "3s ease fadeOut both";
            setTimeout(function () {    
                window.location.href = "index.html";
            }, 3000);
        }, 1000);
    }, 1000);
}

function test(event){
    if(event.keyCode==32){
        alert("file: "+filePriority + ", chrome: "+ chromePriority+", spotify: "+spotifyPriority);
    }
}