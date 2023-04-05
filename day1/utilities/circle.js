//export module

module.exports.area = function (radius) {
  const getArea = Math.pow(radius, 2) * Math.PI;
  return getArea;
};

module.exports.circumference = function (radius) {
  const getCircum = radius * 2 * Math.PI;
  return getCircum;
};
