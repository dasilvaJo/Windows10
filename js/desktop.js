function desktopLoad(){
    document.getElementById('backgroundD').style['animation'] = "5s ease fadeIn both";
    document.getElementById('icon1').style['animation'] = "5s ease fadeIn both";
    document.getElementById('toolbar').style['animation'] = "0.5s ease-in toolbarUp both";
    document.getElementById('toolbar').style['animation-delay'] = "2.5s";
}

function openBin(){
    document.getElementById('file').style['animation'] = "0.2s ease-out openFile both";
}

function closeFile(){
    document.getElementById('file').style['animation'] = "";
}

var fullscreenFile = false;

function growFile(){
    if(fullscreenFile){
        document.getElementById('file').style['width'] = "786px";
        document.getElementById('file').style['height'] = "430px";
        document.getElementById('file').style['top'] = "169px";
        document.getElementById('file').style['left'] = "259px";
        fullscreenFile = false;
    } else{
        document.getElementById('file').style['width'] = "100%";
        document.getElementById('file').style['height'] = "100vh";
        document.getElementById('file').style['top'] = "0";
        document.getElementById('file').style['left'] = "0";
        fullscreenFile = true;
    }
}