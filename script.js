//set up the dimensions of the chart
const margin = {top: 70, right: 40, bottom: 60, left:175}
const width = 660 - margin.left - margin.right
const height = 400 - margin.top - margin.bottom

// create the SVG container for the chart 
const svg = d3.select("body-chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    


