const FILEBROWSER_PATH = "http://127.0.0.1:7850/files/"

function convertPathToBrowser(path) {
    if (path.includes("/media/archive/data/")) {
        subpath = path.split("/media/archive/data/")[1]
        return FILEBROWSER_PATH + subpath
    }
    else if (path.includes("/media/eyegis")) {
        return "https://aigis.dev"
    }
    else {
        return path
    }
}

function audioCard(data) {
    var acard = `
    <div class="card">
    <div class="nameyear">
        <label id="cname">${data.displayname}</label>
    </div>
    <div class="platpub">
        <div class="pubby">
            <label id="publisher">${data.audiotype} by ${data.artist}</label>
        </div>
    </div>
    <a id="url" href="${data.url}" target="_blank">${data.url}</a>
    <a id="cpath" href="${convertPathToBrowser(data.filepath)}" target="_blank">${data.filepath}</label>
    </div>
    `
    return acard
}

function bookCard(data) {
    var bcard = `
    <div class="card">
    <div class="nameyear">
        <label id="cname">${data.displayname}</label>
        <label id="cyear">(${data.year})</label>
    </div>
    <div class="platpub">
        <label id="cplatform">${data.booktype}</label>
        <div class="pubby">
            <label id="publisher">Author: ${data.author}, Illustration: ${data.illus}</label>
        </div>
    </div>
    <div class="genres">
    `
    if ("genre" in data && data.genre){
        for (genre of data.genre){
            bcard += `<label class="genretag">${genre}</label>`
        }
    }
    bcard += `
    </div>
    <a id="cpath" href="${convertPathToBrowser(data.filepath)}" target="_blank">${data.filepath}</label>
    </div>
    `
    return bcard
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
    <a id="cpath" href="${convertPathToBrowser(data.filepath)}" target="_blank">${data.filepath}</label>
    </div>
    `
    return gcard
}

function imagesetCard(data) {
    var icard = `
    <div class="card">
    <div class="nameyear">
        <label id="cname">${data.displayname}</label>
    </div>
    <div class="platpub">
        <label id="cplatform">${data.imagetype}</label>
        <div class="pubby">
            <label>Images by</label>
            <label id="publisher">${data.artist}</label>
        </div>
    </div>
    <div class="genres">
    `
    if ("genre" in data && data.filetype){
        for (genre of data.filetype){
            icard += `<label class="genretag">${filetype}</label>`
        }
    }
    icard += `
    </div>
    <a id="cpath" href="${convertPathToBrowser(data.filepath)}" target="_blank">${data.filepath}</label>
    </div>
    `
    return icard
}

function softwareCard(data) {
    var gcard = `
    <div class="card">
    <div class="nameyear">
        <label id="cname">${data.displayname}</label>
        <label id="cyear">(${data.version})</label>
    </div>
    <div class="platpub">
        <label id="cplatform">${data.softtype}</label>
        <div class="pubby">
            <label>Developed by</label>
            <label id="publisher">${data.developer}</label>
        </div>
    </div>
    <div class="genres">
    `
    if ("format" in data && data.format){
        for (format of data.format){
            gcard += `<label class="genretag">${format}</label>`
        }
    }
    gcard += `
    </div>
    <a id="url" href="${data.url}" target="_blank">${data.url}</a>
    <a id="cpath" href="${convertPathToBrowser(data.filepath)}" target="_blank">${data.filepath}</label>
    </div>
    `
    return gcard
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
            <label>Produced by</label>
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
    <a id="cpath" href="${convertPathToBrowser(data.filepath)}" target="_blank">${data.filepath}</label>
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
