
const searchbutton = document.getElementsByClassName("button-primary")

function search() {
    var searchparams = {}
    searchparams["table"] = document.getElementById("cat").value
    for (param of document.getElementById("filterlist").children){  // All filter entries ("form")
        if (param.tagName == "LABEL" || param.tagName == "SELECT")  // Ignore labels and category selection
            continue
        if (param.id == "adult"){
            if (param.checked)
                searchparams["adult"] = param.checked
            continue
        }
        if (param.type == "number" && param.value){
            searchparams[param.id] = parseInt(param.value)
            continue
        }
        if (param.value)
            searchparams[param.id] = param.value
    }
    var textsearch = document.getElementById("titlesearch")
    if (textsearch.value && textsearch.value.trim())
        searchparams["name"] = textsearch.value.trim()

    console.log("Searching for:")
    console.log(searchparams)

    _sendReq(searchparams)
}


const URL = "http://localhost:5077/search"  // Temp

function _sendReq(data) {
    var xhr = new XMLHttpRequest()
    xhr.open("POST", URL)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function () {  // Temp log return value to console
        console.log(xhr.status)
        if (xhr.readyState === 4) {
           console.log(xhr.responseText);
    }};
    xhr.send(JSON.stringify(data))
}