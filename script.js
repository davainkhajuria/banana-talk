var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    outputDiv.innerText = "Banana translation of " + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);