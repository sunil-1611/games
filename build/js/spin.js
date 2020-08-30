var padding = { top: 0, right: 0, bottom: 0, left: 0 },
  // w = 500 - padding.left - padding.right,
  // h = 500 - padding.top - padding.bottom,
  w = 500,
  h = 500,
  r = Math.min(w, h) / 2,
  sw = 10, //stroke width
  rotation = 0,
  oldrotation = 0,
  picked = 100000,
  oldpick = [],
  color = d3.scale.category20(); //category20c()
//randomNumbers = getRandomNumbers();

//http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results

var data = [
  { label: "Question 1", value: 0, award: "Question 1" }, // padding
  { label: "Question 2", value: 1, award: "Question 2" }, //font-family
  { label: "Question 3", value: 1, award: "Question 3" }, //color
  { label: "Question 4", value: 1, award: "Question 4" }, //font-weight
  { label: "Question 5", value: 1, award: "Question 5" }, //font-size
  { label: "Question 6", value: 0, award: "Question 6" }, //background-color
  { label: "Question 7", value: 1, award: "Question 7" }, //nesting
  { label: "Question 8", value: 1, award: "Question 8" },
];

var svg = d3
  .select("#fortune-wheel")
  .append("svg")
  .data([data])
  .attr("width", w + padding.left + padding.right + 2 * sw)
  .attr("height", h + padding.top + padding.bottom + 2 * sw);

var bg = svg
  .append("defs")
  .append("radialGradient")
  .attr("id", "svgbg")
  .attr("cx", "50%")
  .attr("cy", "50%")
  .attr("r", "50%")
  .attr("fx", "50%")
  .attr("fy", "50%");

var bgstop = bg
  .append("stop")
  .attr("offset", "85%")
  .style({ "stop-color": "#EC5888", "stop-opacity": "1" });

var bgstop = bg
  .append("stop")
  .attr("offset", "100%")
  .style({ "stop-color": "#E04579", "stop-opacity": "1" });

var containerbg = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", w / 2)
  .attr("fill", "url(#svgbg)")
  .attr("stroke", "#EDE7E8")
  .attr("stroke-width", sw)
  .attr(
    "transform",
    "translate(" + (w / 2 + sw + padding.left) + "," + (h / 2 + sw + padding.top) + ")"
  );
//<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
var container = svg
  .append("g")
  .attr("class", "chartholder")
  .attr(
    "transform",
    "translate(" + (w / 2 + sw + padding.left) + "," + (h / 2 + sw + padding.top) + ")"
  );

var vis = container.append("g");

var pie = d3.layout
  .pie()
  .sort(null)
  .value(function (d) {
    return 1;
  });

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r - sw / 2);

// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice").data(pie).enter().append("g").attr("class", "slice");

arcs
  .append("path")
  //.attr("fill", function(d, i){ return color(i); })
  //.attr("fill", "url(#svgbg)")
  .attr("fill", "transparent")
  .attr("d", function (d) {
    return arc(d);
  })
  .attr("stroke", "#fff");

// add the text
arcs
  .append("text")
  .attr("transform", function (d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle) / 2;
    return (
      "rotate(" + ((d.angle * 180) / Math.PI - 90) + ")translate(" + (d.outerRadius - 50) + ")"
    );
  })
  .attr("text-anchor", "end")
  .text(function (d, i) {
    return data[i].label;
  });

container.on("click", spin);

function spin(d) {
  container.on("click", null);

  //all slices have been seen, all done
  //console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
  // if (oldpick.length == data.length) {
  //     console.log("done");
  //     container.on("click", null);
  //     return;
  // }
  //only can spin again
  if (oldpick.length == "1") {
    //console.log("done");
    container.on("click", null);
    d3.select("#awardresult h5").text("您已抽過獎！");
    return;
  }

  var ps = 360 / data.length,
    pieslice = Math.round(1440 / data.length),
    rng = Math.floor(Math.random() * 1440 + 360);

  rotation = Math.round(rng / ps) * ps;

  picked = Math.round(data.length - (rotation % 360) / ps);
  picked = picked >= data.length ? picked % data.length : picked;

  if (oldpick.indexOf(picked) !== -1) {
    d3.select(this).call(spin);
    return;
  } else {
    oldpick.push(picked);
  }

  rotation += 90 - Math.round(ps / 2);

  vis
    .transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function () {
      //mark question as seen
      d3.select(".slice:nth-child(" + (picked + 1) + ") path").attr("fill", "#a64666");

      //populate question
      if (data[picked].value == 0) {
        d3.select("#awardresult h5").text("「" + data[picked].award + "」，不要氣餒再接再厲！");
      } else {
        d3.select("#awardresult h5").text("Selected「" + data[picked].award + "」!");
      }
      // console.log(data[picked].value);
      //       d3.select("#awardresult h1")
      //           .text("恭喜您獲得「" + data[picked].award + "」!");

      oldrotation = rotation;

      container.on("click", spin);
    });
}

//make arrow
container
  .append("g")
  //.attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
  .attr("transform", "translate(30, -25)")
  .append("path")
  //.attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
  .attr("d", "M50 25L25 25L25 10z")
  //<path d="M100 50L25 93.3L25 6.7z" fill="#ff0080"/>
  .style({ fill: "white" });
container
  .append("g")
  //.attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
  .attr("transform", "translate(30, -25)")
  .append("path")
  //.attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
  .attr("d", "M50 25L25 40L25 25z")
  //<path d="M100 50L25 93.3L25 6.7z" fill="#ff0080"/>
  .style({ fill: "#DDDFDC" });

//draw spin circle
container
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 60)
  .style({ fill: "white", cursor: "pointer" });

//spin text
container
  .append("text")
  .attr("x", 0)
  .attr("y", 12)
  .attr("text-anchor", "middle")
  .attr("class", "centerspin")
  .text("START")
  .style({ "font-weight": "bold", "font-size": "24px" });

container
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 50)
  .style({ stroke: "#F0508C", "stroke-width": "3px", fill: "transparent", cursor: "pointer" });

function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function (t) {
    return "rotate(" + i(t) + ")";
  };
}

function getRandomNumbers() {
  var array = new Uint16Array(1000);
  var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);

  if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
    window.crypto.getRandomValues(array);
    console.log("works");
  } else {
    //no support for crypto, get crappy random numbers
    for (var i = 0; i < 1000; i++) {
      array[i] = Math.floor(Math.random() * 100000) + 1;
    }
  }

  return array;
}
