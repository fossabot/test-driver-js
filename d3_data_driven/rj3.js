// create a namespace to avoid creating many global variable
var rj3 = {};

// sub-namespace called svg.
rj3.svg = {};

rj3.svg.line = function() {
  var getX = function(point) {
    return point[0];
  };
  var getY = function(point) {
    return point[1];
  };
  var interpolate = function(points) {
    return points.join('L');
  };

  function line(data) {
    console.log('data', data);
    var segments = [],
        points = [],
        i = -1,
        n = data && data.length,
        d;
    
    function segment() {
      segments.push('M', interpolate(points));
    }

    while(++i < n) {
      d = data[i];
      // call 假装etX, getY是this的成员g, 并传入参数d,i
      points.push([+getX.call(this, d, i), +getY.call(this, d, i)]);
    }

    if(points.length) {
      segment();
    }

    return segments.length ? segments.join('') : null;
  }

  line.x = function(funcToGetX) {
    if (!arguments.length) return getX;
    getX = funcToGetX;
    return line;
  };

  line.y = function(funcToGetY) {
    if(!arguments.length) return getY;
    getY = funcToGetY;
    return line;
  };

  return line;

}
