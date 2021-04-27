
function searchNames() {
    document.getElementById("results").innerHTML = ""
    searchBar = document.getElementById("search").value.toLowerCase();
    let possibleResults = names.filter(elem => elem.toLowerCase().startsWith(searchBar));

    for (let result of possibleResults) {
        document.getElementById("results").innerHTML += "<li>" + result + "</li>";
    }
}

function report() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    console.log(x, y);

    mapboxgl.accessToken = 'pk.eyJ1IjoidG9ybmFkbzgzMSIsImEiOiJja255czhpNnoxamo5Mm5vYXNqazdlOWRvIn0.WoT_wLRU5OcwNVLpxe1BKA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [x, y],
        zoom: 3
    });

    var geojson = {
        features: [{
            geometry: {
                type: 'Point',
                coordinates: [x, y]
            },

        },]
    };
    geojson.features.forEach(function (marker) {

        var el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });
}
function submitAcc() {
    let adminAccs = [
        {
            name: "admin",
            pass: "admin123",
        },
        {
            name: "admin2",
            pass: "admin1234",
        }]
    let employeesAccs = [{
        name: "Ivan",
        pass: "password",
    }]
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    if (name = adminAccs[0].name && pass == adminAccs[0].pass) {
        document.getElementById("nav").style = "display: block"
        document.getElementById("login").style = "display: none"
    }
}
