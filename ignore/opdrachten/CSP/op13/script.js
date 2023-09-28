
const apiLink = "https://restcountries.com/v3.1/all";
var apiResponse;

function LaadLanden() {
    const allesDiv = $("#alles");
    let allesContents = $("<table><th>Land</th><th>Regio</th><th>Buurlanden</th>");

    $.getJSON(apiLink, function(landenResponse){
        landenResponse.forEach(function (land, i) {
            let tr = $("<tr>");
            tr.append($("<td>").html(land.name.common));
            tr.append($("<td>").html(land.region));
            if ("borders" in land) {
                tr.append($("<td>").html(land.borders.length));
                let trChoose = $("").append($("").html(""));
            }
            else {
                tr.append($("<td>").html("-"));
            }
            allesContents.append(tr);
        })
    });
    allesDiv.html(allesContents);
}
LaadLanden();
