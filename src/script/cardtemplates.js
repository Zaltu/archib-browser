
function audioCard(data) {
    return ``  // TODO
}

function bookCard(data) {
    return ``  // TODO
}

function gameCard(data) {
    var gcard = `
    <div class="card">
    <div class="nameyear">
        <label id="cname">${data.displayname}</label>
        <label id="cyear">(${data.year})</label>
    </div>
    <div class="platpub">
        <label id="cplatform">${data.platform}</label>
        <div class="pubby">
            <label>Published by</label>
            <label id="publisher">${data.publisher}</label>
        </div>
    </div>
    <div class="genres">
    `
    if ("genre" in data && data.genre){
        for (genre of data.genre){
            gcard += `<label class="genretag">${genre}</label>`
        }
    }
    gcard += `
    </div>
    <a id="url" href="${data.url}" target="_blank">${data.url}</a>
    <label id="cpath">${data.filepath}</label>
    </div>
    `
    return gcard
}

function imagesetCard(data) {
    return ``  // TODO
}

function softwareCard(data) {
    return ``  // TODO
}

function videoCard(data) {
    var vcard = `
    <div class="card">
    <div class="nameyear">
        <label id="cname">${data.displayname}</label>
        <label id="cyear">(${data.year})</label>
    </div>
    <div class="platpub">
        <label id="cstyle">${data.videostyle}</label>
        <label id="ctype">${data.videotype}</label>
        <div class="pubby">
            <label>Published by</label>
            <label id="publisher">${data.studio}</label>
        </div>
    </div>
    <div class="genres">
    `
    if ("genre" in data && data.genre){
        for (genre of data.genre){
            vcard += `<label class="genretag">${genre}</label>`
        }
    }
    vcard += `
    </div>
    <a id="url" href="${data.url}" target="_blank">${data.url}</a>
    <label id="cpath">${data.filepath}</label>
    </div>
    `
    return vcard
}

const CARDMAP = {
    "audio": audioCard,
    "books": bookCard,
    "games": gameCard,
    "imageset": imagesetCard,
    "software": softwareCard,
    "videos": videoCard
}
