//set up the dimensions of the chart
const margin = {top: 70, right: 40, bottom: 60, left:175}
const width = 660 - margin.left - margin.right
const height = 400 - margin.top - margin.bottom

// create the SVG container for the chart 
const svg = d3.select("#bog-body-chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    

// load and process the data

d3.csv("bog_bodies.csv").then(data => {
    data.forEach(d => {
        d.total = +d.total; 
    }); 

// sort the data by total

data.sort(function (a,b) {
    return d3.ascending(a.total, b.total); 
}); 

// set the x and y scales
const x = d3.scaleLinear()
    .range([0, width])
    .domain([0, d3.max(data, function (d) { return d.total; })]);

    const y = d3.scaleBand()
        .range([height, 0])
        .padding(0.1)
        .domain(data.map(function (d) { return d.bog_body_type; }));


// create the x and y axes

const xAxis = d3.axisBottom(x)

const yAxis = d3.axisLeft(y)

// create the bars for the chart
svg.selectAll(".bar")
.data(data)
.enter().append("rect")
.attr("class", "bar")
.attr("y", function (d) {return y(d.bog_body_type); })
.attr("height", y.bandwidth())
.attr("x", 0)
.attr("width", function(d) {return x(d.total); })
.style("fill", 'skyblue')

// Add the x and y axes to the chart

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)

    svg.append("g")
    .call(yAxis)







})









