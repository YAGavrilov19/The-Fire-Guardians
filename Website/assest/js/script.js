

function searchNames() {
    document.getElementById("results").innerHTML = ""
    searchBar = document.getElementById("search").value.toLowerCase();
    var possibleResultsIndexes = '';
    let possibleResults = names.filter(function fillers(elem, index) {
        if (elem.name.toLowerCase().startsWith(searchBar)) {
            possibleResultsIndexes += index;
            return elem.name.toLowerCase().startsWith(searchBar)
        }

    })
    for (let i = 0; i < possibleResults.length; i++) {
        document.getElementById("results").innerHTML += "<li onclick =\"showID(this.id)\" id= \"" + possibleResultsIndexes[i] + "\">" + possibleResults[i].name + "</li>";
    }
    return
}
function showID(index) {

    document.getElementById("results").innerHTML = "";
    document.getElementById("table").style = "display: block;"
    document.getElementById("name").innerHTML = names[index].name;
    document.getElementById("age").innerHTML = names[index].age;
    document.getElementById("fireSaved").innerHTML = names[index].fireSaved;
    document.getElementById("currentStation").innerHTML = names[index].currentStation;
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

    var geo = {
        features: [{
            geometry: {
                type: 'Point',
                coordinates: [x, y]
            },

        },]
    };
    geo.features.forEach(function (marker) {

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
        window.location.href = "index.html";

    }
    if (name = adminAccs[0].name && pass == adminAccs[0].pass) {
        window.location.href = "index.html";

    }
}
