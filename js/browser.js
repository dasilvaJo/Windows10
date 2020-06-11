var fileisOpen = false;
var fileForeground = false;

function openFile(){
    if(chromePriority>0 && spotifyPriority>0){
        filePriority = 3;
    } else if(chromePriority==1 || spotifyPriority == 1){
        filePriority = 2;
    } else filePriority = 1;
    changeFileForeground();
    if(fileisOpen){
        document.getElementById('file').style['animation'] = "0.2s ease-out openFile both";
    } else{
        document.getElementById('file').style['animation'] = "0.2s ease-out openFile both";
        document.getElementById('footerTB1').style['opacity'] = 1;
        fileisOpen = true;
    }
    document.getElementById('fileTB').style['background'] = "#787676";
    fileForeground = true;
}

function closeFile(){
    document.getElementById('file').style['animation'] = "";
    document.getElementById('footerTB1').style['opacity'] = 0;
    document.getElementById('fileTB').style['background'] = "";
    fileisOpen = false;
    fileForeground = false;
    setTimeout(function () {    
        filePriority = 0;
        if(chromePriority>spotifyPriority){
            document.getElementById('chromeTB').style['background'] = "#787676";
            if(spotifyPriority>0){
                spotifyPriority=1;
                chromePriority=2;
            } else {
                spotifyPriority = 0;
                chromePriority =1;
            }
        } else if(spotifyPriority>chromePriority){
            document.getElementById('spotifyTB').style['background'] = "#787676";
            if(chromePriority>0){
                spotifyPriority=2;
                chromePriority=1;
            } else {
                spotifyPriority = 1;
                chromePriority =0;
            } 
        }
    }, 150);
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

function smallFile(){
    document.getElementById('file').style['animation'] = "";
    fileForeground = false;
    document.getElementById('fileTB').style['background'] = "";
    setTimeout(function () {    
        filePriority = 0;
        if(chromePriority>spotifyPriority){
            document.getElementById('chromeTB').style['background'] = "#787676";
            if(spotifyPriority>0){
                spotifyPriority=1;
                chromePriority=2;
            } else {
                spotifyPriority = 0;
                chromePriority =1;
            }
        } else if(spotifyPriority>chromePriority){
            document.getElementById('spotifyTB').style['background'] = "#787676";
            if(chromePriority>0){
                spotifyPriority=2;
                chromePriority=1;
            } else {
                spotifyPriority = 1;
                chromePriority =0;
            } 
        }
    }, 150);
}

var chromeisOpen = false;
var chromeForeground = false;

function openChrome(){
    if(filePriority>0 && spotifyPriority>0){
        chromePriority = 3;
    } else if(filePriority==1 || spotifyPriority == 1){
        chromePriority = 2;
    } else chromePriority = 1;
    changeChromeForeground();
    if(chromeisOpen){
        document.getElementById('chromePage').style['animation'] = "0.2s ease-out openFile both";
    } else{
        document.getElementById('chromePage').style['animation'] = "0.2s ease-out openFile both";
        document.getElementById('chromeIFrame').src = "https://dasilvajo.github.io/RocketDesign/";
        document.getElementById('footerTB2').style['opacity'] = 1;
        chromeisOpen = true;
    }
    document.getElementById('chromeTB').style['background'] = "#787676";
    chromeForeground = true;
}

function closeChrome(){
    document.getElementById('chromePage').style['animation'] = "";
    document.getElementById('chromeIFrame').src = "";
    document.getElementById('footerTB2').style['opacity'] = 0;
    document.getElementById('chromeTB').style['background'] = "";
    chromeisOpen = false;
    chromeForeground = false;
    setTimeout(function () {
        chromePriority = 0;    
        if(filePriority>spotifyPriority){
            document.getElementById('fileTB').style['background'] = "#787676";
            if(spotifyPriority>0){
                spotifyPriority=1;
                filePriority=2;
            } else {
                spotifyPriority = 0;
                filePriority =1;
            }
        } else if(spotifyPriority>filePriority){
            document.getElementById('spotifyTB').style['background'] = "#787676";
            if(filePriority>0){
                spotifyPriority=2;
                filePriority=1;
            } else {
                spotifyPriority = 1;
                filePriority =0;
            }      
        }
    }, 150);
}

var fullscreenChrome = false;
function growChrome(){
    if(fullscreenChrome){
        document.getElementById('chromePage').style['width'] = "786px";
        document.getElementById('chromePage').style['height'] = "430px";
        document.getElementById('chromePage').style['top'] = "169px";
        document.getElementById('chromePage').style['left'] = "259px";
        fullscreenChrome = false;
    } else{
        document.getElementById('chromePage').style['width'] = "100%";
        document.getElementById('chromePage').style['height'] = "100vh";
        document.getElementById('chromePage').style['top'] = "0";
        document.getElementById('chromePage').style['left'] = "0";
        fullscreenChrome = true;
    }
}

function smallChrome(){
    document.getElementById('chromePage').style['animation'] = "";
    chromeForeground = false;
    document.getElementById('chromeTB').style['background'] = "";
    setTimeout(function () {
        chromePriority = 0;    
        if(filePriority>spotifyPriority){
            document.getElementById('fileTB').style['background'] = "#787676";
            if(spotifyPriority>0){
                spotifyPriority=1;
                filePriority=2;
            } else {
                spotifyPriority = 0;
                filePriority =1;
            }
        } else if(spotifyPriority>filePriority){
            document.getElementById('spotifyTB').style['background'] = "#787676";
            if(filePriority>0){
                spotifyPriority=2;
                filePriority=1;
            } else {
                spotifyPriority = 1;
                filePriority =0;
            }      
        }
    }, 150);
}


var spotifyisOpen = false;
var spotifyForeground = false;

function openSpotify(){
    if(chromePriority>0 && filePriority>0){
        spotifyPriority = 3;
    } else if(chromePriority==1 || filePriority == 1){
        spotifyPriority = 2;
    } else spotifyPriority = 1;
    changeSpotifyForeground();
    if(spotifyisOpen){
        document.getElementById('spotify').style['animation'] = "0.2s ease-out openFile both";
    } else{
        document.getElementById('spotify').style['animation'] = "0.2s ease-out openFile both";
        document.getElementById('spotifyIFrame').src = "https://open.spotify.com/embed/playlist/0Eve6Id0IsPPOCrk6KPMKd";
        document.getElementById('footerTB3').style['opacity'] = 1;
        spotifyisOpen = true;
    }
    document.getElementById('spotifyTB').style['background'] = "#787676";
    spotifyForeground = true;
}

function closeSpotify(){
    document.getElementById('spotify').style['animation'] = "";
    document.getElementById('spotifyIFrame').src = "";
    document.getElementById('footerTB3').style['opacity'] = 0;
    document.getElementById('spotifyTB').style['background'] = "";
    spotifyisOpen = false;
    spotifyForeground = false;
    setTimeout(function () {
        spotifyPriority = 0;    
        if(filePriority>chromePriority){
            document.getElementById('fileTB').style['background'] = "#787676";
            if(chromePriority>0){
                chromePriority=1;
                filePriority=2;
            } else {
                chromePriority = 0;
                filePriority =1;
            }
        } else if(chromePriority>filePriority){
            document.getElementById('chromeTB').style['background'] = "#787676";
            if(filePriority>0){
                chromePriority=2;
                filePriority=1;
            } else {
                chromePriority = 1;
                filePriority =0;
            } 
        }
    }, 150);
}

var fullscreenSpotify = false;
function growSpotify(){
    if(fullscreenSpotify){
        document.getElementById('spotify').style['width'] = "786px";
        document.getElementById('spotify').style['height'] = "430px";
        document.getElementById('spotify').style['top'] = "169px";
        document.getElementById('spotify').style['left'] = "259px";
        fullscreenSpotify = false;
    } else{
        document.getElementById('spotify').style['width'] = "100%";
        document.getElementById('spotify').style['height'] = "100vh";
        document.getElementById('spotify').style['top'] = "0";
        document.getElementById('spotify').style['left'] = "0";
        fullscreenSpotify = true;
    }
}

function smallSpotify(){
    document.getElementById('spotify').style['animation'] = "";
    spotifyForeground = false;
    document.getElementById('spotifyTB').style['background'] = "";
    setTimeout(function () {    
        spotifyPriority = 0;
        if(filePriority>chromePriority){
            document.getElementById('fileTB').style['background'] = "#787676";
            if(chromePriority>0){
                chromePriority=1;
                filePriority=2;
            } else {
                chromePriority = 0;
                filePriority =1;
            }
        } else if(chromePriority>filePriority){
            document.getElementById('chromeTB').style['background'] = "#787676";
            if(filePriority>0){
                chromePriority=2;
                filePriority=1;
            } else {
                chromePriority = 1;
                filePriority =0;
            }      
        }
    }, 150);
}

function changeChromeForeground(){
    if(filePriority>spotifyPriority){
        if(spotifyPriority>0){
            document.getElementById('chromePage').style['z-index'] = "3";
            document.getElementById('file').style['z-index'] = "2";
            document.getElementById('spotify').style['z-index'] = "1";
            chromePriority = 3;
            filePriority = 2;
            spotifyPriority = 1;
        } else {
            document.getElementById('chromePage').style['z-index'] = "2";
            document.getElementById('file').style['z-index'] = "1";
            document.getElementById('spotify').style['z-index'] = "1";
            chromePriority = 2;
            filePriority = 1;
        }
    } else if(spotifyPriority>filePriority){
        if(filePriority>0){
            document.getElementById('chromePage').style['z-index'] = "3";
            document.getElementById('file').style['z-index'] = "1";
            document.getElementById('spotify').style['z-index'] = "2";
            chromePriority = 3;
            filePriority = 1;
            spotifyPriority = 2;
        } else {
            document.getElementById('chromePage').style['z-index'] = "2";
            document.getElementById('file').style['z-index'] = "1";
            document.getElementById('spotify').style['z-index'] = "1";
            chromePriority = 2;
            spotifyPriority = 1;
        }  
    } else{
        document.getElementById('chromePage').style['z-index'] = "2";
        document.getElementById('file').style['z-index'] = "1";
        document.getElementById('spotify').style['z-index'] = "1";
        chromePriority = 1;
    }
    setTimeout(function () {    
        if(chromeisOpen && chromeForeground){
            document.getElementById('chromeTB').style['background'] = "#787676";
        } else document.getElementById('chromeTB').style['background'] = "";  
        document.getElementById('fileTB').style['background'] = "";
        document.getElementById('spotifyTB').style['background'] = "";
    }, 100);
}

function changeFileForeground(){
    if(chromePriority>spotifyPriority){
        if(spotifyPriority>0){
            document.getElementById('chromePage').style['z-index'] = "2";
            document.getElementById('file').style['z-index'] = "3";
            document.getElementById('spotify').style['z-index'] = "1";
            chromePriority = 2;
            filePriority = 3;
            spotifyPriority = 1;
        } else {
            document.getElementById('chromePage').style['z-index'] = "1";
            document.getElementById('file').style['z-index'] = "2";
            document.getElementById('spotify').style['z-index'] = "1";
            chromePriority = 1;
            filePriority = 2;
        }
    } else if(spotifyPriority>chromePriority){
        if(chromePriority>0){
            document.getElementById('chromePage').style['z-index'] = "1";
            document.getElementById('file').style['z-index'] = "3";
            document.getElementById('spotify').style['z-index'] = "2";
            chromePriority = 1;
            filePriority = 3;
            spotifyPriority = 2;
        } else {
            document.getElementById('chromePage').style['z-index'] = "1";
            document.getElementById('file').style['z-index'] = "2";
            document.getElementById('spotify').style['z-index'] = "1";
            filePriority = 2;
            spotifyPriority = 1;
        }  
    } else{
        document.getElementById('chromePage').style['z-index'] = "1";
        document.getElementById('file').style['z-index'] = "2";
        document.getElementById('spotify').style['z-index'] = "1";
        filePriority = 1;
    }
    setTimeout(function () {    
        if(fileisOpen || fileForeground){
            document.getElementById('fileTB').style['background'] = "#787676";
        } else document.getElementById('fileTB').style['background'] = "";  
        document.getElementById('chromeTB').style['background'] = "";
        document.getElementById('spotifyTB').style['background'] = "";
    }, 100);
}

function changeSpotifyForeground(){
    if(filePriority>chromePriority){
        if(chromePriority>0){
            document.getElementById('chromePage').style['z-index'] = "1";
            document.getElementById('file').style['z-index'] = "2";
            document.getElementById('spotify').style['z-index'] = "3";
            chromePriority = 1;
            filePriority = 2;
            spotifyPriority = 3;
        } else {
            document.getElementById('chromePage').style['z-index'] = "1";
            document.getElementById('file').style['z-index'] = "1";
            document.getElementById('spotify').style['z-index'] = "2";
            spotifyPriority = 2;
            filePriority = 1;
        }
    } else if(chromePriority>filePriority){
        if(filePriority>0){
            document.getElementById('chromePage').style['z-index'] = "2";
            document.getElementById('file').style['z-index'] = "1";
            document.getElementById('spotify').style['z-index'] = "3";
            chromePriority = 2;
            filePriority = 1;
            spotifyPriority = 3;
        } else {
            document.getElementById('chromePage').style['z-index'] = "1";
            document.getElementById('file').style['z-index'] = "1";
            document.getElementById('spotify').style['z-index'] = "2";
            chromePriority = 1;
            spotifyPriority = 2;
        }  
    } else{
        document.getElementById('chromePage').style['z-index'] = "1";
        document.getElementById('file').style['z-index'] = "1";
        document.getElementById('spotify').style['z-index'] = "2";
        spotifyPriority = 1;
    }
    setTimeout(function () {  
        if(spotifyisOpen || spotifyForeground){
            document.getElementById('spotifyTB').style['background'] = "#787676";
        } else document.getElementById('spotifyTB').style['background'] = "";  
        document.getElementById('chromeTB').style['background'] = "";
        document.getElementById('fileTB').style['background'] = "";
    }, 100);
}

function openBin(){
    openFile();
    /*selection fils...*/

}

var filePriority = 0;
var chromePriority = 0;
var spotifyPriority = 0;