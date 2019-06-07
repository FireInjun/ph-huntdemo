
var API = "https://sofriendlyproducthuntyac.appspot.com/"
var API_hunter = "https://sofriendlyproducthuntyac.appspot.com/hunter"
var API_jordan = "https://sofriendlyproducthuntyac.appspot.com/jordan"
var API_justin = "https://sofriendlyproducthuntyac.appspot.com/justin"

function GetHunt() {
    var topHunt = document.createElement("AUDIO");
    topHunt.setAttribute("id", "topHunt")
    topHunt.setAttribute("autoplay", true)
    var request = new XMLHttpRequest();
    request.open("GET", API)
        request.onreadystatechange = function () {
            if (4 == request.readyState) {
                topHunt.setAttribute("src", request.responseText)
            }
        }
            request.send()
}

function HunterPlay() {
    var HunterVoice = document.createElement("AUDIO");
    HunterVoice.setAttribute("id", "HunterVoice")
    HunterVoice.setAttribute("autoplay", true)
    var request = new XMLHttpRequest();
    request.open("GET", API_hunter)
    request.onreadystatechange = function () {
        if (4 == request.readyState) {
            HunterVoice.setAttribute("src", request.responseText)
        }
    }
    request.send()
}

function JordanPlay() {
    var topHunt = document.createElement("AUDIO");
    topHunt.setAttribute("id", "topHunt")
    topHunt.setAttribute("autoplay", true)
    var request = new XMLHttpRequest();
    request.open("GET", API_jordan)
    request.onreadystatechange = function () {
        if (4 == request.readyState) {
            topHunt.setAttribute("src", request.responseText)
        }
    }
    request.send()
}

function JustinPlay() {
    var topHunt = document.createElement("AUDIO");
    topHunt.setAttribute("id", "topHunt")
    topHunt.setAttribute("autoplay", true)
    var request = new XMLHttpRequest();
    request.open("GET", API_justin)
    request.onreadystatechange = function () {
        if (4 == request.readyState) {
            topHunt.setAttribute("src", request.responseText)
        }
    }
    request.send()
}