// Pak link van API
const apiUrl = "https://restcountries.com/v3.1/all";
var apiResponse;


// Maak functie aan die het tabel opbouwt
function LaadLanden() {
    const allesDiv = $("#alles");
    let allesContents = $("<table><th>Land</th><th>Regio</th><th>Buurlanden</th><th>Lijst</th>");

    $.getJSON(apiUrl, function(landenResponse){
        landenResponse.forEach(function (land, i) {
            let tr = $("<tr>");
            tr.append($("<td>").html(land.name.common));
            tr.append($("<td>").html(land.region));

            if ("borders" in land) {
                tr.append($("<td>").html(land.borders.length));
                let trChoose = $("<select onchange='BorderLand($(this).val())' class='bordersChoice'>").append($("<option>").html(""));

                land.borders.forEach(function (landBorders, i) {
                    trChoose.append($("<option value='" + landBorders + "'>").html(landBorders));
                })
                tr.append($("<td>").html(trChoose));
            }

            else {
                tr.append($("<td>").html("-"));
                tr.append($("<td>").html("-"));
            }

            allesContents.append(tr);
        })
    });
    allesDiv.html(allesContents);
}


function BorderLand(afkorting) {
    console.log(afkorting);
    $.getJSON(apiUrl, function(landenResponse) {
        landenResponse.forEach(function(land, i) {
            if (land.cca3 == afkorting) {
                let tbl = $("<table id='countryDataTable'>");
                tbl.append("<tr><td>Land: </td><td>" + land.name.common + "</td>");
                tbl.append("<tr><td>Hoofdstad: </td><td>" + land.capital[0] + "</td>");
                tbl.append("<tr><td>Inwoners: </td><td>" + land.population + "</td>");

                const allesDiv = $("#borders");
                allesDiv.html(tbl);
            }
        })
    })
}

LaadLanden();