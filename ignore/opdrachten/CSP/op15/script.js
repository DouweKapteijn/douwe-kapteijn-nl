let regioArr = [];
let allData;
const apiLink = "https://restcountries.com/v3.1/all";
var apiResponse;

function LaadRegio() {
  const regioDiv = document.getElementById("regio");
  $.getJSON(apiLink, function (landenResponse) {
    landenResponse.forEach(function (land, i) {
      if (!regioArr.includes(land.region)) {
        regioArr.push(land.region);
      }
    });
    let optChoose = $(
      "<select onchange='LaadLanden($(this).val())' class='regioChoice'>"
    ).append($("<option>").html(""));
    regioArr.forEach(function (regio, i) {
      optChoose.append($("<option value'" + regioArr + "'>").html(regio));
    });
    $("#regio").html(optChoose);
  });
}

function LaadLanden(regio) {
  const allesDiv = $("#alles");
  let allesContents = $(
    "<table><th>Land</th><th>Regio</th><th>Vlag</th><th>Buurlanden</th><th>Lijst</th>"
  );
  $.getJSON(apiLink, function (landenResponse) {
    landenResponse.forEach(function (land, i) {
      if (land.region == regio) {
        let tr = $("<tr>");
        tr.append($("<td>").html(land.name.common));
        tr.append($("<td>").html(land.region));
        tr.append(
          $("<td>").html('<img class="flag" src="' + land.flags.svg + '">')
        );
        if ("borders" in land) {
          tr.append($("<td>").html(land.borders.length));
          let trChoose = $(
            "<select onchange='BorderLand($(this).val())' class='bordersChoice'>"
          ).append($("<option>").html(""));

          land.borders.forEach(function (landBorders, i) {
            trChoose.append(
              $("<option value='" + landBorders + "'>").html(landBorders)
            );
          });
          tr.append($("<td>").html(trChoose));
        } else {
          tr.append($("<td>").html("-"));
          tr.append($("<td>").html("-"));
        }

        allesContents.append(tr);
      }
    });
  });
  allesDiv.html(allesContents);
}

function BorderLand(afkorting) {
  $.getJSON(apiLink, function (landenResponse) {
    landenResponse.forEach(function (land, i) {
      if (land.cca3 == afkorting) {
        let tbl = $("<table id='countryDataTable'>");
        tbl.append("<tr><td>Land: </td><td>" + land.name.common + "</td>");
        tbl.append("<tr><td>Hoofdstad: </td><td>" + land.capital[0] + "</td>");
        tbl.append("<tr><td>Inwoners: </td><td>" + land.population + "</td>");

        const allesDiv = $("#borders");
        allesDiv.html(tbl);
      }
    });
  });
}
