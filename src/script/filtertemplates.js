AUDIOFILTER = `
`

BOOKFILTER = `
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
    <input type="text" id="genre" name="genre">
</div>
<div class="typeselect">
    <label for="adult">Adult Only</label>
    <input type="checkbox" id="adult" name="adult">
</div>
`

IMAGESETFILTER = `
`

SOFTWAREFILTER = `
`

VIDEOFILTER = `
<div class="row">
    <div class="six columns">
        <label for="style">Style</label>
        <select name="style" id="style">
            <option value></option>
            <option value="Anime">Anime</option>
            <option value="Cartoon">Cartoon</option>
            <option value="CG">CG</option>
            <option value="Live-Action">Live-Action</option>
        </select>
    </div>
    <div class="six columns">
        <label for="type">Type</label>
        <select name="type" id="type">
            <option value></option>
            <option value="audio">Feature</option>
            <option value="books">Series</option>
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
    <input type="text" id="genre" name="genre">
</div>
<div class="typeselect">
    <label for="adult">Adult Only</label>
    <input type="checkbox" id="adult" name="adult">
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

    //Wipe any existing results
    document.getElementById("results").innerHTML = ""
    // Wipe existing filters
    document.getElementById("filters").innerHTML = ""
    // Set filters from default set
    document.getElementById("filters").innerHTML = FILTERMAP[sel.value]
}





// !SET DEFAULT!
document.getElementById("filters").innerHTML = GAMEFILTER