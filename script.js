var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}


function clickHandler(){
    var text = txtInput.value //taking input

    //calling server for processing
    fetch(getTranslationURL(text))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
}


btnTranslate.addEventListener("click", clickHandler);