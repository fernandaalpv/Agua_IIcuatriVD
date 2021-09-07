// dimensiones y margenes grafica
var margin = {top: 80, right: 30, bottom: 70, left: 60},
width = 650 - margin.left - margin.right,
height = 420 - margin.top - margin.bottom;

// adjunta el svg al body
var svg = d3.select("#grafica1")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

// Coloca la data
d3.csv("./Bases/Acuiferosexp.csv", function(data) {
alert(data)
// X axis
var x = d3.scaleBand()
.range([ 0, width ])
.domain(data.map(function(d) { return d.Year; }))
.padding(0.2);

svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x))
.selectAll("text")
.attr("transform", "translate(-10,0)rotate(-45)" )
.style("text-anchor", "end");

// Y axis
var y = d3.scaleLinear()
.domain([0, 160])
.range([ height, 0]);
svg.append("g")
.call(d3.axisLeft(y));

// Barras
svg.selectAll("mybar")
.data(data)
.enter()
.append("rect")
.attr("x", function(d) { return x(d.Year); })
.attr("y", function(d) { return y(d.Acuiferoexplotado); })
.attr("width", x.bandwidth())
.attr("height", function(d) { return height - y(d.Acuiferoexplotado); })
.attr("fill", "#02749D")

})