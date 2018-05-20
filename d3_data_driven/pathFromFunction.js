// dependence rj3.js

rj3.svg.samples = {};

rj3.svg.samples.functionBaseLine = function () {
  var firstXCoord = 10;
  var xDistanceBetweenPoints = 50;
  var lineGenarator;
  var svgHeight = 200;

  lineGenarator = rj3.svg.line()
    .x(function(d, i) {
      return firstXCoord + i * xDistanceBetweenPoints;
    })
    .y(function(d) {
      return svgHeight - this.getValue(d);
    });
  return lineGenarator;
}

var yearlyPriceGrapher = {
  lineGenarator: rj3.svg.samples.functionBaseLine(),
  getValue: function(year) {
    // pertend this is a call to a web service
    return 10 * Math.pow(1.8, year - 2010);
  }
};
var years = [ 2010, 2011, 2012, 2013, 2014, 2015 ];
var path = yearlyPriceGrapher.lineGenarator(years);

document.getElementById('pathFromFunction').setAttribute('d', path);
