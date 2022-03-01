
function search() {
    const formData = new FormData(document.querySelector('form'))
    var searchparams = {}
    searchparams["table"] = document.getElementById("cat").value
    for (const pair of formData.entries()){  // All filter entries
        if (pair[0] == "adult"){
            if (pair[1]==true)
                searchparams["adult"] = pair[1]
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
           console.log(parsed.length)
           displaycards(parsed)
    }};
    xhr.send(JSON.stringify(data))
}

function displaycards(carddata) {
    //Wipe any existing results
    document.getElementById("results").innerHTML = ""

    for (const card of carddata){
        var gcard = `
        <div class="card">
            <div class="nameyear">
                <label id="cname">${card.displayname}</label>
                <label id="cyear">(${card.year})</label>
            </div>
            <div class="platpub">
                <label id="cplatform">${card.platform}</label>
                <div class="pubby">
                    <label>Published by</label>
                    <label id="publisher">${card.publisher}</label>
                </div>
            </div>
            <div class="genres">
        `
        if ("genre" in card && card.genre){
            for (genre of card.genre){
                gcard += `<label class="genretag">${genre}</label>`
            }
        }
        gcard += `
            </div>
            <a id="url" href="${card.url}" target="_blank">${card.url}</a>
            <label id="cpath">${card.filepath}</label>
        </div>
        `
        document.getElementById("results").innerHTML += gcard
    }
}


/* Sample return list value
{
    "adult":false,
    "displayname":"Valkyria Chronicles 4",
    "filepath":"/media/archive/data/games/[SEGA]/[SEGA] Valkyria Chronicles 4.rar",
    "genre":["FPS", "Historical"],
    "platform":"PC",
    "publisher":"SEGA",
    "uid":000,
    "url":"sega.com/valkyria-chronicles",
    "year":2030
}
*/