
function search() {
    const formData = new FormData(document.querySelector('form'))
    var searchparams = {}
    searchparams["table"] = document.getElementById("cat").value
    for (const pair of formData.entries()){  // All filter entries
        //console.log(pair[0], pair[1]) Temp
        if (pair[0] == "safesearch"){
            if (pair[1]=="on")
                searchparams["adult"] = false
            continue
        }
        if (pair[0] == "genre" && pair[1]){
            searchparams["genres"] = pair[1].replace(", ", ",").trim().split(",")  // monkaS
            continue
        }
        if (pair[1])
            searchparams[pair[0]] = pair[1]
    }
    var textsearch = document.getElementById("titlesearch")
    if (textsearch.value && textsearch.value.trim())
        searchparams["name"] = textsearch.value.trim()

    console.log("Searching for:")
    console.log(searchparams)

    _sendReq(searchparams)
}


const URL = "http://127.0.0.1:44361/search"  // Temp

function _sendReq(data) {
    var xhr = new XMLHttpRequest()
    xhr.open("POST", URL)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function () {  // Temp log return value to console
        console.log(xhr.status)
        if (xhr.readyState === 4) {
            //console.log(xhr.responseText);  // Can be huge, needs to be truncated
            const parsed = JSON.parse(xhr.responseText)
            if (parsed.length > 100){
                console.log("Truncating " + parsed.length + " results to 100...")
                parsed.length = 100
            }
            displaycards(parsed, data["table"])
    }};
    xhr.send(JSON.stringify(data))
}

function displaycards(carddata, cardtype) {
    //Wipe any existing results
    document.getElementById("results").innerHTML = ""

    for (const card of carddata){
        var hcard = CARDMAP[cardtype](card)
        document.getElementById("results").innerHTML += hcard
    }
}
