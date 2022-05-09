// import the data from data.js
const tableData = data;

// reference the HTML table using D3
var tbody = d3.select('tbody');

function buildTable(data) {
    // first, clear out any existing data
     tbody.html("");
    //  next, loop through teach object in the data
    // and append a row and cells for each value in the row
     data.forEach((dataRow) => {
        //  append a row to the table body
        let row = tbody.append("tr");
        // loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}
// set up handleClick function
function handleClick() {
    let data = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuild the table using the filtered data
    // if no date was entered, the filteredData will just be the original tableData
    buildTable(filteredData);
}
// attach a envent to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);