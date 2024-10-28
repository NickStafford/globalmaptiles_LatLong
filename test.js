let GlobalMercator = require('./globalmaptiles');

function runTest(
    zoom,
    geographic,
    meters,
    pixels,
    tile,
    googleTile,
    tileBounds,
    tileLatLonBounds,
    quadKey
) {
    let gm = new GlobalMercator();
    let result = null;

    function compare(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    function output(result, originValue, description) {
        let comparison = compare(originValue, result);
        console.log(description, comparison);
        if (!comparison) {
            console.log(originValue, result);
        }
    }

    console.log("\n### Test at zoomlevel: ", zoom);

    result = gm.LatLonToMeters(geographic.lat, geographic.lon);
    output(result, meters, "LatLonToMeters");

    result = gm.MetersToLatLon(meters.mx, meters.my);
    output(result, geographic, "MetersToLatLon");

    result = gm.MetersToPixels(meters.mx, meters.my, zoom);
    output(result, pixels, "MetersToPixels");

    result = gm.PixelsToTile(pixels.px, pixels.py);
    output(result, tile, "PixelsToTile");

    result = gm.PixelsToMeters(pixels.px, pixels.py, zoom);
    output(result, meters, "PixelsToMeters");

    result = gm.TileBounds(tile.tx, tile.ty, zoom);
    output(result, tileBounds, "TileBounds");

    result = gm.TileLatLonBounds(tile.tx, tile.ty, zoom);
    output(result, tileLatLonBounds, "TileLatLonBounds");

    result = gm.LatLonToTile(geographic.lat, geographic.lon, zoom);
    output(result, tile, "LatLonToTile");

    result = gm.MetersToTile(meters.mx, meters.my, zoom);
    output(result, tile, "MetersToTile");

    result = gm.GoogleTile(tile.tx, tile.ty, zoom);
    output(result, googleTile, "GoogleTile");

    result = gm.QuadKey(tile.tx, tile.ty, zoom);
    output(result, quadKey, "QuadKey");

    result = gm.QuadKeyToTile(quadKey);
    output(result.zoom, zoom, "QuadKeyToTile.zoom");
    delete result.zoom;
    output(result, tile, "QuadKeyToTile.tile");
}

// Test 2: (Berlin)
let zoom = 7;
let geographic = {
    lat: 52.31,
    lon: 13.24
};
let meters = {
    mx: 1473870.058102942,
    my: 6856372.69101939
};
let pixels = {
    px: 17589.134222222223,
    py: 21990.22649522623
};
let tile = {
    tx: 68,
    ty: 85
};
let googleTile = {
    tx: 68,
    ty: 42
};
let tileBounds = {
    minx: 1252344.271424327,
    miny: 6574807.42497772,
    maxx: 1565430.3392804079,
    maxy: 6887893.492833804
};
let tileLatLonBounds = {
    minLon: 11.249999999999993,
    minLat: 50.73645513701064,
    maxLon: 14.062499999999986,
    maxLat: 52.482780222078226
};
let quadKey = "1202120";
runTest(
    zoom,
    geographic,
    meters,
    pixels,
    tile,
    googleTile,
    tileBounds,
    tileLatLonBounds,
    quadKey
);

// Test 1: (Berlin)
zoom = 1;
geographic = {
    lat: 52.31,
    lon: 13.24
};
meters = {
    mx: 1473870.058102942,
    my: 6856372.69101939
};
pixels = {
    px: 274.83022222222223,
    py: 343.59728898790985
};
tile = {
    tx: 1,
    ty: 1
};
googleTile = {
    tx: 1,
    ty: 0
};
tileBounds = {
    minx: 0,
    miny: 0,
    maxx: 20037508.342789244,
    maxy: 20037508.342789244
};
tileLatLonBounds = { minLon: 0, minLat: 0, maxLon: 180, maxLat: 85.0511287798066 };
quadKey = "1";
runTest(
    zoom,
    geographic,
    meters,
    pixels,
    tile,
    googleTile,
    tileBounds,
    tileLatLonBounds,
    quadKey
);

// Test 3: (Berlin, bei Ludwigsfelde)
zoom = 11;
geographic = {
    lat: 52.31,
    lon: 13.24
};
meters = {
    mx: 1473870.058102942,
    my: 6856372.69101939
};
pixels = {
    px: 281426.14755555557,
    py: 351843.6239236197
};
tile = {
    tx: 1099,
    ty: 1374
};
googleTile = {
    tx: 1099,
    ty: 673
};
tileBounds = {
    minx: 1467590.943075385,
    miny: 6848757.734351791,
    maxx: 1487158.8223163895,
    maxy: 6868325.613592796
};
tileLatLonBounds = {
    minLon: 13.183593750000007,
    minLat: 52.26815737376817,
    maxLon: 13.359375000000002,
    maxLat: 52.3755991766591
};
quadKey = "12021201013";
runTest(
    zoom,
    geographic,
    meters,
    pixels,
    tile,
    googleTile,
    tileBounds,
    tileLatLonBounds,
    quadKey
);

// Test 4: (Berlin, bei Ludwigsfelde)
zoom = 15;
geographic = {
    lat: 52.31,
    lon: 13.24
};
meters = {
    mx: 1473870.058102942,
    my: 6856372.69101939
};
pixels = {
    px: 4502818.360888889,
    py: 5629497.982777915
};
tile = {
    tx: 17589,
    ty: 21990
};
googleTile = {
    tx: 17589,
    ty: 10777
};
tileBounds = {
    minx: 1473705.905338198,
    miny: 6856095.68906717,
    maxx: 1474928.8977907598,
    maxy: 6857318.681519732
};
tileLatLonBounds = {
    minLon: 13.238525390624998,
    minLat: 52.308478623663355,
    maxLon: 13.24951171874999,
    maxLat: 52.315195264379575
};
quadKey = "120212010132103";
runTest(
    zoom,
    geographic,
    meters,
    pixels,
    tile,
    googleTile,
    tileBounds,
    tileLatLonBounds,
    quadKey
);