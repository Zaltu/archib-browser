AUDIOFILTER = `
<div class="row">
    <div class="six columns">
        <label for="artist">Artist</label>
        <input type="text" id="artist" name="artist">
    </div>
    <div class="six columns">
        <label for="publisher">Label</label>
        <input type="text" id="publisher" name="publisher">
    </div>
</div>
<div class="row">
    <div class="six columns">
        <label for="audiotype">Audio Type</label>
        <select name="audiotype" id="audiotype" style="font-size:x-large">
            <option value></option>
            <option value="Music">Music</option>
            <option value="ASMR">ASMR</option>
            <option value="Audio Roleplay">Audio Roleplay</option>
            <option value="Audiobook">Audiobook</option>
        </select>
    </div>
    <div class="six columns">
        <label for="platformid">ID</label>
        <input type="text" id="platformid" name="platformid">
    </div>
</div>
<div class="typeselect">
    <label for="safesearch">Safesearch</label>
    <input type="checkbox" id="safesearch" name="safesearch">
</div>
`

BOOKFILTER = `
<div class="row">
    <div class="six columns">
        <label for="author">Author</label>
        <input type="text" id="author" name="author">
    </div>
    <div class="six columns">
        <label for="illus">Illustrator</label>
        <input type="text" id="illus" name="illus">
    </div>
</div>
<div class="row">
    <div class="six columns">
        <label for="year">Release Year</label>
        <input placeholder="- - - -" type="number" id="year" name="year">
    </div>
    <div class="six columns">
        <label for="platformid">ID</label>
        <input type="text" id="platformid" name="platformid">
    </div>
</div>
<div class="row">
    <label for="genre">Genre(s)</label>
    <input type="text" id="genre" name="genre" class="doublewidth">
</div>
<div class="row">
    <div class="six columns">
        <label for="booktype">Book Type</label>
        <select name="type" id="booktype">
            <option value></option>
            <option value="Artbook">Artbook</option>
            <option value="Comic">Comic</option>
            <option value="Doujinshi">Doujinshi</option>
            <option value="Manga">Manga</option>
            <option value="Novel">Novel</option>
            <option value="Magazine">Magazine</option>
        </select>
    </div>
    <div class="six columns">
        <label for="safesearch">Safesearch</label>
        <input type="checkbox" id="safesearch" name="safesearch">
    </div>
</div>
`

GAMEFILTER = `
<div class="row">
    <div class="six columns">
        <label for="platform">Platform</label>
        <input type="text" id="platform" name="platform">
    </div>
    <div class="six columns">
        <label for="drm">DRM</label>
        <input type="text" id="drm" name="drm">
    </div>
</div>
<div class="row">
    <div class="six columns">
        <label for="developer">Developer</label>
        <input type="text" id="developer" name="developer">
    </div>
    <div class="six columns">
        <label for="publisher">Publisher</label>
        <input type="text" id="publisher" name="publisher">
    </div>
</div>
<div class="row">
    <div class="six columns">
        <label for="year">Release Year</label>
        <input placeholder="- - - -" type="number" id="year" name="year">
    </div>
    <div class="six columns">
        <label for="platformid">ID</label>
        <input type="text" id="platformid" name="platformid">
    </div>
</div>
<div class="row">
    <label for="genre">Genre(s)</label>
    <input type="text" id="genre" name="genre" class="doublewidth">
</div>
<div class="typeselect">
    <label for="safesearch">Safesearch</label>
    <input type="checkbox" id="safesearch" name="safesearch">
</div>
`

IMAGESETFILTER = `
<div class="row">
    <div class="six columns">
        <label for="imagetype">ImageSet Type</label>
        <select name="imagetype" id="imagetype">
            <option value></option>
            <option value="2D">2D</option>
            <option value="CG">CG</option>
            <option value="Photo">Photo</option>
        </select>
    </div>
    <div class="six columns">
        <label for="artist">Artist</label>
        <input type="text" id="artist" name="artist">
    </div>
</div>
<div class="row">
    <label for="filetype">Filetype(s)</label>
    <input type="text" id="filetype" name="filetype" class="doublewidth">
</div>
<div class="typeselect">
    <label for="safesearch">Safesearch</label>
    <input type="checkbox" id="safesearch" name="safesearch">
</div>
`

SOFTWAREFILTER = `
<div class="row">
    <div class="six columns">
        <label for="softtype">Software Type</label>
        <select name="softtype" id="softtype">
            <option value></option>
            <option value="DCC">DCC</option>
            <option value="Driver">Driver</option>
            <option value="Reader">Reader</option>
        </select>
    </div>
    <div class="six columns">
        <label for="developer">Developer</label>
        <input type="text" id="developer" name="developer">
    </div>
</div>
<div class="row">
    <label for="format">Format(s)</label>
    <input type="text" id="format" name="format" class="doublewidth">
</div>
`

VIDEOFILTER = `
<div class="row">
    <div class="six columns">
        <label for="videostyle">Style</label>
        <select name="videostyle" id="videostyle">
            <option value></option>
            <option value="Anime">Anime</option>
            <option value="Cartoon">Cartoon</option>
            <option value="CG">CG</option>
            <option value="Live-Action">Live-Action</option>
        </select>
    </div>
    <div class="six columns">
        <label for="videotype">Type</label>
        <select name="videotype" id="videotype">
            <option value></option>
            <option value="Feature">Feature</option>
            <option value="Series">Series</option>
        </select>
    </div>
</div>
<div class="row">
    <div class="six columns">
        <label for="studio">Studio</label>
        <input type="text" id="studio" name="studio">
    </div>
    <div class="six columns">
        <label for="platformid">ID</label>
        <input type="text" id="platformid" name="platformid">
    </div>
</div>
<div class="row">
    <div class="six columns">
        <label for="year">Release Year</label>
        <input placeholder="- - - -" type="number" id="year" name="year">
    </div>
    <div class="six columns">
        <div>
            <label for="vr">VR</label>
            <input type="checkbox" id="vr" name="vr">
        </div>
    </div>
</div>
<div class="row">
    <label for="genre">Genre(s)</label>
    <input type="text" id="genre" name="genre" class="doublewidth">
</div>
<div class="typeselect">
    <label for="safesearch">Safesearch</label>
    <input type="checkbox" id="safesearch" name="safesearch">
</div>
`


const FILTERMAP = {
    "audio": AUDIOFILTER,
    "books": BOOKFILTER,
    "games": GAMEFILTER,
    "imageset": IMAGESETFILTER,
    "software": SOFTWAREFILTER,
    "videos": VIDEOFILTER
}


function swapFilters() {
    const sel = document.getElementById("cat")
    console.log(sel.value)

    // Wipe any existing results
    document.getElementById("results").innerHTML = ""
    // Wipe existing filters
    document.getElementById("filters").innerHTML = ""
    // Set filters from default set
    document.getElementById("filters").innerHTML = FILTERMAP[sel.value]
}


// !SET DEFAULT!
document.getElementById("filters").innerHTML = GAMEFILTER