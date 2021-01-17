var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/german-accent.json"

function getTranslationURL(input)
{
    return serverURL + "?" +"text=" +input
}
function errorHandler(error)
{
    console.log("error ocurred", error)
    alert("Something went wrong with server! Please try again after some time")
}


function clickHandler()
{
    var inputText = txtInput.value //input
    //calling server for processing: This time processing part went to the server
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>
        {
            var translatedText = json.contents.translated;
            outputDiv.innerText=translatedText;  //output
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)