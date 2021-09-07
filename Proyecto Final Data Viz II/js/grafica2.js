var aguacalidad = [
    { product: 'Rojo',  count: 31.2 },
    { product: 'Amarrillo',  count: 32.5 },
    { product: 'Verde', count: 36.3 },
    ];
    
    var pie = d3.pie()
      .value(function(d) { return d.count })
    
    var slices = pie(aguacalidad);
    
    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(120);
    
    // color del pie
    var color = d3.scaleOrdinal()
    .range(["#D44306", "#EAD224", "#11963A"]);
    
    var svg2 = d3.select("#grafica2")
    .append('svg')
    .attr("class","pie");
    var g = svg2.append('g')
      .attr('transform', 'translate(250, 200)');
    
    var arcGraph =g.selectAll('path.slice')
      .data(slices)
        .enter();
    arcGraph.append('path')
            .attr('class', 'slice')
            .attr('d', arc)
            .attr('fill', function(d) {
              return color(d.data.product);
            });
    
    arcGraph.append("text")
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
    
        .attr("dy", "0.35em")
        .text(function(d){return d.data.count});
    // building a legend is as simple as binding
    // more elements to the same data. in this case,
    // <text> tags
    svg2.append('g')
      .attr('class', 'legend')
        .selectAll('text')
        .data(slices)
          .enter()
            .append('text')
              .text(function(d) { return '• ' + d.data.product; })
              .attr('fill', function(d) { return color(d.data.product); })
              .attr('y', function(d, i) { return 20 * (i + 1); })
    
    