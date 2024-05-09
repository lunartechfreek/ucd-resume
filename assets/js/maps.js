// Working marker cluster code

async function initMap() {
    // Request needed libraries.
    const {
        Map,
        InfoWindow
    } = await google.maps.importLibrary("maps");
    const {
        AdvancedMarkerElement,
        PinElement
    } = await google.maps.importLibrary(
        "marker",
    );

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        },
        mapId: "DEMO_MAP_ID",
    });

    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.      
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    const markerCluster = new markerClusterer.MarkerClusterer({
        map,
        markers
    });
}
const locations = [{
        lat: 40.785091,
        lng: -73.968285
    },
    {
        lat: 41.084045,
        lng: -73.874245
    },
    {
        lat: 40.754932,
        lng: -73.984016
    }
];

initMap();

// Code provided by google in html section 
(g => {
    var h, a, k, p = "The Google Maps JavaScript API",
        c = "google",
        l = "importLibrary",
        q = "__ib__",
        m = document,
        b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}),
        r = new Set,
        e = new URLSearchParams,
        u = () => h || (h = new Promise(async (f, n) => {
            await (a = m.createElement("script"));
            e.set("libraries", [...r] + "");
            for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
            e.set("callback", c + ".maps." + q);
            a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
            d[q] = f;
            a.onerror = () => h = n(Error(p + " could not load."));
            a.nonce = m.querySelector("script[nonce]")?.nonce||"";
            m.head.append(a)
        }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(
    () => d[l](f, ...n))
})
({
    key: "AIzaSyD1B7uwg8Mt51DksDHA4cIeG1mIYnVBhEQ",
    v: "weekly"
});