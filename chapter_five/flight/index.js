var number, origin, destination;
//setters
exports.setNumber = function(num) {
  number = num;
};

exports.setOrigin = function(o) {
  origin = o;
};

exports.setDestination =function(dest) {
  destination = dest;
};

//getters
//object literal
exports.getInfo = function() {
  return {
    number: number,
    origin: origin,
    destination: destination
  };
};