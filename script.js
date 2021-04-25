function searchNames() {
    search12 = document.getElementById("search").value;
    let possibleResults = names.filter(elem => elem.startsWith(search12));

    for (let result of possibleResults) {
        document.getElementById("results").innerHTML += "<li>" + result + "</li>";
    }
    // document.body.innerHTML = "hellp";

}