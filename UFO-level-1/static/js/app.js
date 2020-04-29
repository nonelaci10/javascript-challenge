// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//Button function creating 
//
var button = d3.select("#filter-btn");
function dataTable() {
    tableData.forEach(function(ufoSighting) {
        console.log(ufoSighting);
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(function([key, value]) {
          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
        });
      });    
};

// keying and filtering data into right slots
button.on("click", function() {
  d3.event.preventDefault();
  tbody.html("");
  var dateFill = d3.select("#datetime");
  var inputDate = dateFill.property("value");
  console.log(dateFill);
  var filteredDate = tableData.filter(sighting => sighting.datetime === inputDate);
  console.log(filteredDate);
  filteredDate.forEach(function(selections) {
  console.log(selections);
  //appending syntax from class 14.3
  var row = tbody.append("tr");
  Object.entries(selections).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
});
});
dataTable();