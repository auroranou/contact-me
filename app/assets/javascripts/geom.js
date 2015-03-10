$(document).ready(function(){
  var width = 1200,
      height = 600,
      τ = 2 * Math.PI;

  var nodes = d3.range(400).map(function() {
    return {
      x: Math.random() * width,
      y: Math.random() * height
    };
  });

  var voronoi = d3.geom.voronoi()
      .x(function(d) { return d.x; })
      .y(function(d) { return d.y; });

  var links = voronoi.links(nodes);

  var force = d3.layout.force()
      .size([width, height])
      .nodes(nodes)
      .links(links)
      .on("tick", ticked)
      .start();

  var canvas = d3.select(".container").append("canvas")
      .attr("width", width)
      .attr("height", height);

  var context = canvas.node().getContext("2d");

  function ticked() {
    context.clearRect(0, 0, width, height);

    context.beginPath();
    links.forEach(function(d) {
      context.moveTo(d.source.x, d.source.y);
      context.lineTo(d.target.x, d.target.y);
    });
    context.lineWidth = 1.5;
    context.strokeStyle = "#fff"; // connector lines
    context.stroke();

    context.beginPath();
    nodes.forEach(function(d) {
      context.moveTo(d.x, d.y);
      context.arc(d.x, d.y, 3, 0, τ);
    });
    context.lineWidth = 3;
    context.strokeStyle = "#fff"; // circle outlines
    context.stroke();
    context.fillStyle = "#ffd5d5"; //circle fill
    context.fill();
  }
});